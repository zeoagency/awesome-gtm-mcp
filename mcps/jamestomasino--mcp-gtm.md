# jamestomasino/mcp-gtm

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/jamestomasino/mcp-gtm) · [Machine-readable inventory](../data/mcps/jamestomasino--mcp-gtm.json)

**47 extracted tools.** Edits exported container JSON, manages server-side entities, analyzes dependencies, and supports undo and redo.

Snapshot: 2026-10-13 · [15d96a12a437](https://github.com/jamestomasino/mcp-gtm/tree/15d96a12a437c86ca5aeec6d1f46a738911e45dc) · Method: mixed.

Exposure: All 47 tools by default. Presence of GTM_READ_ONLY filters create/update/delete/move/export prefixes; other tools remain registered. All groups, including serverSide, are unconditional.

## Limits

- Runtime verification was limited to tools/list; no container or GTM tool handler was invoked.
- This server works on local exported JSON only; it has no live Google API, authentication, workspace sync, publishing, or preview execution.
- GTM_READ_ONLY removes only create/update/delete/move/export prefixes; undo, redo, and loading remain exposed.
- Tag/trigger/variable create and update tool parameters permit only scalar value fields and cannot represent the nested LIST/MAP parameter shapes accepted in container-file schemas.
- Trigger filter tool objects expose type/key/value/condition but underlying ConditionSchema models type/parameter; passthrough preserves extra fields without translating them to canonical GTM condition parameters.
- gtm_get_tag_dependencies omits variable dependencies, gtm_diff_containers omits changes to existing IDs, and lifecycle firing-order/consent conclusions are project heuristics.
- Folder deletion does not clear entity references; moving tags between folders leaves old membership and can duplicate destination membership.
- Server-side entity schemas impose project-specific required fields (including zone type); supported exported JSON shapes are constrained by these schemas rather than Google discovery schemas.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`gtm_load_container`](#tool-gtm_load_container-6967ff1f) | GTM | Reads and validates a local exported GTM JSON file, normalizes entity placement, and resets in-memory undo/redo history. |
| [`gtm_get_container_info`](#tool-gtm_get_container_info-21b306f8) | GTM | Returns loaded container metadata with human-readable usage context names. |
| [`gtm_get_container_state`](#tool-gtm_get_container_state-3a65acaf) | GTM | Returns loaded entity counts and source file path. |
| [`gtm_list_tags`](#tool-gtm_list_tags-b585bc12) | GTM | Returns summaries of tags from the local loaded container. |
| [`gtm_get_tag`](#tool-gtm_get_tag-3d242291) | GTM | Returns the local tag selected by ID or exact name. |
| [`gtm_create_tag`](#tool-gtm_create_tag-c682840c) | GTM | Creates a tag in the local in-memory container with project Zod validation and automatically assigned ID. |
| [`gtm_update_tag`](#tool-gtm_update_tag-23807743) | GTM | Updates a tag in the local in-memory container after project Zod validation. |
| [`gtm_delete_tag`](#tool-gtm_delete_tag-42a56cac) | GTM | Deletes a tag in the local in-memory container without cleaning references from other entities. |
| [`gtm_find_tags_by_type`](#tool-gtm_find_tags_by_type-aac2abcd) | GTM | Filters local tags by exact type code and returns summaries. |
| [`gtm_list_triggers`](#tool-gtm_list_triggers-16b41a3c) | GTM | Returns summaries of triggers from the local loaded container. |
| [`gtm_get_trigger`](#tool-gtm_get_trigger-669e5c62) | GTM | Returns the local trigger selected by ID or exact name. |
| [`gtm_create_trigger`](#tool-gtm_create_trigger-99da4322) | GTM | Creates a trigger in the local in-memory container with project Zod validation and automatically assigned ID. |
| [`gtm_update_trigger`](#tool-gtm_update_trigger-ce48de45) | GTM | Updates a trigger in the local in-memory container after project Zod validation. |
| [`gtm_delete_trigger`](#tool-gtm_delete_trigger-dac3085f) | GTM | Deletes a trigger in the local in-memory container without cleaning references from other entities. |
| [`gtm_list_variables`](#tool-gtm_list_variables-81705a80) | GTM | Returns summaries of variables from the local loaded container. |
| [`gtm_get_variable`](#tool-gtm_get_variable-e6ff3763) | GTM | Returns the local variable selected by ID or exact name. |
| [`gtm_create_variable`](#tool-gtm_create_variable-5b853337) | GTM | Creates a variable in the local in-memory container with project Zod validation and automatically assigned ID. |
| [`gtm_update_variable`](#tool-gtm_update_variable-898f92d4) | GTM | Updates a variable in the local in-memory container after project Zod validation. |
| [`gtm_delete_variable`](#tool-gtm_delete_variable-9bd36787) | GTM | Deletes a variable in the local in-memory container without cleaning references from other entities. |
| [`gtm_list_builtin_variables`](#tool-gtm_list_builtin_variables-e3216e58) | GTM | Returns built-in variables from the loaded export. |
| [`gtm_list_folders`](#tool-gtm_list_folders-9da6c22f) | GTM | Returns local folder summaries using each folder tagId array for membership counts. |
| [`gtm_get_folder`](#tool-gtm_get_folder-a5332034) | GTM | Returns a local folder by ID or exact name, including any stored membership data. |
| [`gtm_create_folder`](#tool-gtm_create_folder-a7f80e8c) | GTM | Creates a local folder with an automatically assigned ID and empty tagId membership. |
| [`gtm_delete_folder`](#tool-gtm_delete_folder-9602489f) | GTM | Deletes the local folder but does not clear parentFolderId references on its entities. |
| [`gtm_move_tag_to_folder`](#tool-gtm_move_tag_to_folder-681abe2b) | GTM | Sets local tag parentFolderId and appends destination membership; moving between folders does not remove old membership and destination existence is not required. |
| [`gtm_move_trigger_to_folder`](#tool-gtm_move_trigger_to_folder-7ff417e9) | GTM | Sets or clears local trigger parentFolderId without checking destination existence. |
| [`gtm_move_variable_to_folder`](#tool-gtm_move_variable_to_folder-c6d949e7) | GTM | Sets or clears local variable parentFolderId without checking destination existence. |
| [`gtm_get_tag_dependencies`](#tool-gtm_get_tag_dependencies-5c9c7725) | GTM | Returns firing and blocking trigger references for a tag; contrary to its description it does not return variable references. |
| [`gtm_find_unused_entities`](#tool-gtm_find_unused_entities-d4110fcb) | GTM | Finds unreferenced triggers and variable names and tags whose enabled property is falsy; omitted enabled values may be reported unused. |
| [`gtm_find_orphaned_triggers`](#tool-gtm_find_orphaned_triggers-e1b06bb9) | GTM | Returns triggers absent from tag firing-trigger IDs; blocking-only trigger use is not counted. |
| [`gtm_validate_container`](#tool-gtm_validate_container-270236b8) | GTM | Validates in-memory export against project Zod schemas and returns schema issues. |
| [`gtm_export_container`](#tool-gtm_export_container-7583f2b1) | GTM | Writes the current in-memory export to a local JSON file while preserving the original workspace envelope when detected. |
| [`gtm_diff_containers`](#tool-gtm_diff_containers-ff0fbf12) | GTM | Reads two local exports and compares entity IDs for additions, removals, and counts; configuration changes to existing IDs are not compared. |
| [`gtm_list_zones`](#tool-gtm_list_zones-8f9cbfc8) | GTM | Returns summaries of zones from the local loaded container. |
| [`gtm_get_zone`](#tool-gtm_get_zone-4df554bd) | GTM | Returns the local zone selected by ID or exact name. |
| [`gtm_list_clients`](#tool-gtm_list_clients-bd1499aa) | GTM | Returns summaries of clients from the local loaded container. |
| [`gtm_get_client`](#tool-gtm_get_client-805d1819) | GTM | Returns the local client selected by ID or exact name. |
| [`gtm_list_transformations`](#tool-gtm_list_transformations-5197f98a) | GTM | Returns summaries of transformations from the local loaded container. |
| [`gtm_get_transformation`](#tool-gtm_get_transformation-0c9c60f4) | GTM | Returns the local transformation selected by ID or exact name. |
| [`gtm_list_custom_templates`](#tool-gtm_list_custom_templates-c3ee4397) | GTM | Returns summaries of custom templates from the local loaded container. |
| [`gtm_get_custom_template`](#tool-gtm_get_custom_template-a89b3741) | GTM | Returns the local custom template selected by ID or exact name. |
| [`gtm_analyze_tag_firing_order`](#tool-gtm_analyze_tag_firing_order-0909146a) | GTM | Estimates firing order by hard-coded tag-type groups and numeric tag IDs and reports sequencing references; it does not execute or simulate GTM. |
| [`gtm_analyze_consent_setup`](#tool-gtm_analyze_consent_setup-a300d377) | GTM | Uses keyword, tag-type, parameter, and trigger heuristics to report consent patterns and potential issues. |
| [`gtm_get_tag_lifecycle`](#tool-gtm_get_tag_lifecycle-02dbf6b6) | GTM | Reports heuristic lifecycle phase, computed firing group, trigger relationships, consent settings, and issues for a selected tag. |
| [`gtm_search`](#tool-gtm_search-04f615e0) | GTM | Searches local tag, trigger, variable, and folder names and notes with optional case sensitivity. |
| [`gtm_undo`](#tool-gtm_undo-008dd7b3) | GTM | Restores a prior in-memory container snapshot and returns state and history counts. |
| [`gtm_redo`](#tool-gtm_redo-901f0788) | GTM | Restores a previously undone in-memory snapshot and returns state and history counts. |

<a id="tool-gtm_load_container-6967ff1f"></a>

## gtm_load_container

Handler: Reads and validates a local exported GTM JSON file, normalizes entity placement, and resets in-memory undo/redo history.

```text
Load a GTM container JSON file. Call this first before using any other tools.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/container.ts#L10-L27) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "file_path": {
      "type": "string",
      "description": "Path to the GTM export JSON file"
    }
  },
  "required": [
    "file_path"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_container_info-21b306f8"></a>

## gtm_get_container_info

Handler: Returns loaded container metadata with human-readable usage context names.

```text
Get container metadata (name, ID, timezone, platform). Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/container.ts#L29-L40) · Schema: tools/list.

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

<a id="tool-gtm_get_container_state-3a65acaf"></a>

## gtm_get_container_state

Handler: Returns loaded entity counts and source file path.

```text
Get summary counts and structure overview of the loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/container.ts#L42-L54) · Schema: tools/list.

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

<a id="tool-gtm_list_tags-b585bc12"></a>

## gtm_list_tags

Handler: Returns summaries of tags from the local loaded container.

```text
List all tags with summary info, trigger assignments, and consent settings. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/tags.ts#L12-L40) · Schema: tools/list.

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

<a id="tool-gtm_get_tag-3d242291"></a>

## gtm_get_tag

Handler: Returns the local tag selected by ID or exact name.

```text
Get full tag configuration by tag_id or name. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/tags.ts#L42-L78) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string",
      "description": "Tag ID to look up"
    },
    "name": {
      "type": "string",
      "description": "Tag name to look up (alternative to tag_id)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_tag-c682840c"></a>

## gtm_create_tag

Handler: Creates a tag in the local in-memory container with project Zod validation and automatically assigned ID.

```text
Create a new tag. Validates against GTM schema, auto-assigns tagId if not provided.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/tags.ts#L80-L157) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Tag name"
    },
    "type": {
      "type": "string",
      "description": "Tag type code (e.g. gaawe for GA4, googtag for Google Tag, html for Custom HTML)"
    },
    "folder_id": {
      "type": "string",
      "description": "Parent folder ID"
    },
    "notes": {
      "type": "string",
      "description": "Notes for the tag"
    },
    "enabled": {
      "type": "boolean",
      "description": "Whether the tag is enabled (default: true)"
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
            "type": [
              "string",
              "number",
              "boolean"
            ]
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Tag configuration parameters (e.g. html content for Custom HTML tags)"
    },
    "firing_trigger_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Firing trigger IDs for the tag"
    },
    "blocking_trigger_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Blocking trigger IDs for the tag"
    },
    "consent_types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Required consent types (e.g. ad_storage, analytics_storage). Empty array means no consent required."
    }
  },
  "required": [
    "name",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_tag-23807743"></a>

## gtm_update_tag

Handler: Updates a tag in the local in-memory container after project Zod validation.

```text
Update an existing tag by tag_id.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/tags.ts#L159-L235) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string",
      "description": "Tag ID to update"
    },
    "name": {
      "type": "string",
      "description": "New tag name"
    },
    "folder_id": {
      "type": "string",
      "description": "New parent folder ID"
    },
    "notes": {
      "type": "string",
      "description": "New notes"
    },
    "enabled": {
      "type": "boolean",
      "description": "Enable or disable the tag"
    },
    "firing_trigger_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Replace the tag's firing trigger IDs"
    },
    "blocking_trigger_ids": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Replace the tag's blocking trigger IDs"
    },
    "consent_types": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Replace required additional consent types; an empty array marks no additional consent required"
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
            "type": [
              "string",
              "number",
              "boolean"
            ]
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Replace the tag's configuration parameters"
    }
  },
  "required": [
    "tag_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_tag-42a56cac"></a>

## gtm_delete_tag

Handler: Deletes a tag in the local in-memory container without cleaning references from other entities.

```text
Delete a tag from the container by tag_id.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/tags.ts#L237-L247) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string",
      "description": "Tag ID to delete"
    }
  },
  "required": [
    "tag_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_find_tags_by_type-aac2abcd"></a>

## gtm_find_tags_by_type

Handler: Filters local tags by exact type code and returns summaries.

```text
Find tags by type code (e.g. gaawe, googtag, html). Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/tags.ts#L249-L274) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "description": "Tag type code to search for"
    }
  },
  "required": [
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_triggers-16b41a3c"></a>

## gtm_list_triggers

Handler: Returns summaries of triggers from the local loaded container.

```text
List all triggers with summary info (name, type, folder). Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/triggers.ts#L12-L28) · Schema: tools/list.

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

<a id="tool-gtm_get_trigger-669e5c62"></a>

## gtm_get_trigger

Handler: Returns the local trigger selected by ID or exact name.

```text
Get full trigger configuration by trigger_id or name. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/triggers.ts#L30-L64) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "trigger_id": {
      "type": "string",
      "description": "Trigger ID to look up"
    },
    "name": {
      "type": "string",
      "description": "Trigger name to look up (alternative to trigger_id)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_trigger-99da4322"></a>

## gtm_create_trigger

Handler: Creates a trigger in the local in-memory container with project Zod validation and automatically assigned ID.

```text
Create a new trigger. Validates against GTM schema, auto-assigns triggerId if not provided.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/triggers.ts#L66-L115) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Trigger name"
    },
    "type": {
      "type": "string",
      "description": "Trigger type code (e.g. pageview, click, custom, scroll, timer)"
    },
    "folder_id": {
      "type": "string",
      "description": "Parent folder ID"
    },
    "notes": {
      "type": "string",
      "description": "Notes for the trigger"
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
            "type": [
              "string",
              "number",
              "boolean"
            ]
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Trigger configuration parameters"
    },
    "filters": {
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
          "condition": {
            "type": "string"
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "description": "Trigger filters/conditions"
    }
  },
  "required": [
    "name",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_trigger-ce48de45"></a>

## gtm_update_trigger

Handler: Updates a trigger in the local in-memory container after project Zod validation.

```text
Update an existing trigger by trigger_id.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/triggers.ts#L117-L172) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "trigger_id": {
      "type": "string",
      "description": "Trigger ID to update"
    },
    "name": {
      "type": "string",
      "description": "New trigger name"
    },
    "folder_id": {
      "type": "string",
      "description": "New parent folder ID"
    },
    "notes": {
      "type": "string",
      "description": "New notes"
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
            "type": [
              "string",
              "number",
              "boolean"
            ]
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Replace the trigger's configuration parameters"
    },
    "filters": {
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
          "condition": {
            "type": "string"
          }
        },
        "required": [
          "type"
        ],
        "additionalProperties": false
      },
      "description": "Replace the trigger's filters/conditions"
    }
  },
  "required": [
    "trigger_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_trigger-dac3085f"></a>

## gtm_delete_trigger

Handler: Deletes a trigger in the local in-memory container without cleaning references from other entities.

```text
Delete a trigger from the container by trigger_id.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/triggers.ts#L174-L186) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "trigger_id": {
      "type": "string",
      "description": "Trigger ID to delete"
    }
  },
  "required": [
    "trigger_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_variables-81705a80"></a>

## gtm_list_variables

Handler: Returns summaries of variables from the local loaded container.

```text
List all user-defined variables with summary info. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/variables.ts#L11-L25) · Schema: tools/list.

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

<a id="tool-gtm_get_variable-e6ff3763"></a>

## gtm_get_variable

Handler: Returns the local variable selected by ID or exact name.

```text
Get variable details by variable_id or name. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/variables.ts#L27-L60) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_id": {
      "type": "string",
      "description": "Variable ID to look up"
    },
    "name": {
      "type": "string",
      "description": "Variable name to look up (alternative to variable_id)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_variable-5b853337"></a>

## gtm_create_variable

Handler: Creates a variable in the local in-memory container with project Zod validation and automatically assigned ID.

```text
Create a new variable. Validates against GTM schema, auto-assigns variableId if not provided.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/variables.ts#L62-L97) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Variable name"
    },
    "type": {
      "type": "string",
      "description": "Variable type code (e.g. v for Data Layer, u for URL, jsm for Custom JS)"
    },
    "notes": {
      "type": "string",
      "description": "Notes for the variable"
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
            "type": [
              "string",
              "number",
              "boolean"
            ]
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Variable configuration parameters"
    }
  },
  "required": [
    "name",
    "type"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_update_variable-898f92d4"></a>

## gtm_update_variable

Handler: Updates a variable in the local in-memory container after project Zod validation.

```text
Update an existing variable by variable_id.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/variables.ts#L99-L137) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_id": {
      "type": "string",
      "description": "Variable ID to update"
    },
    "name": {
      "type": "string",
      "description": "New variable name"
    },
    "notes": {
      "type": "string",
      "description": "New notes"
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
            "type": [
              "string",
              "number",
              "boolean"
            ]
          },
          "type": {
            "type": "string"
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      },
      "description": "Updated variable configuration parameters"
    }
  },
  "required": [
    "variable_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_delete_variable-9bd36787"></a>

## gtm_delete_variable

Handler: Deletes a variable in the local in-memory container without cleaning references from other entities.

```text
Delete a variable from the container by variable_id.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/variables.ts#L139-L149) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_id": {
      "type": "string",
      "description": "Variable ID to delete"
    }
  },
  "required": [
    "variable_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_builtin_variables-e3216e58"></a>

## gtm_list_builtin_variables

Handler: Returns built-in variables from the loaded export.

```text
List enabled built-in variables. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/variables.ts#L151-L163) · Schema: tools/list.

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

<a id="tool-gtm_list_folders-9da6c22f"></a>

## gtm_list_folders

Handler: Returns local folder summaries using each folder tagId array for membership counts.

```text
List all folders in the container. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/folders.ts#L9-L23) · Schema: tools/list.

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

<a id="tool-gtm_get_folder-a5332034"></a>

## gtm_get_folder

Handler: Returns a local folder by ID or exact name, including any stored membership data.

```text
Get folder details and tag membership by folder_id or name. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/folders.ts#L25-L55) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "folder_id": {
      "type": "string",
      "description": "Folder ID to look up"
    },
    "name": {
      "type": "string",
      "description": "Folder name to look up (alternative to folder_id)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_create_folder-a7f80e8c"></a>

## gtm_create_folder

Handler: Creates a local folder with an automatically assigned ID and empty tagId membership.

```text
Create a new folder. Auto-assigns folderId.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/folders.ts#L57-L67) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Folder name"
    },
    "notes": {
      "type": "string",
      "description": "Notes for the folder"
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

<a id="tool-gtm_delete_folder-9602489f"></a>

## gtm_delete_folder

Handler: Deletes the local folder but does not clear parentFolderId references on its entities.

```text
Delete a folder from the container by folder_id.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/folders.ts#L69-L79) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "folder_id": {
      "type": "string",
      "description": "Folder ID to delete"
    }
  },
  "required": [
    "folder_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_move_tag_to_folder-681abe2b"></a>

## gtm_move_tag_to_folder

Handler: Sets local tag parentFolderId and appends destination membership; moving between folders does not remove old membership and destination existence is not required.

```text
Move a tag to a folder, or unassign it by setting folder_id to null.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/folders.ts#L81-L102) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string",
      "description": "Tag ID to move"
    },
    "folder_id": {
      "type": [
        "string",
        "null"
      ],
      "description": "Target folder ID, or null to unassign from folder"
    }
  },
  "required": [
    "tag_id",
    "folder_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_move_trigger_to_folder-7ff417e9"></a>

## gtm_move_trigger_to_folder

Handler: Sets or clears local trigger parentFolderId without checking destination existence.

```text
Move a trigger to a folder, or unassign it by setting folder_id to null.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/folders.ts#L104-L125) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "trigger_id": {
      "type": "string",
      "description": "Trigger ID to move"
    },
    "folder_id": {
      "type": [
        "string",
        "null"
      ],
      "description": "Target folder ID, or null to unassign from folder"
    }
  },
  "required": [
    "trigger_id",
    "folder_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_move_variable_to_folder-c6d949e7"></a>

## gtm_move_variable_to_folder

Handler: Sets or clears local variable parentFolderId without checking destination existence.

```text
Move a variable to a folder, or unassign it by setting folder_id to null.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/folders.ts#L127-L150) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "variable_id": {
      "type": "string",
      "description": "Variable ID to move"
    },
    "folder_id": {
      "type": [
        "string",
        "null"
      ],
      "description": "Target folder ID, or null to unassign from folder"
    }
  },
  "required": [
    "variable_id",
    "folder_id"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_get_tag_dependencies-5c9c7725"></a>

## gtm_get_tag_dependencies

Handler: Returns firing and blocking trigger references for a tag; contrary to its description it does not return variable references.

```text
Show which triggers and variables a tag references. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/analysis.ts#L103-L138) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string",
      "description": "Tag ID to analyze"
    },
    "name": {
      "type": "string",
      "description": "Tag name to analyze (alternative to tag_id)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_find_unused_entities-d4110fcb"></a>

## gtm_find_unused_entities

Handler: Finds unreferenced triggers and variable names and tags whose enabled property is falsy; omitted enabled values may be reported unused.

```text
Find tags, triggers, or variables not referenced by any other entity. Variables are classified by type (data_layer, custom_js, constant, lookup_table, etc.) and only those with no parameter references anywhere are reported unused. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/analysis.ts#L140-L199) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "entity_type": {
      "type": "string",
      "enum": [
        "tags",
        "triggers",
        "variables",
        "all"
      ],
      "default": "all",
      "description": "Which entity type to check"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_find_orphaned_triggers-e1b06bb9"></a>

## gtm_find_orphaned_triggers

Handler: Returns triggers absent from tag firing-trigger IDs; blocking-only trigger use is not counted.

```text
Find triggers not fired by any tag. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/analysis.ts#L201-L222) · Schema: tools/list.

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

<a id="tool-gtm_validate_container-270236b8"></a>

## gtm_validate_container

Handler: Validates in-memory export against project Zod schemas and returns schema issues.

```text
Run full Zod validation on the loaded container, report all issues. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/analysis.ts#L224-L238) · Schema: tools/list.

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

<a id="tool-gtm_export_container-7583f2b1"></a>

## gtm_export_container

Handler: Writes the current in-memory export to a local JSON file while preserving the original workspace envelope when detected.

```text
Write current container state to a JSON file. The file can be imported back into GTM.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/export.ts#L11-L27) · Schema: tools/list.

Exposure: Default; omitted whenever GTM_READ_ONLY is present, regardless of its value.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "file_path": {
      "type": "string",
      "description": "Output file path for the exported container JSON"
    }
  },
  "required": [
    "file_path"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_diff_containers-ff0fbf12"></a>

## gtm_diff_containers

Handler: Reads two local exports and compares entity IDs for additions, removals, and counts; configuration changes to existing IDs are not compared.

```text
Compare two container JSON files and report differences in tags, triggers, and variables.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/export.ts#L29-L140) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "file_a": {
      "type": "string",
      "description": "Path to the first GTM container JSON file"
    },
    "file_b": {
      "type": "string",
      "description": "Path to the second GTM container JSON file"
    }
  },
  "required": [
    "file_a",
    "file_b"
  ],
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_zones-8f9cbfc8"></a>

## gtm_list_zones

Handler: Returns summaries of zones from the local loaded container.

```text
List all zones in the container (server-side GTM). Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/serverSide.ts#L9-L22) · Schema: tools/list.

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

<a id="tool-gtm_get_zone-4df554bd"></a>

## gtm_get_zone

Handler: Returns the local zone selected by ID or exact name.

```text
Get zone details by zone_id or name (server-side GTM). Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/serverSide.ts#L24-L54) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "zone_id": {
      "type": "string",
      "description": "Zone ID to look up"
    },
    "name": {
      "type": "string",
      "description": "Zone name to look up (alternative to zone_id)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_clients-bd1499aa"></a>

## gtm_list_clients

Handler: Returns summaries of clients from the local loaded container.

```text
List all clients in the container (server-side GTM). Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/serverSide.ts#L56-L69) · Schema: tools/list.

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

<a id="tool-gtm_get_client-805d1819"></a>

## gtm_get_client

Handler: Returns the local client selected by ID or exact name.

```text
Get client details by client_id or name (server-side GTM). Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/serverSide.ts#L71-L101) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "client_id": {
      "type": "string",
      "description": "Client ID to look up"
    },
    "name": {
      "type": "string",
      "description": "Client name to look up (alternative to client_id)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_transformations-5197f98a"></a>

## gtm_list_transformations

Handler: Returns summaries of transformations from the local loaded container.

```text
List all transformations in the container (server-side GTM). Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/serverSide.ts#L103-L119) · Schema: tools/list.

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

<a id="tool-gtm_get_transformation-0c9c60f4"></a>

## gtm_get_transformation

Handler: Returns the local transformation selected by ID or exact name.

```text
Get transformation details by transformation_id or name (server-side GTM). Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/serverSide.ts#L121-L158) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "transformation_id": {
      "type": "string",
      "description": "Transformation ID to look up"
    },
    "name": {
      "type": "string",
      "description": "Transformation name to look up (alternative to transformation_id)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_list_custom_templates-c3ee4397"></a>

## gtm_list_custom_templates

Handler: Returns summaries of custom templates from the local loaded container.

```text
List all custom templates in the container. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/serverSide.ts#L160-L176) · Schema: tools/list.

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

<a id="tool-gtm_get_custom_template-a89b3741"></a>

## gtm_get_custom_template

Handler: Returns the local custom template selected by ID or exact name.

```text
Get custom template details by template_id or name. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/serverSide.ts#L178-L212) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "template_id": {
      "type": "string",
      "description": "Template ID to look up"
    },
    "name": {
      "type": "string",
      "description": "Template name to look up (alternative to template_id)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_analyze_tag_firing_order-0909146a"></a>

## gtm_analyze_tag_firing_order

Handler: Estimates firing order by hard-coded tag-type groups and numeric tag IDs and reports sequencing references; it does not execute or simulate GTM.

```text
Analyze the deterministic tag firing order for the loaded container. Reports the evaluation sequence (Google tags → Custom HTML → Custom Image → Custom Templates), position within each group, sequencing dependencies (fires after/before), and potential ordering conflicts. Critical for understanding consent timing and tag execution order. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/lifecycle.ts#L723-L731) · Schema: tools/list.

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

<a id="tool-gtm_analyze_consent_setup-a300d377"></a>

## gtm_analyze_consent_setup

Handler: Uses keyword, tag-type, parameter, and trigger heuristics to report consent patterns and potential issues.

```text
Analyze the container's consent management configuration. Detects consent management tags, consent state variables, consent blocking triggers, and consent initialization patterns. Reports issues like unprotected data collection tags, consent timing problems, orphaned blocking references, and missing consent setup. Issues are classified as critical/warning/info with recommendations. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/lifecycle.ts#L733-L741) · Schema: tools/list.

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

<a id="tool-gtm_get_tag_lifecycle-02dbf6b6"></a>

## gtm_get_tag_lifecycle

Handler: Reports heuristic lifecycle phase, computed firing group, trigger relationships, consent settings, and issues for a selected tag.

```text
Get detailed lifecycle analysis for a specific tag. Reports the lifecycle phase (consent_management, data_collection, other), firing order position, trigger configuration, sequencing dependencies, consent relationships, and per-tag issues. Use to debug why a specific tag might fire at the wrong time or violate consent requirements. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/lifecycle.ts#L743-L783) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "tag_id": {
      "type": "string",
      "description": "Tag ID to analyze"
    },
    "name": {
      "type": "string",
      "description": "Tag name to analyze (alternative to tag_id)"
    }
  },
  "additionalProperties": false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

</details>

<a id="tool-gtm_search-04f615e0"></a>

## gtm_search

Handler: Searches local tag, trigger, variable, and folder names and notes with optional case sensitivity.

```text
Search across all entities (tags, triggers, variables, folders) by name or notes. Returns matching entities with their type and summary info. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/search.ts#L14-L136) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "description": "Search query (matched against entity names and notes)"
    },
    "entity_type": {
      "type": "string",
      "enum": [
        "tags",
        "triggers",
        "variables",
        "folders",
        "all"
      ],
      "default": "all",
      "description": "Which entity types to search"
    },
    "case_sensitive": {
      "type": "boolean",
      "default": false,
      "description": "Whether the search is case-sensitive"
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

<a id="tool-gtm_undo-008dd7b3"></a>

## gtm_undo

Handler: Restores a prior in-memory container snapshot and returns state and history counts.

```text
Undo the last mutation (create, update, delete, move) made to the container. Returns the previous state summary. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/undo.ts#L9-L26) · Schema: tools/list.

Exposure: Default and GTM_READ_ONLY mode; these state-changing tools are not covered by the write-prefix filter.

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

<a id="tool-gtm_redo-901f0788"></a>

## gtm_redo

Handler: Restores a previously undone in-memory snapshot and returns state and history counts.

```text
Redo the last undone mutation. Returns the restored state summary. Requires a loaded container.
```

[Source](https://github.com/jamestomasino/mcp-gtm/blob/15d96a12a437c86ca5aeec6d1f46a738911e45dc/src/tools/undo.ts#L28-L47) · Schema: tools/list.

Exposure: Default and GTM_READ_ONLY mode; these state-changing tools are not covered by the write-prefix filter.

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
