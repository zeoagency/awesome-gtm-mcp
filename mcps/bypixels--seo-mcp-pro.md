# bypixels/SEO-MCP-PRO

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/bypixels/SEO-MCP-PRO) · [Machine-readable inventory](../data/mcps/bypixels--seo-mcp-pro.json)

**157 extracted tools.** Manages workspace entities with recursive parameter validation, version creation, and fingerprinted updates.

Snapshot: 2026-10-13 · [d3c283dae295](https://github.com/bypixels/SEO-MCP-PRO/tree/d3c283dae295aff1c481d3a2c6783ac0984ba522) · Method: mixed.

Exposure: 154 registry tools plus 3 built-in diagnostics; free tier exposes 154 total because three report tools require Pro. Includes all 157 tools across all product groups in this one MCP. Authentication and guarded execution affect calls, not registry enumeration.

## Limits

- Offline registry registration and schema conversion only; no MCP transport tools/list request, authentication initialization or tool handler was executed. raw-tools-list.json recreates the source tools/list mapping verbatim and includes the three literal diagnostics.
- inputSchema preserves the exact custom converter output used by tools/list. Its fallback maps ZodLazy to {}, so nested recursive GTM parameter validation is not advertised. validationInputSchema preserves the complete source Zod validation schema reconstructed with zod-to-json-schema (including local $refs and additionalProperties); companion full-validation-schemas.json also preserves every registry validation schema.
- The custom converter omits some object/wrapper descriptions and object unknown-key policy; these differences are preserved rather than silently rewriting the advertised interface.
- gtm_list_accounts declares pageSize but does not forward it; gtm_get_live_version returns null on every API error. GTM handlers otherwise target implemented v2 methods; real credentials and remote behavior were not tested.
- Several non-GTM Google Business Profile tools are placeholders and video_render_clip only returns provider stub status. These remain in the catalog because they are publicly registered.
- Reconstructed validation schemas use JSON Schema draft 7 via zod-to-json-schema 3.24.6. additionalProperties:false represents Zod object stripping of unknown keys, rather than Zod rejecting those keys.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`monitor_check_uptime`](#tool-monitor_check_uptime-bc38006d) | Other product | Website monitoring: Calls withCache. |
| [`monitor_response_time`](#tool-monitor_response_time-7681a0fe) | Other product | Website monitoring: Calls withCache. |
| [`monitor_dns_lookup`](#tool-monitor_dns_lookup-dacbfb56) | Other product | Website monitoring: Calls withCache. |
| [`monitor_dns_propagation`](#tool-monitor_dns_propagation-a6078a03) | Other product | Website monitoring: Calls withCache. |
| [`monitor_certificate`](#tool-monitor_certificate-80abbe84) | Other product | Website monitoring: Calls withCache. |
| [`security_ssl_analyze`](#tool-security_ssl_analyze-07052581) | Other product | Website security: Calls withCache. |
| [`security_headers_check`](#tool-security_headers_check-edc69dca) | Other product | Website security: Calls withCache. |
| [`security_audit`](#tool-security_audit-fa10bca5) | Other product | Website security: Calls withCache. |
| [`security_safe_browsing`](#tool-security_safe_browsing-b74d1f56) | Other product | Website security: Calls axios.post. |
| [`seo_robots_analyze`](#tool-seo_robots_analyze-2f96589a) | Other product | Technical SEO: Calls withCache. |
| [`seo_robots_test`](#tool-seo_robots_test-632a1cb3) | Other product | Technical SEO: Calls withCache. |
| [`seo_sitemap_analyze`](#tool-seo_sitemap_analyze-74dcc1db) | Other product | Technical SEO: Calls withCache. |
| [`seo_meta_analyze`](#tool-seo_meta_analyze-3a0846d3) | Other product | Technical SEO: Calls withCache. |
| [`seo_structured_data`](#tool-seo_structured_data-563bf28e) | Other product | Technical SEO: Calls withCache. |
| [`seo_redirect_check`](#tool-seo_redirect_check-8bfca33b) | Other product | Technical SEO: Calls withCache. |
| [`seo_canonical_check`](#tool-seo_canonical_check-8614ee58) | Other product | Technical SEO: Calls withCache. |
| [`seo_heading_analysis`](#tool-seo_heading_analysis-6cf3a3d8) | Other product | Technical SEO: Calls withCache. |
| [`util_tech_detection`](#tool-util_tech_detection-7008f611) | Other product | Website utilities: Calls withCache. |
| [`util_broken_links`](#tool-util_broken_links-ea751c6d) | Other product | Website utilities: Calls withCache. |
| [`util_whois_lookup`](#tool-util_whois_lookup-fde24ff1) | Other product | Website utilities: Calls withCache. |
| [`util_headers_analysis`](#tool-util_headers_analysis-47417d50) | Other product | Website utilities: Calls withCache. |
| [`util_screenshot`](#tool-util_screenshot-db1000aa) | Other product | Website utilities: Calls axios.get, axios.get, axios.get, axios.get, axios.get. |
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Calls gtm.accounts.list through the Google Tag Manager v2 client. The declared pageSize is logged but not passed to accounts.list. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Calls gtm.accounts.containers.list through the Google Tag Manager v2 client. |
| [`gtm_get_container`](#tool-gtm_get_container-fdc6e39c) | GTM | Calls gtm.accounts.containers.get through the Google Tag Manager v2 client. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Calls gtm.accounts.containers.workspaces.list through the Google Tag Manager v2 client. |
| [`gtm_get_workspace`](#tool-gtm_get_workspace-573c6822) | GTM | Calls gtm.accounts.containers.workspaces.get through the Google Tag Manager v2 client. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Calls gtm.accounts.containers.workspaces.tags.list through the Google Tag Manager v2 client. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Calls gtm.accounts.containers.workspaces.tags.get through the Google Tag Manager v2 client. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Calls gtm.accounts.containers.workspaces.tags.create through the Google Tag Manager v2 client. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Calls gtm.accounts.containers.workspaces.tags.update through the Google Tag Manager v2 client. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | Calls gtm.accounts.containers.workspaces.tags.delete through the Google Tag Manager v2 client. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Calls gtm.accounts.containers.workspaces.triggers.list through the Google Tag Manager v2 client. |
| [`gtm_get_trigger`](#tool-gtm_get_trigger-669e5c62) | GTM | Calls gtm.accounts.containers.workspaces.triggers.get through the Google Tag Manager v2 client. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Calls gtm.accounts.containers.workspaces.triggers.create through the Google Tag Manager v2 client. |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | Calls gtm.accounts.containers.workspaces.triggers.update through the Google Tag Manager v2 client. |
| [`gtm_delete_trigger`](#tool-gtm_delete_trigger-dac3085f) | GTM | Calls gtm.accounts.containers.workspaces.triggers.delete through the Google Tag Manager v2 client. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Calls gtm.accounts.containers.workspaces.variables.list through the Google Tag Manager v2 client. |
| [`gtm_get_variable`](#tool-gtm_get_variable-e6ff3763) | GTM | Calls gtm.accounts.containers.workspaces.variables.get through the Google Tag Manager v2 client. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Calls gtm.accounts.containers.workspaces.variables.create through the Google Tag Manager v2 client. |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM | Calls gtm.accounts.containers.workspaces.variables.update through the Google Tag Manager v2 client. |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM | Calls gtm.accounts.containers.workspaces.variables.delete through the Google Tag Manager v2 client. |
| [`gtm_list_versions`](#tool-gtm_list_versions-f9371c4c) | GTM | Calls gtm.accounts.containers.version\_headers.list through the Google Tag Manager v2 client. |
| [`gtm_get_version`](#tool-gtm_get_version-c83b7c02) | GTM | Calls gtm.accounts.containers.versions.get through the Google Tag Manager v2 client. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | Calls gtm.accounts.containers.workspaces.create\_version through the Google Tag Manager v2 client. |
| [`gtm_publish_version`](#tool-gtm_publish_version-0cc97535) | GTM | Calls gtm.accounts.containers.versions.publish through the Google Tag Manager v2 client. |
| [`gtm_get_live_version`](#tool-gtm_get_live_version-986da5ee) | GTM | Calls gtm.accounts.containers.versions.live through the Google Tag Manager v2 client. Any API error is swallowed and returned as null. |
| [`ga4_list_accounts`](#tool-ga4_list_accounts-68810811) | Other product | Google Analytics 4: Calls analyticsAdmin.accounts.list. |
| [`ga4_get_account`](#tool-ga4_get_account-e1d46f41) | Other product | Google Analytics 4: Calls analyticsAdmin.accounts.get. |
| [`ga4_list_properties`](#tool-ga4_list_properties-44fea7fa) | Other product | Google Analytics 4: Calls analyticsAdmin.properties.list. |
| [`ga4_get_property`](#tool-ga4_get_property-aa64c1ca) | Other product | Google Analytics 4: Calls analyticsAdmin.properties.get. |
| [`ga4_run_report`](#tool-ga4_run_report-a0a35566) | Other product | Google Analytics 4: Calls analyticsData.properties.runReport. |
| [`ga4_run_realtime_report`](#tool-ga4_run_realtime_report-8f675773) | Other product | Google Analytics 4: Calls analyticsData.properties.runRealtimeReport. |
| [`ga4_traffic_overview`](#tool-ga4_traffic_overview-1bdf55e1) | Other product | Google Analytics 4: Gets a comprehensive traffic overview including sources, pages, devices, and geography. |
| [`ga4_get_metadata`](#tool-ga4_get_metadata-723ca4d3) | Other product | Google Analytics 4: Calls analyticsData.properties.getMetadata. |
| [`ga4_list_custom_dimensions`](#tool-ga4_list_custom_dimensions-75905509) | Other product | Google Analytics 4: Calls analyticsAdmin.properties.customDimensions.list. |
| [`ga4_list_custom_metrics`](#tool-ga4_list_custom_metrics-64631ca9) | Other product | Google Analytics 4: Calls analyticsAdmin.properties.customMetrics.list. |
| [`ga4_list_conversion_events`](#tool-ga4_list_conversion_events-bfbcc836) | Other product | Google Analytics 4: Calls analyticsAdmin.properties.conversionEvents.list. |
| [`ga4_list_data_streams`](#tool-ga4_list_data_streams-e2cea14d) | Other product | Google Analytics 4: Calls analyticsAdmin.properties.dataStreams.list. |
| [`ga4_list_audiences`](#tool-ga4_list_audiences-35c4ca43) | Other product | Google Analytics 4: Calls alphaClient.properties.audiences.list. |
| [`ga4_run_funnel_report`](#tool-ga4_run_funnel_report-1b7d80eb) | Other product | Google Analytics 4: Calls dataClient.properties.runFunnelReport. |
| [`gsc_list_sites`](#tool-gsc_list_sites-69b36040) | Other product | Google Search Console: Calls searchConsole.sites.list. |
| [`gsc_get_site`](#tool-gsc_get_site-2f8523bd) | Other product | Google Search Console: Calls searchConsole.sites.get. |
| [`gsc_query_performance`](#tool-gsc_query_performance-d1af9278) | Other product | Google Search Console: Calls searchConsole.searchanalytics.query. |
| [`gsc_top_queries`](#tool-gsc_top_queries-f3356404) | Other product | Google Search Console: Calls searchConsole.searchanalytics.query. |
| [`gsc_top_pages`](#tool-gsc_top_pages-f18fb1c2) | Other product | Google Search Console: Calls searchConsole.searchanalytics.query. |
| [`gsc_list_sitemaps`](#tool-gsc_list_sitemaps-e4a908e7) | Other product | Google Search Console: Calls searchConsole.sitemaps.list. |
| [`gsc_get_sitemap`](#tool-gsc_get_sitemap-bec92fb6) | Other product | Google Search Console: Calls searchConsole.sitemaps.get. |
| [`gsc_submit_sitemap`](#tool-gsc_submit_sitemap-6d135a26) | Other product | Google Search Console: Calls searchConsole.sitemaps.submit. |
| [`gsc_delete_sitemap`](#tool-gsc_delete_sitemap-adedc75d) | Other product | Google Search Console: Calls searchConsole.sitemaps.delete. |
| [`gsc_inspect_url`](#tool-gsc_inspect_url-2d598234) | Other product | Google Search Console: Calls searchConsole.urlInspection.index.inspect. |
| [`gsc_coverage_report`](#tool-gsc_coverage_report-cae5003f) | Other product | Google Search Console: Calls searchConsole.sitemaps.list, searchConsole.searchanalytics.query. |
| [`ads_list_customers`](#tool-ads_list_customers-7c1e05e8) | Other product | Google Ads: Calls client.listAccessibleCustomers, customer.query. |
| [`ads_get_customer`](#tool-ads_get_customer-51dcc7d4) | Other product | Google Ads: Calls customer.query. |
| [`ads_list_campaigns`](#tool-ads_list_campaigns-e51a74ac) | Other product | Google Ads: Calls customer.query. |
| [`ads_get_campaign`](#tool-ads_get_campaign-ba519761) | Other product | Google Ads: Calls customer.query. |
| [`ads_list_ad_groups`](#tool-ads_list_ad_groups-645ef95b) | Other product | Google Ads: Calls customer.query. |
| [`ads_list_keywords`](#tool-ads_list_keywords-7767c363) | Other product | Google Ads: Calls customer.query. |
| [`ads_campaign_performance`](#tool-ads_campaign_performance-49c7b49c) | Other product | Google Ads: Calls customer.query. |
| [`ads_search_term_report`](#tool-ads_search_term_report-8a0682f5) | Other product | Google Ads: Calls customer.query. |
| [`ads_account_summary`](#tool-ads_account_summary-efd1440e) | Other product | Google Ads: Calls customer.query. |
| [`ads_create_campaign`](#tool-ads_create_campaign-98d75a32) | Other product | Google Ads: Calls customer.campaignBudgets.create, customer.campaigns.create. |
| [`ads_update_campaign`](#tool-ads_update_campaign-0d43d188) | Other product | Google Ads: Calls customer.query, customer.campaigns.update, customer.campaignBudgets.update. |
| [`ads_add_keywords`](#tool-ads_add_keywords-eb0d9794) | Other product | Google Ads: Calls customer.adGroupCriteria.create. |
| [`ads_get_keyword_ideas`](#tool-ads_get_keyword_ideas-bfd4be0a) | Other product | Google Ads: Calls customer.keywordPlanIdeas.generateKeywordIdeas. |
| [`ads_list_budgets`](#tool-ads_list_budgets-82be9196) | Other product | Google Ads: Calls customer.query. |
| [`ads_create_budget`](#tool-ads_create_budget-7251941a) | Other product | Google Ads: Calls customer.campaignBudgets.create. |
| [`indexing_publish`](#tool-indexing_publish-909fce51) | Other product | Google Indexing API: Calls indexing.urlNotifications.publish. |
| [`indexing_get_status`](#tool-indexing_get_status-16425eaf) | Other product | Google Indexing API: Calls indexing.urlNotifications.getMetadata. |
| [`indexing_batch_publish`](#tool-indexing_batch_publish-6e4a4b47) | Other product | Google Indexing API: Calls indexing.urlNotifications.publish. |
| [`gbp_list_accounts`](#tool-gbp_list_accounts-d0179a8b) | Other product | Google Business Profile: Calls executeGoogleApi. |
| [`gbp_list_locations`](#tool-gbp_list_locations-e79f9888) | Other product | Google Business Profile: Calls executeGoogleApi. |
| [`gbp_get_location`](#tool-gbp_get_location-710e9df3) | Other product | Google Business Profile: Calls executeGoogleApi. |
| [`gbp_update_location`](#tool-gbp_update_location-01c5c418) | Other product | Google Business Profile: Calls executeGoogleApi. |
| [`gbp_list_reviews`](#tool-gbp_list_reviews-0595b368) | Other product | Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation. |
| [`gbp_reply_review`](#tool-gbp_reply_review-849066cf) | Other product | Google Business Profile: returns success false without making a reviews API call. |
| [`gbp_delete_review_reply`](#tool-gbp_delete_review_reply-22ecc735) | Other product | Google Business Profile: returns success false without making a reviews API call. |
| [`gbp_list_posts`](#tool-gbp_list_posts-ed8a75f2) | Other product | Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation. |
| [`gbp_create_post`](#tool-gbp_create_post-3a103ac0) | Other product | Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation. |
| [`gbp_get_insights`](#tool-gbp_get_insights-18d43403) | Other product | Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation. |
| [`gbp_list_media`](#tool-gbp_list_media-1c03d57b) | Other product | Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation. |
| [`gbp_upload_media`](#tool-gbp_upload_media-7e0504be) | Other product | Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation. |
| [`gbp_performance_report`](#tool-gbp_performance_report-cd1e2062) | Other product | Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation. |
| [`psi_analyze`](#tool-psi_analyze-e565247e) | Other product | PageSpeed Insights: Calls axios.get. |
| [`crux_query`](#tool-crux_query-aa9b8b62) | Other product | Chrome UX Report: Calls axios.post. |
| [`crux_history`](#tool-crux_history-f1446023) | Other product | Chrome UX Report: Calls axios.post. |
| [`cwv_report`](#tool-cwv_report-ce841130) | Other product | Core Web Vitals: Calls axios.post. |
| [`lighthouse_audit`](#tool-lighthouse_audit-7136cbe1) | Other product | Lighthouse: Calls axios.get. |
| [`report_site_health`](#tool-report_site_health-6a72ebe5) | Other product | Website reports: Calls axios.get, axios.get, axios.head, axios.get. |
| [`report_seo_audit`](#tool-report_seo_audit-27d44fbe) | Other product | Website reports: Calls axios.get, axios.get, axios.get, axios.get, axios.get. |
| [`report_executive_summary`](#tool-report_executive_summary-f2f857b0) | Other product | Website reports: Calls axios.get, axios.get, axios.head, axios.get. |
| [`dashboard_overview`](#tool-dashboard_overview-26b8e96e) | Other product | Website dashboard: Generates a unified dashboard overview combining site health and SEO audit data with formatted markdown output. |
| [`a11y_audit`](#tool-a11y_audit-10080ada) | Other product | Accessibility: Calls axios.get. |
| [`a11y_check_contrast`](#tool-a11y_check_contrast-7ab51471) | Other product | Accessibility: Calls axios.get. |
| [`a11y_check_images`](#tool-a11y_check_images-3ebf72c4) | Other product | Accessibility: Calls axios.get. |
| [`cf_get_zones`](#tool-cf_get_zones-d79f44be) | Other product | Cloudflare: Calls axios.get. |
| [`cf_list_dns_records`](#tool-cf_list_dns_records-98ba6ff1) | Other product | Cloudflare: Calls axios.get. |
| [`cf_create_dns_record`](#tool-cf_create_dns_record-28426396) | Other product | Cloudflare: Calls axios.post. |
| [`cf_get_analytics`](#tool-cf_get_analytics-7aff325d) | Other product | Cloudflare: Calls axios.get. |
| [`cf_purge_cache`](#tool-cf_purge_cache-76dba2e4) | Other product | Cloudflare: Calls axios.post. |
| [`cf_firewall_events`](#tool-cf_firewall_events-ba40dbde) | Other product | Cloudflare: Calls axios.post. |
| [`content_brief_from_keyword`](#tool-content_brief_from_keyword-92ee107b) | Other product | SEO content: Builds a structured content brief for a keyword using real GSC data: related query cluster, currently-ranking pages, and refresh-vs-create recommendation. Feed the output to an LLM to draft the article. |
| [`content_outline_from_url`](#tool-content_outline_from_url-c5e378c2) | Other product | SEO content: Calls executeGoogleApi. |
| [`content_topic_gaps`](#tool-content_topic_gaps-67eeba70) | Other product | SEO content: Calls executeGoogleApi. |
| [`content_refresh_candidates`](#tool-content_refresh_candidates-245c8c2a) | Other product | SEO content: Identifies pages losing traffic or stuck in positions 4-15 (high refresh ROI). Compares current vs previous period from GSC and ranks by refresh impact potential. |
| [`content_generate_llms_txt`](#tool-content_generate_llms_txt-a1c29775) | Other product | SEO content: Calls sc.searchanalytics.query, fetchPageTitle. |
| [`content_write_article`](#tool-content_write_article-8e323cfd) | Other product | SEO content: Calls client.messages.create. |
| [`geo_query_ai_search`](#tool-geo_query_ai_search-7b56e4ac) | Other product | AI search visibility: Queries Perplexity AI search and returns the answer + cited source URLs. Requires PERPLEXITY\_API\_KEY env var. Foundation for brand-visibility and share-of-voice tools. |
| [`geo_check_brand_visibility`](#tool-geo_check_brand_visibility-01059fa6) | Other product | AI search visibility: Calls queryPerplexity. |
| [`geo_competitor_share_of_voice`](#tool-geo_competitor_share_of_voice-0a821fa0) | Other product | AI search visibility: Calls queryPerplexity. |
| [`geo_validate_llms_txt`](#tool-geo_validate_llms_txt-171d9c7d) | Other product | AI search visibility: Validates /llms.txt and /llms-full.txt at a domain root: existence, content-type, spec compliance (H1, sections, links). Returns issues + recommendations. |
| [`geo_ai_search_friendly_audit`](#tool-geo_ai_search_friendly_audit-d0581035) | Other product | AI search visibility: Calls fetchUrl, fetchUrl. |
| [`fix_submit_pages_to_index`](#tool-fix_submit_pages_to_index-b80e4e3f) | Other product | Website fixes: Calls executeGoogleApi, executeGoogleApi. |
| [`fix_propose_meta_descriptions`](#tool-fix_propose_meta_descriptions-0c63e5c3) | Other product | Website fixes: Calls fetchUrl. |
| [`fix_propose_security_headers`](#tool-fix_propose_security_headers-0bdd8ecd) | Other product | Website fixes: Calls fetchUrl. |
| [`fix_resubmit_sitemap`](#tool-fix_resubmit_sitemap-d084c594) | Other product | Website fixes: Calls executeGoogleApi, executeGoogleApi. |
| [`fix_clean_sitemap`](#tool-fix_clean_sitemap-623aabf2) | Other product | Website fixes: Calls fetchUrl. |
| [`social_draft_x`](#tool-social_draft_x-2c561c89) | Other product | Social content drafting: Calls client.messages.create. |
| [`social_draft_linkedin`](#tool-social_draft_linkedin-92200a08) | Other product | Social content drafting: Calls client.messages.create. |
| [`social_draft_hn`](#tool-social_draft_hn-7a7e3710) | Other product | Social content drafting: Calls client.messages.create. |
| [`hn_search_discussions`](#tool-hn_search_discussions-60c29c21) | Other product | Hacker News: Calls httpClient.get. |
| [`reddit_search_threads`](#tool-reddit_search_threads-3a93295e) | Other product | Reddit: Calls httpClient.get. |
| [`reddit_draft_reply`](#tool-reddit_draft_reply-5e63f473) | Other product | Reddit: Calls client.messages.create. |
| [`coding_propose_fix`](#tool-coding_propose_fix-db70466c) | Other product | Coding assistance: Calls client.messages.create. |
| [`video_draft_brief`](#tool-video_draft_brief-a3cfa982) | Other product | Video generation: Calls client.messages.create. |
| [`video_render_clip`](#tool-video_render_clip-e121d519) | Other product | Video generation: returns provider stub status rather than rendering a clip, even with a configured API key. |
| [`meta_list_ad_accounts`](#tool-meta_list_ad_accounts-2d800f0a) | Other product | Meta Graph API: Calls metaGetAll. |
| [`meta_list_campaigns`](#tool-meta_list_campaigns-3c69813f) | Other product | Meta Graph API: Calls metaGet. |
| [`meta_get_insights`](#tool-meta_get_insights-d260cbc6) | Other product | Meta Graph API: Calls metaGetAll. |
| [`meta_list_pages`](#tool-meta_list_pages-b61d2ea3) | Other product | Meta Graph API: Calls metaGetAll. |
| [`meta_list_page_posts`](#tool-meta_list_page_posts-42d3018c) | Other product | Meta Graph API: Calls metaGet. |
| [`meta_get_ig_account`](#tool-meta_get_ig_account-a5917300) | Other product | Meta Graph API: Gets the Instagram business account linked to a Facebook Page. |
| [`meta_list_ig_media`](#tool-meta_list_ig_media-f3eca30a) | Other product | Meta Graph API: Calls metaGet. |
| [`meta_draft_post`](#tool-meta_draft_post-7b1b34fe) | Other product | Meta Graph API: Calls socialPostsStore.createDraft. |
| [`auth_status`](#tool-auth_status-50348a10) | Supporting | Returns status from authManager.getStatus(). |
| [`cache_stats`](#tool-cache_stats-6127926d) | Supporting | Returns cacheStats() from the shared cache. |
| [`rate_limit_status`](#tool-rate_limit_status-f937635d) | Supporting | Returns rateLimiter.getAllStatus(). |

<a id="tool-monitor_check_uptime-bc38006d"></a>

## monitor_check_uptime

Handler: Website monitoring: Calls withCache.

```text
Check if a URL is accessible and measure response time. Returns status, response time, headers, and SSL info.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/monitoring/uptime.ts#L1-L217) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to check"
    },
    "method": {
      "type": "string",
      "enum": [
        "GET",
        "HEAD"
      ],
      "default": "GET"
    },
    "timeout": {
      "type": "number",
      "minimum": 1000,
      "maximum": 60000,
      "default": 30000
    },
    "expectedStatus": {
      "type": "array",
      "items": {
        "type": "number"
      }
    },
    "checkContent": {
      "type": "string"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to check"
    },
    "method": {
      "type": "string",
      "enum": [
        "GET",
        "HEAD"
      ],
      "default": "GET"
    },
    "timeout": {
      "type": "number",
      "minimum": 1000,
      "maximum": 60000,
      "default": 30000
    },
    "expectedStatus": {
      "type": "array",
      "items": {
        "type": "number"
      }
    },
    "checkContent": {
      "type": "string",
      "description": "String to find in response"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-monitor_response_time-7681a0fe"></a>

## monitor_response_time

Handler: Website monitoring: Calls withCache.

```text
Measure response time with multiple samples. Returns individual measurements and statistics.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/monitoring/uptime.ts#L1-L217) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to measure"
    },
    "samples": {
      "type": "number",
      "minimum": 1,
      "maximum": 10,
      "default": 3
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to measure"
    },
    "samples": {
      "type": "number",
      "minimum": 1,
      "maximum": 10,
      "default": 3
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-monitor_dns_lookup-dacbfb56"></a>

## monitor_dns_lookup

Handler: Website monitoring: Calls withCache.

```text
Perform DNS lookup for a domain. Returns A, AAAA, MX, NS, TXT, CNAME, and SOA records.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/monitoring/dns.ts#L1-L317) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "description": "Domain to lookup"
    },
    "recordTypes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "A",
          "AAAA",
          "CNAME",
          "MX",
          "NS",
          "TXT",
          "SOA"
        ]
      },
      "default": [
        "A",
        "AAAA",
        "MX",
        "NS",
        "TXT"
      ]
    }
  },
  "required": [
    "domain"
  ]
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
    "domain": {
      "type": "string",
      "description": "Domain to lookup"
    },
    "recordTypes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "A",
          "AAAA",
          "CNAME",
          "MX",
          "NS",
          "TXT",
          "SOA"
        ]
      },
      "default": [
        "A",
        "AAAA",
        "MX",
        "NS",
        "TXT"
      ]
    }
  },
  "required": [
    "domain"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-monitor_dns_propagation-a6078a03"></a>

## monitor_dns_propagation

Handler: Website monitoring: Calls withCache.

```text
Check DNS propagation across multiple public DNS servers (Google, Cloudflare, OpenDNS, Quad9).
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/monitoring/dns.ts#L1-L317) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "description": "Domain to check"
    },
    "recordType": {
      "type": "string",
      "enum": [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "NS",
        "TXT"
      ],
      "default": "A"
    },
    "expectedValue": {
      "type": "string"
    }
  },
  "required": [
    "domain"
  ]
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
    "domain": {
      "type": "string",
      "description": "Domain to check"
    },
    "recordType": {
      "type": "string",
      "enum": [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "NS",
        "TXT"
      ],
      "default": "A"
    },
    "expectedValue": {
      "type": "string",
      "description": "Expected DNS value to check"
    }
  },
  "required": [
    "domain"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-monitor_certificate-80abbe84"></a>

## monitor_certificate

Handler: Website monitoring: Calls withCache.

```text
Check SSL/TLS certificate details including validity, expiration, issuer, and certificate chain.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/monitoring/certificates.ts#L1-L231) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "hostname": {
      "type": "string",
      "description": "Hostname to check"
    },
    "port": {
      "type": "number",
      "minimum": 1,
      "maximum": 65535,
      "default": 443
    }
  },
  "required": [
    "hostname"
  ]
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
    "hostname": {
      "type": "string",
      "description": "Hostname to check"
    },
    "port": {
      "type": "number",
      "minimum": 1,
      "maximum": 65535,
      "default": 443
    }
  },
  "required": [
    "hostname"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-security_ssl_analyze-07052581"></a>

## security_ssl_analyze

Handler: Website security: Calls withCache.

```text
Comprehensive SSL/TLS security analysis. Checks certificate validity, protocol support, cipher strength, and known vulnerabilities. Returns a security grade (A+ to F).
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/security/ssl.ts#L1-L421) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "hostname": {
      "type": "string",
      "description": "Hostname to analyze"
    },
    "port": {
      "type": "number",
      "minimum": 1,
      "maximum": 65535,
      "default": 443
    }
  },
  "required": [
    "hostname"
  ]
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
    "hostname": {
      "type": "string",
      "description": "Hostname to analyze"
    },
    "port": {
      "type": "number",
      "minimum": 1,
      "maximum": 65535,
      "default": 443
    }
  },
  "required": [
    "hostname"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-security_headers_check-edc69dca"></a>

## security_headers_check

Handler: Website security: Calls withCache.

```text
Analyze HTTP security headers. Checks for HSTS, CSP, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, and other security headers. Returns a security grade and recommendations.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/security/headers.ts#L1-L393) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to check"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to check"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-security_audit-fa10bca5"></a>

## security_audit

Handler: Website security: Calls withCache.

```text
Comprehensive security audit combining SSL analysis, security headers check, sensitive file exposure, and content security analysis. Returns an overall security grade with detailed findings.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/security/audit.ts#L1-L432) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to audit"
    },
    "deep": {
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to audit"
    },
    "deep": {
      "type": "boolean",
      "default": false,
      "description": "Enable deep scanning (slower)"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-security_safe_browsing-b74d1f56"></a>

## security_safe_browsing

Handler: Website security: Calls axios.post.

```text
Checks URLs against Google Safe Browsing API for malware, phishing, and other threats
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/security/safe-browsing.ts#L1-L177) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "urls": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uri"
      },
      "minItems": 1,
      "maxItems": 500,
      "description": "URLs to check (max 500)"
    },
    "threatTypes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "MALWARE",
          "SOCIAL_ENGINEERING",
          "UNWANTED_SOFTWARE",
          "POTENTIALLY_HARMFUL_APPLICATION"
        ]
      }
    },
    "platformTypes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "ANY_PLATFORM",
          "WINDOWS",
          "LINUX",
          "OSX",
          "ANDROID",
          "IOS"
        ]
      }
    }
  },
  "required": [
    "urls"
  ]
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
    "urls": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uri"
      },
      "minItems": 1,
      "maxItems": 500,
      "description": "URLs to check (max 500)"
    },
    "threatTypes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "MALWARE",
          "SOCIAL_ENGINEERING",
          "UNWANTED_SOFTWARE",
          "POTENTIALLY_HARMFUL_APPLICATION"
        ]
      },
      "description": "Threat types to check (default: all)"
    },
    "platformTypes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "ANY_PLATFORM",
          "WINDOWS",
          "LINUX",
          "OSX",
          "ANDROID",
          "IOS"
        ]
      },
      "description": "Platform types to check (default: ANY_PLATFORM)"
    }
  },
  "required": [
    "urls"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-seo_robots_analyze-2f96589a"></a>

## seo_robots_analyze

Handler: Technical SEO: Calls withCache.

```text
Analyze robots.txt file. Parses rules, sitemaps, and identifies SEO issues like blocking important paths or missing directives.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/seo-technical/robots.ts#L1-L424) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL or domain to analyze"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL or domain to analyze"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-seo_robots_test-632a1cb3"></a>

## seo_robots_test

Handler: Technical SEO: Calls withCache.

```text
Test if a specific URL is allowed or blocked by robots.txt rules for a given user agent.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/seo-technical/robots.ts#L1-L424) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to test"
    },
    "userAgent": {
      "type": "string",
      "default": "*"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to test"
    },
    "userAgent": {
      "type": "string",
      "default": "*",
      "description": "User agent to test"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-seo_sitemap_analyze-74dcc1db"></a>

## seo_sitemap_analyze

Handler: Technical SEO: Calls withCache.

```text
Analyze XML sitemap structure and content. Parses URLs, validates format, and identifies SEO issues like missing lastmod dates or URL limits.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/seo-technical/sitemap.ts#L1-L370) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "Sitemap URL or domain"
    },
    "maxUrls": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000,
      "default": 1000
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "Sitemap URL or domain"
    },
    "maxUrls": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000,
      "default": 1000,
      "description": "Maximum URLs to analyze"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-seo_meta_analyze-3a0846d3"></a>

## seo_meta_analyze

Handler: Technical SEO: Calls withCache.

```text
Analyze page meta tags including title, description, Open Graph, Twitter Cards, robots, and canonical. Returns SEO issues and recommendations.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/seo-technical/meta.ts#L1-L303) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-seo_structured_data-563bf28e"></a>

## seo_structured_data

Handler: Technical SEO: Calls withCache.

```text
Analyze structured data (JSON-LD, Microdata, RDFa). Extracts schema.org types, validates format, and provides recommendations for improving rich results.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/seo-technical/structured-data.ts#L1-L301) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-seo_redirect_check-8bfca33b"></a>

## seo_redirect_check

Handler: Technical SEO: Calls withCache.

```text
Follow and analyze redirect chains. Identifies redirect loops, long chains, and mixed protocol issues.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/seo-technical/redirects.ts#L1-L352) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to check"
    },
    "maxRedirects": {
      "type": "number",
      "minimum": 1,
      "maximum": 20,
      "default": 10
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to check"
    },
    "maxRedirects": {
      "type": "number",
      "minimum": 1,
      "maximum": 20,
      "default": 10
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-seo_canonical_check-8614ee58"></a>

## seo_canonical_check

Handler: Technical SEO: Calls withCache.

```text
Check canonical URL configuration. Validates both HTTP header and HTML link canonicals, detects conflicts and issues.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/seo-technical/redirects.ts#L1-L352) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to check"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to check"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-seo_heading_analysis-6cf3a3d8"></a>

## seo_heading_analysis

Handler: Technical SEO: Calls withCache.

```text
Analyzes heading structure (H1-H6) for SEO best practices including hierarchy, H1 usage, and accessibility
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/seo-technical/headings.ts#L1-L238) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-util_tech_detection-7008f611"></a>

## util_tech_detection

Handler: Website utilities: Calls withCache.

```text
Detect technologies used by a website including CMS, frameworks, analytics, CDN, web servers, and programming languages. Returns detected technologies with confidence levels.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/utilities/tech-detection.ts#L1-L477) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-util_broken_links-ea751c6d"></a>

## util_broken_links

Handler: Website utilities: Calls withCache.

```text
Check for broken links on a page. Tests internal and external links, identifies broken (4xx/5xx) and redirected (3xx) links.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/utilities/broken-links.ts#L1-L253) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to check"
    },
    "checkExternal": {
      "type": "boolean",
      "default": true
    },
    "maxLinks": {
      "type": "number",
      "minimum": 1,
      "maximum": 500,
      "default": 100
    },
    "timeout": {
      "type": "number",
      "minimum": 1000,
      "maximum": 30000,
      "default": 10000
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to check"
    },
    "checkExternal": {
      "type": "boolean",
      "default": true,
      "description": "Check external links"
    },
    "maxLinks": {
      "type": "number",
      "minimum": 1,
      "maximum": 500,
      "default": 100,
      "description": "Maximum links to check"
    },
    "timeout": {
      "type": "number",
      "minimum": 1000,
      "maximum": 30000,
      "default": 10000,
      "description": "Timeout per link in ms"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-util_whois_lookup-fde24ff1"></a>

## util_whois_lookup

Handler: Website utilities: Calls withCache.

```text
Look up WHOIS information for a domain. Returns registrar, creation date, expiry date, name servers, and domain status.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/utilities/whois.ts#L1-L283) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "description": "Domain to lookup"
    }
  },
  "required": [
    "domain"
  ]
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
    "domain": {
      "type": "string",
      "description": "Domain to lookup"
    }
  },
  "required": [
    "domain"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-util_headers_analysis-47417d50"></a>

## util_headers_analysis

Handler: Website utilities: Calls withCache.

```text
Analyze HTTP response headers in detail. Provides information about caching, compression, security, cookies, and server configuration.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/utilities/headers.ts#L1-L274) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-util_screenshot-db1000aa"></a>

## util_screenshot

Handler: Website utilities: Calls axios.get, axios.get, axios.get, axios.get, axios.get.

```text
Captures a screenshot of a web page with configurable device, viewport, and format options
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/utilities/screenshot.ts#L1-L203) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to capture"
    },
    "device": {
      "type": "string",
      "enum": [
        "desktop",
        "mobile",
        "tablet"
      ]
    },
    "fullPage": {
      "type": "boolean"
    },
    "width": {
      "type": "number",
      "minimum": 320,
      "maximum": 3840
    },
    "height": {
      "type": "number",
      "minimum": 240,
      "maximum": 2160
    },
    "format": {
      "type": "string",
      "enum": [
        "png",
        "jpeg",
        "webp"
      ]
    },
    "quality": {
      "type": "number",
      "minimum": 1,
      "maximum": 100
    },
    "delay": {
      "type": "number",
      "minimum": 0,
      "maximum": 10000
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to capture"
    },
    "device": {
      "type": "string",
      "enum": [
        "desktop",
        "mobile",
        "tablet"
      ],
      "description": "Device type"
    },
    "fullPage": {
      "type": "boolean",
      "description": "Capture full page instead of viewport"
    },
    "width": {
      "type": "number",
      "minimum": 320,
      "maximum": 3840,
      "description": "Viewport width"
    },
    "height": {
      "type": "number",
      "minimum": 240,
      "maximum": 2160,
      "description": "Viewport height"
    },
    "format": {
      "type": "string",
      "enum": [
        "png",
        "jpeg",
        "webp"
      ],
      "description": "Image format"
    },
    "quality": {
      "type": "number",
      "minimum": 1,
      "maximum": 100,
      "description": "Image quality for JPEG/WebP"
    },
    "delay": {
      "type": "number",
      "minimum": 0,
      "maximum": 10000,
      "description": "Delay in ms before capture"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Calls gtm.accounts.list through the Google Tag Manager v2 client. The declared pageSize is logged but not passed to accounts.list.

```text
Lists all Google Tag Manager accounts accessible to the authenticated user
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/accounts.ts#L1-L249) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200
    },
    "pageToken": {
      "type": "string"
    }
  }
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
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200,
      "description": "Maximum results per page (1-200)"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Calls gtm.accounts.containers.list through the Google Tag Manager v2 client.

```text
Lists all containers within a GTM account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/accounts.ts#L1-L249) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "accountId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
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

<a id="tool-gtm_get_container-fdc6e39c"></a>

## gtm_get_container

Handler: Calls gtm.accounts.containers.get through the Google Tag Manager v2 client.

```text
Gets detailed information about a specific GTM container
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/accounts.ts#L1-L249) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
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

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Calls gtm.accounts.containers.workspaces.list through the Google Tag Manager v2 client.

```text
Lists all workspaces in a GTM container
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/accounts.ts#L1-L249) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
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

<a id="tool-gtm_get_workspace-573c6822"></a>

## gtm_get_workspace

Handler: Calls gtm.accounts.containers.workspaces.get through the Google Tag Manager v2 client.

```text
Gets detailed information about a specific GTM workspace
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/accounts.ts#L1-L249) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
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

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Calls gtm.accounts.containers.workspaces.tags.list through the Google Tag Manager v2 client.

```text
Lists all tags in a GTM workspace
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/tags.ts#L1-L309) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
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

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Calls gtm.accounts.containers.workspaces.tags.get through the Google Tag Manager v2 client.

```text
Gets a specific tag configuration from GTM
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/tags.ts#L1-L309) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "tagId": {
      "type": "string",
      "description": "GTM Tag ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "tagId": {
      "type": "string",
      "description": "GTM Tag ID"
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

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Calls gtm.accounts.containers.workspaces.tags.create through the Google Tag Manager v2 client.

```text
Creates a new tag in a GTM workspace
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/tags.ts#L1-L309) · Schema: literal-source.

Exposure: Listed in both tiers; execution passes mutation kill switches, site scope and approval gates in guardedExecute.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "tag": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Tag name"
        },
        "type": {
          "type": "string",
          "description": "Tag type (e.g., gaawe for GA4, html for Custom HTML)"
        },
        "parameter": {
          "type": "array",
          "items": {}
        },
        "firingTriggerId": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Trigger IDs that fire this tag"
        },
        "blockingTriggerId": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "paused": {
          "type": "boolean"
        }
      },
      "required": [
        "name",
        "type",
        "firingTriggerId"
      ]
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tag"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "tag": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Tag name"
        },
        "type": {
          "type": "string",
          "description": "Tag type (e.g., gaawe for GA4, html for Custom HTML)"
        },
        "parameter": {
          "type": "array",
          "items": {
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
              },
              "list": {
                "type": "array",
                "items": {
                  "$ref": "#/properties/tag/properties/parameter/items"
                }
              },
              "map": {
                "type": "array",
                "items": {
                  "$ref": "#/properties/tag/properties/parameter/items"
                }
              }
            },
            "required": [
              "type",
              "key"
            ],
            "additionalProperties": false
          },
          "description": "Tag parameters"
        },
        "firingTriggerId": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Trigger IDs that fire this tag"
        },
        "blockingTriggerId": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Trigger IDs that block this tag"
        },
        "paused": {
          "type": "boolean",
          "description": "Whether the tag is paused"
        }
      },
      "required": [
        "name",
        "type",
        "firingTriggerId"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tag"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Calls gtm.accounts.containers.workspaces.tags.update through the Google Tag Manager v2 client.

```text
Updates an existing tag in GTM
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/tags.ts#L1-L309) · Schema: literal-source.

Exposure: Listed in both tiers; execution passes mutation kill switches, site scope and approval gates in guardedExecute.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "tagId": {
      "type": "string",
      "description": "GTM Tag ID"
    },
    "fingerprint": {
      "type": "string",
      "description": "Tag fingerprint for optimistic locking"
    },
    "tag": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "parameter": {
          "type": "array",
          "items": {}
        },
        "firingTriggerId": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "blockingTriggerId": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "paused": {
          "type": "boolean"
        }
      }
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId",
    "fingerprint",
    "tag"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "tagId": {
      "type": "string",
      "description": "GTM Tag ID"
    },
    "fingerprint": {
      "type": "string",
      "description": "Tag fingerprint for optimistic locking"
    },
    "tag": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "New tag name"
        },
        "type": {
          "type": "string",
          "description": "New tag type"
        },
        "parameter": {
          "type": "array",
          "items": {
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
              },
              "list": {
                "type": "array",
                "items": {
                  "$ref": "#/properties/tag/properties/parameter/items"
                }
              },
              "map": {
                "type": "array",
                "items": {
                  "$ref": "#/properties/tag/properties/parameter/items"
                }
              }
            },
            "required": [
              "type",
              "key"
            ],
            "additionalProperties": false
          },
          "description": "New tag parameters"
        },
        "firingTriggerId": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "New firing trigger IDs"
        },
        "blockingTriggerId": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "New blocking trigger IDs"
        },
        "paused": {
          "type": "boolean",
          "description": "Whether the tag is paused"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId",
    "fingerprint",
    "tag"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: Calls gtm.accounts.containers.workspaces.tags.delete through the Google Tag Manager v2 client.

```text
Deletes a tag from a GTM workspace
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/tags.ts#L1-L309) · Schema: literal-source.

Exposure: Listed in both tiers; execution passes mutation kill switches, site scope and approval gates in guardedExecute.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "tagId": {
      "type": "string",
      "description": "GTM Tag ID to delete"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "tagId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "tagId": {
      "type": "string",
      "description": "GTM Tag ID to delete"
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

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Calls gtm.accounts.containers.workspaces.triggers.list through the Google Tag Manager v2 client.

```text
Lists all triggers in a GTM workspace
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/triggers.ts#L1-L303) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
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

<a id="tool-gtm_get_trigger-669e5c62"></a>

## gtm_get_trigger

Handler: Calls gtm.accounts.containers.workspaces.triggers.get through the Google Tag Manager v2 client.

```text
Gets a specific trigger configuration from GTM
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/triggers.ts#L1-L303) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "triggerId": {
      "type": "string",
      "description": "GTM Trigger ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "triggerId": {
      "type": "string",
      "description": "GTM Trigger ID"
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

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Calls gtm.accounts.containers.workspaces.triggers.create through the Google Tag Manager v2 client.

```text
Creates a new trigger in a GTM workspace
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/triggers.ts#L1-L303) · Schema: literal-source.

Exposure: Listed in both tiers; execution passes mutation kill switches, site scope and approval gates in guardedExecute.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "trigger": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Trigger name"
        },
        "type": {
          "type": "string",
          "description": "Trigger type (e.g., pageview, click, customEvent, formSubmission, etc.)"
        },
        "filter": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "parameter": {
                "type": "array",
                "items": {}
              }
            },
            "required": [
              "type",
              "parameter"
            ]
          }
        },
        "autoEventFilter": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "parameter": {
                "type": "array",
                "items": {}
              }
            },
            "required": [
              "type",
              "parameter"
            ]
          }
        },
        "customEventFilter": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "parameter": {
                "type": "array",
                "items": {}
              }
            },
            "required": [
              "type",
              "parameter"
            ]
          }
        }
      },
      "required": [
        "name",
        "type"
      ]
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "trigger"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "trigger": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Trigger name"
        },
        "type": {
          "type": "string",
          "description": "Trigger type (e.g., pageview, click, customEvent, formSubmission, etc.)"
        },
        "filter": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "parameter": {
                "type": "array",
                "items": {
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
                    },
                    "list": {
                      "type": "array",
                      "items": {
                        "$ref": "#/properties/trigger/properties/filter/items/properties/parameter/items"
                      }
                    },
                    "map": {
                      "type": "array",
                      "items": {
                        "$ref": "#/properties/trigger/properties/filter/items/properties/parameter/items"
                      }
                    }
                  },
                  "required": [
                    "type",
                    "key"
                  ],
                  "additionalProperties": false
                }
              }
            },
            "required": [
              "type",
              "parameter"
            ],
            "additionalProperties": false
          },
          "description": "Trigger filters"
        },
        "autoEventFilter": {
          "type": "array",
          "items": {
            "$ref": "#/properties/trigger/properties/filter/items"
          },
          "description": "Auto event filters"
        },
        "customEventFilter": {
          "type": "array",
          "items": {
            "$ref": "#/properties/trigger/properties/filter/items"
          },
          "description": "Custom event filters"
        }
      },
      "required": [
        "name",
        "type"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "trigger"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: Calls gtm.accounts.containers.workspaces.triggers.update through the Google Tag Manager v2 client.

```text
Updates an existing trigger in GTM
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/triggers.ts#L1-L303) · Schema: literal-source.

Exposure: Listed in both tiers; execution passes mutation kill switches, site scope and approval gates in guardedExecute.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "triggerId": {
      "type": "string",
      "description": "GTM Trigger ID"
    },
    "fingerprint": {
      "type": "string",
      "description": "Trigger fingerprint for optimistic locking"
    },
    "trigger": {
      "type": "object",
      "properties": {
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
                "type": "string"
              },
              "parameter": {
                "type": "array",
                "items": {}
              }
            },
            "required": [
              "type",
              "parameter"
            ]
          }
        },
        "autoEventFilter": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "parameter": {
                "type": "array",
                "items": {}
              }
            },
            "required": [
              "type",
              "parameter"
            ]
          }
        },
        "customEventFilter": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "parameter": {
                "type": "array",
                "items": {}
              }
            },
            "required": [
              "type",
              "parameter"
            ]
          }
        }
      }
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId",
    "fingerprint",
    "trigger"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "triggerId": {
      "type": "string",
      "description": "GTM Trigger ID"
    },
    "fingerprint": {
      "type": "string",
      "description": "Trigger fingerprint for optimistic locking"
    },
    "trigger": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "New trigger name"
        },
        "type": {
          "type": "string",
          "description": "New trigger type"
        },
        "filter": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "string"
              },
              "parameter": {
                "type": "array",
                "items": {
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
                    },
                    "list": {
                      "type": "array",
                      "items": {
                        "$ref": "#/properties/trigger/properties/filter/items/properties/parameter/items"
                      }
                    },
                    "map": {
                      "type": "array",
                      "items": {
                        "$ref": "#/properties/trigger/properties/filter/items/properties/parameter/items"
                      }
                    }
                  },
                  "required": [
                    "type",
                    "key"
                  ],
                  "additionalProperties": false
                }
              }
            },
            "required": [
              "type",
              "parameter"
            ],
            "additionalProperties": false
          },
          "description": "New trigger filters"
        },
        "autoEventFilter": {
          "type": "array",
          "items": {
            "$ref": "#/properties/trigger/properties/filter/items"
          },
          "description": "New auto event filters"
        },
        "customEventFilter": {
          "type": "array",
          "items": {
            "$ref": "#/properties/trigger/properties/filter/items"
          },
          "description": "New custom event filters"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId",
    "fingerprint",
    "trigger"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_trigger-dac3085f"></a>

## gtm_delete_trigger

Handler: Calls gtm.accounts.containers.workspaces.triggers.delete through the Google Tag Manager v2 client.

```text
Deletes a trigger from a GTM workspace
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/triggers.ts#L1-L303) · Schema: literal-source.

Exposure: Listed in both tiers; execution passes mutation kill switches, site scope and approval gates in guardedExecute.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "triggerId": {
      "type": "string",
      "description": "GTM Trigger ID to delete"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "triggerId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "triggerId": {
      "type": "string",
      "description": "GTM Trigger ID to delete"
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

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Calls gtm.accounts.containers.workspaces.variables.list through the Google Tag Manager v2 client.

```text
Lists all variables in a GTM workspace
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/variables.ts#L1-L281) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
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

<a id="tool-gtm_get_variable-e6ff3763"></a>

## gtm_get_variable

Handler: Calls gtm.accounts.containers.workspaces.variables.get through the Google Tag Manager v2 client.

```text
Gets a specific variable configuration from GTM
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/variables.ts#L1-L281) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "variableId": {
      "type": "string",
      "description": "GTM Variable ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "variableId": {
      "type": "string",
      "description": "GTM Variable ID"
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

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Calls gtm.accounts.containers.workspaces.variables.create through the Google Tag Manager v2 client.

```text
Creates a new variable in a GTM workspace
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/variables.ts#L1-L281) · Schema: literal-source.

Exposure: Listed in both tiers; execution passes mutation kill switches, site scope and approval gates in guardedExecute.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "variable": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Variable name"
        },
        "type": {
          "type": "string",
          "description": "Variable type (e.g., v for Data Layer, jsm for Custom JavaScript, c for Constant)"
        },
        "parameter": {
          "type": "array",
          "items": {}
        }
      },
      "required": [
        "name",
        "type"
      ]
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variable"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "variable": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Variable name"
        },
        "type": {
          "type": "string",
          "description": "Variable type (e.g., v for Data Layer, jsm for Custom JavaScript, c for Constant)"
        },
        "parameter": {
          "type": "array",
          "items": {
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
              },
              "list": {
                "type": "array",
                "items": {
                  "$ref": "#/properties/variable/properties/parameter/items"
                }
              },
              "map": {
                "type": "array",
                "items": {
                  "$ref": "#/properties/variable/properties/parameter/items"
                }
              }
            },
            "required": [
              "type",
              "key"
            ],
            "additionalProperties": false
          },
          "description": "Variable parameters"
        }
      },
      "required": [
        "name",
        "type"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variable"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: Calls gtm.accounts.containers.workspaces.variables.update through the Google Tag Manager v2 client.

```text
Updates an existing variable in GTM
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/variables.ts#L1-L281) · Schema: literal-source.

Exposure: Listed in both tiers; execution passes mutation kill switches, site scope and approval gates in guardedExecute.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "variableId": {
      "type": "string",
      "description": "GTM Variable ID"
    },
    "fingerprint": {
      "type": "string",
      "description": "Variable fingerprint for optimistic locking"
    },
    "variable": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "parameter": {
          "type": "array",
          "items": {}
        }
      }
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId",
    "fingerprint",
    "variable"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "variableId": {
      "type": "string",
      "description": "GTM Variable ID"
    },
    "fingerprint": {
      "type": "string",
      "description": "Variable fingerprint for optimistic locking"
    },
    "variable": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "New variable name"
        },
        "type": {
          "type": "string",
          "description": "New variable type"
        },
        "parameter": {
          "type": "array",
          "items": {
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
              },
              "list": {
                "type": "array",
                "items": {
                  "$ref": "#/properties/variable/properties/parameter/items"
                }
              },
              "map": {
                "type": "array",
                "items": {
                  "$ref": "#/properties/variable/properties/parameter/items"
                }
              }
            },
            "required": [
              "type",
              "key"
            ],
            "additionalProperties": false
          },
          "description": "New variable parameters"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId",
    "fingerprint",
    "variable"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: Calls gtm.accounts.containers.workspaces.variables.delete through the Google Tag Manager v2 client.

```text
Deletes a variable from a GTM workspace
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/variables.ts#L1-L281) · Schema: literal-source.

Exposure: Listed in both tiers; execution passes mutation kill switches, site scope and approval gates in guardedExecute.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "variableId": {
      "type": "string",
      "description": "GTM Variable ID to delete"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "variableId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID"
    },
    "variableId": {
      "type": "string",
      "description": "GTM Variable ID to delete"
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

<a id="tool-gtm_list_versions-f9371c4c"></a>

## gtm_list_versions

Handler: Calls gtm.accounts.containers.version\_headers.list through the Google Tag Manager v2 client.

```text
Lists all container versions in GTM
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/versions.ts#L1-L307) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "includeDeleted": {
      "type": "boolean"
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "includeDeleted": {
      "type": "boolean",
      "description": "Include deleted versions"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
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

<a id="tool-gtm_get_version-c83b7c02"></a>

## gtm_get_version

Handler: Calls gtm.accounts.containers.versions.get through the Google Tag Manager v2 client.

```text
Gets a specific container version from GTM
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/versions.ts#L1-L307) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "containerVersionId": {
      "type": "string",
      "description": "GTM Container Version ID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "containerVersionId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "containerVersionId": {
      "type": "string",
      "description": "GTM Container Version ID"
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

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: Calls gtm.accounts.containers.workspaces.create\_version through the Google Tag Manager v2 client.

```text
Creates a new container version from a workspace
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/versions.ts#L1-L307) · Schema: literal-source.

Exposure: Listed in both tiers; execution passes mutation kill switches, site scope and approval gates in guardedExecute.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID to create version from"
    },
    "name": {
      "type": "string",
      "description": "Version name"
    },
    "notes": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "workspaceId": {
      "type": "string",
      "description": "GTM Workspace ID to create version from"
    },
    "name": {
      "type": "string",
      "description": "Version name"
    },
    "notes": {
      "type": "string",
      "description": "Version notes/description"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_publish_version-0cc97535"></a>

## gtm_publish_version

Handler: Calls gtm.accounts.containers.versions.publish through the Google Tag Manager v2 client.

```text
Publishes a container version to make it live
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/versions.ts#L1-L307) · Schema: literal-source.

Exposure: Listed in both tiers; execution passes mutation kill switches, site scope and approval gates in guardedExecute.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "containerVersionId": {
      "type": "string",
      "description": "GTM Container Version ID to publish"
    },
    "fingerprint": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "containerVersionId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    },
    "containerVersionId": {
      "type": "string",
      "description": "GTM Container Version ID to publish"
    },
    "fingerprint": {
      "type": "string",
      "description": "Version fingerprint for optimistic locking"
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

<a id="tool-gtm_get_live_version-986da5ee"></a>

## gtm_get_live_version

Handler: Calls gtm.accounts.containers.versions.live through the Google Tag Manager v2 client. Any API error is swallowed and returned as null.

```text
Gets the currently published (live) container version
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/gtm/versions.ts#L1-L307) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GTM Account ID"
    },
    "containerId": {
      "type": "string",
      "description": "GTM Container ID"
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

<a id="tool-ga4_list_accounts-68810811"></a>

## ga4_list_accounts

Handler: Google Analytics 4: Calls analyticsAdmin.accounts.list.

```text
Lists all Google Analytics 4 accounts accessible to the authenticated user
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/accounts.ts#L1-L205) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200
    },
    "pageToken": {
      "type": "string"
    }
  }
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
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200,
      "description": "Maximum results per page (1-200)"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_get_account-e1d46f41"></a>

## ga4_get_account

Handler: Google Analytics 4: Calls analyticsAdmin.accounts.get.

```text
Gets details of a specific GA4 account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/accounts.ts#L1-L205) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GA4 Account ID (numeric ID or full resource name)"
    }
  },
  "required": [
    "accountId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GA4 Account ID (numeric ID or full resource name)"
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

<a id="tool-ga4_list_properties-44fea7fa"></a>

## ga4_list_properties

Handler: Google Analytics 4: Calls analyticsAdmin.properties.list.

```text
Lists all GA4 properties, optionally filtered by account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/accounts.ts#L1-L205) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200
    },
    "pageToken": {
      "type": "string"
    }
  }
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
    "accountId": {
      "type": "string",
      "description": "Filter by account ID (optional)"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200,
      "description": "Maximum results per page (1-200)"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_get_property-aa64c1ca"></a>

## ga4_get_property

Handler: Google Analytics 4: Calls analyticsAdmin.properties.get.

```text
Gets details of a specific GA4 property
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/accounts.ts#L1-L205) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID (numeric ID or full resource name)"
    }
  },
  "required": [
    "propertyId"
  ]
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
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID (numeric ID or full resource name)"
    }
  },
  "required": [
    "propertyId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_run_report-a0a35566"></a>

## ga4_run_report

Handler: Google Analytics 4: Calls analyticsData.properties.runReport.

```text
Runs a custom report query against GA4 data
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/reports.ts#L1-L430) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "dateRanges": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "startDate": {
            "type": "string",
            "description": "Start date (YYYY-MM-DD, today, yesterday, NdaysAgo)"
          },
          "endDate": {
            "type": "string",
            "description": "End date (YYYY-MM-DD, today, yesterday, NdaysAgo)"
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "startDate",
          "endDate"
        ]
      },
      "minItems": 1,
      "maxItems": 4,
      "description": "Date ranges to query (1-4)"
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Dimension name (e.g., city, deviceCategory, pagePath)"
          }
        },
        "required": [
          "name"
        ]
      }
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Metric name (e.g., activeUsers, sessions, screenPageViews)"
          }
        },
        "required": [
          "name"
        ]
      },
      "minItems": 1,
      "description": "Metrics to include"
    },
    "dimensionFilter": {},
    "metricFilter": {},
    "orderBys": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "dimension": {
            "type": "object",
            "properties": {
              "dimensionName": {
                "type": "string"
              },
              "orderType": {
                "type": "string",
                "enum": [
                  "ALPHANUMERIC",
                  "CASE_INSENSITIVE_ALPHANUMERIC",
                  "NUMERIC"
                ]
              }
            },
            "required": [
              "dimensionName"
            ]
          },
          "metric": {
            "type": "object",
            "properties": {
              "metricName": {
                "type": "string"
              }
            },
            "required": [
              "metricName"
            ]
          },
          "desc": {
            "type": "boolean"
          }
        }
      }
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 100000
    },
    "offset": {
      "type": "number",
      "minimum": 0
    },
    "keepEmptyRows": {
      "type": "boolean"
    }
  },
  "required": [
    "propertyId",
    "dateRanges",
    "metrics"
  ]
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
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "dateRanges": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "startDate": {
            "type": "string",
            "description": "Start date (YYYY-MM-DD, today, yesterday, NdaysAgo)"
          },
          "endDate": {
            "type": "string",
            "description": "End date (YYYY-MM-DD, today, yesterday, NdaysAgo)"
          },
          "name": {
            "type": "string",
            "description": "Name for this date range"
          }
        },
        "required": [
          "startDate",
          "endDate"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 4,
      "description": "Date ranges to query (1-4)"
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Dimension name (e.g., city, deviceCategory, pagePath)"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "description": "Dimensions to include"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Metric name (e.g., activeUsers, sessions, screenPageViews)"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "description": "Metrics to include"
    },
    "dimensionFilter": {
      "description": "Filter expression for dimensions"
    },
    "metricFilter": {
      "description": "Filter expression for metrics"
    },
    "orderBys": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "dimension": {
            "type": "object",
            "properties": {
              "dimensionName": {
                "type": "string"
              },
              "orderType": {
                "type": "string",
                "enum": [
                  "ALPHANUMERIC",
                  "CASE_INSENSITIVE_ALPHANUMERIC",
                  "NUMERIC"
                ]
              }
            },
            "required": [
              "dimensionName"
            ],
            "additionalProperties": false
          },
          "metric": {
            "type": "object",
            "properties": {
              "metricName": {
                "type": "string"
              }
            },
            "required": [
              "metricName"
            ],
            "additionalProperties": false
          },
          "desc": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      },
      "description": "Ordering of results"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 100000,
      "description": "Maximum rows to return"
    },
    "offset": {
      "type": "number",
      "minimum": 0,
      "description": "Row offset for pagination"
    },
    "keepEmptyRows": {
      "type": "boolean",
      "description": "Include rows with all zero metrics"
    }
  },
  "required": [
    "propertyId",
    "dateRanges",
    "metrics"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_run_realtime_report-8f675773"></a>

## ga4_run_realtime_report

Handler: Google Analytics 4: Calls analyticsData.properties.runRealtimeReport.

```text
Gets real-time data from GA4 (last 30 minutes)
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/reports.ts#L1-L430) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Dimension name (e.g., city, deviceCategory, pagePath)"
          }
        },
        "required": [
          "name"
        ]
      }
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Metric name (e.g., activeUsers, sessions, screenPageViews)"
          }
        },
        "required": [
          "name"
        ]
      },
      "minItems": 1,
      "description": "Metrics to include"
    },
    "dimensionFilter": {},
    "metricFilter": {},
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 100000
    }
  },
  "required": [
    "propertyId",
    "metrics"
  ]
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
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Dimension name (e.g., city, deviceCategory, pagePath)"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "description": "Dimensions to include"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Metric name (e.g., activeUsers, sessions, screenPageViews)"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "description": "Metrics to include"
    },
    "dimensionFilter": {
      "description": "Filter expression for dimensions"
    },
    "metricFilter": {
      "description": "Filter expression for metrics"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 100000,
      "description": "Maximum rows to return"
    }
  },
  "required": [
    "propertyId",
    "metrics"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_traffic_overview-1bdf55e1"></a>

## ga4_traffic_overview

Handler: Google Analytics 4: Gets a comprehensive traffic overview including sources, pages, devices, and geography.

```text
Gets a comprehensive traffic overview including sources, pages, devices, and geography
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/reports.ts#L1-L430) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date"
        },
        "endDate": {
          "type": "string",
          "description": "End date"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ]
    },
    "compareTo": {
      "type": "string",
      "enum": [
        "previousPeriod",
        "previousYear"
      ]
    }
  },
  "required": [
    "propertyId",
    "dateRange"
  ]
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
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date"
        },
        "endDate": {
          "type": "string",
          "description": "End date"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ],
      "additionalProperties": false
    },
    "compareTo": {
      "type": "string",
      "enum": [
        "previousPeriod",
        "previousYear"
      ],
      "description": "Comparison period"
    }
  },
  "required": [
    "propertyId",
    "dateRange"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_get_metadata-723ca4d3"></a>

## ga4_get_metadata

Handler: Google Analytics 4: Calls analyticsData.properties.getMetadata.

```text
Gets available dimensions and metrics for a GA4 property
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/metadata.ts#L1-L361) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    }
  },
  "required": [
    "propertyId"
  ]
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
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    }
  },
  "required": [
    "propertyId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_list_custom_dimensions-75905509"></a>

## ga4_list_custom_dimensions

Handler: Google Analytics 4: Calls analyticsAdmin.properties.customDimensions.list.

```text
Lists custom dimensions defined for a GA4 property
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/metadata.ts#L1-L361) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "propertyId"
  ]
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
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200,
      "description": "Maximum results per page"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    }
  },
  "required": [
    "propertyId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_list_custom_metrics-64631ca9"></a>

## ga4_list_custom_metrics

Handler: Google Analytics 4: Calls analyticsAdmin.properties.customMetrics.list.

```text
Lists custom metrics defined for a GA4 property
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/metadata.ts#L1-L361) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "propertyId"
  ]
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
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200,
      "description": "Maximum results per page"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    }
  },
  "required": [
    "propertyId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_list_conversion_events-bfbcc836"></a>

## ga4_list_conversion_events

Handler: Google Analytics 4: Calls analyticsAdmin.properties.conversionEvents.list.

```text
Lists conversion events for a GA4 property
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/metadata.ts#L1-L361) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "propertyId"
  ]
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
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200,
      "description": "Maximum results per page"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    }
  },
  "required": [
    "propertyId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_list_data_streams-e2cea14d"></a>

## ga4_list_data_streams

Handler: Google Analytics 4: Calls analyticsAdmin.properties.dataStreams.list.

```text
Lists data streams for a GA4 property
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/metadata.ts#L1-L361) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "propertyId"
  ]
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
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200,
      "description": "Maximum results per page"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    }
  },
  "required": [
    "propertyId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_list_audiences-35c4ca43"></a>

## ga4_list_audiences

Handler: Google Analytics 4: Calls alphaClient.properties.audiences.list.

```text
Lists configured audiences for a GA4 property
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/audiences.ts#L1-L302) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "propertyId"
  ]
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
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 200,
      "description": "Maximum results per page"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    }
  },
  "required": [
    "propertyId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ga4_run_funnel_report-1b7d80eb"></a>

## ga4_run_funnel_report

Handler: Google Analytics 4: Calls dataClient.properties.runFunnelReport.

```text
Runs a funnel analysis report to understand user flow through defined steps
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/analytics/audiences.ts#L1-L302) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "dateRanges": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "startDate": {
            "type": "string",
            "description": "Start date (YYYY-MM-DD)"
          },
          "endDate": {
            "type": "string",
            "description": "End date (YYYY-MM-DD)"
          }
        },
        "required": [
          "startDate",
          "endDate"
        ]
      },
      "minItems": 1,
      "maxItems": 2,
      "description": "Date ranges"
    },
    "funnel": {
      "type": "object",
      "properties": {
        "isOpenFunnel": {
          "type": "boolean"
        },
        "steps": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "description": "Step name"
              },
              "filterExpression": {
                "description": "Filter expression for this step"
              },
              "isDirectlyFollowedBy": {
                "type": "boolean"
              },
              "withinDurationFromPriorStep": {
                "type": "string"
              }
            },
            "required": [
              "name"
            ]
          },
          "minItems": 2,
          "description": "Funnel steps (minimum 2)"
        }
      },
      "required": [
        "steps"
      ]
    },
    "funnelBreakdown": {
      "type": "object",
      "properties": {
        "breakdownDimension": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "Dimension name to break down by"
            }
          },
          "required": [
            "name"
          ]
        }
      },
      "required": [
        "breakdownDimension"
      ]
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000
    }
  },
  "required": [
    "propertyId",
    "dateRanges",
    "funnel"
  ]
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
    "propertyId": {
      "type": "string",
      "description": "GA4 Property ID"
    },
    "dateRanges": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "startDate": {
            "type": "string",
            "description": "Start date (YYYY-MM-DD)"
          },
          "endDate": {
            "type": "string",
            "description": "End date (YYYY-MM-DD)"
          }
        },
        "required": [
          "startDate",
          "endDate"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 2,
      "description": "Date ranges"
    },
    "funnel": {
      "type": "object",
      "properties": {
        "isOpenFunnel": {
          "type": "boolean",
          "description": "Whether funnel is open (users can enter at any step)"
        },
        "steps": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "description": "Step name"
              },
              "filterExpression": {
                "description": "Filter expression for this step"
              },
              "isDirectlyFollowedBy": {
                "type": "boolean",
                "description": "Step must directly follow previous"
              },
              "withinDurationFromPriorStep": {
                "type": "string",
                "description": "Duration limit from prior step"
              }
            },
            "required": [
              "name"
            ],
            "additionalProperties": false
          },
          "minItems": 2,
          "description": "Funnel steps (minimum 2)"
        }
      },
      "required": [
        "steps"
      ],
      "additionalProperties": false
    },
    "funnelBreakdown": {
      "type": "object",
      "properties": {
        "breakdownDimension": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string",
              "description": "Dimension name to break down by"
            }
          },
          "required": [
            "name"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "breakdownDimension"
      ],
      "additionalProperties": false,
      "description": "Optional breakdown dimension"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000,
      "description": "Maximum rows to return"
    }
  },
  "required": [
    "propertyId",
    "dateRanges",
    "funnel"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_list_sites-69b36040"></a>

## gsc_list_sites

Handler: Google Search Console: Calls searchConsole.sites.list.

```text
Lists all sites in Google Search Console accessible to the authenticated user
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/search-console/sites.ts#L1-L80) · Schema: literal-source.

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

</details>

<a id="tool-gsc_get_site-2f8523bd"></a>

## gsc_get_site

Handler: Google Search Console: Calls searchConsole.sites.get.

```text
Gets information about a specific site in Search Console
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/search-console/sites.ts#L1-L80) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "The site URL (e.g., https://example.com/ or sc-domain:example.com)"
    }
  },
  "required": [
    "siteUrl"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "The site URL (e.g., https://example.com/ or sc-domain:example.com)"
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_query_performance-d1af9278"></a>

## gsc_query_performance

Handler: Google Search Console: Calls searchConsole.searchanalytics.query.

```text
Queries search performance data from Google Search Console
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/search-console/performance.ts#L1-L290) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Site URL (e.g., https://example.com/ or sc-domain:example.com)"
    },
    "startDate": {
      "type": "string",
      "description": "Start date in YYYY-MM-DD format"
    },
    "endDate": {
      "type": "string",
      "description": "End date in YYYY-MM-DD format"
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
          "date"
        ]
      }
    },
    "dimensionFilterGroups": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "groupType": {
            "type": "string",
            "const": "and"
          },
          "filters": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "dimension": {
                  "type": "string"
                },
                "operator": {
                  "type": "string",
                  "enum": [
                    "equals",
                    "contains",
                    "notContains",
                    "includingRegex",
                    "excludingRegex"
                  ]
                },
                "expression": {
                  "type": "string"
                }
              },
              "required": [
                "dimension",
                "operator",
                "expression"
              ]
            }
          }
        },
        "required": [
          "filters"
        ]
      }
    },
    "aggregationType": {
      "type": "string",
      "enum": [
        "auto",
        "byProperty",
        "byPage"
      ]
    },
    "rowLimit": {
      "type": "number",
      "minimum": 1,
      "maximum": 25000
    },
    "startRow": {
      "type": "number",
      "minimum": 0
    },
    "dataState": {
      "type": "string",
      "enum": [
        "all",
        "final"
      ]
    },
    "type": {
      "type": "string",
      "enum": [
        "web",
        "image",
        "video",
        "news",
        "discover",
        "googleNews"
      ]
    }
  },
  "required": [
    "siteUrl",
    "startDate",
    "endDate"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "Site URL (e.g., https://example.com/ or sc-domain:example.com)"
    },
    "startDate": {
      "type": "string",
      "description": "Start date in YYYY-MM-DD format"
    },
    "endDate": {
      "type": "string",
      "description": "End date in YYYY-MM-DD format"
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
          "date"
        ]
      },
      "description": "Dimensions to group by"
    },
    "dimensionFilterGroups": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "groupType": {
            "type": "string",
            "const": "and"
          },
          "filters": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "dimension": {
                  "type": "string"
                },
                "operator": {
                  "type": "string",
                  "enum": [
                    "equals",
                    "contains",
                    "notContains",
                    "includingRegex",
                    "excludingRegex"
                  ]
                },
                "expression": {
                  "type": "string"
                }
              },
              "required": [
                "dimension",
                "operator",
                "expression"
              ],
              "additionalProperties": false
            }
          }
        },
        "required": [
          "filters"
        ],
        "additionalProperties": false
      },
      "description": "Filters to apply"
    },
    "aggregationType": {
      "type": "string",
      "enum": [
        "auto",
        "byProperty",
        "byPage"
      ],
      "description": "Aggregation type"
    },
    "rowLimit": {
      "type": "number",
      "minimum": 1,
      "maximum": 25000,
      "description": "Maximum rows to return (default 1000)"
    },
    "startRow": {
      "type": "number",
      "minimum": 0,
      "description": "Starting row for pagination"
    },
    "dataState": {
      "type": "string",
      "enum": [
        "all",
        "final"
      ],
      "description": "Data freshness"
    },
    "type": {
      "type": "string",
      "enum": [
        "web",
        "image",
        "video",
        "news",
        "discover",
        "googleNews"
      ],
      "description": "Search type"
    }
  },
  "required": [
    "siteUrl",
    "startDate",
    "endDate"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_top_queries-f3356404"></a>

## gsc_top_queries

Handler: Google Search Console: Calls searchConsole.searchanalytics.query.

```text
Gets top search queries for a site with summary statistics
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/search-console/performance.ts#L1-L290) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Site URL"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date"
        },
        "endDate": {
          "type": "string",
          "description": "End date"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ]
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 1000
    },
    "filters": {
      "type": "object",
      "properties": {
        "page": {
          "type": "string"
        },
        "country": {
          "type": "string"
        },
        "device": {
          "type": "string",
          "enum": [
            "MOBILE",
            "DESKTOP",
            "TABLET"
          ]
        }
      }
    }
  },
  "required": [
    "siteUrl",
    "dateRange"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "Site URL"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date"
        },
        "endDate": {
          "type": "string",
          "description": "End date"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ],
      "additionalProperties": false
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 1000,
      "description": "Number of queries to return (default 50)"
    },
    "filters": {
      "type": "object",
      "properties": {
        "page": {
          "type": "string",
          "description": "Filter by page URL"
        },
        "country": {
          "type": "string",
          "description": "Filter by country code"
        },
        "device": {
          "type": "string",
          "enum": [
            "MOBILE",
            "DESKTOP",
            "TABLET"
          ],
          "description": "Filter by device"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "siteUrl",
    "dateRange"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_top_pages-f18fb1c2"></a>

## gsc_top_pages

Handler: Google Search Console: Calls searchConsole.searchanalytics.query.

```text
Gets top performing pages for a site
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/search-console/performance.ts#L1-L290) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Site URL"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date"
        },
        "endDate": {
          "type": "string",
          "description": "End date"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ]
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 1000
    }
  },
  "required": [
    "siteUrl",
    "dateRange"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "Site URL"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date"
        },
        "endDate": {
          "type": "string",
          "description": "End date"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ],
      "additionalProperties": false
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 1000,
      "description": "Number of pages to return (default 50)"
    }
  },
  "required": [
    "siteUrl",
    "dateRange"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_list_sitemaps-e4a908e7"></a>

## gsc_list_sitemaps

Handler: Google Search Console: Calls searchConsole.sitemaps.list.

```text
Lists all sitemaps submitted for a site in Search Console
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/search-console/sitemaps.ts#L1-L190) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Site URL (e.g., https://example.com/)"
    }
  },
  "required": [
    "siteUrl"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "Site URL (e.g., https://example.com/)"
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_get_sitemap-bec92fb6"></a>

## gsc_get_sitemap

Handler: Google Search Console: Calls searchConsole.sitemaps.get.

```text
Gets detailed information about a specific sitemap
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/search-console/sitemaps.ts#L1-L190) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Site URL"
    },
    "feedpath": {
      "type": "string",
      "description": "Full URL of the sitemap"
    }
  },
  "required": [
    "siteUrl",
    "feedpath"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "Site URL"
    },
    "feedpath": {
      "type": "string",
      "description": "Full URL of the sitemap"
    }
  },
  "required": [
    "siteUrl",
    "feedpath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_submit_sitemap-6d135a26"></a>

## gsc_submit_sitemap

Handler: Google Search Console: Calls searchConsole.sitemaps.submit.

```text
Submits a sitemap for crawling in Search Console
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/search-console/sitemaps.ts#L1-L190) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Site URL"
    },
    "feedpath": {
      "type": "string",
      "description": "Full URL of the sitemap to submit"
    }
  },
  "required": [
    "siteUrl",
    "feedpath"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "Site URL"
    },
    "feedpath": {
      "type": "string",
      "description": "Full URL of the sitemap to submit"
    }
  },
  "required": [
    "siteUrl",
    "feedpath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_delete_sitemap-adedc75d"></a>

## gsc_delete_sitemap

Handler: Google Search Console: Calls searchConsole.sitemaps.delete.

```text
Deletes a sitemap from Search Console
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/search-console/sitemaps.ts#L1-L190) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Site URL"
    },
    "feedpath": {
      "type": "string",
      "description": "Full URL of the sitemap to delete"
    }
  },
  "required": [
    "siteUrl",
    "feedpath"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "Site URL"
    },
    "feedpath": {
      "type": "string",
      "description": "Full URL of the sitemap to delete"
    }
  },
  "required": [
    "siteUrl",
    "feedpath"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_inspect_url-2d598234"></a>

## gsc_inspect_url

Handler: Google Search Console: Calls searchConsole.urlInspection.index.inspect.

```text
Inspects a URL to see its index status, mobile usability, and rich results
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/search-console/inspection.ts#L1-L114) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Site URL (e.g., https://example.com/)"
    },
    "inspectionUrl": {
      "type": "string",
      "description": "Full URL to inspect"
    },
    "languageCode": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl",
    "inspectionUrl"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "Site URL (e.g., https://example.com/)"
    },
    "inspectionUrl": {
      "type": "string",
      "description": "Full URL to inspect"
    },
    "languageCode": {
      "type": "string",
      "description": "Language code for messages (e.g., en-US)"
    }
  },
  "required": [
    "siteUrl",
    "inspectionUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gsc_coverage_report-cae5003f"></a>

## gsc_coverage_report

Handler: Google Search Console: Calls searchConsole.sitemaps.list, searchConsole.searchanalytics.query.

```text
Gets index coverage summary showing valid, error, warning, and excluded page counts with detailed issue breakdown
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/search-console/coverage.ts#L1-L229) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Site URL (e.g., https://example.com/ or sc-domain:example.com)"
    }
  },
  "required": [
    "siteUrl"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "Site URL (e.g., https://example.com/ or sc-domain:example.com)"
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_list_customers-7c1e05e8"></a>

## ads_list_customers

Handler: Google Ads: Calls client.listAccessibleCustomers, customer.query.

```text
Lists all Google Ads customer accounts accessible to the authenticated user
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/customers.ts#L1-L173) · Schema: literal-source.

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

</details>

<a id="tool-ads_get_customer-51dcc7d4"></a>

## ads_get_customer

Handler: Google Ads: Calls customer.query.

```text
Gets details of a specific Google Ads customer account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/customers.ts#L1-L173) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID (without dashes)"
    }
  },
  "required": [
    "customerId"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID (without dashes)"
    }
  },
  "required": [
    "customerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_list_campaigns-e51a74ac"></a>

## ads_list_campaigns

Handler: Google Ads: Calls customer.query.

```text
Lists campaigns in a Google Ads account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/campaigns.ts#L1-L384) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED",
        "REMOVED"
      ]
    },
    "type": {
      "type": "string",
      "enum": [
        "SEARCH",
        "DISPLAY",
        "SHOPPING",
        "VIDEO",
        "PERFORMANCE_MAX"
      ]
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000
    }
  },
  "required": [
    "customerId"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED",
        "REMOVED"
      ],
      "description": "Filter by status"
    },
    "type": {
      "type": "string",
      "enum": [
        "SEARCH",
        "DISPLAY",
        "SHOPPING",
        "VIDEO",
        "PERFORMANCE_MAX"
      ],
      "description": "Filter by campaign type"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000,
      "description": "Maximum results"
    }
  },
  "required": [
    "customerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_get_campaign-ba519761"></a>

## ads_get_campaign

Handler: Google Ads: Calls customer.query.

```text
Gets details of a specific Google Ads campaign
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/campaigns.ts#L1-L384) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string",
      "description": "Campaign ID"
    }
  },
  "required": [
    "customerId",
    "campaignId"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string",
      "description": "Campaign ID"
    }
  },
  "required": [
    "customerId",
    "campaignId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_list_ad_groups-645ef95b"></a>

## ads_list_ad_groups

Handler: Google Ads: Calls customer.query.

```text
Lists ad groups in a Google Ads account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/campaigns.ts#L1-L384) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED",
        "REMOVED"
      ]
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000
    }
  },
  "required": [
    "customerId"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string",
      "description": "Filter by campaign ID"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED",
        "REMOVED"
      ],
      "description": "Filter by status"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000,
      "description": "Maximum results"
    }
  },
  "required": [
    "customerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_list_keywords-7767c363"></a>

## ads_list_keywords

Handler: Google Ads: Calls customer.query.

```text
Lists keywords in a Google Ads account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/campaigns.ts#L1-L384) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string"
    },
    "adGroupId": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED",
        "REMOVED"
      ]
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000
    }
  },
  "required": [
    "customerId"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string",
      "description": "Filter by campaign ID"
    },
    "adGroupId": {
      "type": "string",
      "description": "Filter by ad group ID"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED",
        "REMOVED"
      ],
      "description": "Filter by status"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000,
      "description": "Maximum results"
    }
  },
  "required": [
    "customerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_campaign_performance-49c7b49c"></a>

## ads_campaign_performance

Handler: Google Ads: Calls customer.query.

```text
Gets campaign performance metrics for a date range
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/reports.ts#L1-L394) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date (YYYY-MM-DD)"
        },
        "endDate": {
          "type": "string",
          "description": "End date (YYYY-MM-DD)"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ]
    }
  },
  "required": [
    "customerId",
    "dateRange"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string",
      "description": "Filter by campaign ID"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date (YYYY-MM-DD)"
        },
        "endDate": {
          "type": "string",
          "description": "End date (YYYY-MM-DD)"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "customerId",
    "dateRange"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_search_term_report-8a0682f5"></a>

## ads_search_term_report

Handler: Google Ads: Calls customer.query.

```text
Gets search terms report showing actual user queries
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/reports.ts#L1-L394) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string"
    },
    "adGroupId": {
      "type": "string"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date (YYYY-MM-DD)"
        },
        "endDate": {
          "type": "string",
          "description": "End date (YYYY-MM-DD)"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ]
    },
    "minImpressions": {
      "type": "number"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000
    }
  },
  "required": [
    "customerId",
    "dateRange"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string",
      "description": "Filter by campaign ID"
    },
    "adGroupId": {
      "type": "string",
      "description": "Filter by ad group ID"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date (YYYY-MM-DD)"
        },
        "endDate": {
          "type": "string",
          "description": "End date (YYYY-MM-DD)"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ],
      "additionalProperties": false
    },
    "minImpressions": {
      "type": "number",
      "description": "Minimum impressions filter"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 10000,
      "description": "Maximum results"
    }
  },
  "required": [
    "customerId",
    "dateRange"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_account_summary-efd1440e"></a>

## ads_account_summary

Handler: Google Ads: Calls customer.query.

```text
Gets a summary of account performance metrics
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/reports.ts#L1-L394) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date (YYYY-MM-DD)"
        },
        "endDate": {
          "type": "string",
          "description": "End date (YYYY-MM-DD)"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ]
    }
  },
  "required": [
    "customerId",
    "dateRange"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date (YYYY-MM-DD)"
        },
        "endDate": {
          "type": "string",
          "description": "End date (YYYY-MM-DD)"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "customerId",
    "dateRange"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_create_campaign-98d75a32"></a>

## ads_create_campaign

Handler: Google Ads: Calls customer.campaignBudgets.create, customer.campaigns.create.

```text
Creates a new Google Ads campaign with budget and bidding strategy
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/management.ts#L1-L601) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaign": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Campaign name"
        },
        "advertisingChannelType": {
          "type": "string",
          "enum": [
            "SEARCH",
            "DISPLAY",
            "SHOPPING",
            "VIDEO",
            "PERFORMANCE_MAX"
          ],
          "description": "Campaign type"
        },
        "status": {
          "type": "string",
          "enum": [
            "ENABLED",
            "PAUSED"
          ]
        },
        "startDate": {
          "type": "string"
        },
        "endDate": {
          "type": "string"
        },
        "budgetAmountMicros": {
          "type": "integer",
          "minimum": 0,
          "maximum": 9007199254740991,
          "description": "Daily budget in micros (1000000 = $1)"
        },
        "budgetDeliveryMethod": {
          "type": "string",
          "enum": [
            "STANDARD"
          ]
        },
        "biddingStrategyType": {
          "type": "string",
          "enum": [
            "MANUAL_CPC",
            "MAXIMIZE_CONVERSIONS",
            "MAXIMIZE_CLICKS",
            "TARGET_CPA",
            "TARGET_ROAS"
          ]
        },
        "targetCpaMicros": {
          "type": "number"
        },
        "targetRoas": {
          "type": "number"
        }
      },
      "required": [
        "name",
        "advertisingChannelType",
        "budgetAmountMicros"
      ]
    }
  },
  "required": [
    "customerId",
    "campaign"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaign": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Campaign name"
        },
        "advertisingChannelType": {
          "type": "string",
          "enum": [
            "SEARCH",
            "DISPLAY",
            "SHOPPING",
            "VIDEO",
            "PERFORMANCE_MAX"
          ],
          "description": "Campaign type"
        },
        "status": {
          "type": "string",
          "enum": [
            "ENABLED",
            "PAUSED"
          ],
          "description": "Campaign status"
        },
        "startDate": {
          "type": "string",
          "description": "Start date (YYYY-MM-DD)"
        },
        "endDate": {
          "type": "string",
          "description": "End date (YYYY-MM-DD)"
        },
        "budgetAmountMicros": {
          "type": "integer",
          "exclusiveMinimum": 0,
          "maximum": 9007199254740991,
          "description": "Daily budget in micros (1000000 = $1)"
        },
        "budgetDeliveryMethod": {
          "type": "string",
          "enum": [
            "STANDARD"
          ],
          "description": "Budget delivery"
        },
        "biddingStrategyType": {
          "type": "string",
          "enum": [
            "MANUAL_CPC",
            "MAXIMIZE_CONVERSIONS",
            "MAXIMIZE_CLICKS",
            "TARGET_CPA",
            "TARGET_ROAS"
          ],
          "description": "Bidding strategy"
        },
        "targetCpaMicros": {
          "type": "number",
          "description": "Target CPA in micros (for TARGET_CPA)"
        },
        "targetRoas": {
          "type": "number",
          "description": "Target ROAS (for TARGET_ROAS, e.g., 3.0 = 300%)"
        }
      },
      "required": [
        "name",
        "advertisingChannelType",
        "budgetAmountMicros"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "customerId",
    "campaign"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_update_campaign-0d43d188"></a>

## ads_update_campaign

Handler: Google Ads: Calls customer.query, customer.campaigns.update, customer.campaignBudgets.update.

```text
Updates an existing Google Ads campaign settings
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/management.ts#L1-L601) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string",
      "description": "Campaign ID to update"
    },
    "updates": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "status": {
          "type": "string",
          "enum": [
            "ENABLED",
            "PAUSED"
          ]
        },
        "endDate": {
          "type": "string"
        },
        "budgetAmountMicros": {
          "type": "integer",
          "minimum": 0,
          "maximum": 9007199254740991
        }
      }
    }
  },
  "required": [
    "customerId",
    "campaignId",
    "updates"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "campaignId": {
      "type": "string",
      "description": "Campaign ID to update"
    },
    "updates": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "New campaign name"
        },
        "status": {
          "type": "string",
          "enum": [
            "ENABLED",
            "PAUSED"
          ],
          "description": "New status"
        },
        "endDate": {
          "type": "string",
          "description": "New end date (YYYY-MM-DD)"
        },
        "budgetAmountMicros": {
          "type": "integer",
          "exclusiveMinimum": 0,
          "maximum": 9007199254740991,
          "description": "New daily budget in micros"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "customerId",
    "campaignId",
    "updates"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_add_keywords-eb0d9794"></a>

## ads_add_keywords

Handler: Google Ads: Calls customer.adGroupCriteria.create.

```text
Adds keywords to an ad group
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/management.ts#L1-L601) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "adGroupId": {
      "type": "string",
      "description": "Ad Group ID"
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "description": "Keyword text"
          },
          "matchType": {
            "type": "string",
            "enum": [
              "EXACT",
              "PHRASE",
              "BROAD"
            ],
            "description": "Match type"
          },
          "status": {
            "type": "string",
            "enum": [
              "ENABLED",
              "PAUSED"
            ]
          },
          "cpcBidMicros": {
            "type": "number"
          },
          "finalUrl": {
            "type": "string"
          }
        },
        "required": [
          "text",
          "matchType"
        ]
      },
      "minItems": 1,
      "description": "Keywords to add"
    }
  },
  "required": [
    "customerId",
    "adGroupId",
    "keywords"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "adGroupId": {
      "type": "string",
      "description": "Ad Group ID"
    },
    "keywords": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "description": "Keyword text"
          },
          "matchType": {
            "type": "string",
            "enum": [
              "EXACT",
              "PHRASE",
              "BROAD"
            ],
            "description": "Match type"
          },
          "status": {
            "type": "string",
            "enum": [
              "ENABLED",
              "PAUSED"
            ],
            "description": "Keyword status"
          },
          "cpcBidMicros": {
            "type": "number",
            "description": "CPC bid in micros"
          },
          "finalUrl": {
            "type": "string",
            "description": "Final URL for this keyword"
          }
        },
        "required": [
          "text",
          "matchType"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "description": "Keywords to add"
    }
  },
  "required": [
    "customerId",
    "adGroupId",
    "keywords"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_get_keyword_ideas-bfd4be0a"></a>

## ads_get_keyword_ideas

Handler: Google Ads: Calls customer.keywordPlanIdeas.generateKeywordIdeas.

```text
Gets keyword suggestions based on seed keywords or URL
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/management.ts#L1-L601) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "language": {
      "type": "string",
      "description": "Language criterion ID (e.g., 1000 for English)"
    },
    "geoTargetConstants": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Location criterion IDs"
    },
    "keywordSeed": {
      "type": "object",
      "properties": {
        "keywords": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Seed keywords"
        }
      },
      "required": [
        "keywords"
      ]
    },
    "urlSeed": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string",
          "description": "URL to analyze for keyword ideas"
        }
      },
      "required": [
        "url"
      ]
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 500
    }
  },
  "required": [
    "customerId",
    "language",
    "geoTargetConstants"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "language": {
      "type": "string",
      "description": "Language criterion ID (e.g., 1000 for English)"
    },
    "geoTargetConstants": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Location criterion IDs"
    },
    "keywordSeed": {
      "type": "object",
      "properties": {
        "keywords": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Seed keywords"
        }
      },
      "required": [
        "keywords"
      ],
      "additionalProperties": false,
      "description": "Keywords to base suggestions on"
    },
    "urlSeed": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string",
          "description": "URL to analyze for keyword ideas"
        }
      },
      "required": [
        "url"
      ],
      "additionalProperties": false,
      "description": "URL to base suggestions on"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 500,
      "description": "Maximum ideas to return"
    }
  },
  "required": [
    "customerId",
    "language",
    "geoTargetConstants"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_list_budgets-82be9196"></a>

## ads_list_budgets

Handler: Google Ads: Calls customer.query.

```text
Lists campaign budgets in a Google Ads account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/management.ts#L1-L601) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 1000
    }
  },
  "required": [
    "customerId"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 1000,
      "description": "Maximum results"
    }
  },
  "required": [
    "customerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-ads_create_budget-7251941a"></a>

## ads_create_budget

Handler: Google Ads: Calls customer.campaignBudgets.create.

```text
Creates a campaign budget that can be assigned to campaigns
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/ads/management.ts#L1-L601) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "budget": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Budget name"
        },
        "amountMicros": {
          "type": "integer",
          "minimum": 0,
          "maximum": 9007199254740991,
          "description": "Daily amount in micros (1000000 = $1)"
        },
        "deliveryMethod": {
          "type": "string",
          "enum": [
            "STANDARD"
          ]
        },
        "explicitlyShared": {
          "type": "boolean"
        }
      },
      "required": [
        "name",
        "amountMicros"
      ]
    }
  },
  "required": [
    "customerId",
    "budget"
  ]
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
    "customerId": {
      "type": "string",
      "description": "Google Ads Customer ID"
    },
    "budget": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Budget name"
        },
        "amountMicros": {
          "type": "integer",
          "exclusiveMinimum": 0,
          "maximum": 9007199254740991,
          "description": "Daily amount in micros (1000000 = $1)"
        },
        "deliveryMethod": {
          "type": "string",
          "enum": [
            "STANDARD"
          ],
          "description": "Delivery method"
        },
        "explicitlyShared": {
          "type": "boolean",
          "description": "Whether budget can be shared across campaigns"
        }
      },
      "required": [
        "name",
        "amountMicros"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "customerId",
    "budget"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-indexing_publish-909fce51"></a>

## indexing_publish

Handler: Google Indexing API: Calls indexing.urlNotifications.publish.

```text
Notifies Google about a new or updated URL for indexing
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/indexing/api.ts#L1-L228) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to notify Google about"
    },
    "type": {
      "type": "string",
      "enum": [
        "URL_UPDATED",
        "URL_DELETED"
      ],
      "description": "Type of notification"
    }
  },
  "required": [
    "url",
    "type"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to notify Google about"
    },
    "type": {
      "type": "string",
      "enum": [
        "URL_UPDATED",
        "URL_DELETED"
      ],
      "description": "Type of notification"
    }
  },
  "required": [
    "url",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-indexing_get_status-16425eaf"></a>

## indexing_get_status

Handler: Google Indexing API: Calls indexing.urlNotifications.getMetadata.

```text
Gets the notification status for a URL
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/indexing/api.ts#L1-L228) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to get notification status for"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to get notification status for"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-indexing_batch_publish-6e4a4b47"></a>

## indexing_batch_publish

Handler: Google Indexing API: Calls indexing.urlNotifications.publish.

```text
Batch notification for multiple URLs (max 100 per request)
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/indexing/api.ts#L1-L228) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "notifications": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "format": "uri",
            "description": "URL to notify"
          },
          "type": {
            "type": "string",
            "enum": [
              "URL_UPDATED",
              "URL_DELETED"
            ],
            "description": "Notification type"
          }
        },
        "required": [
          "url",
          "type"
        ]
      },
      "minItems": 1,
      "maxItems": 100,
      "description": "URLs to publish (max 100)"
    }
  },
  "required": [
    "notifications"
  ]
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
    "notifications": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "format": "uri",
            "description": "URL to notify"
          },
          "type": {
            "type": "string",
            "enum": [
              "URL_UPDATED",
              "URL_DELETED"
            ],
            "description": "Notification type"
          }
        },
        "required": [
          "url",
          "type"
        ],
        "additionalProperties": false
      },
      "minItems": 1,
      "maxItems": 100,
      "description": "URLs to publish (max 100)"
    }
  },
  "required": [
    "notifications"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_list_accounts-d0179a8b"></a>

## gbp_list_accounts

Handler: Google Business Profile: Calls executeGoogleApi.

```text
Lists all Google Business Profile accounts accessible to the authenticated user
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/accounts.ts#L1-L328) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 20
    },
    "pageToken": {
      "type": "string"
    }
  }
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
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 20,
      "description": "Maximum results per page"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_list_locations-e79f9888"></a>

## gbp_list_locations

Handler: Google Business Profile: Calls executeGoogleApi.

```text
Lists all locations/businesses for a GBP account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/accounts.ts#L1-L328) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GBP Account ID or full resource name"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 100
    },
    "pageToken": {
      "type": "string"
    },
    "filter": {
      "type": "string"
    }
  },
  "required": [
    "accountId"
  ]
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
    "accountId": {
      "type": "string",
      "description": "GBP Account ID or full resource name"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 100,
      "description": "Maximum results per page"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    },
    "filter": {
      "type": "string",
      "description": "Filter string"
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

<a id="tool-gbp_get_location-710e9df3"></a>

## gbp_get_location

Handler: Google Business Profile: Calls executeGoogleApi.

```text
Gets detailed information about a specific GBP location
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/accounts.ts#L1-L328) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Full location resource name (accounts/{accountId}/locations/{locationId})"
    }
  },
  "required": [
    "name"
  ]
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
      "description": "Full location resource name (accounts/{accountId}/locations/{locationId})"
    }
  },
  "required": [
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_update_location-01c5c418"></a>

## gbp_update_location

Handler: Google Business Profile: Calls executeGoogleApi.

```text
Updates a GBP location's information
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/accounts.ts#L1-L328) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Full location resource name"
    },
    "location": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "websiteUri": {
          "type": "string"
        },
        "phoneNumbers": {
          "type": "object",
          "properties": {
            "primaryPhone": {
              "type": "string"
            },
            "additionalPhones": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "primaryPhone"
          ]
        }
      }
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated list of fields to update"
    }
  },
  "required": [
    "name",
    "location",
    "updateMask"
  ]
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
      "description": "Full location resource name"
    },
    "location": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "websiteUri": {
          "type": "string"
        },
        "phoneNumbers": {
          "type": "object",
          "properties": {
            "primaryPhone": {
              "type": "string"
            },
            "additionalPhones": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "primaryPhone"
          ],
          "additionalProperties": false
        }
      },
      "additionalProperties": false,
      "description": "Location fields to update"
    },
    "updateMask": {
      "type": "string",
      "description": "Comma-separated list of fields to update"
    }
  },
  "required": [
    "name",
    "location",
    "updateMask"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_list_reviews-0595b368"></a>

## gbp_list_reviews

Handler: Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation.

```text
Lists reviews for a GBP location
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/reviews.ts#L1-L149) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "Location resource name (accounts/{accountId}/locations/{locationId})"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 50
    },
    "pageToken": {
      "type": "string"
    },
    "orderBy": {
      "type": "string",
      "enum": [
        "updateTime desc",
        "rating desc",
        "rating asc"
      ]
    }
  },
  "required": [
    "parent"
  ]
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
    "parent": {
      "type": "string",
      "description": "Location resource name (accounts/{accountId}/locations/{locationId})"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Maximum results per page"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    },
    "orderBy": {
      "type": "string",
      "enum": [
        "updateTime desc",
        "rating desc",
        "rating asc"
      ],
      "description": "Sort order"
    }
  },
  "required": [
    "parent"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_reply_review-849066cf"></a>

## gbp_reply_review

Handler: Google Business Profile: returns success false without making a reviews API call.

```text
Replies to a review on a GBP location
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/reviews.ts#L1-L149) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Full review resource name"
    },
    "comment": {
      "type": "string",
      "minLength": 1,
      "maxLength": 4096,
      "description": "Reply text"
    }
  },
  "required": [
    "name",
    "comment"
  ]
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
      "description": "Full review resource name"
    },
    "comment": {
      "type": "string",
      "minLength": 1,
      "maxLength": 4096,
      "description": "Reply text"
    }
  },
  "required": [
    "name",
    "comment"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_delete_review_reply-22ecc735"></a>

## gbp_delete_review_reply

Handler: Google Business Profile: returns success false without making a reviews API call.

```text
Deletes a reply to a review
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/reviews.ts#L1-L149) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Full review resource name"
    }
  },
  "required": [
    "name"
  ]
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
      "description": "Full review resource name"
    }
  },
  "required": [
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_list_posts-ed8a75f2"></a>

## gbp_list_posts

Handler: Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation.

```text
Lists posts for a GBP location
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/posts.ts#L1-L127) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "Location resource name"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 100
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "parent"
  ]
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
    "parent": {
      "type": "string",
      "description": "Location resource name"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 100,
      "description": "Maximum results per page"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    }
  },
  "required": [
    "parent"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_create_post-3a103ac0"></a>

## gbp_create_post

Handler: Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation.

```text
Creates a new post on a GBP location
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/posts.ts#L1-L127) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "Location resource name"
    },
    "post": {
      "type": "object",
      "properties": {
        "languageCode": {
          "type": "string",
          "description": "Language code (e.g., en)"
        },
        "summary": {
          "type": "string",
          "minLength": 1,
          "maxLength": 1500,
          "description": "Post content"
        },
        "topicType": {
          "type": "string",
          "enum": [
            "STANDARD",
            "EVENT",
            "OFFER",
            "ALERT"
          ],
          "description": "Type of post"
        },
        "callToAction": {
          "type": "object",
          "properties": {
            "actionType": {
              "type": "string",
              "enum": [
                "BOOK",
                "ORDER",
                "SHOP",
                "LEARN_MORE",
                "SIGN_UP",
                "CALL"
              ]
            },
            "url": {
              "type": "string",
              "format": "uri"
            }
          },
          "required": [
            "actionType"
          ]
        },
        "event": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            },
            "schedule": {
              "type": "object",
              "properties": {
                "startDate": {
                  "type": "object",
                  "properties": {
                    "year": {
                      "type": "number"
                    },
                    "month": {
                      "type": "number"
                    },
                    "day": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "year",
                    "month",
                    "day"
                  ]
                },
                "endDate": {
                  "type": "object",
                  "properties": {
                    "year": {
                      "type": "number"
                    },
                    "month": {
                      "type": "number"
                    },
                    "day": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "year",
                    "month",
                    "day"
                  ]
                },
                "startTime": {
                  "type": "object",
                  "properties": {
                    "hours": {
                      "type": "number"
                    },
                    "minutes": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "hours",
                    "minutes"
                  ]
                },
                "endTime": {
                  "type": "object",
                  "properties": {
                    "hours": {
                      "type": "number"
                    },
                    "minutes": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "hours",
                    "minutes"
                  ]
                }
              },
              "required": [
                "startDate",
                "endDate"
              ]
            }
          },
          "required": [
            "title",
            "schedule"
          ]
        },
        "offer": {
          "type": "object",
          "properties": {
            "couponCode": {
              "type": "string"
            },
            "redeemOnlineUrl": {
              "type": "string",
              "format": "uri"
            },
            "termsConditions": {
              "type": "string"
            }
          }
        }
      },
      "required": [
        "languageCode",
        "summary",
        "topicType"
      ]
    }
  },
  "required": [
    "parent",
    "post"
  ]
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
    "parent": {
      "type": "string",
      "description": "Location resource name"
    },
    "post": {
      "type": "object",
      "properties": {
        "languageCode": {
          "type": "string",
          "description": "Language code (e.g., en)"
        },
        "summary": {
          "type": "string",
          "minLength": 1,
          "maxLength": 1500,
          "description": "Post content"
        },
        "topicType": {
          "type": "string",
          "enum": [
            "STANDARD",
            "EVENT",
            "OFFER",
            "ALERT"
          ],
          "description": "Type of post"
        },
        "callToAction": {
          "type": "object",
          "properties": {
            "actionType": {
              "type": "string",
              "enum": [
                "BOOK",
                "ORDER",
                "SHOP",
                "LEARN_MORE",
                "SIGN_UP",
                "CALL"
              ]
            },
            "url": {
              "type": "string",
              "format": "uri"
            }
          },
          "required": [
            "actionType"
          ],
          "additionalProperties": false
        },
        "event": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            },
            "schedule": {
              "type": "object",
              "properties": {
                "startDate": {
                  "type": "object",
                  "properties": {
                    "year": {
                      "type": "number"
                    },
                    "month": {
                      "type": "number"
                    },
                    "day": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "year",
                    "month",
                    "day"
                  ],
                  "additionalProperties": false
                },
                "endDate": {
                  "type": "object",
                  "properties": {
                    "year": {
                      "type": "number"
                    },
                    "month": {
                      "type": "number"
                    },
                    "day": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "year",
                    "month",
                    "day"
                  ],
                  "additionalProperties": false
                },
                "startTime": {
                  "type": "object",
                  "properties": {
                    "hours": {
                      "type": "number"
                    },
                    "minutes": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "hours",
                    "minutes"
                  ],
                  "additionalProperties": false
                },
                "endTime": {
                  "type": "object",
                  "properties": {
                    "hours": {
                      "type": "number"
                    },
                    "minutes": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "hours",
                    "minutes"
                  ],
                  "additionalProperties": false
                }
              },
              "required": [
                "startDate",
                "endDate"
              ],
              "additionalProperties": false
            }
          },
          "required": [
            "title",
            "schedule"
          ],
          "additionalProperties": false
        },
        "offer": {
          "type": "object",
          "properties": {
            "couponCode": {
              "type": "string"
            },
            "redeemOnlineUrl": {
              "type": "string",
              "format": "uri"
            },
            "termsConditions": {
              "type": "string"
            }
          },
          "additionalProperties": false
        }
      },
      "required": [
        "languageCode",
        "summary",
        "topicType"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "parent",
    "post"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_get_insights-18d43403"></a>

## gbp_get_insights

Handler: Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation.

```text
Gets performance insights for a GBP location
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/insights.ts#L1-L236) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Location resource name"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "QUERIES_DIRECT",
          "QUERIES_INDIRECT",
          "VIEWS_MAPS",
          "VIEWS_SEARCH",
          "ACTIONS_WEBSITE",
          "ACTIONS_PHONE",
          "ACTIONS_DRIVING_DIRECTIONS"
        ]
      }
    },
    "startTime": {
      "type": "string"
    },
    "endTime": {
      "type": "string"
    }
  },
  "required": [
    "name"
  ]
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
      "description": "Location resource name"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "QUERIES_DIRECT",
          "QUERIES_INDIRECT",
          "VIEWS_MAPS",
          "VIEWS_SEARCH",
          "ACTIONS_WEBSITE",
          "ACTIONS_PHONE",
          "ACTIONS_DRIVING_DIRECTIONS"
        ]
      },
      "description": "Metrics to retrieve"
    },
    "startTime": {
      "type": "string",
      "description": "Start time (ISO 8601)"
    },
    "endTime": {
      "type": "string",
      "description": "End time (ISO 8601)"
    }
  },
  "required": [
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_list_media-1c03d57b"></a>

## gbp_list_media

Handler: Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation.

```text
Lists media items (photos, videos) for a GBP location
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/insights.ts#L1-L236) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "Location resource name"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 100
    },
    "pageToken": {
      "type": "string"
    }
  },
  "required": [
    "parent"
  ]
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
    "parent": {
      "type": "string",
      "description": "Location resource name"
    },
    "pageSize": {
      "type": "number",
      "minimum": 1,
      "maximum": 100,
      "description": "Maximum results per page"
    },
    "pageToken": {
      "type": "string",
      "description": "Page token for pagination"
    }
  },
  "required": [
    "parent"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_upload_media-7e0504be"></a>

## gbp_upload_media

Handler: Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation.

```text
Uploads a photo or video to a GBP location
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/insights.ts#L1-L236) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "parent": {
      "type": "string",
      "description": "Location resource name"
    },
    "mediaItem": {
      "type": "object",
      "properties": {
        "mediaFormat": {
          "type": "string",
          "enum": [
            "PHOTO",
            "VIDEO"
          ]
        },
        "sourceUrl": {
          "type": "string",
          "format": "uri"
        },
        "category": {
          "type": "string",
          "enum": [
            "COVER",
            "PROFILE",
            "LOGO",
            "EXTERIOR",
            "INTERIOR",
            "PRODUCT",
            "AT_WORK",
            "FOOD_AND_DRINK",
            "MENU",
            "COMMON_AREA",
            "TEAMS"
          ]
        },
        "description": {
          "type": "string",
          "maxLength": 1000
        }
      },
      "required": [
        "mediaFormat"
      ]
    }
  },
  "required": [
    "parent",
    "mediaItem"
  ]
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
    "parent": {
      "type": "string",
      "description": "Location resource name"
    },
    "mediaItem": {
      "type": "object",
      "properties": {
        "mediaFormat": {
          "type": "string",
          "enum": [
            "PHOTO",
            "VIDEO"
          ]
        },
        "sourceUrl": {
          "type": "string",
          "format": "uri",
          "description": "URL of media to upload"
        },
        "category": {
          "type": "string",
          "enum": [
            "COVER",
            "PROFILE",
            "LOGO",
            "EXTERIOR",
            "INTERIOR",
            "PRODUCT",
            "AT_WORK",
            "FOOD_AND_DRINK",
            "MENU",
            "COMMON_AREA",
            "TEAMS"
          ]
        },
        "description": {
          "type": "string",
          "maxLength": 1000
        }
      },
      "required": [
        "mediaFormat"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "parent",
    "mediaItem"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gbp_performance_report-cd1e2062"></a>

## gbp_performance_report

Handler: Google Business Profile: guarded placeholder/stub handler; does not perform the advertised remote operation.

```text
Generates a comprehensive performance report for a GBP location
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/google/business-profile/insights.ts#L1-L236) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "locationName": {
      "type": "string",
      "description": "Location resource name"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date (YYYY-MM-DD)"
        },
        "endDate": {
          "type": "string",
          "description": "End date (YYYY-MM-DD)"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ]
    }
  },
  "required": [
    "locationName",
    "dateRange"
  ]
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
    "locationName": {
      "type": "string",
      "description": "Location resource name"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date (YYYY-MM-DD)"
        },
        "endDate": {
          "type": "string",
          "description": "End date (YYYY-MM-DD)"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "locationName",
    "dateRange"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-psi_analyze-e565247e"></a>

## psi_analyze

Handler: PageSpeed Insights: Calls axios.get.

```text
Analyzes page performance with PageSpeed Insights API
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/performance/pagespeed.ts#L1-L198) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to analyze"
    },
    "strategy": {
      "type": "string",
      "enum": [
        "MOBILE",
        "DESKTOP"
      ],
      "description": "Analysis strategy"
    },
    "categories": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "ACCESSIBILITY",
          "BEST_PRACTICES",
          "PERFORMANCE",
          "PWA",
          "SEO"
        ]
      }
    },
    "locale": {
      "type": "string"
    }
  },
  "required": [
    "url",
    "strategy"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to analyze"
    },
    "strategy": {
      "type": "string",
      "enum": [
        "MOBILE",
        "DESKTOP"
      ],
      "description": "Analysis strategy"
    },
    "categories": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "ACCESSIBILITY",
          "BEST_PRACTICES",
          "PERFORMANCE",
          "PWA",
          "SEO"
        ]
      },
      "description": "Categories to analyze"
    },
    "locale": {
      "type": "string",
      "description": "Locale for results (e.g., en_US)"
    }
  },
  "required": [
    "url",
    "strategy"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-crux_query-aa9b8b62"></a>

## crux_query

Handler: Chrome UX Report: Calls axios.post.

```text
Queries Chrome UX Report data for real-world performance metrics
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/performance/crux.ts#L1-L229) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    },
    "origin": {
      "type": "string"
    },
    "formFactor": {
      "type": "string",
      "enum": [
        "PHONE",
        "DESKTOP",
        "TABLET"
      ]
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "cumulative_layout_shift",
          "first_contentful_paint",
          "first_input_delay",
          "interaction_to_next_paint",
          "largest_contentful_paint",
          "experimental_time_to_first_byte"
        ]
      }
    }
  }
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
    "url": {
      "type": "string",
      "description": "Specific URL to query"
    },
    "origin": {
      "type": "string",
      "description": "Origin-level data (e.g., https://example.com)"
    },
    "formFactor": {
      "type": "string",
      "enum": [
        "PHONE",
        "DESKTOP",
        "TABLET"
      ],
      "description": "Device form factor"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "cumulative_layout_shift",
          "first_contentful_paint",
          "first_input_delay",
          "interaction_to_next_paint",
          "largest_contentful_paint",
          "experimental_time_to_first_byte"
        ]
      },
      "description": "Metrics to retrieve"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-crux_history-f1446023"></a>

## crux_history

Handler: Chrome UX Report: Calls axios.post.

```text
Gets historical Chrome UX Report data for trend analysis
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/performance/crux.ts#L1-L229) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    },
    "origin": {
      "type": "string"
    },
    "formFactor": {
      "type": "string",
      "enum": [
        "PHONE",
        "DESKTOP",
        "TABLET"
      ]
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
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
    "url": {
      "type": "string",
      "description": "Specific URL to query"
    },
    "origin": {
      "type": "string",
      "description": "Origin-level data"
    },
    "formFactor": {
      "type": "string",
      "enum": [
        "PHONE",
        "DESKTOP",
        "TABLET"
      ],
      "description": "Device form factor"
    },
    "metrics": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Metrics to retrieve"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-cwv_report-ce841130"></a>

## cwv_report

Handler: Core Web Vitals: Calls axios.post.

```text
Generates a comprehensive Core Web Vitals report for a URL
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/performance/core-web-vitals.ts#L1-L245) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to analyze"
    },
    "includeHistory": {
      "type": "boolean"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to analyze"
    },
    "includeHistory": {
      "type": "boolean",
      "description": "Include historical data if available"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-lighthouse_audit-7136cbe1"></a>

## lighthouse_audit

Handler: Lighthouse: Calls axios.get.

```text
Runs a comprehensive Lighthouse audit for performance, accessibility, SEO, best practices, and PWA
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/performance/lighthouse.ts#L1-L261) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to audit"
    },
    "formFactor": {
      "type": "string",
      "enum": [
        "mobile",
        "desktop"
      ],
      "description": "Device form factor"
    },
    "categories": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
          "pwa"
        ]
      }
    },
    "throttling": {
      "type": "object",
      "properties": {
        "cpuSlowdownMultiplier": {
          "type": "number"
        },
        "requestLatencyMs": {
          "type": "number"
        },
        "downloadThroughputKbps": {
          "type": "number"
        },
        "uploadThroughputKbps": {
          "type": "number"
        }
      }
    }
  },
  "required": [
    "url",
    "formFactor"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to audit"
    },
    "formFactor": {
      "type": "string",
      "enum": [
        "mobile",
        "desktop"
      ],
      "description": "Device form factor"
    },
    "categories": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "performance",
          "accessibility",
          "best-practices",
          "seo",
          "pwa"
        ]
      },
      "description": "Categories to audit (default: all)"
    },
    "throttling": {
      "type": "object",
      "properties": {
        "cpuSlowdownMultiplier": {
          "type": "number",
          "description": "CPU slowdown multiplier"
        },
        "requestLatencyMs": {
          "type": "number",
          "description": "Additional request latency in ms"
        },
        "downloadThroughputKbps": {
          "type": "number",
          "description": "Download speed in Kbps"
        },
        "uploadThroughputKbps": {
          "type": "number",
          "description": "Upload speed in Kbps"
        }
      },
      "additionalProperties": false,
      "description": "Custom throttling settings"
    }
  },
  "required": [
    "url",
    "formFactor"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-report_site_health-6a72ebe5"></a>

## report_site_health

Handler: Website reports: Calls axios.get, axios.get, axios.head, axios.get.

```text
Generates a comprehensive site health report including performance, SEO, security, and accessibility
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/reports/site-health.ts#L1-L422) · Schema: literal-source.

Exposure: Pro license required; omitted from tools/list and getTool under free tier.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to analyze"
    },
    "includeScreenshots": {
      "type": "boolean"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to analyze"
    },
    "includeScreenshots": {
      "type": "boolean",
      "description": "Include screenshots (not implemented yet)"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-report_seo_audit-27d44fbe"></a>

## report_seo_audit

Handler: Website reports: Calls axios.get, axios.get, axios.get, axios.get, axios.get.

```text
Generates a comprehensive SEO audit report for a website
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/reports/seo-audit.ts#L1-L492) · Schema: literal-source.

Exposure: Pro license required; omitted from tools/list and getTool under free tier.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to audit"
    },
    "crawlDepth": {
      "type": "number",
      "minimum": 1,
      "maximum": 3
    },
    "maxPages": {
      "type": "number",
      "minimum": 1,
      "maximum": 50
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to audit"
    },
    "crawlDepth": {
      "type": "number",
      "minimum": 1,
      "maximum": 3,
      "description": "Depth to crawl (1-3)"
    },
    "maxPages": {
      "type": "number",
      "minimum": 1,
      "maximum": 50,
      "description": "Maximum pages to analyze"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-report_executive_summary-f2f857b0"></a>

## report_executive_summary

Handler: Website reports: Calls axios.get, axios.get, axios.head, axios.get.

```text
Generates an executive summary combining performance, security, and SEO data
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/reports/executive-summary.ts#L1-L355) · Schema: literal-source.

Exposure: Pro license required; omitted from tools/list and getTool under free tier.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "format": "uri",
      "description": "Website URL"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date (YYYY-MM-DD)"
        },
        "endDate": {
          "type": "string",
          "description": "End date (YYYY-MM-DD)"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ]
    },
    "includeSections": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "traffic",
          "search",
          "performance",
          "security"
        ]
      }
    }
  },
  "required": [
    "siteUrl",
    "dateRange"
  ]
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
    "siteUrl": {
      "type": "string",
      "format": "uri",
      "description": "Website URL"
    },
    "dateRange": {
      "type": "object",
      "properties": {
        "startDate": {
          "type": "string",
          "description": "Start date (YYYY-MM-DD)"
        },
        "endDate": {
          "type": "string",
          "description": "End date (YYYY-MM-DD)"
        }
      },
      "required": [
        "startDate",
        "endDate"
      ],
      "additionalProperties": false
    },
    "includeSections": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "traffic",
          "search",
          "performance",
          "security"
        ]
      },
      "description": "Sections to include in the report"
    }
  },
  "required": [
    "siteUrl",
    "dateRange"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-dashboard_overview-26b8e96e"></a>

## dashboard_overview

Handler: Website dashboard: Generates a unified dashboard overview combining site health and SEO audit data with formatted markdown output.

```text
Generates a unified dashboard overview combining site health and SEO audit data with formatted markdown output
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/reports/dashboard-overview.ts#L1-L169) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to analyze"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-a11y_audit-10080ada"></a>

## a11y_audit

Handler: Accessibility: Calls axios.get.

```text
Runs an accessibility audit on a webpage using Lighthouse accessibility checks
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/accessibility/audit.ts#L1-L250) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to audit"
    },
    "standard": {
      "type": "string",
      "enum": [
        "wcag2a",
        "wcag2aa",
        "wcag2aaa",
        "wcag21a",
        "wcag21aa",
        "wcag22aa"
      ]
    },
    "includeHidden": {
      "type": "boolean"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to audit"
    },
    "standard": {
      "type": "string",
      "enum": [
        "wcag2a",
        "wcag2aa",
        "wcag2aaa",
        "wcag21a",
        "wcag21aa",
        "wcag22aa"
      ],
      "description": "WCAG standard to test against"
    },
    "includeHidden": {
      "type": "boolean",
      "description": "Include hidden elements"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-a11y_check_contrast-7ab51471"></a>

## a11y_check_contrast

Handler: Accessibility: Calls axios.get.

```text
Checks color contrast ratios for WCAG compliance
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/accessibility/contrast.ts#L1-L206) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri"
    },
    "foreground": {
      "type": "string"
    },
    "background": {
      "type": "string"
    },
    "fontSize": {
      "type": "number"
    },
    "isBold": {
      "type": "boolean"
    }
  }
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to analyze for contrast issues"
    },
    "foreground": {
      "type": "string",
      "description": "Foreground color in hex (e.g., #333333)"
    },
    "background": {
      "type": "string",
      "description": "Background color in hex (e.g., #FFFFFF)"
    },
    "fontSize": {
      "type": "number",
      "description": "Font size in pixels"
    },
    "isBold": {
      "type": "boolean",
      "description": "Whether the text is bold"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-a11y_check_images-3ebf72c4"></a>

## a11y_check_images

Handler: Accessibility: Calls axios.get.

```text
Checks images for proper alt text and accessibility
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/accessibility/images.ts#L1-L184) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to check for image accessibility"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to check for image accessibility"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-cf_get_zones-d79f44be"></a>

## cf_get_zones

Handler: Cloudflare: Calls axios.get.

```text
Lists Cloudflare zones accessible to the authenticated user
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/integrations/cloudflare/zones.ts#L1-L282) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "active",
        "pending",
        "initializing",
        "moved",
        "deleted",
        "deactivated"
      ]
    },
    "page": {
      "type": "number",
      "minimum": 1
    },
    "perPage": {
      "type": "number",
      "minimum": 5,
      "maximum": 50
    }
  }
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
      "description": "Filter by zone name"
    },
    "status": {
      "type": "string",
      "enum": [
        "active",
        "pending",
        "initializing",
        "moved",
        "deleted",
        "deactivated"
      ],
      "description": "Filter by status"
    },
    "page": {
      "type": "number",
      "minimum": 1,
      "description": "Page number"
    },
    "perPage": {
      "type": "number",
      "minimum": 5,
      "maximum": 50,
      "description": "Results per page"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-cf_list_dns_records-98ba6ff1"></a>

## cf_list_dns_records

Handler: Cloudflare: Calls axios.get.

```text
Lists DNS records for a Cloudflare zone
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/integrations/cloudflare/zones.ts#L1-L282) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "zoneId": {
      "type": "string",
      "description": "Cloudflare Zone ID"
    },
    "type": {
      "type": "string",
      "enum": [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "TXT",
        "NS",
        "SRV",
        "CAA"
      ]
    },
    "name": {
      "type": "string"
    },
    "page": {
      "type": "number",
      "minimum": 1
    },
    "perPage": {
      "type": "number",
      "minimum": 5,
      "maximum": 100
    }
  },
  "required": [
    "zoneId"
  ]
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
    "zoneId": {
      "type": "string",
      "description": "Cloudflare Zone ID"
    },
    "type": {
      "type": "string",
      "enum": [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "TXT",
        "NS",
        "SRV",
        "CAA"
      ],
      "description": "Record type filter"
    },
    "name": {
      "type": "string",
      "description": "Record name filter"
    },
    "page": {
      "type": "number",
      "minimum": 1,
      "description": "Page number"
    },
    "perPage": {
      "type": "number",
      "minimum": 5,
      "maximum": 100,
      "description": "Results per page"
    }
  },
  "required": [
    "zoneId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-cf_create_dns_record-28426396"></a>

## cf_create_dns_record

Handler: Cloudflare: Calls axios.post.

```text
Creates a new DNS record in a Cloudflare zone
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/integrations/cloudflare/zones.ts#L1-L282) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "zoneId": {
      "type": "string",
      "description": "Cloudflare Zone ID"
    },
    "type": {
      "type": "string",
      "enum": [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "TXT",
        "NS",
        "SRV",
        "CAA"
      ],
      "description": "Record type"
    },
    "name": {
      "type": "string",
      "description": "Record name (e.g., @ for root, www for subdomain)"
    },
    "content": {
      "type": "string",
      "description": "Record content (IP, hostname, or text)"
    },
    "ttl": {
      "type": "number",
      "minimum": 1
    },
    "proxied": {
      "type": "boolean"
    },
    "priority": {
      "type": "number",
      "minimum": 0,
      "maximum": 65535
    }
  },
  "required": [
    "zoneId",
    "type",
    "name",
    "content"
  ]
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
    "zoneId": {
      "type": "string",
      "description": "Cloudflare Zone ID"
    },
    "type": {
      "type": "string",
      "enum": [
        "A",
        "AAAA",
        "CNAME",
        "MX",
        "TXT",
        "NS",
        "SRV",
        "CAA"
      ],
      "description": "Record type"
    },
    "name": {
      "type": "string",
      "description": "Record name (e.g., @ for root, www for subdomain)"
    },
    "content": {
      "type": "string",
      "description": "Record content (IP, hostname, or text)"
    },
    "ttl": {
      "type": "number",
      "minimum": 1,
      "description": "TTL in seconds (1 for auto)"
    },
    "proxied": {
      "type": "boolean",
      "description": "Whether to proxy through Cloudflare"
    },
    "priority": {
      "type": "number",
      "minimum": 0,
      "maximum": 65535,
      "description": "Priority (for MX records)"
    }
  },
  "required": [
    "zoneId",
    "type",
    "name",
    "content"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-cf_get_analytics-7aff325d"></a>

## cf_get_analytics

Handler: Cloudflare: Calls axios.get.

```text
Gets analytics data for a Cloudflare zone
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/integrations/cloudflare/analytics.ts#L1-L254) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "zoneId": {
      "type": "string",
      "description": "Cloudflare Zone ID"
    },
    "since": {
      "type": "string",
      "description": "Start time (ISO 8601 or relative like -1440 for last 24h in minutes)"
    },
    "until": {
      "type": "string"
    }
  },
  "required": [
    "zoneId",
    "since"
  ]
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
    "zoneId": {
      "type": "string",
      "description": "Cloudflare Zone ID"
    },
    "since": {
      "type": "string",
      "description": "Start time (ISO 8601 or relative like -1440 for last 24h in minutes)"
    },
    "until": {
      "type": "string",
      "description": "End time (ISO 8601 or relative)"
    }
  },
  "required": [
    "zoneId",
    "since"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-cf_purge_cache-76dba2e4"></a>

## cf_purge_cache

Handler: Cloudflare: Calls axios.post.

```text
Purges Cloudflare cache for a zone
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/integrations/cloudflare/analytics.ts#L1-L254) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "zoneId": {
      "type": "string",
      "description": "Cloudflare Zone ID"
    },
    "purgeEverything": {
      "type": "boolean"
    },
    "files": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uri"
      }
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "hosts": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "prefixes": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "zoneId"
  ]
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
    "zoneId": {
      "type": "string",
      "description": "Cloudflare Zone ID"
    },
    "purgeEverything": {
      "type": "boolean",
      "description": "Purge all cached files"
    },
    "files": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uri"
      },
      "description": "Specific URLs to purge"
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Cache tags to purge"
    },
    "hosts": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Hostnames to purge"
    },
    "prefixes": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "URL prefixes to purge"
    }
  },
  "required": [
    "zoneId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-cf_firewall_events-ba40dbde"></a>

## cf_firewall_events

Handler: Cloudflare: Calls axios.post.

```text
Gets firewall events for a Cloudflare zone
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/integrations/cloudflare/firewall.ts#L1-L231) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "zoneId": {
      "type": "string",
      "description": "Cloudflare Zone ID"
    },
    "since": {
      "type": "string"
    },
    "until": {
      "type": "string"
    },
    "action": {
      "type": "string",
      "enum": [
        "block",
        "challenge",
        "jschallenge",
        "managed_challenge",
        "allow",
        "log"
      ]
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 1000
    }
  },
  "required": [
    "zoneId"
  ]
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
    "zoneId": {
      "type": "string",
      "description": "Cloudflare Zone ID"
    },
    "since": {
      "type": "string",
      "description": "Start time (ISO 8601)"
    },
    "until": {
      "type": "string",
      "description": "End time (ISO 8601)"
    },
    "action": {
      "type": "string",
      "enum": [
        "block",
        "challenge",
        "jschallenge",
        "managed_challenge",
        "allow",
        "log"
      ],
      "description": "Filter by action"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 1000,
      "description": "Maximum events to return"
    }
  },
  "required": [
    "zoneId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-content_brief_from_keyword-92ee107b"></a>

## content_brief_from_keyword

Handler: SEO content: Builds a structured content brief for a keyword using real GSC data: related query cluster, currently-ranking pages, and refresh-vs-create recommendation. Feed the output to an LLM to draft the article.

```text
Builds a structured content brief for a keyword using real GSC data: related query cluster, currently-ranking pages, and refresh-vs-create recommendation. Feed the output to an LLM to draft the article.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/content/briefs.ts#L1-L295) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL (sc-domain:example.com or https://example.com/)"
    },
    "keyword": {
      "type": "string",
      "minLength": 2,
      "description": "Target keyword/phrase to build a brief around"
    },
    "startDate": {
      "type": "string"
    },
    "endDate": {
      "type": "string"
    },
    "country": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl",
    "keyword"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL (sc-domain:example.com or https://example.com/)"
    },
    "keyword": {
      "type": "string",
      "minLength": 2,
      "description": "Target keyword/phrase to build a brief around"
    },
    "startDate": {
      "type": "string",
      "description": "YYYY-MM-DD (default: 90 days ago)"
    },
    "endDate": {
      "type": "string",
      "description": "YYYY-MM-DD (default: today)"
    },
    "country": {
      "type": "string",
      "minLength": 3,
      "maxLength": 3,
      "description": "ISO 3-letter country code filter (e.g. USA, CRI)"
    }
  },
  "required": [
    "siteUrl",
    "keyword"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-content_outline_from_url-c5e378c2"></a>

## content_outline_from_url

Handler: SEO content: Calls executeGoogleApi.

```text
Analyzes which queries an existing or planned page should target (from GSC) and proposes an H1 + H2 outline grouped by query topic. Feed to an LLM to draft sections.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/content/briefs.ts#L1-L295) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL"
    },
    "pageUrl": {
      "type": "string",
      "format": "uri",
      "description": "Specific page URL to analyze"
    },
    "startDate": {
      "type": "string"
    },
    "endDate": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl",
    "pageUrl"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL"
    },
    "pageUrl": {
      "type": "string",
      "format": "uri",
      "description": "Specific page URL to analyze"
    },
    "startDate": {
      "type": "string"
    },
    "endDate": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl",
    "pageUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-content_topic_gaps-67eeba70"></a>

## content_topic_gaps

Handler: SEO content: Calls executeGoogleApi.

```text
Finds keywords ranking positions 11-30 (just outside top 10) with real impression demand. These are the highest-ROI content opportunities — a small bump = big traffic.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/content/gaps.ts#L1-L251) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL"
    },
    "minImpressions": {
      "type": "number",
      "minimum": 1
    },
    "minPosition": {
      "type": "number",
      "minimum": 1,
      "maximum": 100
    },
    "maxPosition": {
      "type": "number",
      "minimum": 1,
      "maximum": 100
    },
    "lookbackDays": {
      "type": "number",
      "minimum": 7,
      "maximum": 365
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 500
    }
  },
  "required": [
    "siteUrl"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL"
    },
    "minImpressions": {
      "type": "number",
      "minimum": 1,
      "description": "Minimum impressions to consider (default 25)"
    },
    "minPosition": {
      "type": "number",
      "minimum": 1,
      "maximum": 100,
      "description": "Min position for \"near miss\" window (default 11)"
    },
    "maxPosition": {
      "type": "number",
      "minimum": 1,
      "maximum": 100,
      "description": "Max position (default 30)"
    },
    "lookbackDays": {
      "type": "number",
      "minimum": 7,
      "maximum": 365,
      "description": "Days to look back (default 90)"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 500,
      "description": "Max gaps to return (default 50)"
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-content_refresh_candidates-245c8c2a"></a>

## content_refresh_candidates

Handler: SEO content: Identifies pages losing traffic or stuck in positions 4-15 (high refresh ROI). Compares current vs previous period from GSC and ranks by refresh impact potential.

```text
Identifies pages losing traffic or stuck in positions 4-15 (high refresh ROI). Compares current vs previous period from GSC and ranks by refresh impact potential.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/content/gaps.ts#L1-L251) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL"
    },
    "lookbackDays": {
      "type": "number",
      "minimum": 14,
      "maximum": 180
    },
    "minImpressions": {
      "type": "number",
      "minimum": 1
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 200
    }
  },
  "required": [
    "siteUrl"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL"
    },
    "lookbackDays": {
      "type": "number",
      "minimum": 14,
      "maximum": 180,
      "description": "Days per period (default 30)"
    },
    "minImpressions": {
      "type": "number",
      "minimum": 1,
      "description": "Min impressions current period (default 100)"
    },
    "limit": {
      "type": "number",
      "minimum": 1,
      "maximum": 200,
      "description": "Max candidates (default 30)"
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-content_generate_llms_txt-a1c29775"></a>

## content_generate_llms_txt

Handler: SEO content: Calls sc.searchanalytics.query, fetchPageTitle.

```text
Generates a well-formed llms.txt for your site: pulls top URLs from GSC (by traffic) + sitemap, fetches titles, and outputs the markdown spec ready to host at /llms.txt.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/content/llms-txt.ts#L1-L192) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL (for pulling top pages by traffic)"
    },
    "baseUrl": {
      "type": "string",
      "format": "uri",
      "description": "Canonical site origin (e.g. https://example.com)"
    },
    "sitemapUrl": {
      "type": "string",
      "format": "uri"
    },
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "maxPages": {
      "type": "number",
      "minimum": 5,
      "maximum": 200
    }
  },
  "required": [
    "siteUrl",
    "baseUrl"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL (for pulling top pages by traffic)"
    },
    "baseUrl": {
      "type": "string",
      "format": "uri",
      "description": "Canonical site origin (e.g. https://example.com)"
    },
    "sitemapUrl": {
      "type": "string",
      "format": "uri",
      "description": "Sitemap URL (default: {baseUrl}/sitemap.xml)"
    },
    "title": {
      "type": "string",
      "description": "Site title (default: derived from homepage <title>)"
    },
    "description": {
      "type": "string",
      "description": "Short site description (default: derived from homepage <meta description>)"
    },
    "maxPages": {
      "type": "number",
      "minimum": 5,
      "maximum": 200,
      "description": "Max URLs to include (default 50)"
    }
  },
  "required": [
    "siteUrl",
    "baseUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-content_write_article-8e323cfd"></a>

## content_write_article

Handler: SEO content: Calls client.messages.create.

```text
Generates a full-length article (markdown) using the Anthropic SDK, applying brand voice, niche, competitor context, and (optionally) a GSC-derived semantic brief. Returns title, meta, slug, outline and body. Stateless — caller is responsible for persisting.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/content/writer.ts#L1-L241) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "Primary site URL (used for context, not for API calls)"
    },
    "keyword": {
      "type": "string",
      "minLength": 2,
      "description": "Target keyword/topic for the article"
    },
    "brief": {
      "type": "object",
      "properties": {
        "targetKeyword": {
          "type": "string"
        },
        "semanticCluster": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "query": {
                "type": "string"
              },
              "impressions": {
                "type": "number"
              },
              "position": {
                "type": "number"
              }
            },
            "required": [
              "query"
            ]
          },
          "default": []
        },
        "recommendation": {
          "type": "object",
          "properties": {
            "action": {
              "type": "string"
            },
            "reason": {
              "type": "string"
            },
            "suggestedMinWords": {
              "type": "number"
            },
            "targetH2Count": {
              "type": "number"
            }
          }
        }
      },
      "required": [
        "targetKeyword"
      ]
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ]
      },
      "maxItems": 10
    },
    "targetWordCount": {
      "type": "integer",
      "minimum": 300,
      "maximum": 5000
    },
    "language": {
      "type": "string",
      "enum": [
        "es",
        "en",
        "pt"
      ]
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "Primary site URL (used for context, not for API calls)"
    },
    "keyword": {
      "type": "string",
      "minLength": 2,
      "description": "Target keyword/topic for the article"
    },
    "brief": {
      "type": "object",
      "properties": {
        "targetKeyword": {
          "type": "string"
        },
        "semanticCluster": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "query": {
                "type": "string"
              },
              "impressions": {
                "type": "number"
              },
              "position": {
                "type": "number"
              }
            },
            "required": [
              "query"
            ],
            "additionalProperties": false
          },
          "default": []
        },
        "recommendation": {
          "type": "object",
          "properties": {
            "action": {
              "type": "string"
            },
            "reason": {
              "type": "string"
            },
            "suggestedMinWords": {
              "type": "number"
            },
            "targetH2Count": {
              "type": "number"
            }
          },
          "additionalProperties": false
        }
      },
      "required": [
        "targetKeyword"
      ],
      "additionalProperties": false,
      "description": "Structured brief from content_brief_from_keyword. If absent, the writer drafts from keyword + context only."
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000,
      "description": "Brand voice description to apply throughout the draft"
    },
    "niche": {
      "type": "string",
      "maxLength": 120,
      "description": "Site niche/industry for context"
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "maxItems": 10,
      "description": "Known competitors to differentiate against"
    },
    "targetWordCount": {
      "type": "integer",
      "minimum": 300,
      "maximum": 5000,
      "description": "Approximate target length (default 1200)"
    },
    "language": {
      "type": "string",
      "enum": [
        "es",
        "en",
        "pt"
      ],
      "description": "Output language (default es)"
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000,
      "description": "Anything else the writer should know"
    },
    "model": {
      "type": "string",
      "description": "Override Anthropic model (default claude-sonnet-4-6)"
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-geo_query_ai_search-7b56e4ac"></a>

## geo_query_ai_search

Handler: AI search visibility: Queries Perplexity AI search and returns the answer + cited source URLs. Requires PERPLEXITY\_API\_KEY env var. Foundation for brand-visibility and share-of-voice tools.

```text
Queries Perplexity AI search and returns the answer + cited source URLs. Requires PERPLEXITY_API_KEY env var. Foundation for brand-visibility and share-of-voice tools.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/geo/query.ts#L1-L125) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "prompt": {
      "type": "string",
      "minLength": 3,
      "description": "User question to ask the AI search engine"
    },
    "model": {
      "type": "string",
      "enum": [
        "sonar",
        "sonar-pro",
        "sonar-reasoning"
      ]
    },
    "systemPrompt": {
      "type": "string"
    },
    "temperature": {
      "type": "number",
      "minimum": 0,
      "maximum": 2
    }
  },
  "required": [
    "prompt"
  ]
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
    "prompt": {
      "type": "string",
      "minLength": 3,
      "description": "User question to ask the AI search engine"
    },
    "model": {
      "type": "string",
      "enum": [
        "sonar",
        "sonar-pro",
        "sonar-reasoning"
      ],
      "description": "Perplexity model (default: sonar)"
    },
    "systemPrompt": {
      "type": "string",
      "description": "Optional system prompt"
    },
    "temperature": {
      "type": "number",
      "minimum": 0,
      "maximum": 2,
      "description": "Sampling temperature (default 0.2)"
    }
  },
  "required": [
    "prompt"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-geo_check_brand_visibility-01059fa6"></a>

## geo_check_brand_visibility

Handler: AI search visibility: Calls queryPerplexity.

```text
For each prompt, queries AI search and checks if the brand is mentioned in the answer and/or cited in sources. Returns per-prompt results + aggregate visibility rates.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/geo/visibility.ts#L1-L241) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "brand": {
      "type": "string",
      "minLength": 2,
      "description": "Brand or product name"
    },
    "brandDomain": {
      "type": "string"
    },
    "prompts": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 3
      },
      "minItems": 1,
      "maxItems": 20,
      "description": "Prompts to test (max 20)"
    },
    "brandAliases": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "model": {
      "type": "string",
      "enum": [
        "sonar",
        "sonar-pro",
        "sonar-reasoning"
      ]
    }
  },
  "required": [
    "brand",
    "prompts"
  ]
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
    "brand": {
      "type": "string",
      "minLength": 2,
      "description": "Brand or product name"
    },
    "brandDomain": {
      "type": "string",
      "description": "Brand domain (helps detect citations even if name varies)"
    },
    "prompts": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 3
      },
      "minItems": 1,
      "maxItems": 20,
      "description": "Prompts to test (max 20)"
    },
    "brandAliases": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Alternate spellings/products"
    },
    "model": {
      "type": "string",
      "enum": [
        "sonar",
        "sonar-pro",
        "sonar-reasoning"
      ]
    }
  },
  "required": [
    "brand",
    "prompts"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-geo_competitor_share_of_voice-0a821fa0"></a>

## geo_competitor_share_of_voice

Handler: AI search visibility: Calls queryPerplexity.

```text
Compares your brand vs competitors in AI search results. For each prompt, scores who is mentioned, cited, and mentioned first. Returns matrix + aggregate share of voice.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/geo/visibility.ts#L1-L241) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "brands": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "domain": {
            "type": "string"
          },
          "aliases": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "name"
        ]
      },
      "minItems": 2,
      "maxItems": 8,
      "description": "Your brand + competitors (2-8 total)"
    },
    "prompts": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 3
      },
      "minItems": 1,
      "maxItems": 15,
      "description": "Prompts to test"
    },
    "model": {
      "type": "string",
      "enum": [
        "sonar",
        "sonar-pro",
        "sonar-reasoning"
      ]
    }
  },
  "required": [
    "brands",
    "prompts"
  ]
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
    "brands": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "domain": {
            "type": "string"
          },
          "aliases": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "minItems": 2,
      "maxItems": 8,
      "description": "Your brand + competitors (2-8 total)"
    },
    "prompts": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 3
      },
      "minItems": 1,
      "maxItems": 15,
      "description": "Prompts to test"
    },
    "model": {
      "type": "string",
      "enum": [
        "sonar",
        "sonar-pro",
        "sonar-reasoning"
      ]
    }
  },
  "required": [
    "brands",
    "prompts"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-geo_validate_llms_txt-171d9c7d"></a>

## geo_validate_llms_txt

Handler: AI search visibility: Validates /llms.txt and /llms-full.txt at a domain root: existence, content-type, spec compliance (H1, sections, links). Returns issues + recommendations.

```text
Validates /llms.txt and /llms-full.txt at a domain root: existence, content-type, spec compliance (H1, sections, links). Returns issues + recommendations.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/geo/llms-txt-validate.ts#L1-L145) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "baseUrl": {
      "type": "string",
      "format": "uri",
      "description": "Site origin (e.g. https://example.com)"
    }
  },
  "required": [
    "baseUrl"
  ]
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
    "baseUrl": {
      "type": "string",
      "format": "uri",
      "description": "Site origin (e.g. https://example.com)"
    }
  },
  "required": [
    "baseUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-geo_ai_search_friendly_audit-d0581035"></a>

## geo_ai_search_friendly_audit

Handler: AI search visibility: Calls fetchUrl, fetchUrl.

```text
Audits a page for AI search extractability: structured data, headings, canonical/meta, OpenGraph, text density, llms.txt. Returns scored checklist + recommendations.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/geo/audit.ts#L1-L214) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "Page URL to audit"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "Page URL to audit"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-fix_submit_pages_to_index-b80e4e3f"></a>

## fix_submit_pages_to_index

Handler: Website fixes: Calls executeGoogleApi, executeGoogleApi.

```text
Submits URLs to Google Indexing API. Either pass explicit urls, or autodiscover from GSC pages with impressions but few/no clicks (likely not indexed well). Daily quota 200/day.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/fix/indexing.ts#L1-L154) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL (sc-domain:example.com or https://example.com/)"
    },
    "urls": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uri"
      }
    },
    "autoDiscoverMode": {
      "type": "string",
      "enum": [
        "high_impressions_no_clicks",
        "recent_no_data",
        "manual"
      ]
    },
    "minImpressions": {
      "type": "number",
      "minimum": 1
    },
    "max": {
      "type": "number",
      "minimum": 1,
      "maximum": 100
    },
    "type": {
      "type": "string",
      "enum": [
        "URL_UPDATED",
        "URL_DELETED"
      ]
    }
  },
  "required": [
    "siteUrl"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL (sc-domain:example.com or https://example.com/)"
    },
    "urls": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uri"
      },
      "description": "Explicit URLs to submit. If omitted, autodiscover from GSC"
    },
    "autoDiscoverMode": {
      "type": "string",
      "enum": [
        "high_impressions_no_clicks",
        "recent_no_data",
        "manual"
      ],
      "description": "Discovery strategy when urls omitted (default: high_impressions_no_clicks)"
    },
    "minImpressions": {
      "type": "number",
      "minimum": 1,
      "description": "Minimum impressions for autodiscover (default 50)"
    },
    "max": {
      "type": "number",
      "minimum": 1,
      "maximum": 100,
      "description": "Max URLs to submit (default 25, Indexing API daily cap is 200)"
    },
    "type": {
      "type": "string",
      "enum": [
        "URL_UPDATED",
        "URL_DELETED"
      ],
      "description": "Notification type (default URL_UPDATED)"
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-fix_propose_meta_descriptions-0c63e5c3"></a>

## fix_propose_meta_descriptions

Handler: Website fixes: Calls fetchUrl.

```text
Audits meta descriptions across pages and proposes fixes (extracted from page content) for missing/too-short/too-long ones. Returns structured proposals — does NOT write to your CMS. Pair with approval-gate before applying.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/fix/meta.ts#L1-L156) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "urls": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uri"
      },
      "minItems": 1,
      "maxItems": 50,
      "description": "Pages to audit and propose fixes for"
    },
    "minLength": {
      "type": "number",
      "minimum": 50,
      "maximum": 200
    },
    "maxLength": {
      "type": "number",
      "minimum": 100,
      "maximum": 200
    }
  },
  "required": [
    "urls"
  ]
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
    "urls": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uri"
      },
      "minItems": 1,
      "maxItems": 50,
      "description": "Pages to audit and propose fixes for"
    },
    "minLength": {
      "type": "number",
      "minimum": 50,
      "maximum": 200,
      "description": "Min acceptable length (default 110)"
    },
    "maxLength": {
      "type": "number",
      "minimum": 100,
      "maximum": 200,
      "description": "Max acceptable length (default 160)"
    }
  },
  "required": [
    "urls"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-fix_propose_security_headers-0bdd8ecd"></a>

## fix_propose_security_headers

Handler: Website fixes: Calls fetchUrl.

```text
Audits security headers and produces ready-to-deploy configs for Cloudflare Transform Rules, nginx, and Apache covering only the missing headers. Caller applies the config.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/fix/security-headers.ts#L1-L155) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to audit"
    },
    "strict": {
      "type": "boolean"
    }
  },
  "required": [
    "url"
  ]
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
    "url": {
      "type": "string",
      "format": "uri",
      "description": "URL to audit"
    },
    "strict": {
      "type": "boolean",
      "description": "Use strict CSP and HSTS preload values (default false)"
    }
  },
  "required": [
    "url"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-fix_resubmit_sitemap-d084c594"></a>

## fix_resubmit_sitemap

Handler: Website fixes: Calls executeGoogleApi, executeGoogleApi.

```text
Submits a sitemap to Google Search Console and fetches its post-submission status (errors/warnings/indexed counts) for verification.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/fix/sitemap.ts#L1-L188) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL"
    },
    "sitemapUrl": {
      "type": "string",
      "format": "uri",
      "description": "Sitemap absolute URL"
    }
  },
  "required": [
    "siteUrl",
    "sitemapUrl"
  ]
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
    "siteUrl": {
      "type": "string",
      "description": "GSC site URL"
    },
    "sitemapUrl": {
      "type": "string",
      "format": "uri",
      "description": "Sitemap absolute URL"
    }
  },
  "required": [
    "siteUrl",
    "sitemapUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-fix_clean_sitemap-623aabf2"></a>

## fix_clean_sitemap

Handler: Website fixes: Calls fetchUrl.

```text
Fetches sitemap, probes each URL, removes 404/410/5xx entries and (optionally) rewrites redirects to their final destination. Returns details + cleaned XML. Caller deploys the output.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/fix/sitemap.ts#L1-L188) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "sitemapUrl": {
      "type": "string",
      "format": "uri",
      "description": "Sitemap to fetch and clean"
    },
    "removeStatuses": {
      "type": "array",
      "items": {
        "type": "number"
      }
    },
    "followRedirects": {
      "type": "boolean"
    },
    "concurrency": {
      "type": "number",
      "minimum": 1,
      "maximum": 20
    }
  },
  "required": [
    "sitemapUrl"
  ]
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
    "sitemapUrl": {
      "type": "string",
      "format": "uri",
      "description": "Sitemap to fetch and clean"
    },
    "removeStatuses": {
      "type": "array",
      "items": {
        "type": "number"
      },
      "description": "HTTP statuses to remove (default: 404, 410, 500, 502, 503)"
    },
    "followRedirects": {
      "type": "boolean",
      "description": "If true, replace 301/302 URLs with final destination (default false)"
    },
    "concurrency": {
      "type": "number",
      "minimum": 1,
      "maximum": 20,
      "description": "Probe concurrency (default 8)"
    }
  },
  "required": [
    "sitemapUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-social_draft_x-2c561c89"></a>

## social_draft_x

Handler: Social content drafting: Calls client.messages.create.

```text
Generates a draft tweet or thread for X using the Anthropic SDK. Applies brand voice + niche + competitor context. Source can be a topic, a URL, or an article body. Returns { kind, tweets[] }. Stateless.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/social/x.ts#L1-L183) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string"
    },
    "topic": {
      "type": "string",
      "minLength": 2
    },
    "sourceUrl": {
      "type": "string",
      "format": "uri"
    },
    "article": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "bodyMarkdown": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        }
      },
      "required": [
        "title",
        "bodyMarkdown"
      ]
    },
    "format": {
      "type": "string",
      "enum": [
        "single",
        "thread",
        "auto"
      ]
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ]
      },
      "maxItems": 10
    },
    "language": {
      "type": "string",
      "enum": [
        "es",
        "en",
        "pt"
      ]
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl"
  ]
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
    "siteUrl": {
      "type": "string"
    },
    "topic": {
      "type": "string",
      "minLength": 2
    },
    "sourceUrl": {
      "type": "string",
      "format": "uri"
    },
    "article": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "bodyMarkdown": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        }
      },
      "required": [
        "title",
        "bodyMarkdown"
      ],
      "additionalProperties": false
    },
    "format": {
      "type": "string",
      "enum": [
        "single",
        "thread",
        "auto"
      ],
      "description": "Default auto — the model picks based on source length"
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "maxItems": 10
    },
    "language": {
      "type": "string",
      "enum": [
        "es",
        "en",
        "pt"
      ]
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-social_draft_linkedin-92200a08"></a>

## social_draft_linkedin

Handler: Social content drafting: Calls client.messages.create.

```text
Generates a draft LinkedIn post using the Anthropic SDK. Applies brand voice + niche + competitor context. Source can be a topic, URL or article. Returns { body, hashtags[] }. Stateless.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/social/linkedin.ts#L1-L191) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string"
    },
    "topic": {
      "type": "string",
      "minLength": 2
    },
    "sourceUrl": {
      "type": "string",
      "format": "uri"
    },
    "article": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "bodyMarkdown": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        }
      },
      "required": [
        "title",
        "bodyMarkdown"
      ]
    },
    "angle": {
      "type": "string",
      "enum": [
        "story",
        "insight",
        "announcement",
        "how-to"
      ]
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ]
      },
      "maxItems": 10
    },
    "language": {
      "type": "string",
      "enum": [
        "es",
        "en",
        "pt"
      ]
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl"
  ]
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
    "siteUrl": {
      "type": "string"
    },
    "topic": {
      "type": "string",
      "minLength": 2
    },
    "sourceUrl": {
      "type": "string",
      "format": "uri"
    },
    "article": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "bodyMarkdown": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        }
      },
      "required": [
        "title",
        "bodyMarkdown"
      ],
      "additionalProperties": false
    },
    "angle": {
      "type": "string",
      "enum": [
        "story",
        "insight",
        "announcement",
        "how-to"
      ],
      "description": "Default insight — the model picks the matching narrative arc"
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "maxItems": 10
    },
    "language": {
      "type": "string",
      "enum": [
        "es",
        "en",
        "pt"
      ]
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-social_draft_hn-7a7e3710"></a>

## social_draft_hn

Handler: Social content drafting: Calls client.messages.create.

```text
Generates a Hacker News comment draft. Stateless. Prompt is explicit about HN's anti-marketing sensitivity — review carefully before posting. Defaults to English.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/social/hn.ts#L1-L190) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string"
    },
    "topic": {
      "type": "string",
      "minLength": 2
    },
    "sourceUrl": {
      "type": "string",
      "format": "uri"
    },
    "threadContext": {
      "type": "string",
      "maxLength": 2000
    },
    "article": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "bodyMarkdown": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        }
      },
      "required": [
        "title",
        "bodyMarkdown"
      ]
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ]
      },
      "maxItems": 10
    },
    "language": {
      "type": "string",
      "enum": [
        "en",
        "es"
      ]
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl"
  ]
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
    "siteUrl": {
      "type": "string"
    },
    "topic": {
      "type": "string",
      "minLength": 2
    },
    "sourceUrl": {
      "type": "string",
      "format": "uri"
    },
    "threadContext": {
      "type": "string",
      "maxLength": 2000,
      "description": "Pasted excerpt from the HN thread or the parent comment being replied to"
    },
    "article": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "bodyMarkdown": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        }
      },
      "required": [
        "title",
        "bodyMarkdown"
      ],
      "additionalProperties": false
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "maxItems": 10
    },
    "language": {
      "type": "string",
      "enum": [
        "en",
        "es"
      ],
      "description": "HN is mostly English — default en"
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-hn_search_discussions-60c29c21"></a>

## hn_search_discussions

Handler: Hacker News: Calls httpClient.get.

```text
Searches Hacker News (stories + comments) via Algolia HN Search (no auth). Returns title, URL, points, num_comments, author and the HN item URL. Read-only.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/social/hn-search.ts#L1-L150) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "minLength": 2,
      "maxLength": 200,
      "description": "Search query (full-text against title + URL + author + story_text + comment_text)"
    },
    "tags": {
      "type": "string",
      "enum": [
        "story",
        "comment",
        "story,comment",
        "show_hn",
        "ask_hn"
      ],
      "default": "story,comment"
    },
    "sortBy": {
      "type": "string",
      "enum": [
        "relevance",
        "date"
      ],
      "default": "relevance"
    },
    "createdAfter": {
      "type": "integer"
    },
    "hitsPerPage": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 25
    }
  },
  "required": [
    "query"
  ]
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
    "query": {
      "type": "string",
      "minLength": 2,
      "maxLength": 200,
      "description": "Search query (full-text against title + URL + author + story_text + comment_text)"
    },
    "tags": {
      "type": "string",
      "enum": [
        "story",
        "comment",
        "story,comment",
        "show_hn",
        "ask_hn"
      ],
      "default": "story,comment"
    },
    "sortBy": {
      "type": "string",
      "enum": [
        "relevance",
        "date"
      ],
      "default": "relevance"
    },
    "createdAfter": {
      "type": "integer",
      "description": "Unix epoch in seconds; matches Algolia's numericFilters."
    },
    "hitsPerPage": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 25
    }
  },
  "required": [
    "query"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-reddit_search_threads-3a93295e"></a>

## reddit_search_threads

Handler: Reddit: Calls httpClient.get.

```text
Searches Reddit for threads matching a query (no OAuth). Returns title, subreddit, score, num_comments, created_utc, selftext, and the permalink to reply on. Read-only.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/reddit/search.ts#L1-L154) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "minLength": 2,
      "maxLength": 200,
      "description": "Search query (matched against title + selftext)"
    },
    "subreddit": {
      "type": "string",
      "maxLength": 80
    },
    "sort": {
      "type": "string",
      "enum": [
        "new",
        "relevance",
        "top",
        "hot",
        "comments"
      ],
      "default": "relevance"
    },
    "timeFilter": {
      "type": "string",
      "enum": [
        "hour",
        "day",
        "week",
        "month",
        "year",
        "all"
      ],
      "default": "week"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 25
    }
  },
  "required": [
    "query"
  ]
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
    "query": {
      "type": "string",
      "minLength": 2,
      "maxLength": 200,
      "description": "Search query (matched against title + selftext)"
    },
    "subreddit": {
      "type": "string",
      "maxLength": 80,
      "description": "Scope to a subreddit (without r/). Omit for all of Reddit."
    },
    "sort": {
      "type": "string",
      "enum": [
        "new",
        "relevance",
        "top",
        "hot",
        "comments"
      ],
      "default": "relevance"
    },
    "timeFilter": {
      "type": "string",
      "enum": [
        "hour",
        "day",
        "week",
        "month",
        "year",
        "all"
      ],
      "default": "week"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "default": 25
    }
  },
  "required": [
    "query"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-reddit_draft_reply-5e63f473"></a>

## reddit_draft_reply

Handler: Reddit: Calls client.messages.create.

```text
Generates a draft Reddit reply via the Anthropic SDK. Stateless. Prompt is explicit about Reddit's anti-marketing sensitivity — review before posting. Defaults to English; supports Spanish for Spanish-speaking subs.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/reddit/draft.ts#L1-L205) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string"
    },
    "subreddit": {
      "type": "string",
      "maxLength": 80
    },
    "threadUrl": {
      "type": "string",
      "format": "uri"
    },
    "threadContext": {
      "type": "string",
      "maxLength": 3000
    },
    "topic": {
      "type": "string",
      "minLength": 2
    },
    "sourceUrl": {
      "type": "string",
      "format": "uri"
    },
    "article": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "bodyMarkdown": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        }
      },
      "required": [
        "title",
        "bodyMarkdown"
      ]
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ]
      },
      "maxItems": 10
    },
    "language": {
      "type": "string",
      "enum": [
        "en",
        "es"
      ]
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl"
  ]
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
    "siteUrl": {
      "type": "string"
    },
    "subreddit": {
      "type": "string",
      "maxLength": 80,
      "description": "Without the r/ prefix (e.g. \"SEO\", \"webdev\")"
    },
    "threadUrl": {
      "type": "string",
      "format": "uri",
      "description": "Full URL of the Reddit thread you're replying to"
    },
    "threadContext": {
      "type": "string",
      "maxLength": 3000,
      "description": "Pasted excerpt: thread title + body, or parent comment text"
    },
    "topic": {
      "type": "string",
      "minLength": 2
    },
    "sourceUrl": {
      "type": "string",
      "format": "uri"
    },
    "article": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "bodyMarkdown": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        }
      },
      "required": [
        "title",
        "bodyMarkdown"
      ],
      "additionalProperties": false
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "maxItems": 10
    },
    "language": {
      "type": "string",
      "enum": [
        "en",
        "es"
      ],
      "description": "Most subs are English — default en"
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-coding_propose_fix-db70466c"></a>

## coding_propose_fix

Handler: Coding assistance: Calls client.messages.create.

```text
Generates a structured fix proposal (diagnosis + steps + tools + risks + verification) for a site ops issue. Stateless — the dashboard persists as a draft, the human reviews, mutations only fire after explicit approval. NEVER auto-executes.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/coding/propose-fix.ts#L1-L224) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string"
    },
    "problem": {
      "type": "string",
      "minLength": 10,
      "maxLength": 4000,
      "description": "Free-form description of what is wrong"
    },
    "signal": {
      "type": "object",
      "properties": {
        "signalType": {
          "type": "string"
        },
        "severity": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "detail": {}
      },
      "required": [
        "signalType",
        "severity",
        "title"
      ]
    },
    "snapshot": {
      "type": "object",
      "properties": {
        "kind": {
          "type": "string"
        },
        "capturedAt": {
          "type": "string"
        },
        "data": {}
      },
      "required": [
        "kind"
      ]
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "language": {
      "type": "string",
      "enum": [
        "es",
        "en"
      ]
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl",
    "problem"
  ]
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
    "siteUrl": {
      "type": "string"
    },
    "problem": {
      "type": "string",
      "minLength": 10,
      "maxLength": 4000,
      "description": "Free-form description of what is wrong"
    },
    "signal": {
      "type": "object",
      "properties": {
        "signalType": {
          "type": "string"
        },
        "severity": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "detail": {}
      },
      "required": [
        "signalType",
        "severity",
        "title"
      ],
      "additionalProperties": false
    },
    "snapshot": {
      "type": "object",
      "properties": {
        "kind": {
          "type": "string"
        },
        "capturedAt": {
          "type": "string"
        },
        "data": {}
      },
      "required": [
        "kind"
      ],
      "additionalProperties": false
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "language": {
      "type": "string",
      "enum": [
        "es",
        "en"
      ]
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl",
    "problem"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-video_draft_brief-a3cfa982"></a>

## video_draft_brief

Handler: Video generation: Calls client.messages.create.

```text
Generates a UGC-style video brief: hook + main + CTA scripts, shot list with timestamps, on-screen text, voiceover + mood + thumbnail ideas. Stateless — the dashboard persists as a draft. Video rendering is a separate, optional step (video_render_clip).
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/video/brief.ts#L1-L251) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteUrl": {
      "type": "string"
    },
    "topic": {
      "type": "string",
      "minLength": 2,
      "maxLength": 300,
      "description": "Topic / angle for the video"
    },
    "format": {
      "type": "string",
      "enum": [
        "reel",
        "short",
        "square",
        "horizontal"
      ],
      "default": "reel"
    },
    "durationSec": {
      "type": "integer",
      "minimum": 8,
      "maximum": 180,
      "default": 30
    },
    "style": {
      "type": "string",
      "enum": [
        "conversational",
        "energetic",
        "educational",
        "narrative",
        "product_demo"
      ],
      "default": "conversational"
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ]
      },
      "maxItems": 10
    },
    "language": {
      "type": "string",
      "enum": [
        "es",
        "en",
        "pt"
      ]
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl",
    "topic"
  ]
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
    "siteUrl": {
      "type": "string"
    },
    "topic": {
      "type": "string",
      "minLength": 2,
      "maxLength": 300,
      "description": "Topic / angle for the video"
    },
    "format": {
      "type": "string",
      "enum": [
        "reel",
        "short",
        "square",
        "horizontal"
      ],
      "default": "reel"
    },
    "durationSec": {
      "type": "integer",
      "minimum": 8,
      "maximum": 180,
      "default": 30
    },
    "style": {
      "type": "string",
      "enum": [
        "conversational",
        "energetic",
        "educational",
        "narrative",
        "product_demo"
      ],
      "default": "conversational"
    },
    "brandVoice": {
      "type": "string",
      "maxLength": 2000
    },
    "niche": {
      "type": "string",
      "maxLength": 120
    },
    "competitors": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "notes": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "maxItems": 10
    },
    "language": {
      "type": "string",
      "enum": [
        "es",
        "en",
        "pt"
      ]
    },
    "additionalContext": {
      "type": "string",
      "maxLength": 2000
    },
    "model": {
      "type": "string"
    }
  },
  "required": [
    "siteUrl",
    "topic"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-video_render_clip-e121d519"></a>

## video_render_clip

Handler: Video generation: returns provider stub status rather than rendering a clip, even with a configured API key.

```text
Render a video from a brief via Runway / Pika / Replicate. Provider chosen from VIDEO_PROVIDER env var or providerOverride. Returns pending_provider_config when no provider is wired — the brief is still usable; a human creator can execute it without AI rendering.
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/video/render.ts#L1-L185) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "brief": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "hookScript": {
          "type": "string"
        },
        "mainScript": {
          "type": "string"
        },
        "ctaScript": {
          "type": "string",
          "default": ""
        },
        "format": {
          "type": "string",
          "enum": [
            "reel",
            "short",
            "square",
            "horizontal"
          ],
          "default": "reel"
        },
        "aspectRatio": {
          "type": "string",
          "default": "9:16"
        },
        "durationSec": {
          "type": "integer",
          "minimum": 8,
          "maximum": 180,
          "default": 30
        },
        "voiceoverInstructions": {
          "type": "string",
          "default": ""
        },
        "moodAndStyle": {
          "type": "string",
          "default": ""
        },
        "shotList": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "timestamp": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "visualType": {
                "type": "string"
              },
              "notes": {
                "type": "string"
              }
            },
            "required": [
              "timestamp",
              "description",
              "visualType"
            ]
          },
          "default": []
        }
      },
      "required": [
        "title",
        "hookScript",
        "mainScript"
      ]
    },
    "providerOverride": {
      "type": "string",
      "enum": [
        "runway",
        "pika",
        "replicate"
      ]
    },
    "dryRun": {
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "brief"
  ]
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
    "brief": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "hookScript": {
          "type": "string"
        },
        "mainScript": {
          "type": "string"
        },
        "ctaScript": {
          "type": "string",
          "default": ""
        },
        "format": {
          "type": "string",
          "enum": [
            "reel",
            "short",
            "square",
            "horizontal"
          ],
          "default": "reel"
        },
        "aspectRatio": {
          "type": "string",
          "default": "9:16"
        },
        "durationSec": {
          "type": "integer",
          "minimum": 8,
          "maximum": 180,
          "default": 30
        },
        "voiceoverInstructions": {
          "type": "string",
          "default": ""
        },
        "moodAndStyle": {
          "type": "string",
          "default": ""
        },
        "shotList": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "timestamp": {
                "type": "string"
              },
              "description": {
                "type": "string"
              },
              "visualType": {
                "type": "string"
              },
              "notes": {
                "type": "string"
              }
            },
            "required": [
              "timestamp",
              "description",
              "visualType"
            ],
            "additionalProperties": false
          },
          "default": []
        }
      },
      "required": [
        "title",
        "hookScript",
        "mainScript"
      ],
      "additionalProperties": false
    },
    "providerOverride": {
      "type": "string",
      "enum": [
        "runway",
        "pika",
        "replicate"
      ]
    },
    "dryRun": {
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "brief"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-meta_list_ad_accounts-2d800f0a"></a>

## meta_list_ad_accounts

Handler: Meta Graph API: Calls metaGetAll.

```text
Lists Meta (Facebook) ad accounts accessible to the configured access token
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/meta/ads.ts#L1-L100) · Schema: literal-source.

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

</details>

<a id="tool-meta_list_campaigns-3c69813f"></a>

## meta_list_campaigns

Handler: Meta Graph API: Calls metaGet.

```text
Lists campaigns in a Meta ad account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/meta/ads.ts#L1-L100) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "adAccountId": {
      "type": "string",
      "description": "Ad account ID, with or without the \"act_\" prefix"
    },
    "status": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "ACTIVE",
          "PAUSED",
          "ARCHIVED"
        ]
      }
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100
    }
  },
  "required": [
    "adAccountId"
  ]
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
    "adAccountId": {
      "type": "string",
      "description": "Ad account ID, with or without the \"act_\" prefix"
    },
    "status": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "ACTIVE",
          "PAUSED",
          "ARCHIVED"
        ]
      },
      "description": "Filter by effective status"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Maximum results (default 25)"
    }
  },
  "required": [
    "adAccountId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-meta_get_insights-d260cbc6"></a>

## meta_get_insights

Handler: Meta Graph API: Calls metaGetAll.

```text
Gets performance insights (impressions, reach, clicks, spend, CTR, CPC, CPM, actions) for a Meta ad account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/meta/ads.ts#L1-L100) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "adAccountId": {
      "type": "string",
      "description": "Ad account ID, with or without the \"act_\" prefix"
    },
    "level": {
      "type": "string",
      "enum": [
        "account",
        "campaign",
        "adset",
        "ad"
      ],
      "default": "campaign"
    },
    "datePreset": {
      "type": "string",
      "enum": [
        "today",
        "yesterday",
        "last_7d",
        "last_30d",
        "this_month",
        "last_month"
      ],
      "default": "last_30d"
    },
    "since": {
      "type": "string",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    },
    "until": {
      "type": "string",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
    }
  },
  "required": [
    "adAccountId"
  ]
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
    "adAccountId": {
      "type": "string",
      "description": "Ad account ID, with or without the \"act_\" prefix"
    },
    "level": {
      "type": "string",
      "enum": [
        "account",
        "campaign",
        "adset",
        "ad"
      ],
      "default": "campaign",
      "description": "Aggregation level"
    },
    "datePreset": {
      "type": "string",
      "enum": [
        "today",
        "yesterday",
        "last_7d",
        "last_30d",
        "this_month",
        "last_month"
      ],
      "default": "last_30d",
      "description": "Date preset (ignored when since/until are given)"
    },
    "since": {
      "type": "string",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$",
      "description": "Start date YYYY-MM-DD (requires until)"
    },
    "until": {
      "type": "string",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}$",
      "description": "End date YYYY-MM-DD (requires since)"
    }
  },
  "required": [
    "adAccountId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-meta_list_pages-b61d2ea3"></a>

## meta_list_pages

Handler: Meta Graph API: Calls metaGetAll.

```text
Lists Facebook Pages accessible to the access token, with linked Instagram business accounts
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/meta/pages.ts#L1-L103) · Schema: literal-source.

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

</details>

<a id="tool-meta_list_page_posts-42d3018c"></a>

## meta_list_page_posts

Handler: Meta Graph API: Calls metaGet.

```text
Lists recent posts of a Facebook Page
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/meta/pages.ts#L1-L103) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "pageId": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "Facebook Page ID"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100
    }
  },
  "required": [
    "pageId"
  ]
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
    "pageId": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "Facebook Page ID"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Maximum results (default 25, max 100)"
    }
  },
  "required": [
    "pageId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-meta_get_ig_account-a5917300"></a>

## meta_get_ig_account

Handler: Meta Graph API: Gets the Instagram business account linked to a Facebook Page.

```text
Gets the Instagram business account linked to a Facebook Page
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/meta/pages.ts#L1-L103) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "pageId": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "Facebook Page ID"
    }
  },
  "required": [
    "pageId"
  ]
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
    "pageId": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "Facebook Page ID"
    }
  },
  "required": [
    "pageId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-meta_list_ig_media-f3eca30a"></a>

## meta_list_ig_media

Handler: Meta Graph API: Calls metaGet.

```text
Lists recent media of an Instagram business account
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/meta/pages.ts#L1-L103) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "igUserId": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "Instagram business account ID"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100
    }
  },
  "required": [
    "igUserId"
  ]
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
    "igUserId": {
      "type": "string",
      "pattern": "^\\d+$",
      "description": "Instagram business account ID"
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Maximum results (default 25, max 100)"
    }
  },
  "required": [
    "igUserId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-meta_draft_post-7b1b34fe"></a>

## meta_draft_post

Handler: Meta Graph API: Calls socialPostsStore.createDraft.

```text
Creates a Facebook/Instagram post DRAFT for a site. Does not publish: the admin must approve it in the dashboard
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/tools/meta/posts.ts#L1-L61) · Schema: literal-source.

<details>
<summary>Advertised input schema</summary>

```json
{
  "type": "object",
  "properties": {
    "siteId": {
      "type": "string",
      "description": "Site (client) ID the post belongs to"
    },
    "platforms": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "facebook",
          "instagram"
        ]
      },
      "minItems": 1,
      "description": "Target platforms"
    },
    "message": {
      "type": "string",
      "maxLength": 63206,
      "description": "Post text / caption (Instagram max 2200 chars)"
    },
    "imageUrl": {
      "type": "string",
      "format": "uri"
    },
    "scheduledAt": {
      "type": "string"
    }
  },
  "required": [
    "siteId",
    "platforms",
    "message"
  ]
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
    "siteId": {
      "type": "string",
      "format": "uuid",
      "description": "Site (client) ID the post belongs to"
    },
    "platforms": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "facebook",
          "instagram"
        ]
      },
      "minItems": 1,
      "description": "Target platforms"
    },
    "message": {
      "type": "string",
      "maxLength": 63206,
      "description": "Post text / caption (Instagram max 2200 chars)"
    },
    "imageUrl": {
      "type": "string",
      "format": "uri",
      "description": "Image already uploaded to the site R2 storage (dashboard upload)"
    },
    "scheduledAt": {
      "type": "string",
      "format": "date-time",
      "description": "ISO 8601 publish time (5 min to 60 days ahead); omit to publish as soon as approved"
    }
  },
  "required": [
    "siteId",
    "platforms",
    "message"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-auth_status-50348a10"></a>

## auth_status

Handler: Returns status from authManager.getStatus().

```text
Get current authentication status
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/server.ts#L82-L178) · Schema: literal-source.

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

<a id="tool-cache_stats-6127926d"></a>

## cache_stats

Handler: Returns cacheStats() from the shared cache.

```text
Get cache statistics
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/server.ts#L82-L178) · Schema: literal-source.

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

<a id="tool-rate_limit_status-f937635d"></a>

## rate_limit_status

Handler: Returns rateLimiter.getAllStatus().

```text
Get rate limiter status for all services
```

[Source](https://github.com/bypixels/SEO-MCP-PRO/blob/d3c283dae295aff1c481d3a2c6783ac0984ba522/src/server.ts#L82-L178) · Schema: literal-source.

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
