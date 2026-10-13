# dgtlsunrise/dgtl-connector

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/dgtlsunrise/dgtl-connector) · [Machine-readable inventory](../data/mcps/dgtlsunrise--dgtl-connector.json)

**187 extracted tools.** Previews writes with dry runs, requires target confirmation, and creates and publishes container versions.

Snapshot: 2026-10-13 · [8146d76e2b10](https://github.com/dgtlsunrise/dgtl-connector/tree/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139) · Method: mixed.

Exposure: All 187 TOOLS entries are registered unconditionally; credential, license and feature gates affect execution rather than tools/list exposure.

## Limits

- Only offline MCP initialize/tools/list was executed, using an empty context and clean environment; no product handler or remote operation was called. Live API success and credential-dependent gates were inspected in source only.
- GTM input surface is intentionally narrow: scalar parameter arrays rather than full recursive GTM parameters; update_tag PUT forwards only name/type; handlers cannot independently enforce the documented requirement for a same-turn user message containing the target publicId.
- gtm_publish_container requires edit.containerversions and publish scopes; source states default Free Google Connect may lack edit.containerversions and handler refuses known missing grants.
- Deprecated gtmWriteNotReady is an unregistered test-only gate stub; gadsDisabled/metaDisabled/tiktokDisabled names are implemented gateway dispatchers, not unimplemented public tools.
- All 187 tools compared against registered Zod schemas: 92 ZodEffects tools lose all advertised properties in SDK 1.30.0 tools/list, including all 11 GTM write tools. Exact wire inputSchema is preserved; separate validationInputSchema recovers complete structural accepted parameters, local refs, bounds, enums/defaults; arbitrary refinements are preserved as validationRefinements function source.
- SDK normalizeObjectSchema accepts Zod v3 schemas only when .shape is present. ZodEffects lacks .shape, producing EMPTY_OBJECT_JSON_SCHEMA in tools/list. validateToolInput instead parses inputObj ?? tool.inputSchema, so arguments are not stripped. An offline validation-only proof confirms gtm_create_tag arguments are retained and dry_run=true is inserted. No callback, dispatch or product handler was invoked.
- Many source ID/name/type fields use shared optional str=z.string().optional(); SDK permits missing values, while handlers require them through requireId. Structural validation schemas preserve that upstream optionality. Zod superRefine cross-field checks are executable refinements, not fully representable as JSON Schema.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`google_whoami`](#tool-google_whoami-1d40284d) | Supporting | Returns Google identity, granted scopes and license features without returning tokens. |
| [`ga4_list_accounts`](#tool-ga4_list_accounts-68810811) | Other product | Google Analytics 4: routes list accounts through ga4ListAccounts; implements the registered product operation; it does not operate Google Tag Manager. |
| [`ga4_list_account_summaries`](#tool-ga4_list_account_summaries-d44f3140) | Other product | Google Analytics 4: routes list account summaries through ga4ListAccountSummaries; implements the registered product operation; it does not operate Google Tag Manager. |
| [`ga4_list_properties`](#tool-ga4_list_properties-44fea7fa) | Other product | Google Analytics 4: routes list properties through ga4ListProperties; implements the registered product operation; it does not operate Google Tag Manager. |
| [`ga4_get_property`](#tool-ga4_get_property-aa64c1ca) | Other product | Google Analytics 4: routes get property through ga4GetProperty; implements the registered product operation; it does not operate Google Tag Manager. |
| [`ga4_list_data_streams`](#tool-ga4_list_data_streams-e2cea14d) | Other product | Google Analytics 4: routes list data streams through ga4ListDataStreams; implements the registered product operation; it does not operate Google Tag Manager. |
| [`ga4_list_key_events`](#tool-ga4_list_key_events-ac1a65f2) | Other product | Google Analytics 4: routes list key events through ga4ListKeyEvents; implements the registered product operation; it does not operate Google Tag Manager. |
| [`ga4_get_metadata`](#tool-ga4_get_metadata-723ca4d3) | Other product | Google Analytics 4: routes get metadata through ga4GetMetadata; implements the registered product operation; it does not operate Google Tag Manager. |
| [`ga4_run_report`](#tool-ga4_run_report-a0a35566) | Other product | Google Analytics 4: routes run report through ga4RunReport; implements the registered product operation; it does not operate Google Tag Manager. |
| [`ga4_list_google_ads_links`](#tool-ga4_list_google_ads_links-aa0c7a61) | Other product | Google Analytics 4: routes list google ads links through ga4ListGoogleAdsLinks; implements the registered product operation; it does not operate Google Tag Manager. |
| [`ga4_create_google_ads_link`](#tool-ga4_create_google_ads_link-831b0d9d) | Other product | Google Analytics 4: routes create google ads link through ga4CreateGoogleAdsLink; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`ga4_delete_google_ads_link`](#tool-ga4_delete_google_ads_link-75fbc531) | Other product | Google Analytics 4: routes delete google ads link through ga4DeleteGoogleAdsLink; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`ga4_get_attribution_settings`](#tool-ga4_get_attribution_settings-90ed0d2f) | Other product | Google Analytics 4: routes get attribution settings through ga4GetAttributionSettings; implements the registered product operation; it does not operate Google Tag Manager. |
| [`ga4_update_attribution_settings`](#tool-ga4_update_attribution_settings-e26f627d) | Other product | Google Analytics 4: routes update attribution settings through ga4UpdateAttributionSettings; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`ga4_create_data_stream`](#tool-ga4_create_data_stream-9d40c550) | Other product | Google Analytics 4: routes create data stream through ga4CreateDataStream; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`ga4_update_data_stream`](#tool-ga4_update_data_stream-27f95aa4) | Other product | Google Analytics 4: routes update data stream through ga4UpdateDataStream; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`ga4_create_key_event`](#tool-ga4_create_key_event-503e5cec) | Other product | Google Analytics 4: routes create key event through ga4CreateKeyEvent; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`ga4_update_key_event`](#tool-ga4_update_key_event-9fe62a80) | Other product | Google Analytics 4: routes update key event through ga4UpdateKeyEvent; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`ga4_create_custom_dimension`](#tool-ga4_create_custom_dimension-2ce8700e) | Other product | Google Analytics 4: routes create custom dimension through ga4CreateCustomDimension; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`ga4_create_custom_metric`](#tool-ga4_create_custom_metric-840cf76a) | Other product | Google Analytics 4: routes create custom metric through ga4CreateCustomMetric; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`ga4_list_mp_secrets`](#tool-ga4_list_mp_secrets-aba5dd0b) | Other product | Google Analytics 4: routes list mp secrets through ga4ListMpSecrets; implements the registered product operation; it does not operate Google Tag Manager. |
| [`ga4_create_mp_secret`](#tool-ga4_create_mp_secret-a2b51a76) | Other product | Google Analytics 4: routes create mp secret through ga4CreateMpSecret; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`ga4_create_property`](#tool-ga4_create_property-ca91208a) | Other product | Google Analytics 4: routes create property through ga4CreateProperty; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gsc_list_sites`](#tool-gsc_list_sites-69b36040) | Other product | Google Search Console: routes list sites through gscListSites; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gsc_describe_schema`](#tool-gsc_describe_schema-02101a75) | Other product | Google Search Console: routes describe schema through gscDescribeSchema; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gsc_get_site`](#tool-gsc_get_site-2f8523bd) | Other product | Google Search Console: routes get site through gscGetSite; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gsc_query_search_analytics`](#tool-gsc_query_search_analytics-8dc2dfd0) | Other product | Google Search Console: routes query search analytics through gscQuerySearchAnalytics; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gsc_inspect_url`](#tool-gsc_inspect_url-2d598234) | Other product | Google Search Console: routes inspect url through gscInspectUrl; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gsc_list_sitemaps`](#tool-gsc_list_sitemaps-e4a908e7) | Other product | Google Search Console: routes list sitemaps through gscListSitemaps; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gsc_get_sitemap`](#tool-gsc_get_sitemap-bec92fb6) | Other product | Google Search Console: routes get sitemap through gscGetSitemap; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gsc_submit_sitemap`](#tool-gsc_submit_sitemap-6d135a26) | Other product | Google Search Console: routes submit sitemap through gscSubmitSitemap; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gsc_delete_sitemap`](#tool-gsc_delete_sitemap-adedc75d) | Other product | Google Search Console: routes delete sitemap through gscDeleteSitemap; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Lists Google Tag Manager accounts visible to the connected Google user, then slices results locally for pagination. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Lists containers in the explicit GTM account, then slices results locally for pagination. |
| [`gtm_get_container`](#tool-gtm_get_container-fdc6e39c) | GTM | Fetches the selected GTM container metadata and publicId. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Lists workspaces in the selected container and warns against selecting a default when multiple exist. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Lists selected workspace draft tags and marks returned items source=workspace. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Lists selected workspace draft triggers and marks returned items source=workspace. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Lists selected workspace draft variables and marks returned items source=workspace. |
| [`gtm_get_live_container_version`](#tool-gtm_get_live_container_version-b7e78e69) | GTM | Fetches the published live container version, distinguishing it from workspace drafts. |
| [`gtm_list_clients`](#tool-gtm_list_clients-bd1499aa) | GTM | Lists selected server-container workspace clients and marks returned items source=workspace. |
| [`gtm_list_environments`](#tool-gtm_list_environments-9f7a4399) | GTM | Lists container-level environments and paginates the returned list locally; distinguishes USER environments from system-managed environments. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Performs create tag in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | PUTs only name and type to the selected workspace tag; defaults to dry-run and requires publicId confirmation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Performs create trigger in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | Performs update trigger in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Performs create variable in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM | Performs update variable in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gtm_publish_container`](#tool-gtm_publish_container-513cc8f7) | GTM | Creates a version from the selected workspace and publishes it; defaults to dry-run, checks confirmation publicId and rejects a known grant missing edit.containerversions scope. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gtm_create_client`](#tool-gtm_create_client-aefac744) | GTM | Performs create client in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gtm_update_client`](#tool-gtm_update_client-49d21241) | GTM | Performs update client in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gtm_create_container`](#tool-gtm_create_container-67c96447) | GTM | Creates a container with validated usage contexts under an explicit account; defaults to dry-run and requires account-path confirmation for live POST. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gtm_create_environment`](#tool-gtm_create_environment-f4b9f2a2) | GTM | Creates a USER container environment; defaults to dry-run and requires publicId or container-path confirmation for live POST. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gbp_list_accounts`](#tool-gbp_list_accounts-d0179a8b) | Other product | Google Business Profile: routes list accounts through gbpListAccounts; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gbp_list_locations`](#tool-gbp_list_locations-e79f9888) | Other product | Google Business Profile: routes list locations through gbpListLocations; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gbp_get_location`](#tool-gbp_get_location-710e9df3) | Other product | Google Business Profile: routes get location through gbpGetLocation; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gbp_performance`](#tool-gbp_performance-7c929fb7) | Other product | Google Business Profile: routes performance through gbpPerformance; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gbp_search_keywords`](#tool-gbp_search_keywords-f450437c) | Other product | Google Business Profile: routes search keywords through gbpSearchKeywords; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gads_list_accessible_customers`](#tool-gads_list_accessible_customers-8467aa4f) | Other product | Google Ads: routes list accessible customers through gadsDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`gads_describe_recipes`](#tool-gads_describe_recipes-14da7f28) | Other product | Google Ads: routes describe recipes through gadsDescribeRecipes; implements the registered product operation; it does not operate Google Tag Manager. |
| [`gads_get_customer`](#tool-gads_get_customer-a48afa07) | Other product | Google Ads: routes get customer through gadsDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`gads_search`](#tool-gads_search-a2660b1a) | Other product | Google Ads: routes search through gadsDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`gads_campaign_performance`](#tool-gads_campaign_performance-6f83598a) | Other product | Google Ads: routes campaign performance through gadsDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`gads_set_campaign_status`](#tool-gads_set_campaign_status-23ddf10d) | Other product | Google Ads: routes set campaign status through gadsSetCampaignStatus; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_update_campaign_budget`](#tool-gads_update_campaign_budget-f5ed7b9d) | Other product | Google Ads: routes update campaign budget through gadsUpdateCampaignBudget; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_set_keyword_status`](#tool-gads_set_keyword_status-5d7bcde3) | Other product | Google Ads: routes set keyword status through gadsSetKeywordStatus; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_add_keywords`](#tool-gads_add_keywords-3f27521b) | Other product | Google Ads: routes add keywords through gadsAddKeywords; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_set_ad_status`](#tool-gads_set_ad_status-3f1f52bf) | Other product | Google Ads: routes set ad status through gadsSetAdStatus; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_responsive_search_ad`](#tool-gads_create_responsive_search_ad-f4873363) | Other product | Google Ads: routes create responsive search ad through gadsCreateResponsiveSearchAd; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_search_campaign`](#tool-gads_create_search_campaign-4a535e54) | Other product | Google Ads: routes create search campaign through gadsCreateSearchCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_set_ad_group_status`](#tool-gads_set_ad_group_status-bb4a71ff) | Other product | Google Ads: routes set ad group status through gadsSetAdGroupStatus; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_display_campaign`](#tool-gads_create_display_campaign-6b8668b8) | Other product | Google Ads: routes create display campaign through gadsCreateDisplayCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_performance_max_campaign`](#tool-gads_create_performance_max_campaign-4171d8d3) | Other product | Google Ads: routes create performance max campaign through gadsCreatePerformanceMaxCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_upload_asset`](#tool-gads_upload_asset-cf80cee8) | Other product | Google Ads: routes upload asset through gadsUploadAsset; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_shopping_campaign`](#tool-gads_create_shopping_campaign-645e84ad) | Other product | Google Ads: routes create shopping campaign through gadsCreateShoppingCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_list_merchant_center_links`](#tool-gads_list_merchant_center_links-ff80bb75) | Other product | Google Ads: routes list merchant center links through gadsListMerchantCenterLinks; uses the licensed DGTL gateway and product-specific credentials. |
| [`gads_create_responsive_display_ad`](#tool-gads_create_responsive_display_ad-1df10e77) | Other product | Google Ads: routes create responsive display ad through gadsCreateResponsiveDisplayAd; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_add_shopping_listing_groups`](#tool-gads_add_shopping_listing_groups-2a5c7387) | Other product | Google Ads: routes add shopping listing groups through gadsAddShoppingListingGroups; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_video_campaign`](#tool-gads_create_video_campaign-79009397) | Other product | Google Ads: routes create video campaign through gadsCreateVideoCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_demand_gen_campaign`](#tool-gads_create_demand_gen_campaign-4bcd95b3) | Other product | Google Ads: routes create demand gen campaign through gadsCreateDemandGenCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_app_campaign`](#tool-gads_create_app_campaign-8e5288e5) | Other product | Google Ads: routes create app campaign through gadsCreateAppCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_hotel_campaign`](#tool-gads_create_hotel_campaign-13dfe5a8) | Other product | Google Ads: routes create hotel campaign through gadsCreateHotelCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_local_campaign`](#tool-gads_create_local_campaign-a1048698) | Other product | Google Ads: routes create local campaign through gadsCreateLocalCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_add_negative_keywords`](#tool-gads_add_negative_keywords-0f281eeb) | Other product | Google Ads: routes add negative keywords through gadsAddNegativeKeywords; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_attach_audience`](#tool-gads_attach_audience-805b8c71) | Other product | Google Ads: routes attach audience through gadsAttachAudience; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_add_geo_targets`](#tool-gads_add_geo_targets-9dd5c474) | Other product | Google Ads: routes add geo targets through gadsAddGeoTargets; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_add_languages`](#tool-gads_add_languages-519a042c) | Other product | Google Ads: routes add languages through gadsAddLanguages; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_add_demographics`](#tool-gads_add_demographics-a3ea5bcd) | Other product | Google Ads: routes add demographics through gadsAddDemographics; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_set_ad_schedule`](#tool-gads_set_ad_schedule-e26b55ee) | Other product | Google Ads: routes set ad schedule through gadsSetAdSchedule; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_set_campaign_bid_strategy`](#tool-gads_set_campaign_bid_strategy-53eb0eb2) | Other product | Google Ads: routes set campaign bid strategy through gadsSetCampaignBidStrategy; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_shared_budget`](#tool-gads_create_shared_budget-11a6904d) | Other product | Google Ads: routes create shared budget through gadsCreateSharedBudget; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_portfolio_bidding_strategy`](#tool-gads_create_portfolio_bidding_strategy-b49b4d60) | Other product | Google Ads: routes create portfolio bidding strategy through gadsCreatePortfolioBiddingStrategy; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_conversion_action`](#tool-gads_create_conversion_action-fd453496) | Other product | Google Ads: routes create conversion action through gadsCreateConversionAction; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_apply_recommendation`](#tool-gads_apply_recommendation-4d32dc23) | Other product | Google Ads: routes apply recommendation through gadsApplyRecommendation; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_apply_recommendations`](#tool-gads_apply_recommendations-545f07d1) | Other product | Google Ads: routes apply recommendations through gadsApplyRecommendations; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_link_merchant_center`](#tool-gads_link_merchant_center-5c61c5fd) | Other product | Google Ads: routes link merchant center through gadsLinkMerchantCenter; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_unlink_merchant_center`](#tool-gads_unlink_merchant_center-39722398) | Other product | Google Ads: routes unlink merchant center through gadsUnlinkMerchantCenter; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`gads_create_experiment`](#tool-gads_create_experiment-540c1755) | Other product | Google Ads: routes create experiment through gadsCreateExperiment; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`license_status`](#tool-license_status-744d1648) | Supporting | Reports license, plugin update and gateway health status. |
| [`support_packet`](#tool-support_packet-ceacf6d3) | Supporting | Builds a sanitized support diagnostics packet. |
| [`feedback_prepare`](#tool-feedback_prepare-e9b65696) | Supporting | Prepares a sanitized feedback payload for review. |
| [`feedback_send`](#tool-feedback_send-334cb1cc) | Supporting | Sends the prepared feedback to the configured support destination with its confirmation checks. |
| [`conversion_fabric_status`](#tool-conversion_fabric_status-37c748cb) | Supporting | Probes gateway health and reports conversion sink, gate and ingest configuration without keys. |
| [`sgtm_ingest_test`](#tool-sgtm_ingest_test-16c5e391) | GTM | Tests a closed apply event via gateway /v1/sgtm/ingest using a host environment apply key; defaults to dry-run and requires plugin/worker opt-in for live POST. |
| [`meta_list_ad_accounts`](#tool-meta_list_ad_accounts-2d800f0a) | Other product | Meta Ads: routes list ad accounts through metaDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_list_pages`](#tool-meta_list_pages-b61d2ea3) | Other product | Meta Ads: routes list pages through metaListPages; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_describe_insights_schema`](#tool-meta_describe_insights_schema-5bf1c397) | Other product | Meta Ads: routes describe insights schema through metaDescribeInsightsSchema; implements the registered product operation; it does not operate Google Tag Manager. |
| [`meta_list_campaigns`](#tool-meta_list_campaigns-3c69813f) | Other product | Meta Ads: routes list campaigns through metaDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_list_adsets`](#tool-meta_list_adsets-f68afd39) | Other product | Meta Ads: routes list adsets through metaDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_list_ads`](#tool-meta_list_ads-2a1edf9c) | Other product | Meta Ads: routes list ads through metaDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_insights`](#tool-meta_insights-ac0832d5) | Other product | Meta Ads: routes insights through metaDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_get_creative`](#tool-meta_get_creative-2ca52f68) | Other product | Meta Ads: routes get creative through metaDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_update_campaign`](#tool-meta_update_campaign-0d5ed993) | Other product | Meta Ads: routes update campaign through metaUpdateCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_update_adset`](#tool-meta_update_adset-4ba8fb29) | Other product | Meta Ads: routes update adset through metaUpdateAdset; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_update_ad`](#tool-meta_update_ad-120d19e7) | Other product | Meta Ads: routes update ad through metaUpdateAd; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_create_campaign`](#tool-meta_create_campaign-95197679) | Other product | Meta Ads: routes create campaign through metaCreateCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_create_adset`](#tool-meta_create_adset-fd4c74da) | Other product | Meta Ads: routes create adset through metaCreateAdset; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_create_ad`](#tool-meta_create_ad-22d337a0) | Other product | Meta Ads: routes create ad through metaCreateAd; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_upload_ad_image`](#tool-meta_upload_ad_image-d206cc5b) | Other product | Meta Ads: routes upload ad image through metaUploadAdImage; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_upload_ad_video`](#tool-meta_upload_ad_video-11cbf34d) | Other product | Meta Ads: routes upload ad video through metaUploadAdVideo; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_create_ad_creative`](#tool-meta_create_ad_creative-b897afae) | Other product | Meta Ads: routes create ad creative through metaCreateAdCreative; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_list_pixels`](#tool-meta_list_pixels-0351ba0f) | Other product | Meta Ads: routes list pixels through metaListPixels; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_get_pixel`](#tool-meta_get_pixel-7f6bb2bb) | Other product | Meta Ads: routes get pixel through metaGetPixel; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_list_catalogs`](#tool-meta_list_catalogs-a782acfb) | Other product | Meta Ads: routes list catalogs through metaListCatalogs; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_list_catalog_products`](#tool-meta_list_catalog_products-da5d4000) | Other product | Meta Ads: routes list catalog products through metaListCatalogProducts; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_list_custom_audiences`](#tool-meta_list_custom_audiences-f587da4a) | Other product | Meta Ads: routes list custom audiences through metaListCustomAudiences; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_update_adset_targeting`](#tool-meta_update_adset_targeting-0f32774d) | Other product | Meta Ads: routes update adset targeting through metaUpdateAdsetTargeting; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_create_custom_audience`](#tool-meta_create_custom_audience-0e02bf15) | Other product | Meta Ads: routes create custom audience through metaCreateCustomAudience; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_create_lookalike_audience`](#tool-meta_create_lookalike_audience-1baeeeec) | Other product | Meta Ads: routes create lookalike audience through metaCreateLookalikeAudience; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_attach_audience`](#tool-meta_attach_audience-47d8300e) | Other product | Meta Ads: routes attach audience through metaAttachAudience; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_catalog_items_batch`](#tool-meta_catalog_items_batch-9e2c57d1) | Other product | Meta Ads: routes catalog items batch through metaCatalogItemsBatch; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_get_batch_status`](#tool-meta_get_batch_status-a0a53055) | Other product | Meta Ads: routes get batch status through metaGetBatchStatus; uses the licensed DGTL gateway and product-specific credentials. |
| [`meta_create_catalog`](#tool-meta_create_catalog-ab9c047a) | Other product | Meta Ads: routes create catalog through metaCreateCatalog; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`meta_send_capi_events`](#tool-meta_send_capi_events-0c710106) | Other product | Meta Ads: routes send capi events through metaSendCapiEvents; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`mc_list_accounts`](#tool-mc_list_accounts-644ebe12) | Other product | Google Merchant Center: routes list accounts through mcListAccounts; implements the registered product operation; it does not operate Google Tag Manager. |
| [`mc_list_products`](#tool-mc_list_products-6df6f334) | Other product | Google Merchant Center: routes list products through mcListProducts; implements the registered product operation; it does not operate Google Tag Manager. |
| [`mc_get_product`](#tool-mc_get_product-cc351af0) | Other product | Google Merchant Center: routes get product through mcGetProduct; implements the registered product operation; it does not operate Google Tag Manager. |
| [`mc_list_product_statuses`](#tool-mc_list_product_statuses-e2f33269) | Other product | Google Merchant Center: routes list product statuses through mcListProductStatuses; implements the registered product operation; it does not operate Google Tag Manager. |
| [`mc_list_account_issues`](#tool-mc_list_account_issues-8f52af23) | Other product | Google Merchant Center: routes list account issues through mcListAccountIssues; implements the registered product operation; it does not operate Google Tag Manager. |
| [`mc_list_data_sources`](#tool-mc_list_data_sources-44de9c0e) | Other product | Google Merchant Center: routes list data sources through mcListDataSources; implements the registered product operation; it does not operate Google Tag Manager. |
| [`mc_create_data_source`](#tool-mc_create_data_source-e8cf8999) | Other product | Google Merchant Center: routes create data source through mcCreateDataSource; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`mc_upsert_product_input`](#tool-mc_upsert_product_input-5b0cd2aa) | Other product | Google Merchant Center: routes upsert product input through mcUpsertProductInput; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`mc_delete_product_input`](#tool-mc_delete_product_input-069e2939) | Other product | Google Merchant Center: routes delete product input through mcDeleteProductInput; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`mc_fetch_data_source`](#tool-mc_fetch_data_source-f7ab4c94) | Other product | Google Merchant Center: routes fetch data source through mcFetchDataSource; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`shopify_get_shop`](#tool-shopify_get_shop-fd36fc6c) | Other product | Shopify: routes get shop through shopifyGetShop; implements the registered product operation; it does not operate Google Tag Manager. |
| [`shopify_list_products`](#tool-shopify_list_products-dfbbb52a) | Other product | Shopify: routes list products through shopifyListProducts; implements the registered product operation; it does not operate Google Tag Manager. |
| [`shopify_get_product`](#tool-shopify_get_product-cdd34a99) | Other product | Shopify: routes get product through shopifyGetProduct; implements the registered product operation; it does not operate Google Tag Manager. |
| [`shopify_list_orders`](#tool-shopify_list_orders-c01713db) | Other product | Shopify: routes list orders through shopifyListOrders; implements the registered product operation; it does not operate Google Tag Manager. |
| [`shopify_get_order`](#tool-shopify_get_order-f4cad7cc) | Other product | Shopify: routes get order through shopifyGetOrder; implements the registered product operation; it does not operate Google Tag Manager. |
| [`shopify_list_locations`](#tool-shopify_list_locations-22e7fc55) | Other product | Shopify: routes list locations through shopifyListLocations; implements the registered product operation; it does not operate Google Tag Manager. |
| [`shopify_list_inventory_levels`](#tool-shopify_list_inventory_levels-a6abc84f) | Other product | Shopify: routes list inventory levels through shopifyListInventoryLevels; implements the registered product operation; it does not operate Google Tag Manager. |
| [`shopify_adjust_inventory`](#tool-shopify_adjust_inventory-e0d5a717) | Other product | Shopify: routes adjust inventory through shopifyAdjustInventory; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`shopify_list_publications`](#tool-shopify_list_publications-c8675186) | Other product | Shopify: routes list publications through shopifyListPublications; implements the registered product operation; it does not operate Google Tag Manager. |
| [`shopify_list_catalogs`](#tool-shopify_list_catalogs-ebc454b0) | Other product | Shopify: routes list catalogs through shopifyListCatalogs; implements the registered product operation; it does not operate Google Tag Manager. |
| [`shopify_list_product_feeds`](#tool-shopify_list_product_feeds-9005590c) | Other product | Shopify: routes list product feeds through shopifyListProductFeeds; implements the registered product operation; it does not operate Google Tag Manager. |
| [`shopify_product_set`](#tool-shopify_product_set-0154a567) | Other product | Shopify: routes product set through shopifyProductSet; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`tiktok_list_advertisers`](#tool-tiktok_list_advertisers-eb08961e) | Other product | TikTok Ads: routes list advertisers through tiktokDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`tiktok_list_campaigns`](#tool-tiktok_list_campaigns-76cd45a8) | Other product | TikTok Ads: routes list campaigns through tiktokDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`tiktok_insights`](#tool-tiktok_insights-08612ab2) | Other product | TikTok Ads: routes insights through tiktokDisabled; uses the licensed DGTL gateway and product-specific credentials. |
| [`tiktok_update_campaign`](#tool-tiktok_update_campaign-fd5d9f8b) | Other product | TikTok Ads: routes update campaign through tiktokUpdateCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`tiktok_list_catalogs`](#tool-tiktok_list_catalogs-85b09f0a) | Other product | TikTok Ads: routes list catalogs through tiktokListCatalogs; uses the licensed DGTL gateway and product-specific credentials. |
| [`tiktok_create_catalog`](#tool-tiktok_create_catalog-7c2bb329) | Other product | TikTok Ads: routes create catalog through tiktokCreateCatalog; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`tiktok_upload_catalog_products`](#tool-tiktok_upload_catalog_products-aa2ea066) | Other product | TikTok Ads: routes upload catalog products through tiktokUploadCatalogProducts; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`tiktok_bind_catalog_eventsource`](#tool-tiktok_bind_catalog_eventsource-60537e3d) | Other product | TikTok Ads: routes bind catalog eventsource through tiktokBindCatalogEventsource; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`tiktok_list_pixels`](#tool-tiktok_list_pixels-53e02f29) | Other product | TikTok Ads: routes list pixels through tiktokListPixels; uses the licensed DGTL gateway and product-specific credentials. |
| [`tiktok_track_events`](#tool-tiktok_track_events-6f192302) | Other product | TikTok Ads: routes track events through tiktokTrackEvents; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`tiktok_create_campaign`](#tool-tiktok_create_campaign-cd93521c) | Other product | TikTok Ads: routes create campaign through tiktokCreateCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`tiktok_update_campaign_budget`](#tool-tiktok_update_campaign_budget-71f98dce) | Other product | TikTok Ads: routes update campaign budget through tiktokUpdateCampaignBudget; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`klaviyo_get_account`](#tool-klaviyo_get_account-39d2c50e) | Other product | Klaviyo: routes get account through klaviyoGetAccount; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_list_profiles`](#tool-klaviyo_list_profiles-13ee7317) | Other product | Klaviyo: routes list profiles through klaviyoListProfiles; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_get_profile`](#tool-klaviyo_get_profile-ab6db6da) | Other product | Klaviyo: routes get profile through klaviyoGetProfile; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_list_lists`](#tool-klaviyo_list_lists-d1472753) | Other product | Klaviyo: routes list lists through klaviyoListLists; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_list_segments`](#tool-klaviyo_list_segments-92d455ce) | Other product | Klaviyo: routes list segments through klaviyoListSegments; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_list_flows`](#tool-klaviyo_list_flows-2af0c25c) | Other product | Klaviyo: routes list flows through klaviyoListFlows; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_get_flow`](#tool-klaviyo_get_flow-f5def47c) | Other product | Klaviyo: routes get flow through klaviyoGetFlow; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_list_campaigns`](#tool-klaviyo_list_campaigns-da35d698) | Other product | Klaviyo: routes list campaigns through klaviyoListCampaigns; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_list_metrics`](#tool-klaviyo_list_metrics-56a83f92) | Other product | Klaviyo: routes list metrics through klaviyoListMetrics; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_create_campaign`](#tool-klaviyo_create_campaign-d6dd383b) | Other product | Klaviyo: routes create campaign through klaviyoCreateCampaign; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`klaviyo_create_campaign_send_job`](#tool-klaviyo_create_campaign_send_job-c055c03f) | Other product | Klaviyo: routes create campaign send job through klaviyoCreateCampaignSendJob; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`klaviyo_upsert_profile`](#tool-klaviyo_upsert_profile-f7c7b61a) | Other product | Klaviyo: routes upsert profile through klaviyoUpsertProfile; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`klaviyo_create_event`](#tool-klaviyo_create_event-f930643a) | Other product | Klaviyo: routes create event through klaviyoCreateEvent; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`klaviyo_list_catalog_items`](#tool-klaviyo_list_catalog_items-439aa2a4) | Other product | Klaviyo: routes list catalog items through klaviyoListCatalogItems; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_list_catalog_categories`](#tool-klaviyo_list_catalog_categories-3ca967af) | Other product | Klaviyo: routes list catalog categories through klaviyoListCatalogCategories; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_list_catalog_variants`](#tool-klaviyo_list_catalog_variants-b143a19a) | Other product | Klaviyo: routes list catalog variants through klaviyoListCatalogVariants; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_upsert_catalog_items`](#tool-klaviyo_upsert_catalog_items-fbea9859) | Other product | Klaviyo: routes upsert catalog items through klaviyoUpsertCatalogItems; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation. |
| [`klaviyo_list_reviews`](#tool-klaviyo_list_reviews-e6671835) | Other product | Klaviyo: routes list reviews through klaviyoListReviews; implements the registered product operation; it does not operate Google Tag Manager. |
| [`klaviyo_get_review`](#tool-klaviyo_get_review-eec0f44f) | Other product | Klaviyo: routes get review through klaviyoGetReview; implements the registered product operation; it does not operate Google Tag Manager. |

<a id="tool-google_whoami-1d40284d"></a>

## google_whoami

Handler: Returns Google identity, granted scopes and license features without returning tokens.

```text
Read-only. Never picks a default resource. Returns the connected Google email, granted scopes, and license features. Never returns tokens.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L225-L234) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/whoami.ts#L14-L84) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L8-L10).

</details>

<a id="tool-ga4_list_accounts-68810811"></a>

## ga4_list_accounts

Handler: Google Analytics 4: routes list accounts through ga4ListAccounts; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. List GA4 Analytics accounts visible to this Google user.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L235-L244) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4.ts#L33-L46) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L58-L59).

</details>

<a id="tool-ga4_list_account_summaries-d44f3140"></a>

## ga4_list_account_summaries

Handler: Google Analytics 4: routes list account summaries through ga4ListAccountSummaries; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. One-call agency picker: accounts with nested propertySummaries. Does not select a property.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L245-L254) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4.ts#L47-L64) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L58-L59).

</details>

<a id="tool-ga4_list_properties-44fea7fa"></a>

## ga4_list_properties

Handler: Google Analytics 4: routes list properties through ga4ListProperties; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. List GA4 properties for a required account_id (filter=parent:accounts/{id}).
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L255-L264) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4.ts#L65-L81) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L60-L63).

</details>

<a id="tool-ga4_get_property-aa64c1ca"></a>

## ga4_get_property

Handler: Google Analytics 4: routes get property through ga4GetProperty; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Get one GA4 property (timezone, currency). property_id required.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L265-L274) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4.ts#L82-L94) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L64-L66).

</details>

<a id="tool-ga4_list_data_streams-e2cea14d"></a>

## ga4_list_data_streams

Handler: Google Analytics 4: routes list data streams through ga4ListDataStreams; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. List data streams for a required property_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L275-L284) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4.ts#L95-L110) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L81-L88).

</details>

<a id="tool-ga4_list_key_events-ac1a65f2"></a>

## ga4_list_key_events

Handler: Google Analytics 4: routes list key events through ga4ListKeyEvents; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. List key events / conversions for a required property_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L285-L294) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4.ts#L111-L153) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L81-L88).

</details>

<a id="tool-ga4_get_metadata-723ca4d3"></a>

## ga4_get_metadata

Handler: Google Analytics 4: routes get metadata through ga4GetMetadata; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Dimensions and metrics (apiName) for this property. Optional query/kind/custom_only filters shrink the catalog — search before inventing names. Cite property_id from the response.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L295-L304) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4.ts#L154-L222) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "query": {
      "type": "string",
      "minLength": 1,
      "maxLength": 120
    },
    "kind": {
      "type": "string",
      "enum": [
        "dimension",
        "metric",
        "all"
      ]
    },
    "custom_only": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "query": {
      "type": "string",
      "minLength": 1,
      "maxLength": 120
    },
    "kind": {
      "type": "string",
      "enum": [
        "dimension",
        "metric",
        "all"
      ]
    },
    "custom_only": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L67-L78).

</details>

<a id="tool-ga4_run_report-a0a35566"></a>

## ga4_run_report

Handler: Google Analytics 4: routes run report through ga4RunReport; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. The only GA4 report tool. Denylists searchQuery/query/searchTerm/keyword with no Google call. Optional closed Ads-id MTA recipes (campaign/ad group/creative/customer ids). v1beta has no conversionSpec — use keyEvents:{name} or key_event_names. property_id and date_ranges required. Cap 1000 rows. Echoes propertyQuota. Cite data.cited; do not invent apiNames (use ga4_get_metadata).
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L305-L314) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4.ts#L223-L344) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "date_ranges": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "start_date": {
            "type": "string"
          },
          "end_date": {
            "type": "string"
          }
        },
        "required": [
          "start_date",
          "end_date"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 2
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "minItems": 1,
      "maxItems": 10
    },
    "recipe": {
      "type": "string",
      "enum": [
        "ads_mta_campaign_ids",
        "ads_mta_adgroup_ids",
        "ads_mta_creative_ids",
        "ads_mta_customer_ids",
        "ads_mta_ids",
        "ads_mta_keyword_ids"
      ]
    },
    "key_event_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 10
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 9
    },
    "dimension_filter": {},
    "metric_filter": {},
    "order_bys": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "field": {
            "type": "string"
          },
          "kind": {
            "type": "string",
            "enum": [
              "dimension",
              "metric"
            ]
          },
          "desc": {
            "type": "boolean"
          }
        },
        "required": [
          "field"
        ],
        "additionalProperties": false
      }
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 1000
    },
    "offset": {
      "type": "integer",
      "minimum": 0
    },
    "keep_empty_rows": {
      "type": "boolean"
    },
    "currency_code": {
      "type": "string",
      "minLength": 3,
      "maxLength": 3
    },
    "allow_long_range": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "date_ranges": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "start_date": {
            "type": "string"
          },
          "end_date": {
            "type": "string"
          }
        },
        "required": [
          "start_date",
          "end_date"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 2
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "minItems": 1,
      "maxItems": 10
    },
    "recipe": {
      "type": "string",
      "enum": [
        "ads_mta_campaign_ids",
        "ads_mta_adgroup_ids",
        "ads_mta_creative_ids",
        "ads_mta_customer_ids",
        "ads_mta_ids",
        "ads_mta_keyword_ids"
      ]
    },
    "key_event_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 10
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 9
    },
    "dimension_filter": {},
    "metric_filter": {},
    "order_bys": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "field": {
            "type": "string"
          },
          "kind": {
            "type": "string",
            "enum": [
              "dimension",
              "metric"
            ]
          },
          "desc": {
            "type": "boolean"
          }
        },
        "required": [
          "field"
        ],
        "additionalProperties": false
      }
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 1000
    },
    "offset": {
      "type": "integer",
      "minimum": 0
    },
    "keep_empty_rows": {
      "type": "boolean"
    },
    "currency_code": {
      "type": "string",
      "minLength": 3,
      "maxLength": 3
    },
    "allow_long_range": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L89-L128).

</details>

<a id="tool-ga4_list_google_ads_links-aa0c7a61"></a>

## ga4_list_google_ads_links

Handler: Google Analytics 4: routes list google ads links through ga4ListGoogleAdsLinks; implements the registered product operation; it does not operate Google Tag Manager.

```text
List Google Ads links on a property. Admin GET accepts analytics.readonly (Consent A). Not in the 24-tool Consent A kernel. property_id required.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L315-L325) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L157-L178) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2362-L2363).

</details>

<a id="tool-ga4_create_google_ads_link-831b0d9d"></a>

## ga4_create_google_ads_link

Handler: Google Analytics 4: routes create google ads link through ga4CreateGoogleAdsLink; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create a Google Ads link on a property. Needs analytics.edit on Free Google. dry_run default; live needs confirm_phrase containing properties/{id}.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L326-L336) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L179-L197) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "customer_id": {
      "$ref": "#/properties/property_id"
    },
    "ads_personalization_enabled": {
      "type": "boolean"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2364-L2374).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-ga4_delete_google_ads_link-75fbc531"></a>

## ga4_delete_google_ads_link

Handler: Google Analytics 4: routes delete google ads link through ga4DeleteGoogleAdsLink; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Delete a Google Ads link. Consent G. dry_run default; live needs confirm_phrase containing properties/{id}.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L337-L347) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L198-L213) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "ads_link_id": {
      "$ref": "#/properties/property_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2375-L2384).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-ga4_get_attribution_settings-90ed0d2f"></a>

## ga4_get_attribution_settings

Handler: Google Analytics 4: routes get attribution settings through ga4GetAttributionSettings; implements the registered product operation; it does not operate Google Tag Manager.

```text
Get property attributionSettings. v1beta has no this RPC — uses Admin v1alpha GET, which accepts analytics.readonly (Consent A). property_id required.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L348-L358) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L214-L224) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2385-L2386).

</details>

<a id="tool-ga4_update_attribution_settings-e26f627d"></a>

## ga4_update_attribution_settings

Handler: Google Analytics 4: routes update attribution settings through ga4UpdateAttributionSettings; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Patch attributionSettings (v1alpha). Consent G. Closed enums only. dry_run default; live needs confirm_phrase containing properties/{id}.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L359-L369) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L225-L278) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "reporting_attribution_model": {
      "type": "string",
      "enum": [
        "PAID_AND_ORGANIC_CHANNELS_DATA_DRIVEN",
        "PAID_AND_ORGANIC_CHANNELS_LAST_CLICK",
        "GOOGLE_PAID_CHANNELS_LAST_CLICK"
      ]
    },
    "acquisition_lookback": {
      "type": "string",
      "enum": [
        "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_7_DAYS",
        "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS",
        "ACQUISITION_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS"
      ]
    },
    "other_lookback": {
      "type": "string",
      "enum": [
        "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_30_DAYS",
        "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_60_DAYS",
        "OTHER_CONVERSION_EVENT_LOOKBACK_WINDOW_90_DAYS"
      ]
    },
    "ads_web_conversion_data_export_scope": {
      "type": "string",
      "enum": [
        "NOT_SELECTED_YET",
        "PAID_AND_ORGANIC_CHANNELS",
        "GOOGLE_PAID_CHANNELS"
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2387-L2419).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-ga4_create_data_stream-9d40c550"></a>

## ga4_create_data_stream

Handler: Google Analytics 4: routes create data stream through ga4CreateDataStream; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create a WEB_DATA_STREAM. Consent G. dry_run default; live needs confirm_phrase containing properties/{id}.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L370-L380) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L279-L299) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "display_name": {
      "$ref": "#/properties/property_id"
    },
    "default_uri": {
      "$ref": "#/properties/property_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2420-L2430).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-ga4_update_data_stream-27f95aa4"></a>

## ga4_update_data_stream

Handler: Google Analytics 4: routes update data stream through ga4UpdateDataStream; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Patch a data stream display name and/or default URI. Consent G. dry_run default; live needs confirm_phrase containing properties/{id}.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L381-L391) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L300-L330) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "stream_id": {
      "$ref": "#/properties/property_id"
    },
    "display_name": {
      "$ref": "#/properties/property_id"
    },
    "default_uri": {
      "$ref": "#/properties/property_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2431-L2442).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-ga4_create_key_event-503e5cec"></a>

## ga4_create_key_event

Handler: Google Analytics 4: routes create key event through ga4CreateKeyEvent; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create a key event / conversion. Consent G. dry_run default; live needs confirm_phrase containing properties/{id}.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L392-L402) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L331-L355) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "event_name": {
      "$ref": "#/properties/property_id"
    },
    "counting_method": {
      "type": "string",
      "enum": [
        "ONCE_PER_EVENT",
        "ONCE_PER_SESSION"
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2443-L2453).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-ga4_update_key_event-9fe62a80"></a>

## ga4_update_key_event

Handler: Google Analytics 4: routes update key event through ga4UpdateKeyEvent; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Patch a key event counting method. Consent G. dry_run default; live needs confirm_phrase containing properties/{id}.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L403-L413) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L356-L380) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "key_event_id": {
      "$ref": "#/properties/property_id"
    },
    "counting_method": {
      "type": "string",
      "enum": [
        "ONCE_PER_EVENT",
        "ONCE_PER_SESSION"
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "counting_method"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2454-L2464).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-ga4_create_custom_dimension-2ce8700e"></a>

## ga4_create_custom_dimension

Handler: Google Analytics 4: routes create custom dimension through ga4CreateCustomDimension; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create a custom dimension (EVENT/USER/ITEM). Consent G. dry_run default; live needs confirm_phrase containing properties/{id}.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L414-L424) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L381-L402) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "parameter_name": {
      "$ref": "#/properties/property_id"
    },
    "display_name": {
      "$ref": "#/properties/property_id"
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
      "$ref": "#/properties/property_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "scope"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2465-L2477).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-ga4_create_custom_metric-840cf76a"></a>

## ga4_create_custom_metric

Handler: Google Analytics 4: routes create custom metric through ga4CreateCustomMetric; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create an EVENT-scoped custom metric. Consent G. dry_run default; live needs confirm_phrase containing properties/{id}.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L425-L435) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L403-L425) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "parameter_name": {
      "$ref": "#/properties/property_id"
    },
    "display_name": {
      "$ref": "#/properties/property_id"
    },
    "measurement_unit": {
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
      ]
    },
    "description": {
      "$ref": "#/properties/property_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2478-L2503).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-ga4_list_mp_secrets-aba5dd0b"></a>

## ga4_list_mp_secrets

Handler: Google Analytics 4: routes list mp secrets through ga4ListMpSecrets; implements the registered product operation; it does not operate Google Tag Manager.

```text
List MP secrets for a data stream. Needs analytics.edit on Free Google. secretValue is redacted in the envelope and never written to logs. Writes flag is not required for this read.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L436-L446) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L426-L453) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "stream_id": {
      "$ref": "#/properties/property_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "stream_id": {
      "$ref": "#/properties/property_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2504-L2512).

</details>

<a id="tool-ga4_create_mp_secret-a2b51a76"></a>

## ga4_create_mp_secret

Handler: Google Analytics 4: routes create mp secret through ga4CreateMpSecret; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create an MP secret. Consent G. dry_run default; live needs confirm_phrase containing properties/{id}. secretValue is never written to logs.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L447-L457) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L454-L478) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "property_id": {
      "type": "string"
    },
    "stream_id": {
      "$ref": "#/properties/property_id"
    },
    "display_name": {
      "$ref": "#/properties/property_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2513-L2523).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-ga4_create_property-ca91208a"></a>

## ga4_create_property

Handler: Google Analytics 4: routes create property through ga4CreateProperty; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create an ordinary GA4 property under an account. Consent G. dry_run default; live needs confirm_phrase containing accounts/{id}. Disposable DGTL property only.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L458-L468) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/ga4-write.ts#L479-L512) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "display_name": {
      "$ref": "#/properties/account_id"
    },
    "time_zone": {
      "$ref": "#/properties/account_id"
    },
    "currency_code": {
      "$ref": "#/properties/account_id"
    },
    "industry_category": {
      "$ref": "#/properties/account_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2524-L2537).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gsc_list_sites-69b36040"></a>

## gsc_list_sites

Handler: Google Search Console: routes list sites through gscListSites; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. List Search Console sites. Exact siteUrl; do not coerce sc-domain vs URL-prefix.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L469-L478) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gsc.ts#L62-L77) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L58-L59).

</details>

<a id="tool-gsc_describe_schema-02101a75"></a>

## gsc_describe_schema

Handler: Google Search Console: routes describe schema through gscDescribeSchema; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Local dimension/metric catalog + site_url / data_state notes. No Google call. Call before gsc_query_search_analytics; never invent dimension names.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L479-L488) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gsc.ts#L53-L61) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L79-L80).

</details>

<a id="tool-gsc_get_site-2f8523bd"></a>

## gsc_get_site

Handler: Google Search Console: routes get site through gscGetSite; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Get one Search Console site by exact site_url.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L489-L498) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gsc.ts#L78-L102) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L129-L130).

</details>

<a id="tool-gsc_query_search_analytics-8dc2dfd0"></a>

## gsc_query_search_analytics

Handler: Google Search Console: routes query search analytics through gscQuerySearchAnalytics; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Search queries, pages, countries, devices. This is the tool for search queries — not ga4_run_report. Call gsc_describe_schema first. Cite site_url + dates from data.cited. Default data_state=final (laggy); use all for fresh days.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L499-L508) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gsc.ts#L103-L170) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "start_date": {
      "$ref": "#/properties/site_url"
    },
    "end_date": {
      "$ref": "#/properties/site_url"
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
          "searchAppearance",
          "date",
          "hour"
        ]
      }
    },
    "row_limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 1000
    },
    "start_row": {
      "type": "integer",
      "minimum": 0
    },
    "search_type": {
      "type": "string",
      "enum": [
        "web",
        "image",
        "video",
        "news",
        "discover",
        "googleNews"
      ]
    },
    "data_state": {
      "type": "string",
      "enum": [
        "final",
        "all"
      ]
    },
    "aggregation_type": {
      "type": "string"
    },
    "dimension_filter_groups": {
      "type": "array",
      "items": {}
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "start_date": {
      "$ref": "#/properties/site_url"
    },
    "end_date": {
      "$ref": "#/properties/site_url"
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
          "searchAppearance",
          "date",
          "hour"
        ]
      }
    },
    "row_limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 1000
    },
    "start_row": {
      "type": "integer",
      "minimum": 0
    },
    "search_type": {
      "type": "string",
      "enum": [
        "web",
        "image",
        "video",
        "news",
        "discover",
        "googleNews"
      ]
    },
    "data_state": {
      "type": "string",
      "enum": [
        "final",
        "all"
      ]
    },
    "aggregation_type": {
      "type": "string"
    },
    "dimension_filter_groups": {
      "type": "array",
      "items": {}
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L131-L147).

</details>

<a id="tool-gsc_inspect_url-2d598234"></a>

## gsc_inspect_url

Handler: Google Search Console: routes inspect url through gscInspectUrl; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. URL Inspection. No request-indexing tool exists.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L509-L518) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gsc.ts#L171-L185) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "inspection_url": {
      "$ref": "#/properties/site_url"
    },
    "language_code": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "inspection_url": {
      "$ref": "#/properties/site_url"
    },
    "language_code": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L148-L155).

</details>

<a id="tool-gsc_list_sitemaps-e4a908e7"></a>

## gsc_list_sitemaps

Handler: Google Search Console: routes list sitemaps through gscListSitemaps; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. List sitemaps for an exact site_url.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L519-L528) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gsc.ts#L186-L206) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "sitemap_index": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "sitemap_index": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L156-L159).

</details>

<a id="tool-gsc_get_sitemap-bec92fb6"></a>

## gsc_get_sitemap

Handler: Google Search Console: routes get sitemap through gscGetSitemap; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Get one sitemap by site_url + feedpath from the list tool.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L529-L538) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gsc.ts#L207-L220) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "feedpath": {
      "$ref": "#/properties/site_url"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "feedpath": {
      "$ref": "#/properties/site_url"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L160-L162).

</details>

<a id="tool-gsc_submit_sitemap-6d135a26"></a>

## gsc_submit_sitemap

Handler: Google Search Console: routes submit sitemap through gscSubmitSitemap; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
PUT sitemaps.submit for an exact site_url + feedpath. Needs webmasters write on Free Google. dry_run default; live needs confirm_phrase containing that site_url. No request-indexing tool.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L539-L549) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gsc-write.ts#L116-L119) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "feedpath": {
      "$ref": "#/properties/site_url"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L163-L184).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{if(val.dry_run===false){const phrase=val.confirm_phrase??val.confirm;if(!phrase||!String(phrase).trim()){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}}"
  }
]
```

</details>

<a id="tool-gsc_delete_sitemap-adedc75d"></a>

## gsc_delete_sitemap

Handler: Google Search Console: routes delete sitemap through gscDeleteSitemap; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
DELETE sitemaps.delete for an exact site_url + feedpath. Consent S. dry_run default; live needs confirm_phrase containing that site_url.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L550-L560) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gsc-write.ts#L120-L122) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "site_url": {
      "type": "string"
    },
    "feedpath": {
      "$ref": "#/properties/site_url"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L185-L186).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{if(val.dry_run===false){const phrase=val.confirm_phrase??val.confirm;if(!phrase||!String(phrase).trim()){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}}"
  }
]
```

</details>

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Lists Google Tag Manager accounts visible to the connected Google user, then slices results locally for pagination.

```text
Read-only. Never picks a default resource. List Tag Manager accounts (hierarchy root). Next: gtm_list_containers → workspaces → draft tags OR live version. Classic 403 accessNotConfigured if Tag Manager API is not Enabled.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L561-L570) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm.ts#L34-L45) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L58-L59).

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Lists containers in the explicit GTM account, then slices results locally for pagination.

```text
Read-only. Never picks a default resource. List containers for a required account_id (includes publicId GTM-XXXX).
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L571-L580) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm.ts#L46-L64) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L60-L63).

</details>

<a id="tool-gtm_get_container-fdc6e39c"></a>

## gtm_get_container

Handler: Fetches the selected GTM container metadata and publicId.

```text
Read-only. Never picks a default resource. Get one container. account_id and container_id required.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L581-L590) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm.ts#L65-L80) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L187-L190).

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Lists workspaces in the selected container and warns against selecting a default when multiple exist.

```text
Read-only. Never picks a default resource. List workspaces for account_id + container_id. If more than one, do not default to Default Workspace. Drafts ≠ live.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L591-L600) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm.ts#L81-L139) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L187-L190).

</details>

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Lists selected workspace draft tags and marks returned items source=workspace.

```text
Read-only. Never picks a default resource. Workspace draft tags (source=workspace). Not live on the site — use gtm_get_live_container_version for published. Paginated; truncated when oversize.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L601-L610) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm.ts#L140-L142) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L191-L200).

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Lists selected workspace draft triggers and marks returned items source=workspace.

```text
Read-only. Never picks a default resource. Workspace draft triggers (source=workspace).
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L611-L620) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm.ts#L143-L145) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L191-L200).

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Lists selected workspace draft variables and marks returned items source=workspace.

```text
Read-only. Never picks a default resource. Workspace draft variables (source=workspace).
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L621-L630) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm.ts#L146-L150) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L191-L200).

</details>

<a id="tool-gtm_get_live_container_version-b7e78e69"></a>

## gtm_get_live_container_version

Handler: Fetches the published live container version, distinguishing it from workspace drafts.

```text
Read-only. Never picks a default resource. Published container (source=live). This is what is on the site; workspace drafts may differ. Never publishes.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L631-L640) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm.ts#L205-L228) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L187-L190).

</details>

<a id="tool-gtm_list_clients-bd1499aa"></a>

## gtm_list_clients

Handler: Lists selected server-container workspace clients and marks returned items source=workspace.

```text
Read-only. Never picks a default resource. Workspace draft sGTM clients (source=workspace). Consent A tagmanager.readonly. Server containers expose clients; web containers are often empty. Not stamp ingest.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L641-L650) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm.ts#L151-L181) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L191-L200).

</details>

<a id="tool-gtm_list_environments-9f7a4399"></a>

## gtm_list_environments

Handler: Lists container-level environments and paginates the returned list locally; distinguishes USER environments from system-managed environments.

```text
Read-only. Never picks a default resource. Container environments (USER / live / latest / workspace). Consent A tagmanager.readonly. Not workspace-scoped.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L651-L660) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm.ts#L182-L204) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L187-L190).

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Performs create tag in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create a workspace tag. Needs tagmanager.edit.containers on Free Google. Prefer dry_run; live mutate needs an explicit user confirm that includes the container publicId.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L663-L673) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm-write.ts#L196-L238) · Schema: tools/list.

Exposure: Always listed; requires GTM write credentials even for dry-run; live mutation requires dry_run=false and target confirmation.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "name": {
      "$ref": "#/properties/account_id"
    },
    "type": {
      "$ref": "#/properties/account_id"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "minLength": 1
          },
          "key": {
            "type": "string",
            "minLength": 1
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "maxItems": 20
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L344-L359).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: PUTs only name and type to the selected workspace tag; defaults to dry-run and requires publicId confirmation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Update a workspace tag. Needs Free Google GTM write scopes. Prefer dry_run; live mutate needs an explicit user confirm that includes the container publicId.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L674-L684) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm-write.ts#L239-L358) · Schema: tools/list.

Exposure: Always listed; requires GTM write credentials even for dry-run; live mutation requires dry_run=false and target confirmation.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "tag_id": {
      "$ref": "#/properties/account_id"
    },
    "name": {
      "$ref": "#/properties/account_id"
    },
    "type": {
      "$ref": "#/properties/account_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L360-L373).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Performs create trigger in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create a workspace trigger. Needs Free Google GTM write scopes. Prefer dry_run; live mutate needs an explicit user confirm that includes the container publicId.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L685-L695) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm-write.ts#L359-L374) · Schema: tools/list.

Exposure: Always listed; requires GTM write credentials even for dry-run; live mutation requires dry_run=false and target confirmation.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "name": {
      "$ref": "#/properties/account_id"
    },
    "type": {
      "$ref": "#/properties/account_id"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "minLength": 1
          },
          "key": {
            "type": "string",
            "minLength": 1
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "maxItems": 20
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L374-L387).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: Performs update trigger in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Update a workspace trigger. Needs Free Google GTM write scopes. Prefer dry_run; live mutate needs an explicit user confirm that includes the container publicId.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L696-L706) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm-write.ts#L375-L392) · Schema: tools/list.

Exposure: Always listed; requires GTM write credentials even for dry-run; live mutation requires dry_run=false and target confirmation.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "trigger_id": {
      "$ref": "#/properties/account_id"
    },
    "name": {
      "$ref": "#/properties/account_id"
    },
    "type": {
      "$ref": "#/properties/account_id"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "minLength": 1
          },
          "key": {
            "type": "string",
            "minLength": 1
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "maxItems": 20
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L388-L402).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Performs create variable in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create a workspace variable. Needs Free Google GTM write scopes. Prefer dry_run; live mutate needs an explicit user confirm that includes the container publicId.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L707-L717) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm-write.ts#L393-L408) · Schema: tools/list.

Exposure: Always listed; requires GTM write credentials even for dry-run; live mutation requires dry_run=false and target confirmation.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "name": {
      "$ref": "#/properties/account_id"
    },
    "type": {
      "$ref": "#/properties/account_id"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "minLength": 1
          },
          "key": {
            "type": "string",
            "minLength": 1
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "maxItems": 20
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L403-L416).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: Performs update variable in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Update a workspace variable. Needs Free Google GTM write scopes. Prefer dry_run; live mutate needs an explicit user confirm that includes the container publicId.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L718-L728) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm-write.ts#L409-L487) · Schema: tools/list.

Exposure: Always listed; requires GTM write credentials even for dry-run; live mutation requires dry_run=false and target confirmation.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "variable_id": {
      "$ref": "#/properties/account_id"
    },
    "name": {
      "$ref": "#/properties/account_id"
    },
    "type": {
      "$ref": "#/properties/account_id"
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "minLength": 1
          },
          "key": {
            "type": "string",
            "minLength": 1
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "maxItems": 20
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L417-L431).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gtm_publish_container-513cc8f7"></a>

## gtm_publish_container

Handler: Creates a version from the selected workspace and publishes it; defaults to dry-run, checks confirmation publicId and rejects a known grant missing edit.containerversions scope. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Publish a GTM container version. Highest-risk write. Needs tagmanager.publish on Free Google. Prefer dry_run first; live publish requires an explicit confirm that includes the container publicId from the user this turn.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L729-L739) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm-write.ts#L610-L705) · Schema: tools/list.

Exposure: Always listed; requires GTM write credentials even for dry-run; live mutation requires dry_run=false and target confirmation.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "version_name": {
      "$ref": "#/properties/account_id"
    },
    "version_notes": {
      "$ref": "#/properties/account_id"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L432-L449).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gtm_create_client-aefac744"></a>

## gtm_create_client

Handler: Performs create client in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create a workspace sGTM client. Needs tagmanager.edit.containers on Free Google. Closed type enum (gaawp/googtag/gclidw/flc/ua/mp). Prefer dry_run; live mutate needs confirm_phrase containing the container publicId or accounts/{id}/containers/{id} path. Not stamp ingest.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L740-L750) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm-write.ts#L488-L505) · Schema: tools/list.

Exposure: Always listed; requires GTM write credentials even for dry-run; live mutation requires dry_run=false and target confirmation.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "name": {
      "$ref": "#/properties/account_id"
    },
    "type": {
      "type": "string",
      "enum": [
        "gaawp",
        "googtag",
        "gclidw",
        "flc",
        "ua",
        "mp"
      ]
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "minLength": 1
          },
          "key": {
            "type": "string",
            "minLength": 1
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "maxItems": 20
    },
    "priority": {
      "type": "integer"
    },
    "notes": {
      "type": "string"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L450-L465).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gtm_update_client-49d21241"></a>

## gtm_update_client

Handler: Performs update client in the selected GTM workspace with name/type and supported scalar parameters; defaults to dry-run and requires write credentials and publicId confirmation for live mutation. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Update a workspace sGTM client. Needs Free Google GTM write scopes. Closed type enum. Prefer dry_run; live mutate needs confirm_phrase containing the container publicId or container path.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L751-L761) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm-write.ts#L506-L525) · Schema: tools/list.

Exposure: Always listed; requires GTM write credentials even for dry-run; live mutation requires dry_run=false and target confirmation.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "workspace_id": {
      "$ref": "#/properties/account_id"
    },
    "client_id": {
      "$ref": "#/properties/account_id"
    },
    "name": {
      "$ref": "#/properties/account_id"
    },
    "type": {
      "type": "string",
      "enum": [
        "gaawp",
        "googtag",
        "gclidw",
        "flc",
        "ua",
        "mp"
      ]
    },
    "parameter": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "minLength": 1
          },
          "key": {
            "type": "string",
            "minLength": 1
          },
          "value": {
            "type": "string"
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "maxItems": 20
    },
    "priority": {
      "type": "integer"
    },
    "notes": {
      "type": "string"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L466-L482).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gtm_create_container-67c96447"></a>

## gtm_create_container

Handler: Creates a container with validated usage contexts under an explicit account; defaults to dry-run and requires account-path confirmation for live POST. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create a GTM container. Needs Free Google GTM write scopes. Closed usage_context enum (server = sGTM; web/android/ios/amp locked). Prefer dry_run; live mutate needs confirm_phrase containing accounts/{account_id}.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L762-L772) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm-write.ts#L526-L563) · Schema: tools/list.

Exposure: Always listed; requires GTM write credentials even for dry-run; live mutation requires dry_run=false and target confirmation.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "name": {
      "$ref": "#/properties/account_id"
    },
    "usage_context": {
      "anyOf": [
        {
          "type": "string",
          "enum": [
            "web",
            "android",
            "ios",
            "amp",
            "server"
          ]
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/properties/usage_context/anyOf/0"
          },
          "minItems": 1,
          "maxItems": 4
        }
      ]
    },
    "notes": {
      "type": "string"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "usage_context"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L483-L494).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gtm_create_environment-f4b9f2a2"></a>

## gtm_create_environment

Handler: Creates a USER container environment; defaults to dry-run and requires publicId or container-path confirmation for live POST. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Create a USER GTM environment. Needs Free Google GTM write scopes. Prefer dry_run; live mutate needs confirm_phrase containing the container publicId or container path. Does not reauthorize preview.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L773-L783) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gtm-write.ts#L564-L609) · Schema: tools/list.

Exposure: Always listed; requires GTM write credentials even for dry-run; live mutation requires dry_run=false and target confirmation.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_id": {
      "type": "string"
    },
    "container_id": {
      "$ref": "#/properties/account_id"
    },
    "name": {
      "$ref": "#/properties/account_id"
    },
    "description": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "enable_debug": {
      "type": "boolean"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L495-L509).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gbp_list_accounts-d0179a8b"></a>

## gbp_list_accounts

Handler: Google Business Profile: routes list accounts through gbpListAccounts; implements the registered product operation; it does not operate Google Tag Manager.

```text
Google Business Profile accounts (Account Management API). Flag off → GBP_NOT_ENABLED. Flag on needs Consent B (business.manage). GET-only; not Consent A.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L785-L795) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gbp.ts#L127-L150) · Schema: tools/list.

Exposure: Always listed; handler disabled unless DGTL_GBP_ENABLED or GBP_ENABLED enables it.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L201-L201).

</details>

<a id="tool-gbp_list_locations-e79f9888"></a>

## gbp_list_locations

Handler: Google Business Profile: routes list locations through gbpListLocations; implements the registered product operation; it does not operate Google Tag Manager.

```text
GBP locations for an account. Requires account_name from gbp_list_accounts. Consent B, not Consent A. GET-only.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L796-L806) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gbp.ts#L151-L176) · Schema: tools/list.

Exposure: Always listed; handler disabled unless DGTL_GBP_ENABLED or GBP_ENABLED enables it.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "account_name": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L202-L204).

</details>

<a id="tool-gbp_get_location-710e9df3"></a>

## gbp_get_location

Handler: Google Business Profile: routes get location through gbpGetLocation; implements the registered product operation; it does not operate Google Tag Manager.

```text
GBP location (title, place_id, website, labels). Requires location_name. GET-only; no location mutate.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L807-L816) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gbp.ts#L177-L193) · Schema: tools/list.

Exposure: Always listed; handler disabled unless DGTL_GBP_ENABLED or GBP_ENABLED enables it.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L205-L205).

</details>

<a id="tool-gbp_performance-7c929fb7"></a>

## gbp_performance

Handler: Google Business Profile: routes performance through gbpPerformance; implements the registered product operation; it does not operate Google Tag Manager.

```text
GBP Performance daily metrics time series. Requires location_name + start_date + end_date. Performance API does not list locations. GET-only.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L817-L827) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gbp.ts#L194-L262) · Schema: tools/list.

Exposure: Always listed; handler disabled unless DGTL_GBP_ENABLED or GBP_ENABLED enables it.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string"
    },
    "start_date": {
      "$ref": "#/properties/location_name"
    },
    "end_date": {
      "$ref": "#/properties/location_name"
    },
    "daily_metric": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string"
    },
    "start_date": {
      "$ref": "#/properties/location_name"
    },
    "end_date": {
      "$ref": "#/properties/location_name"
    },
    "daily_metric": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L206-L213).

</details>

<a id="tool-gbp_search_keywords-f450437c"></a>

## gbp_search_keywords

Handler: Google Business Profile: routes search keywords through gbpSearchKeywords; implements the registered product operation; it does not operate Google Tag Manager.

```text
Monthly search-keyword impressions for a location. Requires location_name. GET-only.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L828-L837) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/gbp.ts#L263-L313) · Schema: tools/list.

Exposure: Always listed; handler disabled unless DGTL_GBP_ENABLED or GBP_ENABLED enables it.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string"
    },
    "month": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "location_name": {
      "type": "string"
    },
    "month": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L214-L217).

</details>

<a id="tool-gads_list_accessible_customers-8467aa4f"></a>

## gads_list_accessible_customers

Handler: Google Ads: routes list accessible customers through gadsDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. Use FIRST to discover customer IDs when the user has not given one — most Ads tools need a valid customer_id. Digits only (no hyphens). Cite returned ids; do not invent. No mutate. LICENSE_REQUIRED without a license. No developer-token on this client.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L839-L849) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads.ts#L38-L100) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L8-L10).

</details>

<a id="tool-gads_describe_recipes-14da7f28"></a>

## gads_describe_recipes

Handler: Google Ads: routes describe recipes through gadsDescribeRecipes; implements the registered product operation; it does not operate Google Tag Manager.

```text
Paid. Pro $19/mo. Local closed-recipe catalog (anti-hallucination). Call before gads_search — do not invent GAQL or metrics.*/segments.* fields. Mirrors official get_resource_metadata UX without FieldService dumps. Zero Ads HTTP. LICENSE_REQUIRED without a license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L850-L860) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads.ts#L22-L37) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L322-L343).

</details>

<a id="tool-gads_get_customer-a48afa07"></a>

## gads_get_customer

Handler: Google Ads: routes get customer through gadsDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. Descriptive name, currency, time zone for a customer_id from gads_list_accessible_customers. LICENSE_REQUIRED without a DGTL license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L861-L871) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads.ts#L38-L100) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L218-L218).

</details>

<a id="tool-gads_search-a2660b1a"></a>

## gads_search

Handler: Google Ads: routes search through gadsDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. Closed recipe enum only (campaigns, ad_groups, keywords, search_terms, conversion_actions, change_status, policy_topics, performance, assets, asset_groups, audiences, shared_sets, bidding_strategies, geo, demographics, shopping_performance, recommendations, change_event, account_budget, negatives, experiments, click_view, keyword_performance, ad_performance). Call gads_describe_recipes first — do not invent GAQL. customer_id digits without hyphens; cite data.cited. LICENSE_REQUIRED without a license. No developer-token on this client.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L872-L882) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads.ts#L38-L100) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "recipe": {
      "type": "string",
      "enum": [
        "campaigns",
        "ad_groups",
        "keywords",
        "search_terms",
        "conversion_actions",
        "change_status",
        "policy_topics",
        "performance",
        "assets",
        "asset_groups",
        "audiences",
        "shared_sets",
        "bidding_strategies",
        "geo",
        "demographics",
        "shopping_performance",
        "recommendations",
        "change_event",
        "account_budget",
        "negatives",
        "experiments",
        "click_view",
        "keyword_performance",
        "ad_performance"
      ]
    },
    "date_range": {
      "type": "object",
      "properties": {
        "start_date": {
          "type": "string"
        },
        "end_date": {
          "type": "string"
        }
      },
      "required": [
        "start_date",
        "end_date"
      ],
      "additionalProperties": false
    },
    "where": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string"
        },
        "campaign_id": {
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 1000
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "recipe": {
      "type": "string",
      "enum": [
        "campaigns",
        "ad_groups",
        "keywords",
        "search_terms",
        "conversion_actions",
        "change_status",
        "policy_topics",
        "performance",
        "assets",
        "asset_groups",
        "audiences",
        "shared_sets",
        "bidding_strategies",
        "geo",
        "demographics",
        "shopping_performance",
        "recommendations",
        "change_event",
        "account_budget",
        "negatives",
        "experiments",
        "click_view",
        "keyword_performance",
        "ad_performance"
      ]
    },
    "date_range": {
      "type": "object",
      "properties": {
        "start_date": {
          "type": "string"
        },
        "end_date": {
          "type": "string"
        }
      },
      "required": [
        "start_date",
        "end_date"
      ],
      "additionalProperties": false
    },
    "where": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string"
        },
        "campaign_id": {
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 1000
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L219-L262).

</details>

<a id="tool-gads_campaign_performance-6f83598a"></a>

## gads_campaign_performance

Handler: Google Ads: routes campaign performance through gadsDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. Closed performance recipe (same family as gads_search recipe=performance). Cite customer_id + date_range from data.cited. LICENSE_REQUIRED without a DGTL license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L883-L893) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads.ts#L38-L100) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "recipe": {
      "type": "string",
      "enum": [
        "campaigns",
        "ad_groups",
        "keywords",
        "search_terms",
        "conversion_actions",
        "change_status",
        "policy_topics",
        "performance",
        "assets",
        "asset_groups",
        "audiences",
        "shared_sets",
        "bidding_strategies",
        "geo",
        "demographics",
        "shopping_performance",
        "recommendations",
        "change_event",
        "account_budget",
        "negatives",
        "experiments",
        "click_view",
        "keyword_performance",
        "ad_performance"
      ]
    },
    "date_range": {
      "type": "object",
      "properties": {
        "start_date": {
          "type": "string"
        },
        "end_date": {
          "type": "string"
        }
      },
      "required": [
        "start_date",
        "end_date"
      ],
      "additionalProperties": false
    },
    "where": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string"
        },
        "campaign_id": {
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 1000
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "recipe": {
      "type": "string",
      "enum": [
        "campaigns",
        "ad_groups",
        "keywords",
        "search_terms",
        "conversion_actions",
        "change_status",
        "policy_topics",
        "performance",
        "assets",
        "asset_groups",
        "audiences",
        "shared_sets",
        "bidding_strategies",
        "geo",
        "demographics",
        "shopping_performance",
        "recommendations",
        "change_event",
        "account_budget",
        "negatives",
        "experiments",
        "click_view",
        "keyword_performance",
        "ad_performance"
      ]
    },
    "date_range": {
      "type": "object",
      "properties": {
        "start_date": {
          "type": "string"
        },
        "end_date": {
          "type": "string"
        }
      },
      "required": [
        "start_date",
        "end_date"
      ],
      "additionalProperties": false
    },
    "where": {
      "type": "object",
      "properties": {
        "status": {
          "type": "string"
        },
        "campaign_id": {
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 1000
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L219-L262).

</details>

<a id="tool-gads_set_campaign_status-23ddf10d"></a>

## gads_set_campaign_status

Handler: Google Ads: routes set campaign status through gadsSetCampaignStatus; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Pause or enable a campaign (ENABLED/PAUSED only). Prefer dry_run; live needs confirm_phrase with digits-only customer_id. Consent C + Pro + gateway — never Consent A.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L894-L904) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L151-L254) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "campaign_id": {
      "$ref": "#/properties/customer_id"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "status"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L510-L524).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_update_campaign_budget-f5ed7b9d"></a>

## gads_update_campaign_budget

Handler: Google Ads: routes update campaign budget through gadsUpdateCampaignBudget; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Update campaign budget amount_micros only (optional daily_budget_dollars). Prefer dry_run; confirm_phrase with customer_id; spend-cap $100k/day. Consent C + Pro + gateway — never Consent A.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L905-L915) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L255-L386) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "campaign_budget_id": {
      "$ref": "#/properties/customer_id"
    },
    "campaign_budget_resource_name": {
      "$ref": "#/properties/customer_id"
    },
    "amount_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "daily_budget_dollars": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L525-L571).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireConfirmWhenLive(val,ctx);const hasId=Boolean(val.campaign_budget_id&&String(val.campaign_budget_id).trim());const hasRn=Boolean(val.campaign_budget_resource_name&&String(val.campaign_budget_resource_name).trim());if(!hasId&&!hasRn){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"campaign_budget_id or campaign_budget_resource_name is required\",path:[\"campaign_budget_id\"]})}const hasMicros=val.amount_micros!==void 0&&val.amount_micros!==null&&val.amount_micros!==\"\";const hasDollars=val.daily_budget_dollars!==void 0;if(!hasMicros&&!hasDollars){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"amount_micros or daily_budget_dollars is required\",path:[\"amount_micros\"]})}}"
  }
]
```

</details>

<a id="tool-gads_set_keyword_status-5d7bcde3"></a>

## gads_set_keyword_status

Handler: Google Ads: routes set keyword status through gadsSetKeywordStatus; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Pause or enable a Search keyword (ad group criterion). Prefer dry_run; live confirm_phrase must include digits-only customer_id. Consent C + Pro + gateway.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L916-L926) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L437-L486) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "ad_group_id": {
      "$ref": "#/properties/customer_id"
    },
    "criterion_id": {
      "$ref": "#/properties/customer_id"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "status"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L572-L584).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_add_keywords-3f27521b"></a>

## gads_add_keywords

Handler: Google Ads: routes add keywords through gadsAddKeywords; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Add up to 20 Search keywords to an ad group (EXACT/PHRASE/BROAD). Defaults PAUSED. ENABLED only with explicit status + confirm. Prefer dry_run; live confirm_phrase with customer_id. Consent C + Pro + gateway.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L927-L937) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L487-L571) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "ad_group_id": {
      "$ref": "#/properties/customer_id"
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "match_type": {
            "type": "string",
            "enum": [
              "EXACT",
              "PHRASE",
              "BROAD"
            ]
          }
        },
        "required": [
          "text"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 20
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "keywords"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L585-L597).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_set_ad_status-3f1f52bf"></a>

## gads_set_ad_status

Handler: Google Ads: routes set ad status through gadsSetAdStatus; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Pause or enable an ad (AdGroupAd). Prefer dry_run; live confirm_phrase with customer_id. Consent C + Pro + gateway.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L938-L948) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L572-L621) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "ad_group_id": {
      "$ref": "#/properties/customer_id"
    },
    "ad_id": {
      "$ref": "#/properties/customer_id"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "status"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L598-L610).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_create_responsive_search_ad-f4873363"></a>

## gads_create_responsive_search_ad

Handler: Google Ads: routes create responsive search ad through gadsCreateResponsiveSearchAd; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create a Responsive Search Ad on an existing ad group (≥3 headlines, ≥2 descriptions, https final_url). Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id. Consent C + Pro + gateway.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L949-L959) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L669-L737) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "ad_group_id": {
      "$ref": "#/properties/customer_id"
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 30
      },
      "minItems": 3,
      "maxItems": 15
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 90
      },
      "minItems": 2,
      "maxItems": 4
    },
    "final_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "path1": {
      "type": "string",
      "maxLength": 15
    },
    "path2": {
      "type": "string",
      "maxLength": 15
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "headlines",
    "descriptions",
    "final_url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L611-L627).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_create_search_campaign-4a535e54"></a>

## gads_create_search_campaign

Handler: Google Ads: routes create search campaign through gadsCreateSearchCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Closed Search create: budget + campaign + ad group + ≥1 keyword stub; optional RSA. Defaults PAUSED. Spend-cap on daily budget. Prefer dry_run; live confirm_phrase with customer_id. Consent C + Pro + gateway — never Consent A.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L960-L970) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L738-L886) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "campaign_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "ad_group_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "amount_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "daily_budget_dollars": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "match_type": {
            "type": "string",
            "enum": [
              "EXACT",
              "PHRASE",
              "BROAD"
            ]
          }
        },
        "required": [
          "text"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 20
    },
    "cpc_bid_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 30
      },
      "minItems": 3,
      "maxItems": 15
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 90
      },
      "minItems": 2,
      "maxItems": 4
    },
    "final_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "path1": {
      "type": "string",
      "maxLength": 15
    },
    "path2": {
      "type": "string",
      "maxLength": 15
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "campaign_name",
    "ad_group_name",
    "keywords"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L628-L688).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireConfirmWhenLive(val,ctx);const hasMicros=val.amount_micros!==void 0&&val.amount_micros!==null&&val.amount_micros!==\"\";const hasDollars=val.daily_budget_dollars!==void 0;if(!hasMicros&&!hasDollars){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"amount_micros or daily_budget_dollars is required\",path:[\"amount_micros\"]})}const hasRsa=val.headlines&&val.headlines.length>0||val.descriptions&&val.descriptions.length>0||Boolean(val.final_url);if(hasRsa){if(!val.headlines||val.headlines.length<3){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"RSA stub requires \\u22653 headlines\",path:[\"headlines\"]})}if(!val.descriptions||val.descriptions.length<2){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"RSA stub requires \\u22652 descriptions\",path:[\"descriptions\"]})}if(!val.final_url){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"RSA stub requires final_url (https)\",path:[\"final_url\"]})}}}"
  }
]
```

</details>

<a id="tool-gads_set_ad_group_status-bb4a71ff"></a>

## gads_set_ad_group_status

Handler: Google Ads: routes set ad group status through gadsSetAdGroupStatus; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Pause or enable an ad group. Prefer dry_run; live confirm_phrase with customer_id. Consent C + Pro + gateway.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L971-L981) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L887-L937) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "ad_group_id": {
      "$ref": "#/properties/customer_id"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "status"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L689-L701).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_create_display_campaign-6b8668b8"></a>

## gads_create_display_campaign

Handler: Google Ads: routes create display campaign through gadsCreateDisplayCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Display foundation: budget + DISPLAY campaign + DISPLAY_STANDARD ad group. Campaign defaults PAUSED; child ad group ENABLED. Add RDA via gads_create_responsive_display_ad after gads_upload_asset. Spend-cap. Prefer dry_run; live confirm_phrase with customer_id. Consent C + Pro + gateway — never Consent A.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L982-L992) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L938-L1012) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "campaign_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "ad_group_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "amount_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "daily_budget_dollars": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "cpc_bid_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "campaign_name",
    "ad_group_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L702-L731).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireConfirmWhenLive(val,ctx);const hasMicros=val.amount_micros!==void 0&&val.amount_micros!==null&&val.amount_micros!==\"\";const hasDollars=val.daily_budget_dollars!==void 0;if(!hasMicros&&!hasDollars){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"amount_micros or daily_budget_dollars is required\",path:[\"amount_micros\"]})}}"
  }
]
```

</details>

<a id="tool-gads_create_performance_max_campaign-4171d8d3"></a>

## gads_create_performance_max_campaign

Handler: Google Ads: routes create performance max campaign through gadsCreatePerformanceMaxCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. PMax: budget + PERFORMANCE_MAX + asset group + text assets + marketing/square/logo images. Pass existing asset resource names from gads_upload_asset, or https file_url / base64 bytes (Worker uploads inline). Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id. Consent C + Pro + gateway.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L993-L1003) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L1116-L1249) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "campaign_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "asset_group_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "amount_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "daily_budget_dollars": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "final_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 30
      },
      "minItems": 3,
      "maxItems": 15
    },
    "long_headlines": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 90
      },
      "minItems": 1,
      "maxItems": 5
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 90
      },
      "minItems": 2,
      "maxItems": 5
    },
    "business_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 25
    },
    "marketing_image_asset_resource_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 20
    },
    "square_marketing_image_asset_resource_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 20
    },
    "logo_asset_resource_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 5
    },
    "marketing_image_file_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "square_marketing_image_file_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "logo_file_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "marketing_image_bytes": {
      "type": "string",
      "minLength": 32,
      "maxLength": 4000000
    },
    "square_marketing_image_bytes": {
      "type": "string",
      "minLength": 32,
      "maxLength": 4000000
    },
    "logo_bytes": {
      "type": "string",
      "minLength": 32,
      "maxLength": 4000000
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "campaign_name",
    "asset_group_name",
    "final_url",
    "headlines",
    "long_headlines",
    "descriptions",
    "business_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L761-L804).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{const hasAmt=val.amount_micros!==void 0&&val.amount_micros!==null&&val.amount_micros!==\"\"||typeof val.daily_budget_dollars===\"number\";if(!hasAmt){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"amount_micros or daily_budget_dollars is required\",path:[\"amount_micros\"]})}requireConfirmWhenLive(val,ctx)}"
  }
]
```

</details>

<a id="tool-gads_upload_asset-cf80cee8"></a>

## gads_upload_asset

Handler: Google Ads: routes upload asset through gadsUploadAsset; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Upload an IMAGE asset via stamp AssetService (base64 bytes XOR https file_url). Returns asset resource_name for PMax. dry_run default; live confirm_phrase with customer_id. Consent C + Pro + gateway.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1004-L1014) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L1013-L1115) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "asset_type": {
      "type": "string",
      "enum": [
        "IMAGE"
      ]
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "bytes": {
      "type": "string",
      "minLength": 32,
      "maxLength": 4000000
    },
    "file_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L732-L760).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{const hasBytes=Boolean(val.bytes&&val.bytes.trim());const hasUrl=Boolean(val.file_url&&val.file_url.trim());if(hasBytes===hasUrl){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"Provide exactly one of bytes (base64) or file_url (https image)\",path:hasBytes?[\"file_url\"]:[\"bytes\"]})}requireConfirmWhenLive(val,ctx)}"
  }
]
```

</details>

<a id="tool-gads_create_shopping_campaign-645e84ad"></a>

## gads_create_shopping_campaign

Handler: Google Ads: routes create shopping campaign through gadsCreateShoppingCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Shopping create when merchant_center_id is known (discover via gads_list_merchant_center_links). Without merchant_center_id → MERCHANT_CENTER_REQUIRED (zero hop). Budget + SHOPPING campaign. Add listing groups with gads_add_shopping_listing_groups. Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id. Consent C + Pro + gateway.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1015-L1025) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L1250-L1331) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "campaign_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "merchant_center_id": {
      "type": [
        "string",
        "number"
      ]
    },
    "sales_country": {
      "type": "string",
      "minLength": 2,
      "maxLength": 2
    },
    "amount_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "daily_budget_dollars": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "campaign_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L805-L833).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{const hasAmt=val.amount_micros!==void 0&&val.amount_micros!==null&&val.amount_micros!==\"\"||typeof val.daily_budget_dollars===\"number\";if(!hasAmt){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"amount_micros or daily_budget_dollars is required\",path:[\"amount_micros\"]})}requireConfirmWhenLive(val,ctx)}"
  }
]
```

</details>

<a id="tool-gads_list_merchant_center_links-ff80bb75"></a>

## gads_list_merchant_center_links

Handler: Google Ads: routes list merchant center links through gadsListMerchantCenterLinks; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid read. Discover Merchant Center product_link ids for a customer (digits-only merchant_center_id for Shopping create). Consent C + Pro + gateway. Cite returned ids; do not invent.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1026-L1036) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-write.ts#L1332-L1374) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "limit": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "maximum": 200
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "limit": {
      "type": "integer",
      "exclusiveMinimum": 0,
      "maximum": 200
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L834-L877).

</details>

<a id="tool-gads_create_responsive_display_ad-1df10e77"></a>

## gads_create_responsive_display_ad

Handler: Google Ads: routes create responsive display ad through gadsCreateResponsiveDisplayAd; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create a Responsive Display Ad on an existing Display ad group (marketing + square images from gads_upload_asset or file_url/bytes, headlines, long_headline, descriptions, business_name, https final_url). Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id. Consent C + Pro + gateway.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1037-L1047) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L161-L230) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "ad_group_id": {
      "$ref": "#/properties/customer_id"
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 30
      },
      "minItems": 1,
      "maxItems": 5
    },
    "long_headline": {
      "type": "string",
      "minLength": 1,
      "maxLength": 90
    },
    "long_headlines": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 90
      },
      "maxItems": 1
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 90
      },
      "minItems": 1,
      "maxItems": 5
    },
    "business_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 25
    },
    "final_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "marketing_image_asset_resource_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 20
    },
    "square_marketing_image_asset_resource_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 20
    },
    "logo_asset_resource_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 5
    },
    "marketing_image_file_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "square_marketing_image_file_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "logo_file_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "marketing_image_bytes": {
      "type": "string",
      "minLength": 32,
      "maxLength": 4000000
    },
    "square_marketing_image_bytes": {
      "type": "string",
      "minLength": 32,
      "maxLength": 4000000
    },
    "logo_bytes": {
      "type": "string",
      "minLength": 32,
      "maxLength": 4000000
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "required": [
    "headlines",
    "descriptions",
    "business_name",
    "final_url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L878-L901).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_add_shopping_listing_groups-2a5c7387"></a>

## gads_add_shopping_listing_groups

Handler: Google Ads: routes add shopping listing groups through gadsAddShoppingListingGroups; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Add Shopping listing groups (ALL_PRODUCTS UNIT, or BRAND/ITEM_ID subdivision) on an existing shopping campaign/ad group. New shopping ad group is ENABLED under a PAUSED campaign. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1048-L1058) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L231-L298) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_id": {
      "$ref": "#/properties/customer_id"
    },
    "ad_group_id": {
      "$ref": "#/properties/customer_id"
    },
    "ad_group_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "listing_group_type": {
      "type": "string",
      "enum": [
        "ALL_PRODUCTS",
        "BRAND",
        "ITEM_ID"
      ]
    },
    "listing_group_values": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 80
      },
      "maxItems": 20
    },
    "brands": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 80
      },
      "maxItems": 20
    },
    "cpc_bid_micros": {
      "type": [
        "string",
        "number"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L902-L915).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_create_video_campaign-79009397"></a>

## gads_create_video_campaign

Handler: Google Ads: routes create video campaign through gadsCreateVideoCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. VIDEO campaign + VIDEO_RESPONSIVE ad group. Optional youtube_video_id adds a PAUSED video responsive ad. Campaign defaults PAUSED; child ad group ENABLED. Prefer dry_run; live confirm_phrase with customer_id. Intended-use paste is Noel-owned — live smoke blocked until pasted.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1059-L1069) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L299-L326) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "ad_group_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "amount_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "daily_budget_dollars": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "youtube_video_id": {
      "type": "string",
      "minLength": 11,
      "maxLength": 11
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 30
      },
      "maxItems": 5
    },
    "long_headlines": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 90
      },
      "maxItems": 5
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 90
      },
      "maxItems": 5
    },
    "final_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "required": [
    "campaign_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L916-L934).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireConfirmWhenLive(val,ctx);requireAmountWhenCreate(val,ctx)}"
  }
]
```

</details>

<a id="tool-gads_create_demand_gen_campaign-4bcd95b3"></a>

## gads_create_demand_gen_campaign

Handler: Google Ads: routes create demand gen campaign through gadsCreateDemandGenCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. DEMAND_GEN campaign + ad group. Optional DemandGenMultiAssetAd when marketing+square images are supplied. Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1070-L1080) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L327-L355) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "ad_group_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "amount_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "daily_budget_dollars": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 30
      },
      "maxItems": 5
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 90
      },
      "maxItems": 5
    },
    "business_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 25
    },
    "final_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "marketing_image_asset_resource_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 20
    },
    "square_marketing_image_asset_resource_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 20
    },
    "logo_asset_resource_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 5
    },
    "marketing_image_file_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "square_marketing_image_file_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "logo_file_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "marketing_image_bytes": {
      "type": "string",
      "minLength": 32,
      "maxLength": 4000000
    },
    "square_marketing_image_bytes": {
      "type": "string",
      "minLength": 32,
      "maxLength": 4000000
    },
    "logo_bytes": {
      "type": "string",
      "minLength": 32,
      "maxLength": 4000000
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "required": [
    "campaign_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L935-L961).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireConfirmWhenLive(val,ctx);requireAmountWhenCreate(val,ctx)}"
  }
]
```

</details>

<a id="tool-gads_create_app_campaign-8e5288e5"></a>

## gads_create_app_campaign

Handler: Google Ads: routes create app campaign through gadsCreateAppCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. MULTI_CHANNEL APP_CAMPAIGN with app_id + app_store (GOOGLE_APP_STORE|APPLE_APP_STORE). Google generates ads. Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1081-L1091) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L356-L379) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "amount_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "daily_budget_dollars": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "app_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "app_store": {
      "type": "string",
      "enum": [
        "GOOGLE_APP_STORE",
        "APPLE_APP_STORE"
      ]
    },
    "target_cpa_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "required": [
    "campaign_name",
    "app_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L962-L977).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireConfirmWhenLive(val,ctx);requireAmountWhenCreate(val,ctx)}"
  }
]
```

</details>

<a id="tool-gads_create_hotel_campaign-13dfe5a8"></a>

## gads_create_hotel_campaign

Handler: Google Ads: routes create hotel campaign through gadsCreateHotelCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. HOTEL campaign with hotel_center_id + HOTELS_ADS ad group. Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1092-L1102) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L380-L401) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "ad_group_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "amount_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "daily_budget_dollars": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "hotel_center_id": {
      "type": [
        "string",
        "number"
      ]
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "required": [
    "campaign_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L978-L992).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireConfirmWhenLive(val,ctx);requireAmountWhenCreate(val,ctx)}"
  }
]
```

</details>

<a id="tool-gads_create_local_campaign-a1048698"></a>

## gads_create_local_campaign

Handler: Google Ads: routes create local campaign through gadsCreateLocalCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Named tool. Google sunset Local campaigns — returns NOT_IMPLEMENTED (zero hop). Use gads_create_performance_max_campaign. Smart create is not advertised.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1103-L1113) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L402-L420) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "amount_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "daily_budget_dollars": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "required": [
    "campaign_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L993-L1005).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireConfirmWhenLive(val,ctx);requireAmountWhenCreate(val,ctx)}"
  }
]
```

</details>

<a id="tool-gads_add_negative_keywords-0f281eeb"></a>

## gads_add_negative_keywords

Handler: Google Ads: routes add negative keywords through gadsAddNegativeKeywords; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Campaign- or ad-group-level negative keywords (campaign_id XOR ad_group_id). Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1114-L1124) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L421-L452) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_id": {
      "$ref": "#/properties/customer_id"
    },
    "ad_group_id": {
      "$ref": "#/properties/customer_id"
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "match_type": {
            "type": "string",
            "enum": [
              "EXACT",
              "PHRASE",
              "BROAD"
            ]
          }
        },
        "required": [
          "text"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 20
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "required": [
    "keywords"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1006-L1016).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_attach_audience-805b8c71"></a>

## gads_attach_audience

Handler: Google Ads: routes attach audience through gadsAttachAudience; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Attach an audience or user list resource name to a campaign or ad group. Defaults PAUSED. Cite ids from gads_search recipe=audiences. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1125-L1135) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L453-L485) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_id": {
      "$ref": "#/properties/customer_id"
    },
    "ad_group_id": {
      "$ref": "#/properties/customer_id"
    },
    "audience_resource_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "required": [
    "audience_resource_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1017-L1027).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_add_geo_targets-9dd5c474"></a>

## gads_add_geo_targets

Handler: Google Ads: routes add geo targets through gadsAddGeoTargets; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Campaign location criteria from geo_target_constant_ids (gads_search recipe=geo). Optional negative. Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1136-L1146) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L486-L514) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_id": {
      "$ref": "#/properties/customer_id"
    },
    "geo_target_constant_ids": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 20
      },
      "minItems": 1,
      "maxItems": 50
    },
    "negative": {
      "type": "boolean"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "required": [
    "geo_target_constant_ids"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1028-L1038).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_add_languages-519a042c"></a>

## gads_add_languages

Handler: Google Ads: routes add languages through gadsAddLanguages; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Campaign language criteria from language_constant_ids. Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1147-L1157) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L515-L536) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_id": {
      "$ref": "#/properties/customer_id"
    },
    "language_constant_ids": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 20
      },
      "minItems": 1,
      "maxItems": 50
    },
    "language_ids": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 20
      },
      "minItems": 1,
      "maxItems": 50
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1039-L1049).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_add_demographics-a3ea5bcd"></a>

## gads_add_demographics

Handler: Google Ads: routes add demographics through gadsAddDemographics; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Ad-group age/gender/parental/income criteria (closed enums). Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1158-L1168) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L537-L566) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "ad_group_id": {
      "$ref": "#/properties/customer_id"
    },
    "age_ranges": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "AGE_RANGE_18_24",
          "AGE_RANGE_25_34",
          "AGE_RANGE_35_44",
          "AGE_RANGE_45_54",
          "AGE_RANGE_55_64",
          "AGE_RANGE_65_UP",
          "AGE_RANGE_UNDETERMINED"
        ]
      },
      "maxItems": 10
    },
    "genders": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "MALE",
          "FEMALE",
          "UNDETERMINED"
        ]
      },
      "maxItems": 3
    },
    "parental_statuses": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "PARENT",
          "NOT_A_PARENT",
          "UNDETERMINED"
        ]
      },
      "maxItems": 3
    },
    "income_ranges": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "INCOME_RANGE_0_50",
          "INCOME_RANGE_50_60",
          "INCOME_RANGE_60_70",
          "INCOME_RANGE_70_80",
          "INCOME_RANGE_80_90",
          "INCOME_RANGE_90_UP",
          "INCOME_RANGE_UNDETERMINED"
        ]
      },
      "maxItems": 10
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1050-L1088).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_set_ad_schedule-e26b55ee"></a>

## gads_set_ad_schedule

Handler: Google Ads: routes set ad schedule through gadsSetAdSchedule; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Campaign ad-schedule criteria (day_of_week + hours). Defaults PAUSED. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1169-L1179) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L567-L588) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_id": {
      "$ref": "#/properties/customer_id"
    },
    "schedules": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "day_of_week": {
            "type": "string",
            "enum": [
              "MONDAY",
              "TUESDAY",
              "WEDNESDAY",
              "THURSDAY",
              "FRIDAY",
              "SATURDAY",
              "SUNDAY"
            ]
          },
          "start_hour": {
            "type": "integer",
            "minimum": 0,
            "maximum": 23
          },
          "start_minute": {
            "type": "string",
            "enum": [
              "ZERO",
              "FIFTEEN",
              "THIRTY",
              "FORTY_FIVE"
            ]
          },
          "end_hour": {
            "type": "integer",
            "minimum": 0,
            "maximum": 24
          },
          "end_minute": {
            "type": "string",
            "enum": [
              "ZERO",
              "FIFTEEN",
              "THIRTY",
              "FORTY_FIVE"
            ]
          }
        },
        "required": [
          "day_of_week",
          "start_hour",
          "end_hour"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 42
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ]
    }
  },
  "required": [
    "schedules"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1089-L1098).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_set_campaign_bid_strategy-53eb0eb2"></a>

## gads_set_campaign_bid_strategy

Handler: Google Ads: routes set campaign bid strategy through gadsSetCampaignBidStrategy; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Closed-enum campaign bidding (MANUAL_CPC, MAXIMIZE_CONVERSIONS, TARGET_CPA, TARGET_ROAS, …) or attach a portfolio bidding_strategy_resource_name. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1180-L1190) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L589-L621) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_id": {
      "$ref": "#/properties/customer_id"
    },
    "bid_strategy_type": {
      "type": "string",
      "enum": [
        "MANUAL_CPC",
        "MANUAL_CPM",
        "MAXIMIZE_CLICKS",
        "MAXIMIZE_CONVERSIONS",
        "MAXIMIZE_CONVERSION_VALUE",
        "TARGET_CPA",
        "TARGET_ROAS",
        "TARGET_SPEND",
        "TARGET_IMPRESSION_SHARE",
        "TARGET_CPM",
        "PERCENT_CPC"
      ]
    },
    "target_cpa_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "target_roas": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "target_cpm_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "cpc_bid_ceiling_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "location": {
      "type": "string",
      "enum": [
        "ANYWHERE_ON_PAGE",
        "TOP_OF_PAGE",
        "ABSOLUTE_TOP_OF_PAGE"
      ]
    },
    "location_fraction_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "bidding_strategy_resource_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1099-L1128).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_create_shared_budget-11a6904d"></a>

## gads_create_shared_budget

Handler: Google Ads: routes create shared budget through gadsCreateSharedBudget; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create an explicitly-shared campaign budget (spend-capped). Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1191-L1201) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L622-L643) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "campaign_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "amount_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "daily_budget_dollars": {
      "type": "number",
      "exclusiveMinimum": 0
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1129-L1141).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireConfirmWhenLive(val,ctx);requireAmountWhenCreate(val,ctx)}"
  }
]
```

</details>

<a id="tool-gads_create_portfolio_bidding_strategy-b49b4d60"></a>

## gads_create_portfolio_bidding_strategy

Handler: Google Ads: routes create portfolio bidding strategy through gadsCreatePortfolioBiddingStrategy; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create a shared/portfolio BiddingStrategy (closed enum). Attach with gads_set_campaign_bid_strategy. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1202-L1212) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L644-L665) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "bidding_strategy_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "bid_strategy_type": {
      "type": "string",
      "enum": [
        "MANUAL_CPC",
        "MANUAL_CPM",
        "MAXIMIZE_CLICKS",
        "MAXIMIZE_CONVERSIONS",
        "MAXIMIZE_CONVERSION_VALUE",
        "TARGET_CPA",
        "TARGET_ROAS",
        "TARGET_SPEND",
        "TARGET_IMPRESSION_SHARE",
        "TARGET_CPM",
        "PERCENT_CPC"
      ]
    },
    "target_cpa_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "target_roas": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "target_cpm_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "cpc_bid_ceiling_micros": {
      "type": [
        "string",
        "number"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1142-L1169).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_create_conversion_action-fd453496"></a>

## gads_create_conversion_action

Handler: Google Ads: routes create conversion action through gadsCreateConversionAction; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create a conversion action (WEBPAGE/UPLOAD_CLICKS/… + category). Tracking, not spend. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1213-L1223) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L666-L712) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "conversion_action_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "conversion_action_type": {
      "type": "string",
      "enum": [
        "WEBPAGE",
        "UPLOAD_CLICKS",
        "UPLOAD_CALLS",
        "CLICK_TO_CALL",
        "WEBSITE_CALL",
        "STORE_SALES"
      ]
    },
    "conversion_category": {
      "type": "string",
      "enum": [
        "DEFAULT",
        "PAGE_VIEW",
        "PURCHASE",
        "SIGNUP",
        "LEAD",
        "DOWNLOAD",
        "ADD_TO_CART",
        "BEGIN_CHECKOUT",
        "SUBSCRIBE_PAID",
        "CONTACT",
        "SUBMIT_LEAD_FORM",
        "BOOK_APPOINTMENT",
        "REQUEST_QUOTE",
        "PHONE_CALL_LEAD"
      ]
    },
    "default_value": {
      "type": "number",
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1170-L1200).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_apply_recommendation-4d32dc23"></a>

## gads_apply_recommendation

Handler: Google Ads: routes apply recommendation through gadsApplyRecommendation; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Apply one recommendation from gads_search recipe=recommendations (resource name or id). Confirm-gated. Prefer dry_run; live confirm_phrase with customer_id and that RN. ENABLED is not a side effect. No apply-all.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1224-L1234) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L713-L761) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "recommendation_resource_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "recommendation_id": {
      "$ref": "#/properties/customer_id"
    },
    "apply_all": {
      "type": "boolean"
    },
    "status": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1201-L1211).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_apply_recommendations-545f07d1"></a>

## gads_apply_recommendations

Handler: Google Ads: routes apply recommendations through gadsApplyRecommendations; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Apply an explicit recommendation RN list (not apply-all). Live confirm_phrase must include customer_id and each RN. ENABLED is not a side effect. Prefer dry_run.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1235-L1245) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L762-L809) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "recommendation_resource_names": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 256
      },
      "minItems": 1,
      "maxItems": 20
    },
    "recommendation_resource_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "recommendation_id": {
      "$ref": "#/properties/customer_id"
    },
    "apply_all": {
      "type": "boolean"
    },
    "status": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1212-L1223).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_link_merchant_center-5c61c5fd"></a>

## gads_link_merchant_center

Handler: Google Ads: routes link merchant center through gadsLinkMerchantCenter; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. ProductLink create for merchant_center_id (not MCC link; not Content API). Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1246-L1256) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L810-L839) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "merchant_center_id": {
      "type": [
        "string",
        "number"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1224-L1231).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_unlink_merchant_center-39722398"></a>

## gads_unlink_merchant_center

Handler: Google Ads: routes unlink merchant center through gadsUnlinkMerchantCenter; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. ProductLink remove by product_link_resource_name or product_link_id. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1257-L1267) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L840-L858) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "product_link_resource_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "product_link_id": {
      "$ref": "#/properties/customer_id"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1232-L1240).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-gads_create_experiment-540c1755"></a>

## gads_create_experiment

Handler: Google Ads: routes create experiment through gadsCreateExperiment; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create an experiment in SETUP (not live) with control arm on an existing campaign and in-design treatment. Prefer dry_run; live confirm_phrase with customer_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1268-L1278) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads-wave2.ts#L859-L885) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "customer_id": {
      "type": "string"
    },
    "login_customer_id": {
      "$ref": "#/properties/customer_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "campaign_id": {
      "$ref": "#/properties/customer_id"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "experiment_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "experiment_type": {
      "type": "string",
      "enum": [
        "SEARCH_CUSTOM",
        "DISPLAY_CUSTOM",
        "HOTEL_ADS",
        "SMART_MATCHING",
        "YOUTUBE_CUSTOM"
      ]
    },
    "traffic_split_percent": {
      "type": "integer",
      "minimum": 1,
      "maximum": 99
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1241-L1303).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-license_status-744d1648"></a>

## license_status

Handler: Reports license, plugin update and gateway health status.

```text
Local license JWT features and expiry. No key material. gateway.reachable probes GET /v1/health when DGTL_GATEWAY_URL is set (false if unset or probe fails).
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1279-L1288) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/ads/gads.ts#L142-L168) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L8-L10).

</details>

<a id="tool-support_packet-ceacf6d3"></a>

## support_packet

Handler: Builds a sanitized support diagnostics packet.

```text
Local support intake: plugin version, host, plugin/Worker flag matrix (booleans), gateway configured/reachable, license feature names, consent-store presence. Optional last_tool / error_code / resource_id. Never tokens or JWT. No Google call.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1289-L1299) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/support/packet.ts#L153-L157) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "last_tool": {
      "type": "string",
      "maxLength": 80
    },
    "error_code": {
      "type": "string",
      "maxLength": 64
    },
    "resource_id": {
      "type": "string",
      "maxLength": 256
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "last_tool": {
      "type": "string",
      "maxLength": 80
    },
    "error_code": {
      "type": "string",
      "maxLength": 64
    },
    "resource_id": {
      "type": "string",
      "maxLength": 256
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L11-L18).

</details>

<a id="tool-feedback_prepare-e9b65696"></a>

## feedback_prepare

Handler: Prepares a sanitized feedback payload for review.

```text
Build a reviewable feedback draft for support@dgtlsunrise.com from support_packet fields plus the user's message. Requires reply_to. Strips token-shaped strings. Does not send. Echo draft_id to feedback_send after the user approves.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1300-L1310) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/support/feedback.ts#L175-L244) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "minLength": 1
    },
    "reply_to": {
      "type": "string",
      "minLength": 3,
      "maxLength": 254
    },
    "kind": {
      "type": "string",
      "enum": [
        "bug",
        "feature",
        "other"
      ]
    },
    "last_tool": {
      "type": "string",
      "maxLength": 80
    },
    "error_code": {
      "type": "string",
      "maxLength": 64
    },
    "resource_id": {
      "type": "string",
      "maxLength": 256
    }
  },
  "required": [
    "message",
    "reply_to"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "message": {
      "type": "string",
      "minLength": 1
    },
    "reply_to": {
      "type": "string",
      "minLength": 3,
      "maxLength": 254
    },
    "kind": {
      "type": "string",
      "enum": [
        "bug",
        "feature",
        "other"
      ]
    },
    "last_tool": {
      "type": "string",
      "maxLength": 80
    },
    "error_code": {
      "type": "string",
      "maxLength": 64
    },
    "resource_id": {
      "type": "string",
      "maxLength": 256
    }
  },
  "required": [
    "message",
    "reply_to"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L19-L29).

</details>

<a id="tool-feedback_send-334cb1cc"></a>

## feedback_send

Handler: Sends the prepared feedback to the configured support destination with its confirmation checks.

```text
POST an approved draft to the DGTL feedback endpoint. Requires confirm: true and the draft_id (or the full draft fields). Destination is support@dgtlsunrise.com; Reply-To is the address the user provided. Never emails tokens. Does not send without explicit approval.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1311-L1321) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/support/feedback.ts#L245-L340) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "confirm": {
      "type": "boolean",
      "const": true
    },
    "draft_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64
    },
    "message": {
      "type": "string",
      "minLength": 1
    },
    "reply_to": {
      "type": "string",
      "minLength": 3,
      "maxLength": 254
    },
    "kind": {
      "type": "string",
      "enum": [
        "bug",
        "feature",
        "other"
      ]
    },
    "last_tool": {
      "type": "string",
      "maxLength": 80
    },
    "error_code": {
      "type": "string",
      "maxLength": 64
    },
    "resource_id": {
      "type": "string",
      "maxLength": 256
    }
  },
  "required": [
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "confirm": {
      "type": "boolean",
      "const": true
    },
    "draft_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64
    },
    "message": {
      "type": "string",
      "minLength": 1
    },
    "reply_to": {
      "type": "string",
      "minLength": 3,
      "maxLength": 254
    },
    "kind": {
      "type": "string",
      "enum": [
        "bug",
        "feature",
        "other"
      ]
    },
    "last_tool": {
      "type": "string",
      "maxLength": 80
    },
    "error_code": {
      "type": "string",
      "maxLength": 64
    },
    "resource_id": {
      "type": "string",
      "maxLength": 256
    }
  },
  "required": [
    "confirm"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L44-L57).

</details>

<a id="tool-conversion_fabric_status-37c748cb"></a>

## conversion_fabric_status

Handler: Probes gateway health and reports conversion sink, gate and ingest configuration without keys.

```text
Wave 20. Local + optional GET /v1/health: sink/flag health for Ads Data Manager IngestEvents, Meta CAPI, TikTok Events, and sGTM apply ingest. Never keys, JWT, or user_data. Polar sgtm is reserved default-off (not minted). Ads upload stays on stamp FundedUploadSink.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1322-L1332) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/conversion/fabric.ts#L129-L222) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L30-L32).

</details>

<a id="tool-sgtm_ingest_test-16c5e391"></a>

## sgtm_ingest_test

Handler: Tests a closed apply event via gateway /v1/sgtm/ingest using a host environment apply key; defaults to dry-run and requires plugin/worker opt-in for live POST.

```text
Wave 20. Thin HTTP POST {gateway}/v1/sgtm/ingest on the apply path only (X-DGTL-Apply-Key). Closed event_name=apply. dry_run default true; live needs confirm:true. Plugin flag default off. Never funded ingest keys, never web GTM variables, never user_data. Not a hop-catalog MCP hop.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1333-L1343) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/conversion/fabric.ts#L223-L389) · Schema: tools/list.

Exposure: Always listed; DGTL_SGTM_INGEST_TEST_ENABLED defaults false; live requires worker SGTM_INGEST_ENABLED, confirm=true and host apply key.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "event_name": {
      "type": "string",
      "const": "apply"
    },
    "event_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "application_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "client_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "dry_run": {
      "type": "boolean"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "event_name",
    "event_id",
    "application_id",
    "client_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "event_name": {
      "type": "string",
      "const": "apply"
    },
    "event_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "application_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "client_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 256
    },
    "dry_run": {
      "type": "boolean"
    },
    "confirm": {
      "type": "boolean"
    }
  },
  "required": [
    "event_name",
    "event_id",
    "application_id",
    "client_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L33-L43).

</details>

<a id="tool-meta_list_ad_accounts-2d800f0a"></a>

## meta_list_ad_accounts

Handler: Meta Ads: routes list ad accounts through metaDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. Use FIRST to discover ad_account_id values. Cite returned ids; do not invent. Meta app secret is never in this plugin. LICENSE_REQUIRED without a license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1345-L1355) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta.ts#L245-L297) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L8-L10).

</details>

<a id="tool-meta_list_pages-b61d2ea3"></a>

## meta_list_pages

Handler: Meta Ads: routes list pages through metaListPages; uses the licensed DGTL gateway and product-specific credentials.

```text
List the Facebook Pages you manage (id, name, and follower count). Read-only.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1356-L1365) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta.ts#L298-L373) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100
    },
    "after": {
      "type": "string",
      "pattern": "^[A-Za-z0-9_\\-=]{1,512}$"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100
    },
    "after": {
      "type": "string",
      "pattern": "^[A-Za-z0-9_\\-=]{1,512}$"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L265-L273).

</details>

<a id="tool-meta_describe_insights_schema-5bf1c397"></a>

## meta_describe_insights_schema

Handler: Meta Ads: routes describe insights schema through metaDescribeInsightsSchema; implements the registered product operation; it does not operate Google Tag Manager.

```text
Paid. Pro $19/mo. Local insights catalog (levels, date_presets, breakdowns, fields). Call before meta_insights — do not invent Graph fields. Zero Graph/gateway HTTP. LICENSE_REQUIRED without a license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1366-L1376) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta.ts#L189-L244) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L274-L274).

</details>

<a id="tool-meta_list_campaigns-3c69813f"></a>

## meta_list_campaigns

Handler: Meta Ads: routes list campaigns through metaDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. List campaigns for an ad_account_id from meta_list_ad_accounts. Empty ≠ auth failure. LICENSE_REQUIRED without a DGTL license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1377-L1387) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta.ts#L245-L297) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L263-L264).

</details>

<a id="tool-meta_list_adsets-f68afd39"></a>

## meta_list_adsets

Handler: Meta Ads: routes list adsets through metaDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. List ad sets for an ad_account_id. LICENSE_REQUIRED without a DGTL license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1388-L1398) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta.ts#L245-L297) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L263-L264).

</details>

<a id="tool-meta_list_ads-2a1edf9c"></a>

## meta_list_ads

Handler: Meta Ads: routes list ads through metaDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. List ads for an ad_account_id. LICENSE_REQUIRED without a DGTL license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1399-L1409) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta.ts#L245-L297) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L263-L264).

</details>

<a id="tool-meta_insights-ac0832d5"></a>

## meta_insights

Handler: Meta Ads: routes insights through metaDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. Read insights: level (account/campaign/adset/ad), date_preset or date_start/date_stop, optional breakdowns (age/gender/publisher_platform/…) and fields. Call meta_describe_insights_schema first. Cite data.cited. Empty ≠ auth. ads_read only — no mutate. LICENSE_REQUIRED without a license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1410-L1420) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta.ts#L245-L297) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    },
    "level": {
      "type": "string",
      "enum": [
        "account",
        "campaign",
        "adset",
        "ad"
      ]
    },
    "object_id": {
      "type": "string",
      "minLength": 1
    },
    "date_start": {
      "type": "string",
      "minLength": 1
    },
    "date_stop": {
      "type": "string",
      "minLength": 1
    },
    "date_preset": {
      "type": "string",
      "enum": [
        "today",
        "yesterday",
        "last_7d",
        "last_14d",
        "last_28d",
        "last_30d",
        "last_90d",
        "this_month",
        "last_month",
        "lifetime",
        "maximum"
      ]
    },
    "breakdowns": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 8
    },
    "fields": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 40
    },
    "time_increment": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "integer",
          "exclusiveMinimum": 0
        }
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    },
    "level": {
      "type": "string",
      "enum": [
        "account",
        "campaign",
        "adset",
        "ad"
      ]
    },
    "object_id": {
      "type": "string",
      "minLength": 1
    },
    "date_start": {
      "type": "string",
      "minLength": 1
    },
    "date_stop": {
      "type": "string",
      "minLength": 1
    },
    "date_preset": {
      "type": "string",
      "enum": [
        "today",
        "yesterday",
        "last_7d",
        "last_14d",
        "last_28d",
        "last_30d",
        "last_90d",
        "this_month",
        "last_month",
        "lifetime",
        "maximum"
      ]
    },
    "breakdowns": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 8
    },
    "fields": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 40
    },
    "time_increment": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "integer",
          "exclusiveMinimum": 0
        }
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L275-L307).

</details>

<a id="tool-meta_get_creative-2ca52f68"></a>

## meta_get_creative

Handler: Meta Ads: routes get creative through metaDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. Creative metadata and image URLs, not bytes. LICENSE_REQUIRED without a license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1421-L1431) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta.ts#L245-L297) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "creative_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "creative_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L308-L308).

</details>

<a id="tool-meta_update_campaign-0d5ed993"></a>

## meta_update_campaign

Handler: Meta Ads: routes update campaign through metaUpdateCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Update Meta campaign status (ACTIVE/PAUSED) and/or name. Defaults on; opt out with DGTL_META_MUTATE_ENABLED=false (META_MUTATE_NOT_ENABLED). Worker META_MUTATE_ENABLED still required for live hop. Prefer dry_run; live needs confirm_phrase containing act_{ad_account_id} AND campaign_id after a user message this turn. Closed fields only — no budget/create/creative. Requires ads_management when scopes detectable.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1432-L1442) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-write.ts#L477-L483) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    },
    "campaign_id": {
      "$ref": "#/properties/ad_account_id"
    },
    "status": {
      "type": "string",
      "enum": [
        "ACTIVE",
        "PAUSED"
      ]
    },
    "name": {
      "$ref": "#/properties/ad_account_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1304-L1318).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireMetaUpdateFieldsCampaign(val,ctx){requireConfirmWhenLive(val,ctx);if(!val.status&&!(val.name&&String(val.name).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"Provide at least one of: status, name\",path:[\"status\"]})}}"
  }
]
```

</details>

<a id="tool-meta_update_adset-4ba8fb29"></a>

## meta_update_adset

Handler: Meta Ads: routes update adset through metaUpdateAdset; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Update Meta ad set status (ACTIVE/PAUSED), optional name, and/or daily_budget XOR lifetime_budget. Budgets are integer **cents** (Meta account currency smallest unit — not Google Ads micros). Spend-cap gate $100k/day equivalent. Defaults on; opt out with DGTL_META_MUTATE_ENABLED=false (META_MUTATE_NOT_ENABLED). Worker META_MUTATE_ENABLED still required for live hop. Prefer dry_run; live needs confirm_phrase containing act_{ad_account_id} AND adset_id. Do not invent objective/creative/targeting.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1443-L1453) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-write.ts#L484-L490) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    },
    "adset_id": {
      "$ref": "#/properties/ad_account_id"
    },
    "status": {
      "type": "string",
      "enum": [
        "ACTIVE",
        "PAUSED"
      ]
    },
    "name": {
      "$ref": "#/properties/ad_account_id"
    },
    "daily_budget": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "integer",
          "exclusiveMinimum": 0
        }
      ]
    },
    "lifetime_budget": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "integer",
          "exclusiveMinimum": 0
        }
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1319-L1337).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireMetaUpdateFieldsAdset(val,ctx){requireConfirmWhenLive(val,ctx);const hasStatus=Boolean(val.status);const hasName=Boolean(val.name&&String(val.name).trim());const hasDaily=val.daily_budget!==void 0&&val.daily_budget!==null&&val.daily_budget!==\"\";const hasLife=val.lifetime_budget!==void 0&&val.lifetime_budget!==null&&val.lifetime_budget!==\"\";if(hasDaily&&hasLife){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"Provide daily_budget OR lifetime_budget (not both). Units: integer cents.\",path:[\"daily_budget\"]})}if(!hasStatus&&!hasName&&!hasDaily&&!hasLife){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"Provide at least one of: status, name, daily_budget, lifetime_budget\",path:[\"status\"]})}}"
  }
]
```

</details>

<a id="tool-meta_update_ad-120d19e7"></a>

## meta_update_ad

Handler: Meta Ads: routes update ad through metaUpdateAd; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Update Meta ad status (ACTIVE/PAUSED) and/or name. Defaults on; opt out with DGTL_META_MUTATE_ENABLED=false (META_MUTATE_NOT_ENABLED). Worker META_MUTATE_ENABLED still required for live hop. Prefer dry_run; live needs confirm_phrase containing act_{ad_account_id} AND ad_id. No creative fields.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1454-L1464) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-write.ts#L491-L875) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    },
    "ad_id": {
      "$ref": "#/properties/ad_account_id"
    },
    "status": {
      "type": "string",
      "enum": [
        "ACTIVE",
        "PAUSED"
      ]
    },
    "name": {
      "$ref": "#/properties/ad_account_id"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1338-L1411).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireMetaUpdateFieldsCampaign(val,ctx){requireConfirmWhenLive(val,ctx);if(!val.status&&!(val.name&&String(val.name).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"Provide at least one of: status, name\",path:[\"status\"]})}}"
  }
]
```

</details>

<a id="tool-meta_create_campaign-95197679"></a>

## meta_create_campaign

Handler: Meta Ads: routes create campaign through metaCreateCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create a Meta campaign (closed Outcome objective + special_ad_categories). Defaults PAUSED. dry_run default; live needs confirm_phrase containing act_{ad_account_id}. Spend is not set at campaign level. Requires ads_management when scopes detectable (META_SCOPE_MISSING otherwise). Opt out with DGTL_META_MUTATE_ENABLED=false.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1465-L1475) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-write.ts#L876-L889) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "objective": {
      "type": "string",
      "enum": [
        "OUTCOME_AWARENESS",
        "OUTCOME_ENGAGEMENT",
        "OUTCOME_LEADS",
        "OUTCOME_SALES",
        "OUTCOME_TRAFFIC",
        "OUTCOME_APP_PROMOTION"
      ]
    },
    "status": {
      "type": "string",
      "enum": [
        "ACTIVE",
        "PAUSED"
      ]
    },
    "special_ad_categories": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "NONE",
              "EMPLOYMENT",
              "HOUSING",
              "CREDIT",
              "ISSUES_ELECTIONS_POLITICS"
            ]
          }
        },
        {
          "type": "string"
        }
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "name",
    "objective"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1412-L1504).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-meta_create_adset-fd4c74da"></a>

## meta_create_adset

Handler: Meta Ads: routes create adset through metaCreateAdset; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create a Meta ad set on an existing campaign. daily_budget XOR lifetime_budget in integer cents (not micros). Named targeting packs (countries required; age/genders/locales/interests/behaviors/custom audiences/placements) — server builds targeting JSON; never send a targeting bag. Optional pixel_id/catalog_id → promoted_object. Spend-cap $100k. Defaults PAUSED. dry_run default; live needs confirm_phrase containing act_{ad_account_id} AND campaign_id. ads_management required when detectable.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1476-L1486) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-write.ts#L890-L903) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "campaign_id": {
      "type": "string",
      "minLength": 1
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "status": {
      "type": "string",
      "enum": [
        "ACTIVE",
        "PAUSED"
      ]
    },
    "daily_budget": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "integer",
          "exclusiveMinimum": 0
        }
      ]
    },
    "lifetime_budget": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "integer",
          "exclusiveMinimum": 0
        }
      ]
    },
    "billing_event": {
      "type": "string",
      "enum": [
        "IMPRESSIONS",
        "LINK_CLICKS"
      ]
    },
    "optimization_goal": {
      "type": "string",
      "enum": [
        "LINK_CLICKS",
        "LANDING_PAGE_VIEWS",
        "IMPRESSIONS",
        "REACH",
        "OFFSITE_CONVERSIONS",
        "LEAD_GENERATION",
        "VALUE",
        "THRUPLAY"
      ]
    },
    "bid_strategy": {
      "type": "string",
      "enum": [
        "LOWEST_COST_WITHOUT_CAP"
      ]
    },
    "countries": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "minLength": 2,
            "maxLength": 2
          }
        },
        {
          "type": "string",
          "minLength": 2
        }
      ]
    },
    "age_min": {
      "anyOf": [
        {
          "type": "integer",
          "minimum": 13,
          "maximum": 65
        },
        {
          "type": "string"
        }
      ]
    },
    "age_max": {
      "anyOf": [
        {
          "type": "integer",
          "minimum": 13,
          "maximum": 65
        },
        {
          "type": "string"
        }
      ]
    },
    "genders": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "MALE",
              "FEMALE"
            ]
          }
        },
        {
          "type": "string",
          "enum": [
            "MALE",
            "FEMALE"
          ]
        },
        {
          "type": "string"
        }
      ]
    },
    "locales": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30
          },
          "maxItems": 50
        },
        {
          "type": "string",
          "minLength": 1
        }
      ]
    },
    "interest_ids": {
      "$ref": "#/properties/locales"
    },
    "behavior_ids": {
      "$ref": "#/properties/locales"
    },
    "custom_audience_ids": {
      "$ref": "#/properties/locales"
    },
    "excluded_custom_audience_ids": {
      "$ref": "#/properties/locales"
    },
    "publisher_platforms": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "facebook",
              "instagram",
              "audience_network",
              "messenger"
            ]
          }
        },
        {
          "type": "string"
        }
      ]
    },
    "facebook_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "feed",
              "right_hand_column",
              "marketplace",
              "video_feeds",
              "story",
              "search",
              "instream_video",
              "facebook_reels",
              "facebook_reels_overlay",
              "profile_feed"
            ]
          }
        },
        {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string",
                "minLength": 1
              },
              "maxItems": 50
            },
            {
              "type": "string",
              "minLength": 1
            }
          ]
        }
      ]
    },
    "instagram_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "stream",
              "story",
              "explore",
              "explore_home",
              "reels",
              "profile_feed",
              "ig_search",
              "profile_reels"
            ]
          }
        },
        {
          "$ref": "#/properties/facebook_positions/anyOf/1"
        }
      ]
    },
    "audience_network_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "classic",
              "rewarded_video",
              "instream_video"
            ]
          }
        },
        {
          "$ref": "#/properties/facebook_positions/anyOf/1"
        }
      ]
    },
    "messenger_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "messenger_home",
              "sponsored_messages",
              "story"
            ]
          }
        },
        {
          "$ref": "#/properties/facebook_positions/anyOf/1"
        }
      ]
    },
    "device_platforms": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "mobile",
              "desktop"
            ]
          }
        },
        {
          "type": "string"
        }
      ]
    },
    "pixel_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 30
    },
    "custom_event_type": {
      "type": "string",
      "enum": [
        "PURCHASE",
        "LEAD",
        "COMPLETE_REGISTRATION",
        "ADD_TO_CART",
        "VIEW_CONTENT",
        "INITIATED_CHECKOUT",
        "SEARCH",
        "ADD_PAYMENT_INFO",
        "ADD_TO_WISHLIST",
        "CONTACT",
        "CUSTOMIZE_PRODUCT",
        "DONATE",
        "FIND_LOCATION",
        "SCHEDULE",
        "START_TRIAL",
        "SUBMIT_APPLICATION",
        "SUBSCRIBE",
        "OTHER"
      ]
    },
    "catalog_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 30
    },
    "product_set_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 30
    },
    "end_time": {
      "type": "string",
      "minLength": 10
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "campaign_id",
    "name",
    "countries"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1505-L1525).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireMetaCreateAdsetBudget(val,ctx){requireConfirmWhenLive(val,ctx);const hasDaily=val.daily_budget!==void 0&&val.daily_budget!==null&&val.daily_budget!==\"\";const hasLife=val.lifetime_budget!==void 0&&val.lifetime_budget!==null&&val.lifetime_budget!==\"\";if(hasDaily===hasLife){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"Provide daily_budget OR lifetime_budget (not both). Units: integer cents.\",path:[\"daily_budget\"]})}if(hasLife&&!(val.end_time&&String(val.end_time).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"end_time is required when using lifetime_budget\",path:[\"end_time\"]})}}"
  }
]
```

</details>

<a id="tool-meta_create_ad-22d337a0"></a>

## meta_create_ad

Handler: Meta Ads: routes create ad through metaCreateAd; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create a Meta ad on an existing ad set using an existing creative_id (from meta_create_ad_creative / upload). Defaults PAUSED. dry_run default; live needs confirm_phrase containing act_{ad_account_id} AND adset_id AND creative_id. ads_management required when detectable.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1487-L1497) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-write.ts#L904-L1003) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "adset_id": {
      "type": "string",
      "minLength": 1
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "creative_id": {
      "type": "string",
      "minLength": 1
    },
    "status": {
      "type": "string",
      "enum": [
        "ACTIVE",
        "PAUSED"
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "adset_id",
    "name",
    "creative_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1583-L1612).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-meta_upload_ad_image-d206cc5b"></a>

## meta_upload_ad_image

Handler: Meta Ads: routes upload ad image through metaUploadAdImage; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Upload ad image bytes (base64) → image_hash for meta_create_ad_creative. dry_run default; live needs confirm_phrase containing act_{ad_account_id}. Closed hop — no open Graph proxy. ads_management required when detectable.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1498-L1508) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-write.ts#L1004-L1070) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "bytes": {
      "type": "string",
      "minLength": 32,
      "maxLength": 4000000
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "bytes"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1613-L1624).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-meta_upload_ad_video-11cbf34d"></a>

## meta_upload_ad_video

Handler: Meta Ads: routes upload ad video through metaUploadAdVideo; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Optional video upload via https file_url (media source, not a hop proxy) → video_id. dry_run default; live needs confirm_phrase containing act_{ad_account_id}. ads_management required when detectable.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1509-L1519) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-write.ts#L1071-L1142) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "file_url": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "title": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "file_url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1625-L1637).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-meta_create_ad_creative-b897afae"></a>

## meta_create_ad_creative

Handler: Meta Ads: routes create ad creative through metaCreateAdCreative; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create AdCreative from image_hash XOR video_id + page_id + https link; returns creative_id for meta_create_ad. dry_run default; live needs confirm_phrase containing act_{ad_account_id} AND page_id. Closed object_story_spec built server-side. ads_management required when detectable.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1520-L1530) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-write.ts#L1143-L1255) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "page_id": {
      "type": "string",
      "minLength": 1
    },
    "image_hash": {
      "type": "string",
      "minLength": 8,
      "maxLength": 128
    },
    "video_id": {
      "type": "string",
      "minLength": 1
    },
    "link": {
      "type": "string",
      "format": "uri",
      "maxLength": 2048
    },
    "message": {
      "type": "string",
      "maxLength": 2000
    },
    "title": {
      "type": "string",
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 500
    },
    "call_to_action_type": {
      "type": "string",
      "enum": [
        "LEARN_MORE",
        "SHOP_NOW",
        "SIGN_UP",
        "CONTACT_US",
        "DOWNLOAD",
        "BOOK_TRAVEL",
        "GET_OFFER",
        "SUBSCRIBE",
        "APPLY_NOW",
        "GET_QUOTE",
        "BUY_NOW",
        "NO_BUTTON"
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "name",
    "page_id",
    "link"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1638-L1782).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireConfirmWhenLive(val,ctx);const hasImage=Boolean(val.image_hash&&String(val.image_hash).trim());const hasVideo=Boolean(val.video_id&&String(val.video_id).trim());if(hasImage===hasVideo){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"Provide image_hash XOR video_id\",path:[\"image_hash\"]})}}"
  }
]
```

</details>

<a id="tool-meta_list_pixels-0351ba0f"></a>

## meta_list_pixels

Handler: Meta Ads: routes list pixels through metaListPixels; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. List Ads pixels for an ad_account_id (id, name, last_fired_time). Cite returned pixel_id; do not invent. ads_read. LICENSE_REQUIRED without a license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1531-L1541) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave3.ts#L138-L141) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 500
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 500
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L316-L321).

</details>

<a id="tool-meta_get_pixel-7f6bb2bb"></a>

## meta_get_pixel

Handler: Meta Ads: routes get pixel through metaGetPixel; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. Pixel metadata. CAPI event upload is meta_send_capi_events (separate META_CAPI_ENABLED dual-gate). Cite pixel_id from meta_list_pixels.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1542-L1552) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave3.ts#L142-L145) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "pixel_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "pixel_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L309-L309).

</details>

<a id="tool-meta_list_catalogs-a782acfb"></a>

## meta_list_catalogs

Handler: Meta Ads: routes list catalogs through metaListCatalogs; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. List owned product catalogs for an ad_account_id. Writes use meta_create_catalog / meta_catalog_items_batch. LICENSE_REQUIRED without a license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1553-L1563) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave3.ts#L146-L149) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 500
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 500
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L316-L321).

</details>

<a id="tool-meta_list_catalog_products-da5d4000"></a>

## meta_list_catalog_products

Handler: Meta Ads: routes list catalog products through metaListCatalogProducts; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. List products in a catalog_id from meta_list_catalogs. Read only. LICENSE_REQUIRED without a license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1564-L1574) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave3.ts#L150-L156) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "catalog_id": {
      "type": "string"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 500
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "catalog_id": {
      "type": "string"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 500
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L310-L315).

</details>

<a id="tool-meta_list_custom_audiences-f587da4a"></a>

## meta_list_custom_audiences

Handler: Meta Ads: routes list custom audiences through metaListCustomAudiences; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. List custom audiences for an ad_account_id. Use returned ids with meta_attach_audience / lookalike origin. LICENSE_REQUIRED without a license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1575-L1585) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave3.ts#L157-L163) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 500
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 500
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L316-L321).

</details>

<a id="tool-meta_update_adset_targeting-0f32774d"></a>

## meta_update_adset_targeting

Handler: Meta Ads: routes update adset targeting through metaUpdateAdsetTargeting; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Replace ad set targeting from named packs (countries required; age/genders/locales/interests/behaviors/custom audiences/placements). Server builds targeting JSON — do not send a targeting bag. Optional pixel_id/catalog_id promoted_object. dry_run default; live needs confirm_phrase containing act_{ad_account_id} AND adset_id. ads_management when detectable.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1586-L1596) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave3.ts#L164-L209) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "adset_id": {
      "type": "string",
      "minLength": 1
    },
    "countries": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "minLength": 2,
            "maxLength": 2
          }
        },
        {
          "type": "string",
          "minLength": 2
        }
      ]
    },
    "age_min": {
      "anyOf": [
        {
          "type": "integer",
          "minimum": 13,
          "maximum": 65
        },
        {
          "type": "string"
        }
      ]
    },
    "age_max": {
      "anyOf": [
        {
          "type": "integer",
          "minimum": 13,
          "maximum": 65
        },
        {
          "type": "string"
        }
      ]
    },
    "genders": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "MALE",
              "FEMALE"
            ]
          }
        },
        {
          "type": "string",
          "enum": [
            "MALE",
            "FEMALE"
          ]
        },
        {
          "type": "string"
        }
      ]
    },
    "locales": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30
          },
          "maxItems": 50
        },
        {
          "type": "string",
          "minLength": 1
        }
      ]
    },
    "interest_ids": {
      "$ref": "#/properties/locales"
    },
    "behavior_ids": {
      "$ref": "#/properties/locales"
    },
    "custom_audience_ids": {
      "$ref": "#/properties/locales"
    },
    "excluded_custom_audience_ids": {
      "$ref": "#/properties/locales"
    },
    "publisher_platforms": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "facebook",
              "instagram",
              "audience_network",
              "messenger"
            ]
          }
        },
        {
          "type": "string"
        }
      ]
    },
    "facebook_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "feed",
              "right_hand_column",
              "marketplace",
              "video_feeds",
              "story",
              "search",
              "instream_video",
              "facebook_reels",
              "facebook_reels_overlay",
              "profile_feed"
            ]
          }
        },
        {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string",
                "minLength": 1
              },
              "maxItems": 50
            },
            {
              "type": "string",
              "minLength": 1
            }
          ]
        }
      ]
    },
    "instagram_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "stream",
              "story",
              "explore",
              "explore_home",
              "reels",
              "profile_feed",
              "ig_search",
              "profile_reels"
            ]
          }
        },
        {
          "$ref": "#/properties/facebook_positions/anyOf/1"
        }
      ]
    },
    "audience_network_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "classic",
              "rewarded_video",
              "instream_video"
            ]
          }
        },
        {
          "$ref": "#/properties/facebook_positions/anyOf/1"
        }
      ]
    },
    "messenger_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "messenger_home",
              "sponsored_messages",
              "story"
            ]
          }
        },
        {
          "$ref": "#/properties/facebook_positions/anyOf/1"
        }
      ]
    },
    "device_platforms": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "mobile",
              "desktop"
            ]
          }
        },
        {
          "type": "string"
        }
      ]
    },
    "pixel_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 30
    },
    "custom_event_type": {
      "type": "string",
      "enum": [
        "PURCHASE",
        "LEAD",
        "COMPLETE_REGISTRATION",
        "ADD_TO_CART",
        "VIEW_CONTENT",
        "INITIATED_CHECKOUT",
        "SEARCH",
        "ADD_PAYMENT_INFO",
        "ADD_TO_WISHLIST",
        "CONTACT",
        "CUSTOMIZE_PRODUCT",
        "DONATE",
        "FIND_LOCATION",
        "SCHEDULE",
        "START_TRIAL",
        "SUBMIT_APPLICATION",
        "SUBSCRIBE",
        "OTHER"
      ]
    },
    "catalog_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 30
    },
    "product_set_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 30
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "adset_id",
    "countries"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1526-L1538).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-meta_create_custom_audience-0e02bf15"></a>

## meta_create_custom_audience

Handler: Meta Ads: routes create custom audience through metaCreateCustomAudience; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Website custom audience from pixel_id (retention_days, optional url_contains). No hashed PII / Customer Match. dry_run default; live needs confirm_phrase containing act_{ad_account_id} AND pixel_id. ads_management when detectable.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1597-L1607) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave3.ts#L258-L312) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "pixel_id": {
      "type": "string",
      "minLength": 1
    },
    "retention_days": {
      "anyOf": [
        {
          "type": "integer",
          "minimum": 1,
          "maximum": 180
        },
        {
          "type": "string"
        }
      ]
    },
    "url_contains": {
      "type": "string",
      "minLength": 1,
      "maxLength": 200
    },
    "prefill": {
      "type": [
        "boolean",
        "string",
        "number"
      ]
    },
    "subtype": {
      "type": "string",
      "const": "WEBSITE"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "name",
    "pixel_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1552-L1567).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-meta_create_lookalike_audience-1baeeeec"></a>

## meta_create_lookalike_audience

Handler: Meta Ads: routes create lookalike audience through metaCreateLookalikeAudience; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Lookalike from origin_audience_id + country (ISO-2) + optional lookalike_ratio 0.01–0.20. Server-built lookalike_spec. dry_run default; live needs confirm_phrase containing act_{ad_account_id} AND origin_audience_id. ads_management when detectable.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1608-L1618) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave3.ts#L313-L360) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "origin_audience_id": {
      "type": "string",
      "minLength": 1
    },
    "country": {
      "type": "string",
      "minLength": 2,
      "maxLength": 2
    },
    "lookalike_ratio": {
      "anyOf": [
        {
          "type": "number",
          "minimum": 0.01,
          "maximum": 0.2
        },
        {
          "type": "string"
        }
      ]
    },
    "lookalike_type": {
      "type": "string",
      "enum": [
        "similarity",
        "reach"
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "name",
    "origin_audience_id",
    "country"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1568-L1582).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-meta_attach_audience-47d8300e"></a>

## meta_attach_audience

Handler: Meta Ads: routes attach audience through metaAttachAudience; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Attach custom_audience_ids to an ad set. Replaces targeting — countries required plus named packs. dry_run default; live needs confirm_phrase containing act_{ad_account_id} AND adset_id. ads_management when detectable.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1619-L1629) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave3.ts#L210-L257) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "adset_id": {
      "type": "string",
      "minLength": 1
    },
    "countries": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "minLength": 2,
            "maxLength": 2
          }
        },
        {
          "type": "string",
          "minLength": 2
        }
      ]
    },
    "age_min": {
      "anyOf": [
        {
          "type": "integer",
          "minimum": 13,
          "maximum": 65
        },
        {
          "type": "string"
        }
      ]
    },
    "age_max": {
      "anyOf": [
        {
          "type": "integer",
          "minimum": 13,
          "maximum": 65
        },
        {
          "type": "string"
        }
      ]
    },
    "genders": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "MALE",
              "FEMALE"
            ]
          }
        },
        {
          "type": "string",
          "enum": [
            "MALE",
            "FEMALE"
          ]
        },
        {
          "type": "string"
        }
      ]
    },
    "locales": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30
          },
          "maxItems": 50
        },
        {
          "type": "string",
          "minLength": 1
        }
      ]
    },
    "interest_ids": {
      "$ref": "#/properties/locales"
    },
    "behavior_ids": {
      "$ref": "#/properties/locales"
    },
    "custom_audience_ids": {
      "$ref": "#/properties/locales"
    },
    "excluded_custom_audience_ids": {
      "$ref": "#/properties/locales"
    },
    "publisher_platforms": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "facebook",
              "instagram",
              "audience_network",
              "messenger"
            ]
          }
        },
        {
          "type": "string"
        }
      ]
    },
    "facebook_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "feed",
              "right_hand_column",
              "marketplace",
              "video_feeds",
              "story",
              "search",
              "instream_video",
              "facebook_reels",
              "facebook_reels_overlay",
              "profile_feed"
            ]
          }
        },
        {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string",
                "minLength": 1
              },
              "maxItems": 50
            },
            {
              "type": "string",
              "minLength": 1
            }
          ]
        }
      ]
    },
    "instagram_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "stream",
              "story",
              "explore",
              "explore_home",
              "reels",
              "profile_feed",
              "ig_search",
              "profile_reels"
            ]
          }
        },
        {
          "$ref": "#/properties/facebook_positions/anyOf/1"
        }
      ]
    },
    "audience_network_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "classic",
              "rewarded_video",
              "instream_video"
            ]
          }
        },
        {
          "$ref": "#/properties/facebook_positions/anyOf/1"
        }
      ]
    },
    "messenger_positions": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "messenger_home",
              "sponsored_messages",
              "story"
            ]
          }
        },
        {
          "$ref": "#/properties/facebook_positions/anyOf/1"
        }
      ]
    },
    "device_platforms": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "mobile",
              "desktop"
            ]
          }
        },
        {
          "type": "string"
        }
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "adset_id",
    "countries",
    "custom_audience_ids"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1539-L1551).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-meta_catalog_items_batch-9e2c57d1"></a>

## meta_catalog_items_batch

Handler: Meta Ads: routes catalog items batch through metaCatalogItemsBatch; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Marketing API catalog items_batch upsert (CREATE/UPDATE/DELETE). dry_run default; live needs confirm_phrase containing act_{ad_account_id} AND catalog_id. HTTPS image_link/link only. ads_management or catalog_management when detectable. Polar Pro meta bit. Opt out with DGTL_META_MUTATE_ENABLED=false.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1630-L1640) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave16.ts#L421-L495) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "catalog_id": {
      "type": "string",
      "minLength": 1
    },
    "item_type": {
      "type": "string",
      "enum": [
        "PRODUCT_ITEM",
        "DESTINATION",
        "FLIGHT",
        "HOME_LISTING",
        "HOTEL",
        "VEHICLE"
      ]
    },
    "allow_upsert": {
      "type": "boolean"
    },
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "method": {
            "type": "string",
            "enum": [
              "CREATE",
              "UPDATE",
              "DELETE"
            ]
          },
          "retailer_id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "description": {
            "type": "string",
            "maxLength": 1000
          },
          "availability": {
            "type": "string",
            "enum": [
              "in stock",
              "out of stock",
              "preorder",
              "available for order",
              "discontinued"
            ]
          },
          "condition": {
            "type": "string",
            "enum": [
              "new",
              "refurbished",
              "used"
            ]
          },
          "price": {
            "type": "string",
            "minLength": 3,
            "maxLength": 40
          },
          "link": {
            "type": "string",
            "format": "uri",
            "maxLength": 2048
          },
          "image_link": {
            "type": "string",
            "format": "uri",
            "maxLength": 2048
          },
          "additional_image_link": {
            "type": "string",
            "format": "uri",
            "maxLength": 2048
          },
          "brand": {
            "type": "string",
            "maxLength": 200
          },
          "item_group_id": {
            "type": "string",
            "maxLength": 100
          },
          "sale_price": {
            "type": "string",
            "maxLength": 40
          },
          "google_product_category": {
            "type": "string",
            "maxLength": 200
          },
          "color": {
            "type": "string",
            "maxLength": 80
          },
          "size": {
            "type": "string",
            "maxLength": 80
          },
          "gender": {
            "type": "string",
            "maxLength": 40
          },
          "age_group": {
            "type": "string",
            "maxLength": 40
          },
          "material": {
            "type": "string",
            "maxLength": 80
          },
          "pattern": {
            "type": "string",
            "maxLength": 80
          },
          "product_type": {
            "type": "string",
            "maxLength": 200
          },
          "quantity": {
            "anyOf": [
              {
                "type": "integer",
                "minimum": 0
              },
              {
                "type": "string"
              }
            ]
          },
          "status": {
            "type": "string",
            "maxLength": 40
          }
        },
        "required": [
          "method",
          "retailer_id"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 50
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "catalog_id",
    "items"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1783-L1796).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-meta_get_batch_status-a0a53055"></a>

## meta_get_batch_status

Handler: Meta Ads: routes get batch status through metaGetBatchStatus; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Pro $19/mo. Read catalog check_batch_request_status for a handle from meta_catalog_items_batch. ads_read. LICENSE_REQUIRED without a license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1641-L1651) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave16.ts#L496-L525) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "catalog_id": {
      "type": "string",
      "minLength": 1
    },
    "handle": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "catalog_id",
    "handle"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "catalog_id": {
      "type": "string",
      "minLength": 1
    },
    "handle": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "catalog_id",
    "handle"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1797-L1805).

</details>

<a id="tool-meta_create_catalog-ab9c047a"></a>

## meta_create_catalog

Handler: Meta Ads: routes create catalog through metaCreateCatalog; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create an owned product catalog on act_{ad_account_id}. dry_run default; live needs confirm_phrase containing act_{ad_account_id}. Closed vertical enum. ads_management or catalog_management when detectable. Polar Pro meta bit.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1652-L1662) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave16.ts#L526-L582) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "vertical": {
      "type": "string",
      "enum": [
        "commerce",
        "hotels",
        "flights",
        "destinations",
        "vehicles",
        "home_listings"
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1806-L1817).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-meta_send_capi_events-0c710106"></a>

## meta_send_capi_events

Handler: Meta Ads: routes send capi events through metaSendCapiEvents; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid CAPI. Closed event_name enum; hashed user_data (SHA-256); required event_id. dry_run default; live needs confirm_phrase containing act_{ad_account_id} AND pixel_id. Dual-gate: plugin DGTL_META_CAPI_ENABLED (default on) AND Worker META_CAPI_ENABLED (fail-closed, not META_MUTATE_ENABLED). Polar Pro meta bit. App secret stays on Worker. Never unhashed PII in logs.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1663-L1673) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/meta/meta-wave16.ts#L583-L652) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "ad_account_id": {
      "type": "string",
      "minLength": 1
    },
    "pixel_id": {
      "type": "string",
      "minLength": 1
    },
    "events": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "event_name": {
            "type": "string",
            "enum": [
              "Purchase",
              "Lead",
              "CompleteRegistration",
              "AddToCart",
              "AddToWishlist",
              "InitiateCheckout",
              "ViewContent",
              "Search",
              "AddPaymentInfo",
              "Subscribe",
              "StartTrial",
              "SubmitApplication",
              "Contact",
              "CustomizeProduct",
              "Donate",
              "FindLocation",
              "Schedule",
              "PageView"
            ]
          },
          "event_id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "event_time": {
            "anyOf": [
              {
                "type": "integer",
                "exclusiveMinimum": 0
              },
              {
                "type": "string"
              }
            ]
          },
          "action_source": {
            "type": "string",
            "enum": [
              "website",
              "app",
              "email",
              "phone_call",
              "chat",
              "physical_store",
              "system_generated",
              "business_messaging",
              "other"
            ]
          },
          "event_source_url": {
            "type": "string",
            "format": "uri",
            "maxLength": 2048
          },
          "em": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "ph": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64
          },
          "fn": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "ln": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "ct": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "st": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "zp": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64
          },
          "country": {
            "type": "string",
            "minLength": 2,
            "maxLength": 64
          },
          "external_id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "client_ip_address": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64
          },
          "client_user_agent": {
            "type": "string",
            "minLength": 1,
            "maxLength": 512
          },
          "fbc": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "fbp": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "event_value": {
            "anyOf": [
              {
                "type": "number",
                "minimum": 0
              },
              {
                "type": "string"
              }
            ]
          },
          "currency": {
            "type": "string",
            "minLength": 3,
            "maxLength": 3
          },
          "content_ids": {
            "anyOf": [
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "minLength": 1
                },
                "maxItems": 50
              },
              {
                "type": "string"
              }
            ]
          },
          "content_type": {
            "type": "string",
            "maxLength": 64
          },
          "content_name": {
            "type": "string",
            "maxLength": 256
          },
          "num_items": {
            "anyOf": [
              {
                "type": "integer",
                "exclusiveMinimum": 0
              },
              {
                "type": "string"
              }
            ]
          },
          "order_id": {
            "type": "string",
            "maxLength": 128
          }
        },
        "required": [
          "event_name",
          "event_id"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 10
    },
    "test_event_code": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "ad_account_id",
    "pixel_id",
    "events"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1818-L1830).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-mc_list_accounts-644ebe12"></a>

## mc_list_accounts

Handler: Google Merchant Center: routes list accounts through mcListAccounts; implements the registered product operation; it does not operate Google Tag Manager.

```text
Paid. Pro (Polar ads). Direct Merchant API — not Ads product_link, not stamp. Consent MC (scope content) only; never Consent A. List merchant_id values. LICENSE_REQUIRED / MC_NOT_CONNECTED fail closed.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1674-L1684) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/mc.ts#L71-L92) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1831-L1832).

</details>

<a id="tool-mc_list_products-6df6f334"></a>

## mc_list_products

Handler: Google Merchant Center: routes list products through mcListProducts; implements the registered product operation; it does not operate Google Tag Manager.

```text
Paid. Direct Merchant API products.list (processed Product). Requires merchant_id (from mc_list_accounts or gads_list_merchant_center_links). Never guess. Reads stay GET-only.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1685-L1695) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/mc.ts#L93-L118) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1857-L1857).

</details>

<a id="tool-mc_get_product-cc351af0"></a>

## mc_get_product

Handler: Google Merchant Center: routes get product through mcGetProduct; implements the registered product operation; it does not operate Google Tag Manager.

```text
Paid. Direct Merchant API products.get including nested productStatus. Requires merchant_id + product_id (contentLanguage~feedLabel~offerId).
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1696-L1706) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/mc.ts#L119-L171) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string"
    },
    "product_id": {
      "$ref": "#/properties/merchant_id"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string"
    },
    "product_id": {
      "$ref": "#/properties/merchant_id"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1841-L1847).

</details>

<a id="tool-mc_list_product_statuses-e2f33269"></a>

## mc_list_product_statuses

Handler: Google Merchant Center: routes list product statuses through mcListProductStatuses; implements the registered product operation; it does not operate Google Tag Manager.

```text
Paid. Product readiness for Shopping ads: destinationStatuses + itemLevelIssues. shopping_ads_ready when SHOPPING_ADS has approvedCountries. Same Merchant API products.list; not Ads GAQL.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1707-L1717) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/mc.ts#L172-L199) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1858-L1858).

</details>

<a id="tool-mc_list_account_issues-8f52af23"></a>

## mc_list_account_issues

Handler: Google Merchant Center: routes list account issues through mcListAccountIssues; implements the registered product operation; it does not operate Google Tag Manager.

```text
Paid. Account-level diagnostics (website, feeds, suspensions). Feed issues that block Shopping ads even when products look ready. GET-only.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1718-L1728) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/mc.ts#L200-L228) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "language_code": {
      "type": "string",
      "minLength": 2,
      "maxLength": 16
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "language_code": {
      "type": "string",
      "minLength": 2,
      "maxLength": 16
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1848-L1856).

</details>

<a id="tool-mc_list_data_sources-44de9c0e"></a>

## mc_list_data_sources

Handler: Google Merchant Center: routes list data sources through mcListDataSources; implements the registered product operation; it does not operate Google Tag Manager.

```text
Paid. Merchant API data sources (feeds). Pair with mc_list_account_issues. Reads stay GET-only. Create/fetch are named write tools.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1729-L1739) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/mc.ts#L229-L255) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string"
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1859-L1877).

</details>

<a id="tool-mc_create_data_source-e8cf8999"></a>

## mc_create_data_source

Handler: Google Merchant Center: routes create data source through mcCreateDataSource; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create an API-type primary or supplemental product data source (no fileInput). Consent MC (content), not Consent A. Polar ads (no mc bit). dry_run default; live needs confirm_phrase containing merchant_id plus DGTL_WRITES_ENABLED. Never guess merchant_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1740-L1750) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/mc-write.ts#L309-L339) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string",
      "minLength": 1
    },
    "display_name": {
      "type": "string",
      "minLength": 1
    },
    "kind": {
      "type": "string",
      "enum": [
        "primary",
        "supplemental"
      ]
    },
    "channel": {
      "type": "string",
      "enum": [
        "ONLINE_PRODUCTS"
      ]
    },
    "feed_label": {
      "type": "string"
    },
    "content_language": {
      "type": "string"
    },
    "countries": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "minLength": 2,
            "maxLength": 2
          }
        },
        {
          "type": "string",
          "minLength": 2,
          "maxLength": 2
        }
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    }
  },
  "required": [
    "merchant_id",
    "display_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1878-L1894).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireMcConfirmWhenLive(val,ctx){if(val.dry_run===false){const phrase=val.confirm_phrase??val.confirm;if(!phrase||!String(phrase).trim()){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false (must include merchant_id)\",path:[\"confirm_phrase\"]})}}}"
  }
]
```

</details>

<a id="tool-mc_upsert_product_input-5b0cd2aa"></a>

## mc_upsert_product_input

Handler: Google Merchant Center: routes upsert product input through mcUpsertProductInput; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Merchant API productInputs insert (default) or patch when update_mask is set. Requires merchant_id + data_source (API data source). Writes ProductInput, not processed Product. Consent MC. Polar ads. dry_run default; live confirm_phrase must include merchant_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1751-L1761) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/mc-write.ts#L370-L447) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string",
      "minLength": 1
    },
    "data_source": {
      "type": "string",
      "minLength": 1
    },
    "dataSource": {
      "type": "string",
      "minLength": 1
    },
    "offer_id": {
      "type": "string"
    },
    "content_language": {
      "type": "string"
    },
    "feed_label": {
      "type": "string"
    },
    "product_id": {
      "type": "string"
    },
    "update_mask": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "link": {
      "type": "string"
    },
    "image_link": {
      "type": "string"
    },
    "availability": {
      "type": "string",
      "enum": [
        "IN_STOCK",
        "OUT_OF_STOCK",
        "PREORDER",
        "BACKORDER"
      ]
    },
    "condition": {
      "type": "string",
      "enum": [
        "NEW",
        "USED",
        "REFURBISHED"
      ]
    },
    "price_micros": {
      "type": [
        "string",
        "number"
      ]
    },
    "currency": {
      "type": "string"
    },
    "brand": {
      "type": "string"
    },
    "gtin": {
      "type": "string"
    },
    "mpn": {
      "type": "string"
    },
    "google_product_category": {
      "type": "string"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    }
  },
  "required": [
    "merchant_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1895-L1932).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireMcConfirmWhenLive(val,ctx);if(!val.data_source&&!val.dataSource){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"data_source is required (API data source name or id). ProductInput writes are not processed Product.\",path:[\"data_source\"]})}}"
  }
]
```

</details>

<a id="tool-mc_delete_product_input-069e2939"></a>

## mc_delete_product_input

Handler: Google Merchant Center: routes delete product input through mcDeleteProductInput; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Delete a ProductInput (contentLanguage~feedLabel~offerId) from an API data_source. Not processed Product. Consent MC. Polar ads. dry_run default; live confirm_phrase must include merchant_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1762-L1772) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/mc-write.ts#L448-L478) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string",
      "minLength": 1
    },
    "data_source": {
      "type": "string",
      "minLength": 1
    },
    "dataSource": {
      "type": "string",
      "minLength": 1
    },
    "product_id": {
      "type": "string",
      "minLength": 1
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    }
  },
  "required": [
    "merchant_id",
    "product_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1933-L1954).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireMcConfirmWhenLive(val,ctx);if(!val.data_source&&!val.dataSource){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"data_source is required\",path:[\"data_source\"]})}}"
  }
]
```

</details>

<a id="tool-mc_fetch_data_source-f7ab4c94"></a>

## mc_fetch_data_source

Handler: Google Merchant Center: routes fetch data source through mcFetchDataSource; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Immediate fetch on a FILE data source (not API ProductInput insert). Consent MC. Polar ads. dry_run default; live confirm_phrase must include merchant_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1773-L1783) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/google/mc-write.ts#L340-L369) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "merchant_id": {
      "type": "string",
      "minLength": 1
    },
    "data_source": {
      "type": "string",
      "minLength": 1
    },
    "dataSource": {
      "type": "string",
      "minLength": 1
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    }
  },
  "required": [
    "merchant_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1955-L1976).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{requireMcConfirmWhenLive(val,ctx);if(!val.data_source&&!val.dataSource){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"data_source is required\",path:[\"data_source\"]})}}"
  }
]
```

</details>

<a id="tool-shopify_get_shop-fd36fc6c"></a>

## shopify_get_shop

Handler: Shopify: routes get shop through shopifyGetShop; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Confirm merchant shop domain + name via Admin GraphQL (API 2026-04). Local SHOPIFY_STORE + SHOPIFY_ACCESS_TOKEN or PLUGIN_DATA/shopify-oauth.json. Fail closed SHOPIFY_NOT_CONNECTED. Free local — no Polar / stamp.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1784-L1793) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify.ts#L111-L132) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1977-L1978).

</details>

<a id="tool-shopify_list_products-dfbbb52a"></a>

## shopify_list_products

Handler: Shopify: routes list products through shopifyListProducts; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated products (title, handle, status, id). Merchant token with read_products. SHOPIFY_NOT_CONNECTED without credentials. No Polar.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1794-L1803) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify.ts#L133-L173) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1979-L1985).

</details>

<a id="tool-shopify_get_product-cdd34a99"></a>

## shopify_get_product

Handler: Shopify: routes get product through shopifyGetProduct; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. One product by id (gid or numeric). Requires product_id. read_products. No writes.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1804-L1813) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify.ts#L174-L250) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "product_id": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "product_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "product_id": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "product_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1986-L1991).

</details>

<a id="tool-shopify_list_orders-c01713db"></a>

## shopify_list_orders

Handler: Shopify: routes list orders through shopifyListOrders; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated orders with closed status/financial/fulfillment/date filters. read_orders. No customers dump. No Polar.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1814-L1823) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify.ts#L251-L313) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "any",
        "open",
        "closed",
        "cancelled"
      ]
    },
    "financial_status": {
      "type": "string",
      "enum": [
        "any",
        "authorized",
        "pending",
        "paid",
        "partially_paid",
        "refunded",
        "voided",
        "partially_refunded",
        "unpaid"
      ]
    },
    "fulfillment_status": {
      "type": "string",
      "enum": [
        "any",
        "shipped",
        "partial",
        "unshipped",
        "unfulfilled",
        "fulfilled"
      ]
    },
    "created_at_min": {
      "type": "string",
      "minLength": 1
    },
    "created_at_max": {
      "type": "string",
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "any",
        "open",
        "closed",
        "cancelled"
      ]
    },
    "financial_status": {
      "type": "string",
      "enum": [
        "any",
        "authorized",
        "pending",
        "paid",
        "partially_paid",
        "refunded",
        "voided",
        "partially_refunded",
        "unpaid"
      ]
    },
    "fulfillment_status": {
      "type": "string",
      "enum": [
        "any",
        "shipped",
        "partial",
        "unshipped",
        "unfulfilled",
        "fulfilled"
      ]
    },
    "created_at_min": {
      "type": "string",
      "minLength": 1
    },
    "created_at_max": {
      "type": "string",
      "minLength": 1
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L1992-L2017).

</details>

<a id="tool-shopify_get_order-f4cad7cc"></a>

## shopify_get_order

Handler: Shopify: routes get order through shopifyGetOrder; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. One order by id (gid or numeric) with line items. Requires order_id. read_orders. No writes.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1824-L1833) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify.ts#L314-L347) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "order_id": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "order_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "order_id": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "order_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2018-L2023).

</details>

<a id="tool-shopify_list_locations-22e7fc55"></a>

## shopify_list_locations

Handler: Shopify: routes list locations through shopifyListLocations; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated locations (id, name, active, fulfillsOnlineOrders). Merchant token with read_locations. SHOPIFY_NOT_CONNECTED without credentials. No Polar / stamp.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1834-L1843) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify.ts#L348-L388) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2024-L2030).

</details>

<a id="tool-shopify_list_inventory_levels-a6abc84f"></a>

## shopify_list_inventory_levels

Handler: Shopify: routes list inventory levels through shopifyListInventoryLevels; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Inventory quantities at one location. Requires location_id. read_inventory. Copy inventoryItem id + sku for Ads/MC join or shopify_adjust_inventory. No Polar.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1844-L1853) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify.ts#L389-L494) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "location_id": {
      "type": "string",
      "minLength": 1
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "required": [
    "location_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "location_id": {
      "type": "string",
      "minLength": 1
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "required": [
    "location_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2031-L2039).

</details>

<a id="tool-shopify_adjust_inventory-e0d5a717"></a>

## shopify_adjust_inventory

Handler: Shopify: routes adjust inventory through shopifyAdjustInventory; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Write. inventoryAdjustQuantities (delta) at one location. dry_run defaults true. Live needs confirm_phrase containing the shop domain (*.myshopify.com) plus write_inventory on the merchant app. Local — no Polar, no stamp vault.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1854-L1864) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify-write.ts#L87-L443) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "inventory_item_id": {
      "type": "string",
      "minLength": 1
    },
    "location_id": {
      "type": "string",
      "minLength": 1
    },
    "delta": {
      "type": "integer"
    },
    "reason": {
      "type": "string",
      "enum": [
        "correction",
        "restock",
        "shrinkage",
        "received",
        "damaged",
        "other"
      ]
    },
    "quantity_name": {
      "type": "string",
      "enum": [
        "available",
        "on_hand"
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "inventory_item_id",
    "location_id",
    "delta"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2040-L2054).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-shopify_list_publications-c8675186"></a>

## shopify_list_publications

Handler: Shopify: routes list publications through shopifyListPublications; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated publications (id, autoPublish, catalog id/title). Merchant token with read_publications (explicit expand; not default install). SHOPIFY_NOT_CONNECTED without credentials. No Polar / stamp. Admin API 2026-04.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1865-L1874) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify.ts#L495-L541) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "catalog_type": {
      "type": "string",
      "enum": [
        "APP",
        "COMPANY_LOCATION",
        "MARKET",
        "NONE"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "catalog_type": {
      "type": "string",
      "enum": [
        "APP",
        "COMPANY_LOCATION",
        "MARKET",
        "NONE"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2055-L2062).

</details>

<a id="tool-shopify_list_catalogs-ebc454b0"></a>

## shopify_list_catalogs

Handler: Shopify: routes list catalogs through shopifyListCatalogs; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated Shopify catalogs (id, title, status, priceList). Existing read_products. Optional catalog_type APP|COMPANY_LOCATION|MARKET|NONE. Not Meta catalog. No Polar.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1875-L1884) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify.ts#L542-L588) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "catalog_type": {
      "type": "string",
      "enum": [
        "APP",
        "COMPANY_LOCATION",
        "MARKET",
        "NONE"
      ]
    },
    "type": {
      "$ref": "#/properties/catalog_type"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "catalog_type": {
      "type": "string",
      "enum": [
        "APP",
        "COMPANY_LOCATION",
        "MARKET",
        "NONE"
      ]
    },
    "type": {
      "$ref": "#/properties/catalog_type"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2063-L2071).

</details>

<a id="tool-shopify_list_product_feeds-9005590c"></a>

## shopify_list_product_feeds

Handler: Shopify: routes list product feeds through shopifyListProductFeeds; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated Shopify product feeds (id, channelId, country, language, status). read_product_listings (explicit expand). Not Meta catalog/CAPI. No Polar.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1885-L1894) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify.ts#L589-L626) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2072-L2104).

</details>

<a id="tool-shopify_product_set-0154a567"></a>

## shopify_product_set

Handler: Shopify: routes product set through shopifyProductSet; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Write. Allowlisted productSet GraphQL only (title/handle/status/variants). dry_run defaults true. Live needs confirm_phrase containing the shop domain plus write_products. List fields replace omitted variants/tags. No raw GraphQL. No customers. Local — no Polar, no stamp vault. Not Meta CAPI.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1895-L1905) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/shopify/shopify-write.ts#L444-L525) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "product_id": {
      "type": "string",
      "minLength": 1
    },
    "handle": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "title": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "status": {
      "type": "string",
      "enum": [
        "ACTIVE",
        "DRAFT",
        "ARCHIVED"
      ]
    },
    "description_html": {
      "type": "string",
      "minLength": 1,
      "maxLength": 20000
    },
    "vendor": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "product_type": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 255
      },
      "maxItems": 50
    },
    "product_options": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          },
          "values": {
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 1,
              "maxLength": 255
            },
            "minItems": 1,
            "maxItems": 50
          }
        },
        "required": [
          "name",
          "values"
        ],
        "additionalProperties": false
      },
      "maxItems": 3
    },
    "variants": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "variant_id": {
            "type": "string",
            "minLength": 1
          },
          "sku": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          },
          "price": {
            "anyOf": [
              {
                "type": "string",
                "minLength": 1
              },
              {
                "type": "number"
              }
            ]
          },
          "compare_at_price": {
            "anyOf": [
              {
                "type": "string",
                "minLength": 1
              },
              {
                "type": "number"
              }
            ]
          },
          "barcode": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          },
          "option_values": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "option_name": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 255
                },
                "name": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 255
                }
              },
              "required": [
                "option_name",
                "name"
              ],
              "additionalProperties": false
            },
            "minItems": 1,
            "maxItems": 3
          }
        },
        "required": [
          "option_values"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 50
    },
    "synchronous": {
      "type": "boolean"
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2105-L2143).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "(val,ctx)=>{if(val.dry_run===false){const phrase=(val.confirm_phrase??val.confirm??\"\").trim();if(!phrase){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase (or confirm) is required when dry_run is false\",path:[\"confirm_phrase\"]})}}if(!val.product_id&&!val.handle&&!val.title){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"title (create) or product_id / handle (update) is required\",path:[\"title\"]})}}"
  }
]
```

</details>

<a id="tool-tiktok_list_advertisers-eb08961e"></a>

## tiktok_list_advertisers

Handler: TikTok Ads: routes list advertisers through tiktokDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Polar feature `tiktok` (not ads/meta). Use FIRST to discover advertiser_id values. Cite returned ids; do not invent. TikTok app secret is never in this plugin. LICENSE_REQUIRED without a tiktok license. Live app is a Noel gate — fixtures until then.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1906-L1916) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok.ts#L42-L116) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2144-L2145).

</details>

<a id="tool-tiktok_list_campaigns-76cd45a8"></a>

## tiktok_list_campaigns

Handler: TikTok Ads: routes list campaigns through tiktokDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Polar `tiktok`. List campaigns for an advertiser_id from tiktok_list_advertisers. Empty ≠ auth failure. LICENSE_REQUIRED without a tiktok license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1917-L1927) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok.ts#L42-L116) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    }
  },
  "required": [
    "advertiser_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    }
  },
  "required": [
    "advertiser_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2146-L2152).

</details>

<a id="tool-tiktok_insights-08612ab2"></a>

## tiktok_insights

Handler: TikTok Ads: routes insights through tiktokDisabled; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Polar `tiktok`. BASIC integrated report: advertiser_id, date_start/date_stop (YYYY-MM-DD), optional level advertiser/campaign/adgroup/ad. Closed metrics (spend/impressions/clicks/ctr/cpc/conversion). Cite data.cited. LICENSE_REQUIRED without a tiktok license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1928-L1938) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok.ts#L42-L116) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "level": {
      "type": "string",
      "enum": [
        "advertiser",
        "campaign",
        "adgroup",
        "ad"
      ]
    },
    "date_start": {
      "type": "string",
      "minLength": 1
    },
    "date_stop": {
      "type": "string",
      "minLength": 1
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    }
  },
  "required": [
    "advertiser_id",
    "date_start",
    "date_stop"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "level": {
      "type": "string",
      "enum": [
        "advertiser",
        "campaign",
        "adgroup",
        "ad"
      ]
    },
    "date_start": {
      "type": "string",
      "minLength": 1
    },
    "date_stop": {
      "type": "string",
      "minLength": 1
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    }
  },
  "required": [
    "advertiser_id",
    "date_start",
    "date_stop"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2153-L2162).

</details>

<a id="tool-tiktok_update_campaign-fd5d9f8b"></a>

## tiktok_update_campaign

Handler: TikTok Ads: routes update campaign through tiktokUpdateCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Update TikTok campaign status (ENABLE/DISABLE; ACTIVE→ENABLE, PAUSED→DISABLE). Defaults on; opt out with DGTL_TIKTOK_MUTATE_ENABLED=false. Worker TIKTOK_MUTATE_ENABLED still required for live hop. Prefer dry_run; live needs confirm_phrase containing advertiser_id AND campaign_id after a user message this turn. Closed fields only — no budget/create/DELETE. App secret stays on the Worker.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1939-L1949) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok-write.ts#L57-L174) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "campaign_id": {
      "type": "string",
      "minLength": 1
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLE",
        "DISABLE",
        "ACTIVE",
        "PAUSED"
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "campaign_id",
    "status"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2163-L2264).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-tiktok_list_catalogs-85b09f0a"></a>

## tiktok_list_catalogs

Handler: TikTok Ads: routes list catalogs through tiktokListCatalogs; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Polar `tiktok`. List product catalogs for advertiser_id (optional bc_id / catalog_id). Stamp hop. App secret stays on the Worker. LICENSE_REQUIRED without a tiktok license. Not Shopify catalogs. Never Axos.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1950-L1960) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok-wave17.ts#L449-L469) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "bc_id": {
      "type": "string",
      "minLength": 1
    },
    "catalog_id": {
      "type": "string",
      "minLength": 1
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    }
  },
  "required": [
    "advertiser_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "bc_id": {
      "type": "string",
      "minLength": 1
    },
    "catalog_id": {
      "type": "string",
      "minLength": 1
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    }
  },
  "required": [
    "advertiser_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2265-L2273).

</details>

<a id="tool-tiktok_create_catalog-7c2bb329"></a>

## tiktok_create_catalog

Handler: TikTok Ads: routes create catalog through tiktokCreateCatalog; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create a TikTok catalog (closed catalog_type, default ECOM). dry_run default; live needs confirm_phrase containing advertiser_id. Dual-gate TIKTOK_MUTATE_ENABLED. Catalog API often needs bc_id. App secret stays on the Worker.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1961-L1971) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok-wave17.ts#L500-L552) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "catalog_type": {
      "type": "string",
      "enum": [
        "ECOM",
        "HOTEL",
        "FLIGHT",
        "DESTINATION",
        "AUTO"
      ]
    },
    "bc_id": {
      "type": "string",
      "minLength": 1
    },
    "currency": {
      "type": "string",
      "minLength": 3,
      "maxLength": 3
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2283-L2295).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-tiktok_upload_catalog_products-aa2ea066"></a>

## tiktok_upload_catalog_products

Handler: TikTok Ads: routes upload catalog products through tiktokUploadCatalogProducts; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. JSON catalog product upload. sku_id is the Events API content_id. HTTPS image_url / landing_page_url only. dry_run default; live needs confirm_phrase containing advertiser_id AND catalog_id. Dual-gate TIKTOK_MUTATE_ENABLED. App secret stays on the Worker.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1972-L1982) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok-wave17.ts#L553-L602) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "catalog_id": {
      "type": "string",
      "minLength": 1
    },
    "bc_id": {
      "type": "string",
      "minLength": 1
    },
    "products": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "sku_id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "description": {
            "type": "string",
            "maxLength": 1000
          },
          "availability": {
            "type": "string",
            "enum": [
              "IN_STOCK",
              "OUT_OF_STOCK",
              "PREORDER"
            ]
          },
          "condition": {
            "type": "string",
            "enum": [
              "NEW",
              "REFURBISHED",
              "USED"
            ]
          },
          "price": {
            "anyOf": [
              {
                "type": "string",
                "minLength": 1,
                "maxLength": 40
              },
              {
                "type": "number"
              }
            ]
          },
          "currency": {
            "type": "string",
            "minLength": 3,
            "maxLength": 3
          },
          "sale_price": {
            "type": "string",
            "maxLength": 40
          },
          "image_url": {
            "type": "string",
            "format": "uri",
            "maxLength": 2048
          },
          "additional_image_urls": {
            "anyOf": [
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "format": "uri",
                  "maxLength": 2048
                },
                "maxItems": 10
              },
              {
                "type": "string"
              }
            ]
          },
          "landing_page_url": {
            "type": "string",
            "format": "uri",
            "maxLength": 2048
          },
          "brand": {
            "type": "string",
            "maxLength": 200
          },
          "item_group_id": {
            "type": "string",
            "maxLength": 100
          },
          "google_product_category": {
            "type": "string",
            "maxLength": 200
          },
          "color": {
            "type": "string",
            "maxLength": 80
          },
          "size": {
            "type": "string",
            "maxLength": 80
          },
          "gender": {
            "type": "string",
            "maxLength": 40
          },
          "age_group": {
            "type": "string",
            "maxLength": 40
          },
          "material": {
            "type": "string",
            "maxLength": 80
          },
          "pattern": {
            "type": "string",
            "maxLength": 80
          },
          "product_type": {
            "type": "string",
            "maxLength": 200
          },
          "quantity": {
            "anyOf": [
              {
                "type": "integer",
                "minimum": 0
              },
              {
                "type": "string"
              }
            ]
          }
        },
        "required": [
          "sku_id",
          "title",
          "price",
          "image_url",
          "landing_page_url"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 50
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "catalog_id",
    "products"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2296-L2307).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-tiktok_bind_catalog_eventsource-60537e3d"></a>

## tiktok_bind_catalog_eventsource

Handler: TikTok Ads: routes bind catalog eventsource through tiktokBindCatalogEventsource; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Bind pixel_code XOR app_id to a catalog. dry_run default; live needs confirm_phrase containing advertiser_id AND catalog_id. Dual-gate TIKTOK_MUTATE_ENABLED. App secret stays on the Worker.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1983-L1993) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok-wave17.ts#L603-L648) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "catalog_id": {
      "type": "string",
      "minLength": 1
    },
    "pixel_code": {
      "type": "string",
      "minLength": 1
    },
    "app_id": {
      "type": "string",
      "minLength": 1
    },
    "bc_id": {
      "type": "string",
      "minLength": 1
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "catalog_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2308-L2320).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-tiktok_list_pixels-53e02f29"></a>

## tiktok_list_pixels

Handler: TikTok Ads: routes list pixels through tiktokListPixels; uses the licensed DGTL gateway and product-specific credentials.

```text
Paid. Polar `tiktok`. List pixels for advertiser_id. Copy pixel_code for tiktok_track_events (Events API event_source_id). Stamp hop. LICENSE_REQUIRED without a tiktok license.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L1994-L2004) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok-wave17.ts#L470-L499) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "pixel_id": {
      "type": "string",
      "minLength": 1
    },
    "pixel_code": {
      "type": "string",
      "minLength": 1
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    }
  },
  "required": [
    "advertiser_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "pixel_id": {
      "type": "string",
      "minLength": 1
    },
    "pixel_code": {
      "type": "string",
      "minLength": 1
    },
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    }
  },
  "required": [
    "advertiser_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2274-L2282).

</details>

<a id="tool-tiktok_track_events-6f192302"></a>

## tiktok_track_events

Handler: TikTok Ads: routes track events through tiktokTrackEvents; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid Events API. Closed event_name; hashed email/phone; required event_id. content_id must match catalog sku_id. dry_run default; live needs confirm_phrase containing advertiser_id AND pixel_code. Dual-gate: plugin DGTL_TIKTOK_EVENTS_ENABLED (default on) AND Worker TIKTOK_EVENTS_ENABLED (fail-closed, not TIKTOK_MUTATE_ENABLED). Polar tiktok bit. App secret stays on Worker. Never unhashed PII in logs.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2005-L2015) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok-wave17.ts#L649-L728) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "pixel_code": {
      "type": "string",
      "minLength": 1
    },
    "event_source": {
      "type": "string",
      "enum": [
        "web",
        "app",
        "offline",
        "crm"
      ]
    },
    "events": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "event_name": {
            "type": "string",
            "enum": [
              "AddPaymentInfo",
              "AddToCart",
              "AddToWishlist",
              "ClickButton",
              "CompletePayment",
              "CompleteRegistration",
              "Contact",
              "CustomizeProduct",
              "Download",
              "FindLocation",
              "InitiateCheckout",
              "PlaceAnOrder",
              "Schedule",
              "Search",
              "StartTrial",
              "SubmitApplication",
              "SubmitForm",
              "Subscribe",
              "ViewContent"
            ]
          },
          "event_id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "event_time": {
            "anyOf": [
              {
                "type": "integer",
                "exclusiveMinimum": 0
              },
              {
                "type": "string"
              }
            ]
          },
          "event_source_url": {
            "type": "string",
            "format": "uri",
            "maxLength": 2048
          },
          "email": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "em": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "phone": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64
          },
          "ph": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64
          },
          "external_id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "ip": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64
          },
          "user_agent": {
            "type": "string",
            "minLength": 1,
            "maxLength": 512
          },
          "ttclid": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "ttp": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          },
          "content_id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "content_ids": {
            "anyOf": [
              {
                "type": "array",
                "items": {
                  "type": "string",
                  "minLength": 1
                },
                "maxItems": 50
              },
              {
                "type": "string"
              }
            ]
          },
          "content_type": {
            "type": "string",
            "maxLength": 64
          },
          "content_name": {
            "type": "string",
            "maxLength": 256
          },
          "value": {
            "anyOf": [
              {
                "type": "number",
                "minimum": 0
              },
              {
                "type": "string"
              }
            ]
          },
          "event_value": {
            "anyOf": [
              {
                "type": "number",
                "minimum": 0
              },
              {
                "type": "string"
              }
            ]
          },
          "currency": {
            "type": "string",
            "minLength": 3,
            "maxLength": 3
          },
          "quantity": {
            "anyOf": [
              {
                "type": "integer",
                "exclusiveMinimum": 0
              },
              {
                "type": "string"
              }
            ]
          },
          "order_id": {
            "type": "string",
            "maxLength": 128
          }
        },
        "required": [
          "event_name",
          "event_id"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 10
    },
    "test_event_code": {
      "type": "string",
      "minLength": 1,
      "maxLength": 64
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "pixel_code",
    "events"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2321-L2333).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-tiktok_create_campaign-cd93521c"></a>

## tiktok_create_campaign

Handler: TikTok Ads: routes create campaign through tiktokCreateCampaign; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Create a TikTok campaign. Defaults DISABLE (PAUSED maps to DISABLE). Closed objective_type. dry_run default; live needs confirm_phrase containing advertiser_id. Dual-gate TIKTOK_MUTATE_ENABLED. Spend cap $100,000. App secret stays on the Worker. Never Axos.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2016-L2026) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok-wave17.ts#L729-L820) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "campaign_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 400
    },
    "objective_type": {
      "type": "string",
      "enum": [
        "APP_PROMOTION",
        "WEB_CONVERSIONS",
        "REACH",
        "TRAFFIC",
        "VIDEO_VIEWS",
        "PRODUCT_SALES",
        "ENGAGEMENT",
        "LEAD_GENERATION"
      ]
    },
    "budget_mode": {
      "type": "string",
      "enum": [
        "BUDGET_MODE_DAY",
        "BUDGET_MODE_TOTAL",
        "BUDGET_MODE_INFINITE"
      ]
    },
    "budget": {
      "anyOf": [
        {
          "type": "number",
          "exclusiveMinimum": 0
        },
        {
          "type": "string"
        }
      ]
    },
    "operation_status": {
      "type": "string",
      "enum": [
        "ENABLE",
        "DISABLE",
        "ACTIVE",
        "PAUSED"
      ]
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLE",
        "DISABLE",
        "ACTIVE",
        "PAUSED"
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "campaign_name",
    "objective_type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2346-L2361).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-tiktok_update_campaign_budget-71f98dce"></a>

## tiktok_update_campaign_budget

Handler: TikTok Ads: routes update campaign budget through tiktokUpdateCampaignBudget; uses the licensed DGTL gateway and product-specific credentials. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Paid mutate. Update TikTok campaign budget (BUDGET_MODE_DAY or BUDGET_MODE_TOTAL). dry_run default; live needs confirm_phrase containing advertiser_id AND campaign_id after a user message this turn. Dual-gate TIKTOK_MUTATE_ENABLED. Spend cap $100,000. Status stays on tiktok_update_campaign. App secret stays on the Worker. One platform per confirm.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2027-L2037) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tiktok/tiktok-write.ts#L175-L296) · Schema: tools/list.

Exposure: Always listed; license-gated and requires configured gateway/product credentials; relevant mutations additionally honor plugin and worker feature gates.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": true,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "advertiser_id": {
      "type": "string",
      "minLength": 1
    },
    "campaign_id": {
      "type": "string",
      "minLength": 1
    },
    "budget": {
      "anyOf": [
        {
          "type": "number",
          "exclusiveMinimum": 0
        },
        {
          "type": "string"
        }
      ]
    },
    "budget_mode": {
      "type": "string",
      "enum": [
        "BUDGET_MODE_DAY",
        "BUDGET_MODE_TOTAL"
      ]
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    }
  },
  "required": [
    "advertiser_id",
    "campaign_id",
    "budget"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2334-L2345).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-klaviyo_get_account-39d2c50e"></a>

## klaviyo_get_account

Handler: Klaviyo: routes get account through klaviyoGetAccount; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Confirm the Klaviyo account for a local pk_ key (revision 2026-07-15). KLAVIYO_API_KEY or PLUGIN_DATA/klaviyo.json. Fail closed KLAVIYO_NOT_CONNECTED. Local-free — no Polar / stamp / Consent A.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2038-L2047) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L145-L156) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2538-L2541).

</details>

<a id="tool-klaviyo_list_profiles-13ee7317"></a>

## klaviyo_list_profiles

Handler: Klaviyo: routes list profiles through klaviyoListProfiles; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Sparse profiles (email, created, updated, external_id). Never dumps phone/location/properties. Optional email filter + first_name/last_name extra_fields. Local pk_. No Polar.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2048-L2057) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L157-L186) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "minLength": 1
    },
    "extra_fields": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "first_name",
          "last_name"
        ]
      },
      "maxItems": 2
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "minLength": 1
    },
    "extra_fields": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "first_name",
          "last_name"
        ]
      },
      "maxItems": 2
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2542-L2550).

</details>

<a id="tool-klaviyo_get_profile-ab6db6da"></a>

## klaviyo_get_profile

Handler: Klaviyo: routes get profile through klaviyoGetProfile; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. One profile by id with the same sparse fieldset. Requires profile_id. Not a PII dump.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2058-L2067) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L187-L237) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "profile_id": {
      "type": "string",
      "minLength": 1
    },
    "extra_fields": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "first_name",
          "last_name"
        ]
      },
      "maxItems": 2
    }
  },
  "required": [
    "profile_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "profile_id": {
      "type": "string",
      "minLength": 1
    },
    "extra_fields": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "first_name",
          "last_name"
        ]
      },
      "maxItems": 2
    }
  },
  "required": [
    "profile_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2551-L2557).

</details>

<a id="tool-klaviyo_list_lists-d1472753"></a>

## klaviyo_list_lists

Handler: Klaviyo: routes list lists through klaviyoListLists; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated Klaviyo lists. Local pk_. No CSV import mega-tool.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2068-L2077) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L238-L244) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2558-L2564).

</details>

<a id="tool-klaviyo_list_segments-92d455ce"></a>

## klaviyo_list_segments

Handler: Klaviyo: routes list segments through klaviyoListSegments; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated Klaviyo segments. Local pk_. Revision 2026-07-15.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2078-L2087) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L245-L251) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2565-L2571).

</details>

<a id="tool-klaviyo_list_flows-2af0c25c"></a>

## klaviyo_list_flows

Handler: Klaviyo: routes list flows through klaviyoListFlows; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated flows. Local pk_. Enable/disable is not registered.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2088-L2097) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L252-L258) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2572-L2578).

</details>

<a id="tool-klaviyo_get_flow-f5def47c"></a>

## klaviyo_get_flow

Handler: Klaviyo: routes get flow through klaviyoGetFlow; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. One flow by id. Requires flow_id.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2098-L2107) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L259-L282) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "flow_id": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "flow_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "flow_id": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "flow_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2579-L2584).

</details>

<a id="tool-klaviyo_list_campaigns-da35d698"></a>

## klaviyo_list_campaigns

Handler: Klaviyo: routes list campaigns through klaviyoListCampaigns; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated campaigns. Required channel filter (default email). Local pk_. No send job.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2108-L2117) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L293-L301) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "channel": {
      "type": "string",
      "enum": [
        "email",
        "sms",
        "mobile_push"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "channel": {
      "type": "string",
      "enum": [
        "email",
        "sms",
        "mobile_push"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2585-L2592).

</details>

<a id="tool-klaviyo_list_metrics-56a83f92"></a>

## klaviyo_list_metrics

Handler: Klaviyo: routes list metrics through klaviyoListMetrics; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated metrics catalog. Not an open Metric Aggregates passthrough.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2118-L2127) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L302-L323) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2593-L2599).

</details>

<a id="tool-klaviyo_create_campaign-d6dd383b"></a>

## klaviyo_create_campaign

Handler: Klaviyo: routes create campaign through klaviyoCreateCampaign; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Write. Draft email campaign only (POST /api/campaigns). dry_run default true. Live needs confirm_phrase containing the account id. Never posts campaign-send-jobs — use klaviyo_create_campaign_send_job with SEND. Local pk_ — no Polar.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2128-L2138) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo-write.ts#L245-L291) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "included_list_ids": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "minItems": 1,
      "maxItems": 5
    },
    "excluded_list_ids": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "maxItems": 5
    },
    "subject": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "from_email": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "from_label": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "preview_text": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    },
    "send_job": {
      "type": "boolean"
    },
    "campaign_send_job": {
      "type": "boolean"
    },
    "send": {
      "type": "boolean"
    }
  },
  "required": [
    "name",
    "included_list_ids",
    "subject",
    "from_email",
    "from_label"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2600-L2619).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-klaviyo_create_campaign_send_job-c055c03f"></a>

## klaviyo_create_campaign_send_job

Handler: Klaviyo: routes create campaign send job through klaviyoCreateCampaignSendJob; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Write. POST /api/campaign-send-jobs for an existing draft campaign_id. dry_run default true. Live needs confirm_phrase containing the account id, campaign id, and SEND. Cannot fire from klaviyo_create_campaign. Local pk_ — no Polar.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2139-L2149) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo-write.ts#L539-L586) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "campaign_id": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    }
  },
  "required": [
    "campaign_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2620-L2629).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-klaviyo_upsert_profile-f7c7b61a"></a>

## klaviyo_upsert_profile

Handler: Klaviyo: routes upsert profile through klaviyoUpsertProfile; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Write. POST /api/profile-import (email / external_id / profile_id). Closed fields only — no properties bag. dry_run default true. Live needs account-id confirm. Local pk_.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2150-L2160) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo-write.ts#L292-L324) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "minLength": 1
    },
    "external_id": {
      "type": "string",
      "minLength": 1
    },
    "profile_id": {
      "type": "string",
      "minLength": 1
    },
    "first_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "last_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2630-L2643).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-klaviyo_create_event-f930643a"></a>

## klaviyo_create_event

Handler: Klaviyo: routes create event through klaviyoCreateEvent; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Write. POST /api/events backfill (backfill defaults true so flows do not re-fire). Closed properties. dry_run default true. Live needs account-id confirm. Local pk_.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2161-L2171) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo-write.ts#L325-L425) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "metric_name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "email": {
      "type": "string",
      "minLength": 1
    },
    "external_id": {
      "type": "string",
      "minLength": 1
    },
    "profile_id": {
      "type": "string",
      "minLength": 1
    },
    "properties": {
      "type": "object",
      "additionalProperties": {
        "type": [
          "string",
          "number",
          "boolean"
        ]
      }
    },
    "time": {
      "type": "string",
      "minLength": 1
    },
    "unique_id": {
      "type": "string",
      "minLength": 1
    },
    "value": {
      "type": "number"
    },
    "value_currency": {
      "type": "string",
      "minLength": 1,
      "maxLength": 8
    },
    "backfill": {
      "type": "boolean",
      "default": true
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    }
  },
  "required": [
    "metric_name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2644-L2675).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-klaviyo_list_catalog_items-439aa2a4"></a>

## klaviyo_list_catalog_items

Handler: Klaviyo: routes list catalog items through klaviyoListCatalogItems; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated custom catalog items (revision 2026-07-15). Local pk_. Not Shopify $shopify::: ids. No Polar / stamp / Consent A.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2172-L2181) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L355-L364) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "published": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "published": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2676-L2683).

</details>

<a id="tool-klaviyo_list_catalog_categories-3ca967af"></a>

## klaviyo_list_catalog_categories

Handler: Klaviyo: routes list catalog categories through klaviyoListCatalogCategories; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated catalog categories. Local pk_. catalogs:read.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2182-L2191) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L365-L373) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2684-L2690).

</details>

<a id="tool-klaviyo_list_catalog_variants-b143a19a"></a>

## klaviyo_list_catalog_variants

Handler: Klaviyo: routes list catalog variants through klaviyoListCatalogVariants; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated catalog variants. Local pk_. catalogs:read.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2192-L2201) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L374-L382) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2691-L2697).

</details>

<a id="tool-klaviyo_upsert_catalog_items-fbea9859"></a>

## klaviyo_upsert_catalog_items

Handler: Klaviyo: routes upsert catalog items through klaviyoUpsertCatalogItems; implements the registered product operation; it does not operate Google Tag Manager. MCP discovery omits its parameters, although manually supplied valid arguments survive SDK validation.

```text
Write. Closed bulk create/update jobs (POST /api/catalog-item-bulk-create-jobs or bulk-update-jobs). $custom / $default only — never invent $shopify::: ids. dry_run default true. Live needs account-id confirm. Local pk_. Not a mega upsert-all across MC/Meta/TikTok.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2202-L2212) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo-write.ts#L475-L527) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

SDK tools/list advertises empty properties for this ZodEffects schema; SDK input validation uses the original schema and preserves valid arguments, so validationInputSchema describes accepted arguments.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": false,
  "destructiveHint": false,
  "idempotentHint": false,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "external_id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "description": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "url": {
            "type": "string",
            "format": "uri",
            "maxLength": 2048
          },
          "image_full_url": {
            "type": "string",
            "format": "uri",
            "maxLength": 2048
          },
          "price": {
            "type": [
              "number",
              "string"
            ]
          },
          "published": {
            "type": "boolean"
          },
          "catalog_item_id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 256
          }
        },
        "required": [
          "external_id",
          "title",
          "url"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 20
    },
    "dry_run": {
      "type": "boolean",
      "default": true
    },
    "confirm_phrase": {
      "type": "string"
    },
    "confirm": {
      "type": "string"
    }
  },
  "required": [
    "items"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2698-L2707).

Additional validation functions:

```json
[
  {
    "type": "refinement",
    "source": "function requireConfirmWhenLive(val,ctx){if(val.dry_run===false&&(!val.confirm_phrase||!String(val.confirm_phrase).trim())){ctx.addIssue({code:z.ZodIssueCode.custom,message:\"confirm_phrase is required when dry_run is false\",path:[\"confirm_phrase\"]})}}"
  }
]
```

</details>

<a id="tool-klaviyo_list_reviews-e6671835"></a>

## klaviyo_list_reviews

Handler: Klaviyo: routes list reviews through klaviyoListReviews; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. Paginated reviews. Sparse fields — email / author stripped. Optional status filter. Local pk_. reviews:read.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2213-L2222) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L383-L402) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "published",
        "unpublished",
        "rejected",
        "featured",
        "pending"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "page_size": {
      "type": "integer",
      "minimum": 1,
      "maximum": 200
    },
    "page_token": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "published",
        "unpublished",
        "rejected",
        "featured",
        "pending"
      ]
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2708-L2715).

</details>

<a id="tool-klaviyo_get_review-eec0f44f"></a>

## klaviyo_get_review

Handler: Klaviyo: routes get review through klaviyoGetReview; implements the registered product operation; it does not operate Google Tag Manager.

```text
Read-only. Never picks a default resource. One review by review_id. Same sparse fieldset. Local pk_.
```

[Source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/registry.ts#L2223-L2232) · [Handler](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/klaviyo/klaviyo.ts#L403-L424) · Schema: tools/list.

Exposure: Always registered; handler credentials and product authorization still apply.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "review_id": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "review_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<details>
<summary>Tool annotations</summary>

```json
{
  "readOnlyHint": true,
  "destructiveHint": false,
  "idempotentHint": true,
  "openWorldHint": true
}
```

</details>

<details>
<summary>Accepted input parameters (source)</summary>

These constraints are reconstructed from handler validation; they are not the advertised MCP input schema.

```json
{
  "type": "object",
  "properties": {
    "review_id": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "review_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

[Validation source](https://github.com/dgtlsunrise/dgtl-connector/blob/8146d76e2b10d4ccdf80f25fbcbb8574f52d9139/src/tools/schemas.ts#L2716-L2721).

</details>
