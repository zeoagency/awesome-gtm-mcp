# AINative-Studio/ainative-gtm-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/AINative-Studio/ainative-gtm-mcp) · [Machine-readable inventory](../data/mcps/ainative-studio--ainative-gtm-mcp.json)

**57 extracted tools.** Audits container configuration, finds broadly triggered conversion tags, and creates replacement event triggers.

Snapshot: 2026-10-13 · [b858f34ced75](https://github.com/AINative-Studio/ainative-gtm-mcp/tree/b858f34ced754293a440898dce048869774fc661) · Method: tools/list.

Exposure: All seven imported tool arrays register unconditionally, including all Google Ads tools; credentials are loaded lazily inside handlers.

## Limits

- Only offline MCP initialize/tools/list was executed with an empty environment and isolated HOME; no handler, credential lookup or remote GTM/Ads operation was invoked.
- GTM list handlers do not paginate, so audits and lists may cover only the first API page.
- gtm_fix_conversion_tag_trigger always creates a fresh trigger, and its message can overstate exclusive event firing when other triggers remain.
- gtm_publish returns published:true without interpreting compilerError.
- Google Ads auxiliary product defects: audience mode is ignored, add_geo_target does not apply its promised presence-only settings, audit_conversion_goals fabricates zero activity, and PMax image creation supplies full_size.url without image bytes.
- Pinned google-ads-api dependency exposes no adGroupAds.appeal implementation (rg source inspection), so gads_request_ad_review returns notAppealable; other Google Ads runtime behavior was not verified.
- Several description-only copy length/file-format constraints are not enforced by the exposed schema; schemas retain the actual registration constraints.
- GTM client requests edit.containers and publish scopes but omits edit.containerversions; version creation needs credentials granting that scope.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_list_accounts`](#tool-gtm_list_accounts-c5d9b27f) | GTM | Lists GTM accounts using accounts.list. |
| [`gtm_list_containers`](#tool-gtm_list_containers-e45afd2b) | GTM | Lists containers in the supplied GTM account. |
| [`gtm_get_container`](#tool-gtm_get_container-fdc6e39c) | GTM | Fetches the supplied GTM container. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Lists tags in the supplied workspace. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Fetches a tag configuration from the supplied workspace. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Fetches the tag, shallow-merges updates, and sends tags.update. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | Deletes the supplied workspace tag. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Lists triggers in the supplied workspace. |
| [`gtm_get_trigger`](#tool-gtm_get_trigger-669e5c62) | GTM | Fetches a workspace trigger. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Creates a workspace trigger from the unrestricted trigger object. |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | Fetches the trigger, shallow-merges updates, and sends triggers.update. |
| [`gtm_audit_container`](#tool-gtm_audit_container-a82e2cd2) | GTM | Lists tags, triggers and variables and calculates a heuristic score from missing triggers/types, duplicate names and conversion-like tags on a named All Pages trigger. |
| [`gtm_find_misfiring_conversion_tags`](#tool-gtm_find_misfiring_conversion_tags-49990754) | GTM | Classifies conversion-like tag names as misfiring when attached to PAGEVIEW or named All Pages triggers. |
| [`gtm_fix_conversion_tag_trigger`](#tool-gtm_fix_conversion_tag_trigger-7803f98e) | GTM | Always creates a new Custom Event trigger, optionally removes PAGEVIEW/All Pages triggers and updates the tag; it does not reuse an existing event trigger. |
| [`gtm_list_workspaces`](#tool-gtm_list_workspaces-248ce86f) | GTM | Lists workspaces belonging to the supplied container. |
| [`gtm_get_workspace_status`](#tool-gtm_get_workspace_status-58373cea) | GTM | Fetches workspace changes and conflicts through getStatus. |
| [`gtm_create_version`](#tool-gtm_create_version-50a805d7) | GTM | Creates a container version from the supplied workspace with a name and optional notes. |
| [`gtm_publish`](#tool-gtm_publish-54fdd062) | GTM | Creates a new version and publishes it, returning compilerError without checking it before reporting published true. |
| [`gads_list_conversion_actions`](#tool-gads_list_conversion_actions-34f3f826) | Other product | Google Ads: executes GAQL query using the supplied parameters. |
| [`gads_update_conversion_counting`](#tool-gads_update_conversion_counting-987040f9) | Other product | Google Ads: executes conversionActions.update using the supplied parameters. |
| [`gads_update_campaign_budget`](#tool-gads_update_campaign_budget-f5ed7b9d) | Other product | Google Ads: executes campaignBudgets.update using the supplied parameters. |
| [`gads_audit_conversion_goals`](#tool-gads_audit_conversion_goals-e760e819) | Other product | Google Ads: queries static conversion action data but initializes activity and conversion counts to false/zero without querying recent activity. |
| [`gads_get_account_performance`](#tool-gads_get_account_performance-6d971da9) | Other product | Google Ads: executes GAQL query using the supplied parameters. |
| [`gads_create_keyword`](#tool-gads_create_keyword-15b5d44f) | Other product | Google Ads: executes adGroupCriteria.create using the supplied parameters. |
| [`gads_pause_campaign`](#tool-gads_pause_campaign-b62baece) | Other product | Google Ads: executes campaigns.update using the supplied parameters. |
| [`gads_set_campaign_status`](#tool-gads_set_campaign_status-23ddf10d) | Other product | Google Ads: executes campaigns.update using the supplied parameters. |
| [`gads_remove_keyword`](#tool-gads_remove_keyword-7d000a9b) | Other product | Google Ads: pauses the keyword criterion rather than removing it. |
| [`gads_remove_campaign_criterion`](#tool-gads_remove_campaign_criterion-87d556d8) | Other product | Google Ads: executes campaignCriteria.remove using the supplied parameters. |
| [`gads_add_negative_placement`](#tool-gads_add_negative_placement-4f822a16) | Other product | Google Ads: executes campaignCriteria.create using the supplied parameters. |
| [`gads_set_conversion_goal_inclusion`](#tool-gads_set_conversion_goal_inclusion-e154c9ae) | Other product | Google Ads: finds the conversion action category and updates all customer goals for that category across origins. |
| [`gads_list_recommendation_subscriptions`](#tool-gads_list_recommendation_subscriptions-c470e1e7) | Other product | Google Ads: executes query using the supplied parameters. |
| [`gads_set_recommendation_subscription`](#tool-gads_set_recommendation_subscription-20fb4c09) | Other product | Google Ads: updates specific or all resolvable recommendation subscriptions and skips resources ending in /UNKNOWN. |
| [`gads_create_campaign`](#tool-gads_create_campaign-c5c026ef) | Other product | Google Ads: creates a dedicated budget then a Search/Display campaign with explicit network settings; partial creations are not rolled back. |
| [`gads_create_ad_group`](#tool-gads_create_ad_group-3368918f) | Other product | Google Ads: executes adGroups.create using the supplied parameters. |
| [`gads_create_responsive_search_ad`](#tool-gads_create_responsive_search_ad-f4873363) | Other product | Google Ads: executes adGroupAds.create using the supplied parameters. |
| [`gads_add_geo_target`](#tool-gads_add_geo_target-732c3ff6) | Other product | Google Ads: creates a location campaign criterion; despite its description it does not change presence-only geo settings. |
| [`gads_set_presence_only`](#tool-gads_set_presence_only-09bccbe2) | Other product | Google Ads: executes campaigns.update using the supplied parameters. |
| [`gads_add_negative_keyword`](#tool-gads_add_negative_keyword-66691628) | Other product | Google Ads: executes campaignCriteria.create using the supplied parameters. |
| [`gads_search`](#tool-gads_search-a2660b1a) | Other product | Google Ads: rejects queries without an initial SELECT keyword then runs a GAQL query. |
| [`gads_upload_image_asset`](#tool-gads_upload_image_asset-a1a635b3) | Other product | Google Ads: executes assets.create using the supplied parameters. |
| [`gads_create_responsive_display_ad`](#tool-gads_create_responsive_display_ad-1df10e77) | Other product | Google Ads: executes adGroupAds.create using the supplied parameters. |
| [`gads_upload_media_bundle`](#tool-gads_upload_media_bundle-daf9a287) | Other product | Google Ads: executes assets.create using the supplied parameters. |
| [`gads_create_html5_ad`](#tool-gads_create_html5_ad-49be345d) | Other product | Google Ads: executes adGroupAds.create using the supplied parameters. |
| [`gads_set_bidding_strategy`](#tool-gads_set_bidding_strategy-e0363d8e) | Other product | Google Ads: validates strategy-specific required values, updates the campaign and queries its resulting bidding strategy type. |
| [`gads_set_ad_group_bid`](#tool-gads_set_ad_group_bid-15b0ccd9) | Other product | Google Ads: executes adGroups.update using the supplied parameters. |
| [`gads_set_keyword_bid`](#tool-gads_set_keyword_bid-eb485aef) | Other product | Google Ads: executes adGroupCriteria.update using the supplied parameters. |
| [`gads_set_ad_status`](#tool-gads_set_ad_status-3f1f52bf) | Other product | Google Ads: executes adGroupAds.remove, adGroupAds.update using the supplied parameters. |
| [`gads_request_ad_review`](#tool-gads_request_ad_review-babb2ab9) | Other product | Google Ads: checks for adGroupAds.appeal, returns notAppealable when absent, and otherwise attempts an appeal with errors surfaced. |
| [`gads_add_sitelink`](#tool-gads_add_sitelink-2c71cdce) | Other product | Google Ads: executes assets.create, campaignAssets.create using the supplied parameters. |
| [`gads_add_callout`](#tool-gads_add_callout-9da2fd82) | Other product | Google Ads: executes assets.create, campaignAssets.create using the supplied parameters. |
| [`gads_add_structured_snippet`](#tool-gads_add_structured_snippet-f9aeb08f) | Other product | Google Ads: executes assets.create, campaignAssets.create using the supplied parameters. |
| [`gads_add_call_extension`](#tool-gads_add_call_extension-d7fcfeed) | Other product | Google Ads: executes assets.create, campaignAssets.create using the supplied parameters. |
| [`gads_add_audience_to_ad_group`](#tool-gads_add_audience_to_ad_group-a4dbbbfe) | Other product | Google Ads: creates a user-list ad-group criterion but ignores mode when setting targeting, so TARGETING does not restrict reach. |
| [`gads_create_conversion_action`](#tool-gads_create_conversion_action-fd453496) | Other product | Google Ads: executes conversionActions.create using the supplied parameters. |
| [`gads_upload_click_conversion`](#tool-gads_upload_click_conversion-ea59b0e7) | Other product | Google Ads: invokes legacy conversionUploads.uploadClickConversions with partial\_failure and reports partial or thrown errors. |
| [`gads_create_pmax_campaign`](#tool-gads_create_pmax_campaign-2b2f44e3) | Other product | Google Ads: sequentially creates budget, PMax campaign, image/text assets and asset-group links; images use full\_size.url rather than uploaded bytes, and partial creations are not rolled back. |
| [`gads_add_language_target`](#tool-gads_add_language_target-6a22f6df) | Other product | Google Ads: executes campaignCriteria.create using the supplied parameters. |

<a id="tool-gtm_list_accounts-c5d9b27f"></a>

## gtm_list_accounts

Handler: Lists GTM accounts using accounts.list.

```text
List all GTM accounts accessible to the service account
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/accounts.ts#L7-L19) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {},
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_containers-e45afd2b"></a>

## gtm_list_containers

Handler: Lists containers in the supplied GTM account.

```text
List all containers in a GTM account
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/accounts.ts#L19-L33) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "GTM account ID"
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

Handler: Fetches the supplied GTM container.

```text
Get details of a specific GTM container
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/accounts.ts#L33-L49) · Schema: tools/list.

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

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Lists tags in the supplied workspace.

```text
List all tags in a GTM workspace
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/tags.ts#L7-L25) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
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

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Fetches a tag configuration from the supplied workspace.

```text
Get full configuration of a specific GTM tag
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/tags.ts#L25-L44) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
    },
    "tagId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "tagId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Fetches the tag, shallow-merges updates, and sends tags.update.

```text
Update an existing GTM tag (e.g. fix its trigger, rename it, update parameters)
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/tags.ts#L44-L71) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
    },
    "tagId": {
      "type": "string"
    },
    "updates": {
      "type": "object",
      "additionalProperties": {},
      "description": "Partial tag body — only fields to update"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "tagId",
    "updates"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: Deletes the supplied workspace tag.

```text
Delete a GTM tag from a workspace
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/tags.ts#L71-L89) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
    },
    "tagId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "tagId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Lists triggers in the supplied workspace.

```text
List all triggers in a GTM workspace
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/triggers.ts#L7-L25) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
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

<a id="tool-gtm_get_trigger-669e5c62"></a>

## gtm_get_trigger

Handler: Fetches a workspace trigger.

```text
Get full configuration of a specific GTM trigger
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/triggers.ts#L25-L44) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
    },
    "triggerId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "triggerId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Creates a workspace trigger from the unrestricted trigger object.

```text
Create a new trigger in a GTM workspace
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/triggers.ts#L44-L64) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
    },
    "trigger": {
      "type": "object",
      "additionalProperties": {},
      "description": "Full GTM trigger body"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "trigger"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: Fetches the trigger, shallow-merges updates, and sends triggers.update.

```text
Update an existing GTM trigger
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/triggers.ts#L64-L89) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
    },
    "triggerId": {
      "type": "string"
    },
    "updates": {
      "type": "object",
      "additionalProperties": {},
      "description": "Partial trigger body — only fields to update"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "triggerId",
    "updates"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_audit_container-a82e2cd2"></a>

## gtm_audit_container

Handler: Lists tags, triggers and variables and calculates a heuristic score from missing triggers/types, duplicate names and conversion-like tags on a named All Pages trigger.

```text
Comprehensive container audit — finds broken tags, duplicate tags, misfiring conversion tags, tags missing triggers, and tags firing too broadly. Returns a health score 0–100.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/audit.ts#L7-L83) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
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

<a id="tool-gtm_find_misfiring_conversion_tags-49990754"></a>

## gtm_find_misfiring_conversion_tags

Handler: Classifies conversion-like tag names as misfiring when attached to PAGEVIEW or named All Pages triggers.

```text
Find conversion/purchase tags that are firing too broadly (e.g. on All Pages instead of a specific event). This is the most common GTM billing/analytics issue.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/audit.ts#L83-L139) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
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

<a id="tool-gtm_fix_conversion_tag_trigger-7803f98e"></a>

## gtm_fix_conversion_tag_trigger

Handler: Always creates a new Custom Event trigger, optionally removes PAGEVIEW/All Pages triggers and updates the tag; it does not reuse an existing event trigger.

```text
Fix a misfiring conversion tag by replacing its broad trigger (e.g. All Pages) with a specific Custom Event trigger. Creates the new trigger if needed.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/audit.ts#L139-L211) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
    },
    "tagId": {
      "type": "string",
      "description": "Tag ID to fix"
    },
    "eventName": {
      "type": "string",
      "description": "Custom event name to fire on (e.g. \"purchase_confirmed\")"
    },
    "removeBroadTriggers": {
      "type": "boolean",
      "default": true,
      "description": "Remove All Pages / broad triggers from this tag"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "tagId",
    "eventName"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_workspaces-248ce86f"></a>

## gtm_list_workspaces

Handler: Lists workspaces belonging to the supplied container.

```text
List workspaces in a GTM container
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/versions.ts#L7-L24) · Schema: tools/list.

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

<a id="tool-gtm_get_workspace_status-58373cea"></a>

## gtm_get_workspace_status

Handler: Fetches workspace changes and conflicts through getStatus.

```text
Get pending (unsaved) changes in a workspace before publishing
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/versions.ts#L24-L42) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
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

<a id="tool-gtm_create_version-50a805d7"></a>

## gtm_create_version

Handler: Creates a container version from the supplied workspace with a name and optional notes.

```text
Create a container version from current workspace changes
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/versions.ts#L42-L65) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
    },
    "name": {
      "type": "string",
      "description": "Version name"
    },
    "notes": {
      "type": "string",
      "description": "Version notes / changelog"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_publish-54fdd062"></a>

## gtm_publish

Handler: Creates a new version and publishes it, returning compilerError without checking it before reporting published true.

```text
Publish the current workspace — makes all changes live immediately
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/versions.ts#L65-L95) · Schema: tools/list.

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
      "type": "string",
      "default": "1"
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

<a id="tool-gads_list_conversion_actions-34f3f826"></a>

## gads_list_conversion_actions

Handler: Google Ads: executes GAQL query using the supplied parameters.

```text
List all Google Ads conversion actions for the account — name, ID, counting type, status, and category. Use this to audit which conversions are set up and how they are counted.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L53-L95) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID (dashes optional). Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_update_conversion_counting-987040f9"></a>

## gads_update_conversion_counting

Handler: Google Ads: executes conversionActions.update using the supplied parameters.

```text
Update the counting type of a Google Ads conversion action. Common fix: change counting_type from MANY_PER_CLICK to ONE_PER_CLICK for purchase conversions to avoid inflated counts.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L95-L129) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "conversionActionId": {
      "type": "string",
      "description": "Numeric conversion action ID (from gads_list_conversion_actions)"
    },
    "countingType": {
      "type": "string",
      "enum": [
        "ONE_PER_CLICK",
        "MANY_PER_CLICK"
      ],
      "description": "ONE_PER_CLICK = count once per ad click (recommended for purchases). MANY_PER_CLICK = count every conversion."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "conversionActionId",
    "countingType"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_update_campaign_budget-f5ed7b9d"></a>

## gads_update_campaign_budget

Handler: Google Ads: executes campaignBudgets.update using the supplied parameters.

```text
Update the daily budget of a Google Ads campaign. Provide the campaign budget ID (from the campaign) and the new daily amount in dollars. Use to scale spend up or down.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L129-L165) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignBudgetId": {
      "type": "string",
      "description": "Numeric campaign budget ID (campaign_budget.id, from a campaign query)."
    },
    "dailyAmountUsd": {
      "type": "number",
      "exclusiveMinimum": 0,
      "description": "New daily budget in USD (e.g. 50 for $50/day)."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignBudgetId",
    "dailyAmountUsd"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_audit_conversion_goals-e760e819"></a>

## gads_audit_conversion_goals

Handler: Google Ads: queries static conversion action data but initializes activity and conversion counts to false/zero without querying recent activity.

```text
Audit all Google Ads conversion goals — find misconfigured counting types, inactive conversions, and conversions with no recent activity. Returns a prioritized fix list.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L165-L254) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_get_account_performance-6d971da9"></a>

## gads_get_account_performance

Handler: Google Ads: executes GAQL query using the supplied parameters.

```text
Get top-level Google Ads account performance — impressions, clicks, cost, conversions for a date range. Quick health check for ad spend efficiency.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L254-L339) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    },
    "dateRange": {
      "type": "string",
      "enum": [
        "LAST_7_DAYS",
        "LAST_14_DAYS",
        "LAST_30_DAYS",
        "THIS_MONTH",
        "LAST_MONTH"
      ],
      "default": "LAST_30_DAYS"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_create_keyword-15b5d44f"></a>

## gads_create_keyword

Handler: Google Ads: executes adGroupCriteria.create using the supplied parameters.

```text
Add a keyword to an ad group. Use this to move high-performing keywords between campaigns.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L339-L373) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adGroupId": {
      "type": "string",
      "description": "Ad group ID to add the keyword to"
    },
    "keyword": {
      "type": "string",
      "description": "The keyword text"
    },
    "matchType": {
      "type": "string",
      "enum": [
        "BROAD",
        "PHRASE",
        "EXACT"
      ],
      "description": "Keyword match type"
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "adGroupId",
    "keyword",
    "matchType"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_pause_campaign-b62baece"></a>

## gads_pause_campaign

Handler: Google Ads: executes campaigns.update using the supplied parameters.

```text
Pause a Google Ads campaign. Stops all ad serving immediately.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L373-L402) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign ID to pause"
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_set_campaign_status-23ddf10d"></a>

## gads_set_campaign_status

Handler: Google Ads: executes campaigns.update using the supplied parameters.

```text
Set a Google Ads campaign status to ENABLED or PAUSED. Use ENABLED to (re)enable a paused campaign — this is the enable capability the server previously lacked (only pause existed), so agents no longer need the UI to resume a campaign. Refs #5444.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L402-L438) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign ID to update"
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "description": "Target status: ENABLED (serve) or PAUSED (stop)."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId",
    "status"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_remove_keyword-7d000a9b"></a>

## gads_remove_keyword

Handler: Google Ads: pauses the keyword criterion rather than removing it.

```text
Remove (pause) a keyword from an ad group.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L438-L470) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adGroupId": {
      "type": "string",
      "description": "Ad group ID"
    },
    "criterionId": {
      "type": "string",
      "description": "Keyword criterion ID to remove"
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "adGroupId",
    "criterionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_remove_campaign_criterion-87d556d8"></a>

## gads_remove_campaign_criterion

Handler: Google Ads: executes campaignCriteria.remove using the supplied parameters.

```text
Remove a campaign-level criterion (targeted location/geo, placement, or keyword) by its criterion ID. Use to stop targeting a geo that is bringing invalid traffic — e.g. remove a positively-targeted country. Note: you cannot add a NEGATIVE location for a geo that is positively targeted; remove the positive criterion instead.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L470-L501) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign ID that owns the criterion"
    },
    "criterionId": {
      "type": "string",
      "description": "Criterion ID to remove (campaign_criterion.criterion_id). For a geo target this is the geo_target_constant id, e.g. 2356 for India."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId",
    "criterionId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_add_negative_placement-4f822a16"></a>

## gads_add_negative_placement

Handler: Google Ads: executes campaignCriteria.create using the supplied parameters.

```text
Add a negative PLACEMENT (website URL or mobile app) exclusion to a campaign so ads never serve there. Use to block click-fraud / low-quality placements (e.g. qureka.com, omegleweb.io, junk Google Play apps).
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L501-L558) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign ID to add the exclusion to"
    },
    "placementUrl": {
      "type": "string",
      "description": "Placement to exclude — a website URL (e.g. \"qureka.com\") or app id."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId",
    "placementUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_set_conversion_goal_inclusion-e154c9ae"></a>

## gads_set_conversion_goal_inclusion

Handler: Google Ads: finds the conversion action category and updates all customer goals for that category across origins.

```text
Control whether a conversion action counts toward the primary "Conversions" metric (and thus Smart Bidding). Set biddable=false to keep an action TRACKED but stop it optimizing bids — the fix for a PAGE_VIEW action inflating conversions. Operates on the customer-level conversion goal for the action category.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L558-L625) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "conversionActionId": {
      "type": "string",
      "description": "Numeric conversion action ID (from gads_list_conversion_actions)"
    },
    "biddable": {
      "type": "boolean",
      "description": "true = include in Conversions metric / bidding; false = tracked only, excluded from bidding."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "conversionActionId",
    "biddable"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_list_recommendation_subscriptions-c470e1e7"></a>

## gads_list_recommendation_subscriptions

Handler: Google Ads: executes query using the supplied parameters.

```text
List Google Ads auto-apply recommendation subscriptions (type + status). ENABLED means that recommendation type auto-applies without review — the mechanism that can silently raise budgets/bids. Use to audit what auto-applies.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L625-L656) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_set_recommendation_subscription-20fb4c09"></a>

## gads_set_recommendation_subscription

Handler: Google Ads: updates specific or all resolvable recommendation subscriptions and skips resources ending in /UNKNOWN.

```text
Turn Google Ads auto-apply recommendations ON or OFF. Set enabled=false to PAUSE (stop auto-applying — recommendations are still suggested, just not applied automatically). Pass all=true to apply to every resolvable subscription (the fix for runaway auto-applied budget/bid changes). Subscriptions with an UNKNOWN type/resource name cannot be mutated by the API and are skipped and reported.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L656-L727) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "enabled": {
      "type": "boolean",
      "description": "true = ENABLED (auto-apply on); false = PAUSED (auto-apply off)."
    },
    "all": {
      "type": "boolean",
      "description": "If true, apply to every resolvable subscription. Ignores resourceName."
    },
    "resourceName": {
      "type": "string",
      "description": "Specific subscription resource_name to set (from gads_list_recommendation_subscriptions). Required when all is not true."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "enabled"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_create_campaign-c5c026ef"></a>

## gads_create_campaign

Handler: Google Ads: creates a dedicated budget then a Search/Display campaign with explicit network settings; partial creations are not rolled back.

```text
Create a NEW Google Ads campaign with its own dedicated budget. Handles the full create correctly: makes a non-shared CampaignBudget first, then the campaign referencing it, with network settings (Search Partners OFF, Display Expansion OFF) and MAXIMIZE_CONVERSIONS bidding. Defaults to PAUSED so you review before it serves. Refs #5739.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L727-L815) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Campaign name (also used for the budget name)."
    },
    "channel": {
      "type": "string",
      "enum": [
        "SEARCH",
        "DISPLAY"
      ],
      "description": "SEARCH or DISPLAY campaign."
    },
    "dailyBudgetUsd": {
      "type": "number",
      "exclusiveMinimum": 0,
      "description": "Daily budget in USD (e.g. 14 for $14/day)."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "PAUSED",
      "description": "ENABLED to serve immediately (after ad review), PAUSED to review first. Default PAUSED."
    },
    "biddingStrategy": {
      "type": "string",
      "enum": [
        "MAXIMIZE_CONVERSIONS",
        "MANUAL_CPC"
      ],
      "default": "MAXIMIZE_CONVERSIONS",
      "description": "Bidding strategy. Default MAXIMIZE_CONVERSIONS."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "name",
    "channel",
    "dailyBudgetUsd"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_create_ad_group-3368918f"></a>

## gads_create_ad_group

Handler: Google Ads: executes adGroups.create using the supplied parameters.

```text
Create an ad group inside a campaign. Refs #5740.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L815-L856) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign ID to add the ad group to."
    },
    "name": {
      "type": "string",
      "description": "Ad group name."
    },
    "channel": {
      "type": "string",
      "enum": [
        "SEARCH",
        "DISPLAY"
      ],
      "default": "SEARCH",
      "description": "SEARCH_STANDARD or DISPLAY_STANDARD ad group type."
    },
    "cpcBidUsd": {
      "type": "number",
      "exclusiveMinimum": 0,
      "description": "Optional default max CPC bid in USD."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "ENABLED",
      "description": "Default ENABLED."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_create_responsive_search_ad-f4873363"></a>

## gads_create_responsive_search_ad

Handler: Google Ads: executes adGroupAds.create using the supplied parameters.

```text
Create a Responsive Search Ad in an ad group. 3–15 headlines (≤30 chars), 2–4 descriptions (≤90 chars), and final URL(s). Validates lengths before sending. Refs #5741.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L856-L913) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adGroupId": {
      "type": "string",
      "description": "Ad group ID to add the ad to."
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 3,
      "maxItems": 15,
      "description": "3–15 headlines, each ≤30 chars."
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 2,
      "maxItems": 4,
      "description": "2–4 descriptions, each ≤90 chars."
    },
    "finalUrl": {
      "type": "string",
      "description": "Landing page URL (e.g. https://ainative.studio/opencode)."
    },
    "path1": {
      "type": "string",
      "description": "Optional display path 1 (≤15 chars)."
    },
    "path2": {
      "type": "string",
      "description": "Optional display path 2 (≤15 chars)."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "ENABLED",
      "description": "Default ENABLED."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "adGroupId",
    "headlines",
    "descriptions",
    "finalUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_add_geo_target-732c3ff6"></a>

## gads_add_geo_target

Handler: Google Ads: creates a location campaign criterion; despite its description it does not change presence-only geo settings.

```text
Add a geographic target (or exclusion) to a campaign, using PRESENCE-only targeting by default (people IN the location, not merely interested) — this is the India-fraud-safe setting. Pass negative:true to exclude a geo. Common geo IDs: 2840=US, 2826=UK, 2124=CA, 2036=AU, 2276=DE, 2356=India. Refs #5742.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L913-L951) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign ID."
    },
    "geoTargetConstantId": {
      "type": "string",
      "description": "geo_target_constant id, e.g. \"2840\" for US."
    },
    "negative": {
      "type": "boolean",
      "default": false,
      "description": "true = exclude this geo. Default false (positive target)."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId",
    "geoTargetConstantId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_set_presence_only-09bccbe2"></a>

## gads_set_presence_only

Handler: Google Ads: executes campaigns.update using the supplied parameters.

```text
Set a campaign to PRESENCE-only geo targeting (target users physically IN the targeted locations, not those merely interested). This is the setting that prevents the India interest-traffic fraud. Refs #5742.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L951-L982) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign ID."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_add_negative_keyword-66691628"></a>

## gads_add_negative_keyword

Handler: Google Ads: executes campaignCriteria.create using the supplied parameters.

```text
Add a negative keyword at the CAMPAIGN level (blocks the term across the campaign). Refs #5743.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L982-L1014) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign ID."
    },
    "keyword": {
      "type": "string",
      "description": "Negative keyword text (e.g. \"free\")."
    },
    "matchType": {
      "type": "string",
      "enum": [
        "BROAD",
        "PHRASE",
        "EXACT"
      ],
      "default": "BROAD",
      "description": "Match type. Default BROAD."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId",
    "keyword"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_search-a2660b1a"></a>

## gads_search

Handler: Google Ads: rejects queries without an initial SELECT keyword then runs a GAQL query.

```text
Run a read-only GAQL query and return rows — for looking up campaign/budget/ad_group/criterion IDs without the google-ads MCP. SELECT queries only. Refs #5745.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L1014-L1032) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "gaql": {
      "type": "string",
      "description": "A GAQL SELECT query, e.g. \"SELECT campaign.id, campaign.name FROM campaign\"."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "gaql"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_upload_image_asset-a1a635b3"></a>

## gads_upload_image_asset

Handler: Google Ads: executes assets.create using the supplied parameters.

```text
Upload an image file from local disk as a Google Ads image Asset (for Display banners / Responsive Display Ads). Returns the asset resource_name to reference in an ad. Refs #5744.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L1032-L1065) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "filePath": {
      "type": "string",
      "description": "Absolute path to a PNG/JPG image file on disk (<150KB, standard IAB size)."
    },
    "name": {
      "type": "string",
      "description": "Asset name (must be unique in the account)."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "filePath",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_create_responsive_display_ad-1df10e77"></a>

## gads_create_responsive_display_ad

Handler: Google Ads: executes adGroupAds.create using the supplied parameters.

```text
Create a Responsive Display Ad in a DISPLAY ad group from uploaded image assets + text. Provide marketing image asset resource_names (landscape 1.91:1) and square (1:1), plus headlines, descriptions, business name, and final URL. Refs #5744.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L1065-L1130) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adGroupId": {
      "type": "string",
      "description": "DISPLAY ad group ID."
    },
    "marketingImageAssets": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Resource names of landscape (1.91:1) image assets."
    },
    "squareImageAssets": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "description": "Resource names of square (1:1) image assets."
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "maxItems": 5,
      "description": "1–5 short headlines (≤30 chars)."
    },
    "longHeadline": {
      "type": "string",
      "description": "One long headline (≤90 chars)."
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "maxItems": 5,
      "description": "1–5 descriptions (≤90 chars)."
    },
    "businessName": {
      "type": "string",
      "description": "Business name (≤25 chars), e.g. \"AINative\"."
    },
    "finalUrl": {
      "type": "string",
      "description": "Landing page URL."
    },
    "logoImageAssets": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Optional square logo image asset resource names."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "ENABLED"
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "adGroupId",
    "marketingImageAssets",
    "squareImageAssets",
    "headlines",
    "longHeadline",
    "descriptions",
    "businessName",
    "finalUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_upload_media_bundle-daf9a287"></a>

## gads_upload_media_bundle

Handler: Google Ads: executes assets.create using the supplied parameters.

```text
Upload an HTML5 ad ZIP file from disk as a Google Ads MEDIA_BUNDLE asset (for HTML5 display upload ads). The zip must be self-contained (no external refs), define ad.size, include a clickTag, and be <150KB. Returns the asset resource_name. Refs #5744.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L1130-L1164) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "filePath": {
      "type": "string",
      "description": "Absolute path to a self-contained HTML5 ad .zip."
    },
    "name": {
      "type": "string",
      "description": "Asset name (unique in the account)."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "filePath",
    "name"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_create_html5_ad-49be345d"></a>

## gads_create_html5_ad

Handler: Google Ads: executes adGroupAds.create using the supplied parameters.

```text
Create an HTML5 display upload ad (DisplayUploadAd, HTML5_UPLOAD_AD) in a DISPLAY ad group from a previously-uploaded MEDIA_BUNDLE asset. This is the real animated HTML5 creative served via API — no manual UI upload. Note: the account must be eligible for HTML5 upload ads (enforced at create time; a policy error means it is not yet allowlisted). Refs #5744.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads.ts#L1164-L1209) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adGroupId": {
      "type": "string",
      "description": "DISPLAY ad group ID."
    },
    "mediaBundleAsset": {
      "type": "string",
      "description": "resource_name of the uploaded MEDIA_BUNDLE asset (from gads_upload_media_bundle)."
    },
    "finalUrl": {
      "type": "string",
      "description": "Landing page URL (must match the clickTag domain)."
    },
    "name": {
      "type": "string",
      "description": "Optional ad name."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "ENABLED"
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "adGroupId",
    "mediaBundleAsset",
    "finalUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_set_bidding_strategy-e0363d8e"></a>

## gads_set_bidding_strategy

Handler: Google Ads: validates strategy-specific required values, updates the campaign and queries its resulting bidding strategy type.

```text
Change an existing campaign's bidding strategy (MAXIMIZE_CLICKS, MAXIMIZE_CONVERSIONS, TARGET_CPA, TARGET_ROAS, MANUAL_CPC). CRITICAL: switching a standard strategy with an empty payload is a silent no-op in the client — this tool forces a non-empty sub-field and READS BACK bidding_strategy_type to confirm the swap actually landed. Use MAXIMIZE_CLICKS with a cpcBidCeilingUsd to break a new-campaign cold-start (no conversion history). Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L33-L121) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign ID to update."
    },
    "strategy": {
      "type": "string",
      "enum": [
        "MAXIMIZE_CLICKS",
        "MAXIMIZE_CONVERSIONS",
        "TARGET_CPA",
        "TARGET_ROAS",
        "MANUAL_CPC"
      ],
      "description": "Target bidding strategy."
    },
    "cpcBidCeilingUsd": {
      "type": "number",
      "exclusiveMinimum": 0,
      "description": "For MAXIMIZE_CLICKS: max CPC ceiling in USD (strongly recommended to avoid runaway CPC). Required for MAXIMIZE_CLICKS."
    },
    "targetCpaUsd": {
      "type": "number",
      "exclusiveMinimum": 0,
      "description": "For TARGET_CPA: target cost per acquisition in USD."
    },
    "targetRoas": {
      "type": "number",
      "exclusiveMinimum": 0,
      "description": "For TARGET_ROAS: target return on ad spend as a fraction (e.g. 3.0 = 300%)."
    },
    "enhancedCpc": {
      "type": "boolean",
      "description": "For MANUAL_CPC: enable Enhanced CPC. Default false."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId",
    "strategy"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_set_ad_group_bid-15b0ccd9"></a>

## gads_set_ad_group_bid

Handler: Google Ads: executes adGroups.update using the supplied parameters.

```text
Set the default max CPC bid (USD) on an existing ad group. Use to raise/lower delivery on a specific ad group under Manual CPC / Maximize Clicks. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L121-L143) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adGroupId": {
      "type": "string",
      "description": "Ad group ID."
    },
    "cpcBidUsd": {
      "type": "number",
      "exclusiveMinimum": 0,
      "description": "New default max CPC bid in USD."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "adGroupId",
    "cpcBidUsd"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_set_keyword_bid-eb485aef"></a>

## gads_set_keyword_bid

Handler: Google Ads: executes adGroupCriteria.update using the supplied parameters.

```text
Set the max CPC bid (USD) on a specific keyword (ad group criterion). Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L143-L171) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adGroupId": {
      "type": "string",
      "description": "Ad group ID that owns the keyword."
    },
    "criterionId": {
      "type": "string",
      "description": "Keyword criterion ID (ad_group_criterion.criterion_id)."
    },
    "cpcBidUsd": {
      "type": "number",
      "exclusiveMinimum": 0,
      "description": "New max CPC bid in USD for this keyword."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "adGroupId",
    "criterionId",
    "cpcBidUsd"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_set_ad_status-3f1f52bf"></a>

## gads_set_ad_status

Handler: Google Ads: executes adGroupAds.remove, adGroupAds.update using the supplied parameters.

```text
Set an individual ad's status to ENABLED, PAUSED, or REMOVED (ad_group_ad). Use to pause a throttled/underperforming ad or remove a rejected one without touching the ad group. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L171-L202) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adGroupId": {
      "type": "string",
      "description": "Ad group ID that owns the ad."
    },
    "adId": {
      "type": "string",
      "description": "Ad ID (ad_group_ad.ad.id)."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED",
        "REMOVED"
      ],
      "description": "Target status."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "adGroupId",
    "adId",
    "status"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_request_ad_review-babb2ab9"></a>

## gads_request_ad_review

Handler: Google Ads: checks for adGroupAds.appeal, returns notAppealable when absent, and otherwise attempts an appeal with errors surfaced.

```text
Request re-review (appeal) of a disapproved or approved-limited ad via the API. Uses the AdGroupAd appeal (promote to review) mechanism. NOTE: only a subset of policy topics are API-appealable; MISLEADING_AD_DESIGN and some others must still be appealed in the UI — this tool returns a clear notAppealable result in that case rather than pretending it worked. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L202-L253) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adGroupId": {
      "type": "string",
      "description": "Ad group ID that owns the ad."
    },
    "adId": {
      "type": "string",
      "description": "Ad ID to request review for."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "adGroupId",
    "adId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_add_sitelink-2c71cdce"></a>

## gads_add_sitelink

Handler: Google Ads: executes assets.create, campaignAssets.create using the supplied parameters.

```text
Create a sitelink asset (link text + final URL, optional 2 description lines) and attach it to a campaign. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L253-L292) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign to attach the sitelink to."
    },
    "linkText": {
      "type": "string",
      "maxLength": 25,
      "description": "Sitelink text (≤25 chars)."
    },
    "finalUrl": {
      "type": "string",
      "description": "Destination URL."
    },
    "description1": {
      "type": "string",
      "maxLength": 35,
      "description": "Optional description line 1 (≤35 chars)."
    },
    "description2": {
      "type": "string",
      "maxLength": 35,
      "description": "Optional description line 2 (≤35 chars)."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId",
    "linkText",
    "finalUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_add_callout-9da2fd82"></a>

## gads_add_callout

Handler: Google Ads: executes assets.create, campaignAssets.create using the supplied parameters.

```text
Create a callout asset (short promotional phrase, e.g. "Free 7-Day Trial") and attach it to a campaign. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L292-L318) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign to attach the callout to."
    },
    "text": {
      "type": "string",
      "maxLength": 25,
      "description": "Callout text (≤25 chars)."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId",
    "text"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_add_structured_snippet-f9aeb08f"></a>

## gads_add_structured_snippet

Handler: Google Ads: executes assets.create, campaignAssets.create using the supplied parameters.

```text
Create a structured snippet asset (a header like "Services" or "Types" + up to 10 values) and attach it to a campaign. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L318-L347) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign to attach the snippet to."
    },
    "header": {
      "type": "string",
      "description": "Snippet header (must be a valid Google header, e.g. \"Types\", \"Services\", \"Brands\", \"Features\")."
    },
    "values": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 3,
      "maxItems": 10,
      "description": "3–10 snippet values."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId",
    "header",
    "values"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_add_call_extension-d7fcfeed"></a>

## gads_add_call_extension

Handler: Google Ads: executes assets.create, campaignAssets.create using the supplied parameters.

```text
Create a call asset (phone number) and attach it to a campaign so ads can show a call button. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L347-L380) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign to attach the call extension to."
    },
    "phoneNumber": {
      "type": "string",
      "description": "Phone number in national format, e.g. \"415-555-0100\"."
    },
    "countryCode": {
      "type": "string",
      "default": "US",
      "description": "2-letter country code. Default US."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId",
    "phoneNumber"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_add_audience_to_ad_group-a4dbbbfe"></a>

## gads_add_audience_to_ad_group

Handler: Google Ads: creates a user-list ad-group criterion but ignores mode when setting targeting, so TARGETING does not restrict reach.

```text
Attach an audience segment (user_list resource) to an ad group. mode=OBSERVATION measures the audience without restricting reach; mode=TARGETING restricts serving to it. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L380-L421) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "adGroupId": {
      "type": "string",
      "description": "Ad group ID."
    },
    "userListResource": {
      "type": "string",
      "description": "user_list resource name (e.g. customers/123/userLists/456)."
    },
    "mode": {
      "type": "string",
      "enum": [
        "OBSERVATION",
        "TARGETING"
      ],
      "default": "OBSERVATION",
      "description": "OBSERVATION = measure only (recommended); TARGETING = restrict serving."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "adGroupId",
    "userListResource"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_create_conversion_action-fd453496"></a>

## gads_create_conversion_action

Handler: Google Ads: executes conversionActions.create using the supplied parameters.

```text
Create an offline conversion action (type UPLOAD_CLICKS) for importing real outcomes — e.g. "Signup (offline)" or "Paid Subscription (offline)" — keyed by gclid. Returns the conversion action id + resource name to use with gads_upload_click_conversion. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L421-L467) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Conversion action name, e.g. \"Signup (offline gclid)\"."
    },
    "category": {
      "type": "string",
      "enum": [
        "SIGNUP",
        "PURCHASE",
        "SUBMIT_LEAD_FORM",
        "DEFAULT"
      ],
      "default": "SIGNUP",
      "description": "Conversion category."
    },
    "countingType": {
      "type": "string",
      "enum": [
        "ONE_PER_CLICK",
        "MANY_PER_CLICK"
      ],
      "default": "ONE_PER_CLICK",
      "description": "ONE_PER_CLICK for signups/subscriptions. Default ONE_PER_CLICK."
    },
    "defaultValueUsd": {
      "type": "number",
      "minimum": 0,
      "description": "Optional default conversion value in USD."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
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

<a id="tool-gads_upload_click_conversion-ea59b0e7"></a>

## gads_upload_click_conversion

Handler: Google Ads: invokes legacy conversionUploads.uploadClickConversions with partial\_failure and reports partial or thrown errors.

```text
Upload an OFFLINE click conversion keyed by gclid — the attribution backbone that ties a real signup/subscription back to the Google Ads click that drove it. Feeds Smart Bidding with real outcomes instead of pageviews. gclid is captured at signup. conversionDateTime must be after the click and in "yyyy-mm-dd hh:mm:ss+|-hh:mm" format. NOTE (2026): Google now routes NEW integrations to the Data Manager API — the legacy ConversionUploadService this calls is limited to existing users and returns a clear "use the Data Manager API" error for new accounts. If you get that error, the account needs the Data Manager path (see #5765). The tool surfaces the real error rather than silently failing. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L467-L531) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "conversionActionId": {
      "type": "string",
      "description": "Conversion action ID (from gads_create_conversion_action / gads_list_conversion_actions)."
    },
    "gclid": {
      "type": "string",
      "description": "Google click ID captured at signup (users.gclid)."
    },
    "conversionDateTime": {
      "type": "string",
      "description": "Conversion time, format \"yyyy-mm-dd hh:mm:ss+hh:mm\" (must be AFTER the click)."
    },
    "valueUsd": {
      "type": "number",
      "minimum": 0,
      "description": "Optional conversion value in USD."
    },
    "currencyCode": {
      "type": "string",
      "default": "USD",
      "description": "Currency code. Default USD."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "conversionActionId",
    "gclid",
    "conversionDateTime"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_create_pmax_campaign-2b2f44e3"></a>

## gads_create_pmax_campaign

Handler: Google Ads: sequentially creates budget, PMax campaign, image/text assets and asset-group links; images use full\_size.url rather than uploaded bytes, and partial creations are not rolled back.

```text
ONE-CALL Performance Max "campaign builder": creates a PERFORMANCE_MAX campaign + dedicated budget + an asset group with the required assets (3-15 headlines ≤30, 1 long headline ≤90, 2-5 descriptions ≤90, business name, and marketing/square/logo images by URL), then Google's AI auto-optimizes across Search/Display/YouTube/Gmail. Defaults PAUSED so you review first. This is the closest programmatic equivalent to Google's AI Campaign Builder. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L531-L667) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Campaign name (also names the budget + asset group)."
    },
    "dailyBudgetUsd": {
      "type": "number",
      "exclusiveMinimum": 0,
      "description": "Daily budget in USD."
    },
    "finalUrl": {
      "type": "string",
      "description": "Landing page URL."
    },
    "businessName": {
      "type": "string",
      "maxLength": 25,
      "description": "Business name (≤25 chars), e.g. \"AINative Studio\"."
    },
    "headlines": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 3,
      "maxItems": 15,
      "description": "3–15 headlines, each ≤30 chars."
    },
    "longHeadline": {
      "type": "string",
      "maxLength": 90,
      "description": "One long headline ≤90 chars."
    },
    "descriptions": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 2,
      "maxItems": 5,
      "description": "2–5 descriptions, each ≤90 chars."
    },
    "marketingImageUrl": {
      "type": "string",
      "description": "Landscape 1.91:1 marketing image URL (≥600x314)."
    },
    "squareImageUrl": {
      "type": "string",
      "description": "Square 1:1 marketing image URL (≥300x300)."
    },
    "logoImageUrl": {
      "type": "string",
      "description": "Square logo URL (≥128x128, 1:1)."
    },
    "status": {
      "type": "string",
      "enum": [
        "ENABLED",
        "PAUSED"
      ],
      "default": "PAUSED",
      "description": "Default PAUSED."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "name",
    "dailyBudgetUsd",
    "finalUrl",
    "businessName",
    "headlines",
    "longHeadline",
    "descriptions",
    "marketingImageUrl",
    "squareImageUrl",
    "logoImageUrl"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gads_add_language_target-6a22f6df"></a>

## gads_add_language_target

Handler: Google Ads: executes campaignCriteria.create using the supplied parameters.

```text
Add a language target to a campaign so ads serve to users with that language setting. Common language constant ids: 1000=English, 1003=Spanish, 1001=German, 1002=French. Refs #5764.
```

[Source](https://github.com/AINative-Studio/ainative-gtm-mcp/blob/b858f34ced754293a440898dce048869774fc661/src/tools/google-ads-lifecycle.ts#L667-L692) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "campaignId": {
      "type": "string",
      "description": "Campaign ID."
    },
    "languageConstantId": {
      "type": "string",
      "default": "1000",
      "description": "language_constant id. 1000=English (default)."
    },
    "customerId": {
      "type": "string",
      "description": "Google Ads customer ID. Defaults to GOOGLE_ADS_CUSTOMER_ID env var."
    }
  },
  "required": [
    "campaignId"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>
