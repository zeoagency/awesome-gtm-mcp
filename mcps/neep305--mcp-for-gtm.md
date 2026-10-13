# neep305/mcp-for-gtm

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/neep305/mcp-for-gtm) · [Machine-readable inventory](../data/mcps/neep305--mcp-for-gtm.json)

**19 extracted tools.** Browse live containers and generate local GA4 components; a separate entrypoint stores configuration metadata in SQLite.

Snapshot: 2026-10-13 · [c40aa2ae454e](https://github.com/neep305/mcp-for-gtm/tree/c40aa2ae454e9fbe33eabe0675212f65f5a09f23) · Method: tools/list.

Exposure: Two separate executable FastMCP entrypoints, not one merged server: 7 tools in fastmcp_gtm_server.py and 12 tools in mcp_server.py. All decorators register unconditionally; component library import failure produces handler errors, not hidden tools. README/config/run script/package point at absent server.py. Separate simple_test_server.py and test_mcp_server.py are diagnostic test servers and excluded.

## Limits

- Offline tool registration/listing used installed mcp 1.30.0 and Pydantic 2.13.5; upstream mcp>=1.0.0 is unpinned, so output schema/title details may vary with installed versions. No handlers, Google authentication, or API operations were invoked.
- README, config.json, run_server.sh and package script reference server.py, which is absent at this commit. Both actual production entrypoint catalogs are preserved with explicit exposure; they are not simultaneously exposed by one server.
- gtm_client_fixed.py hardcodes workspace 1, converts every parameter to template type, and never sets firingTriggerId. Setup workflows consequently do not implement working linked tracking; fbpixel is assumed without provisioning a template.
- Publishing extracts create_result["path"] rather than containerVersion.path, and configured OAuth scopes include only tagmanager.edit.containers, omitting publication/version privileges.
- test_gtm_connection/list_gtm_containers read one response page only; all creation tools can return overall success despite per-component failures.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`test_gtm_connection`](#tool-test_gtm_connection-8db86f4f) | GTM | Lists account containers through GTM v2 and returns connection status and up to five container summaries. |
| [`list_gtm_containers`](#tool-list_gtm_containers-c6ad6269) | GTM | Lists the first GTM API response page of containers for an account; does not follow pagination. |
| [`create_ga4_setup`](#tool-create_ga4_setup-453f5540) | GTM | Creates GA4 template variables, triggers and tags in hardcoded workspace 1; does not attach created triggers to tags and reports component errors individually. |
| [`create_facebook_pixel_setup`](#tool-create_facebook_pixel_setup-846daf6f) | GTM | Attempts to create a page-view trigger and fbpixel tag in hardcoded workspace 1; no trigger attachment or custom-template installation is implemented. |
| [`create_complete_ecommerce_setup`](#tool-create_complete_ecommerce_setup-4f921068) | GTM | Attempts template-based GA4, optional Facebook, conversion, form and click components in workspace 1 without attaching triggers to tags; component failures may coexist with overall success. |
| [`publish_gtm_container`](#tool-publish_gtm_container-1abf53e6) | GTM | Attempts to create and publish a version from hardcoded workspace 1, but reads create\_result\["path"\] instead of nested containerVersion.path and OAuth scopes omit publish/manage-versions privileges. |
| [`generate_ga4_template`](#tool-generate_ga4_template-34e03135) | GTM | Returns a locally generated GA4 component JSON object without calling Google; this component is not a complete GTM container export. |
| [`get_top_chatters`](#tool-get_top_chatters-7cdaf0dc) | Other product | Reads local SQLite chatter records ordered by message count (unrelated chatter product). |
| [`add_chatter`](#tool-add_chatter-14ff63a8) | Other product | Inserts a local SQLite chatter name and message count (unrelated chatter product). |
| [`update_chatter_messages`](#tool-update_chatter_messages-60495ad4) | Other product | Updates a local SQLite chatter message count (unrelated chatter product). |
| [`delete_chatter`](#tool-delete_chatter-627b6534) | Other product | Deletes a local SQLite chatter record (unrelated chatter product). |
| [`search_chatters`](#tool-search_chatters-102a23d5) | Other product | Searches local SQLite chatter names with SQL LIKE (unrelated chatter product). |
| [`save_gtm_config`](#tool-save_gtm_config-74e75646) | Supporting | Serializes arbitrary GTM configuration data into the local SQLite database; does not update Google Tag Manager. |
| [`get_gtm_configs`](#tool-get_gtm_configs-c3cf7a5c) | Supporting | Lists local SQLite configuration metadata with optional account, container and type filters. |
| [`get_gtm_config_details`](#tool-get_gtm_config_details-2aca8ef4) | Supporting | Reads a local SQLite configuration by numeric ID and deserializes its stored JSON. |
| [`delete_gtm_config`](#tool-delete_gtm_config-802d4a54) | Supporting | Deletes a configuration record from local SQLite; does not delete any GTM API resource. |
| [`track_gtm_component`](#tool-track_gtm_component-bac53fed) | Supporting | Records supplied GTM component identifiers and metadata in local SQLite without verifying remote existence. |
| [`get_gtm_components`](#tool-get_gtm_components-d5972e3e) | Supporting | Lists locally tracked component metadata with optional account, container and component type filters. |
| [`get_database_stats`](#tool-get_database_stats-3bef0427) | Supporting | Counts local chatter/configuration/component rows and returns ten recent stored records. |

<a id="tool-test_gtm_connection-8db86f4f"></a>

## test_gtm_connection

Handler: Lists account containers through GTM v2 and returns connection status and up to five container summaries.

```text
Test GTM API connection and authentication
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/fastmcp_gtm_server.py#L52-L76) · Schema: tools/list.

Exposure: All registered by fastmcp_gtm_server.py; not exposed by the other production entrypoint.

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
  "title": "test_gtm_connectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-list_gtm_containers-c6ad6269"></a>

## list_gtm_containers

Handler: Lists the first GTM API response page of containers for an account; does not follow pagination.

```text
List all GTM containers in an account
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/fastmcp_gtm_server.py#L78-L100) · Schema: tools/list.

Exposure: All registered by fastmcp_gtm_server.py; not exposed by the other production entrypoint.

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
  "title": "list_gtm_containersArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_ga4_setup-453f5540"></a>

## create_ga4_setup

Handler: Creates GA4 template variables, triggers and tags in hardcoded workspace 1; does not attach created triggers to tags and reports component errors individually.

```text
Create complete GA4 setup in GTM (실제 GTM에 생성)
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/fastmcp_gtm_server.py#L102-L202) · Schema: tools/list.

Exposure: All registered by fastmcp_gtm_server.py; not exposed by the other production entrypoint.

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
    "measurement_id": {
      "title": "Measurement Id",
      "type": "string"
    },
    "enhanced_ecommerce": {
      "default": false,
      "title": "Enhanced Ecommerce",
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "measurement_id"
  ],
  "title": "create_ga4_setupArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_facebook_pixel_setup-846daf6f"></a>

## create_facebook_pixel_setup

Handler: Attempts to create a page-view trigger and fbpixel tag in hardcoded workspace 1; no trigger attachment or custom-template installation is implemented.

```text
Create Facebook Pixel setup in GTM (실제 GTM에 생성)
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/fastmcp_gtm_server.py#L204-L279) · Schema: tools/list.

Exposure: All registered by fastmcp_gtm_server.py; not exposed by the other production entrypoint.

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
    "pixel_id": {
      "title": "Pixel Id",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "pixel_id"
  ],
  "title": "create_facebook_pixel_setupArguments",
  "type": "object"
}
```

</details>

<a id="tool-create_complete_ecommerce_setup-4f921068"></a>

## create_complete_ecommerce_setup

Handler: Attempts template-based GA4, optional Facebook, conversion, form and click components in workspace 1 without attaching triggers to tags; component failures may coexist with overall success.

```text
Create complete ecommerce tracking setup in GTM (실제 GTM에 생성)
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/fastmcp_gtm_server.py#L281-L370) · Schema: tools/list.

Exposure: All registered by fastmcp_gtm_server.py; not exposed by the other production entrypoint.

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
    "ga4_measurement_id": {
      "title": "Ga4 Measurement Id",
      "type": "string"
    },
    "facebook_pixel_id": {
      "default": null,
      "title": "Facebook Pixel Id",
      "type": "string"
    },
    "include_conversion_tracking": {
      "default": true,
      "title": "Include Conversion Tracking",
      "type": "boolean"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "ga4_measurement_id"
  ],
  "title": "create_complete_ecommerce_setupArguments",
  "type": "object"
}
```

</details>

<a id="tool-publish_gtm_container-1abf53e6"></a>

## publish_gtm_container

Handler: Attempts to create and publish a version from hardcoded workspace 1, but reads create\_result\["path"\] instead of nested containerVersion.path and OAuth scopes omit publish/manage-versions privileges.

```text
Publish GTM container version (실제 배포)
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/fastmcp_gtm_server.py#L372-L397) · Schema: tools/list.

Exposure: All registered by fastmcp_gtm_server.py; not exposed by the other production entrypoint.

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
    "version_name": {
      "title": "Version Name",
      "type": "string"
    },
    "version_notes": {
      "default": "Published via MCP",
      "title": "Version Notes",
      "type": "string"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "version_name"
  ],
  "title": "publish_gtm_containerArguments",
  "type": "object"
}
```

</details>

<a id="tool-generate_ga4_template-34e03135"></a>

## generate_ga4_template

Handler: Returns a locally generated GA4 component JSON object without calling Google; this component is not a complete GTM container export.

```text
Generate GA4 tag template (JSON only)
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/fastmcp_gtm_server.py#L399-L424) · Schema: tools/list.

Exposure: All registered by fastmcp_gtm_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "measurement_id": {
      "title": "Measurement Id",
      "type": "string"
    },
    "config_parameters": {
      "additionalProperties": true,
      "default": null,
      "title": "Config Parameters",
      "type": "object"
    }
  },
  "required": [
    "measurement_id"
  ],
  "title": "generate_ga4_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_top_chatters-7cdaf0dc"></a>

## get_top_chatters

Handler: Reads local SQLite chatter records ordered by message count (unrelated chatter product).

```text
Retrieve top chatters sorted by number of messages
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L105-L127) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "limit": {
      "default": 10,
      "title": "Limit",
      "type": "integer"
    }
  },
  "title": "get_top_chattersArguments",
  "type": "object"
}
```

</details>

<a id="tool-add_chatter-14ff63a8"></a>

## add_chatter

Handler: Inserts a local SQLite chatter name and message count (unrelated chatter product).

```text
Add a new chatter to the database
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L129-L157) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "messages": {
      "default": 0,
      "title": "Messages",
      "type": "integer"
    }
  },
  "required": [
    "name"
  ],
  "title": "add_chatterArguments",
  "type": "object"
}
```

</details>

<a id="tool-update_chatter_messages-60495ad4"></a>

## update_chatter_messages

Handler: Updates a local SQLite chatter message count (unrelated chatter product).

```text
Update message count for a chatter
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L159-L188) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    },
    "messages": {
      "title": "Messages",
      "type": "integer"
    }
  },
  "required": [
    "name",
    "messages"
  ],
  "title": "update_chatter_messagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_chatter-627b6534"></a>

## delete_chatter

Handler: Deletes a local SQLite chatter record (unrelated chatter product).

```text
Delete a chatter from the database
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L190-L217) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "name": {
      "title": "Name",
      "type": "string"
    }
  },
  "required": [
    "name"
  ],
  "title": "delete_chatterArguments",
  "type": "object"
}
```

</details>

<a id="tool-search_chatters-102a23d5"></a>

## search_chatters

Handler: Searches local SQLite chatter names with SQL LIKE (unrelated chatter product).

```text
Search chatters by name
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L219-L242) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "search_term": {
      "title": "Search Term",
      "type": "string"
    }
  },
  "required": [
    "search_term"
  ],
  "title": "search_chattersArguments",
  "type": "object"
}
```

</details>

<a id="tool-save_gtm_config-74e75646"></a>

## save_gtm_config

Handler: Serializes arbitrary GTM configuration data into the local SQLite database; does not update Google Tag Manager.

```text
Save GTM configuration to database
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L246-L277) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

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
    "config_type": {
      "title": "Config Type",
      "type": "string"
    },
    "config_data": {
      "additionalProperties": true,
      "title": "Config Data",
      "type": "object"
    }
  },
  "required": [
    "account_id",
    "container_id",
    "name",
    "config_type",
    "config_data"
  ],
  "title": "save_gtm_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_gtm_configs-c3cf7a5c"></a>

## get_gtm_configs

Handler: Lists local SQLite configuration metadata with optional account, container and type filters.

```text
Get GTM configurations with optional filtering
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L279-L333) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": null,
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "default": null,
      "title": "Container Id",
      "type": "string"
    },
    "config_type": {
      "default": null,
      "title": "Config Type",
      "type": "string"
    }
  },
  "title": "get_gtm_configsArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_gtm_config_details-2aca8ef4"></a>

## get_gtm_config_details

Handler: Reads a local SQLite configuration by numeric ID and deserializes its stored JSON.

```text
Get detailed GTM configuration by ID
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L335-L375) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "config_id": {
      "title": "Config Id",
      "type": "integer"
    }
  },
  "required": [
    "config_id"
  ],
  "title": "get_gtm_config_detailsArguments",
  "type": "object"
}
```

</details>

<a id="tool-delete_gtm_config-802d4a54"></a>

## delete_gtm_config

Handler: Deletes a configuration record from local SQLite; does not delete any GTM API resource.

```text
Delete GTM configuration by ID
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L377-L404) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "config_id": {
      "title": "Config Id",
      "type": "integer"
    }
  },
  "required": [
    "config_id"
  ],
  "title": "delete_gtm_configArguments",
  "type": "object"
}
```

</details>

<a id="tool-track_gtm_component-bac53fed"></a>

## track_gtm_component

Handler: Records supplied GTM component identifiers and metadata in local SQLite without verifying remote existence.

```text
Track a GTM component that was created
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L408-L436) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "component_id": {
      "title": "Component Id",
      "type": "string"
    },
    "component_type": {
      "title": "Component Type",
      "type": "string"
    },
    "component_name": {
      "title": "Component Name",
      "type": "string"
    },
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
    "component_id",
    "component_type",
    "component_name",
    "account_id",
    "container_id"
  ],
  "title": "track_gtm_componentArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_gtm_components-d5972e3e"></a>

## get_gtm_components

Handler: Lists locally tracked component metadata with optional account, container and component type filters.

```text
Get tracked GTM components with optional filtering
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L438-L496) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "account_id": {
      "default": null,
      "title": "Account Id",
      "type": "string"
    },
    "container_id": {
      "default": null,
      "title": "Container Id",
      "type": "string"
    },
    "component_type": {
      "default": null,
      "title": "Component Type",
      "type": "string"
    }
  },
  "title": "get_gtm_componentsArguments",
  "type": "object"
}
```

</details>

<a id="tool-get_database_stats-3bef0427"></a>

## get_database_stats

Handler: Counts local chatter/configuration/component rows and returns ten recent stored records.

```text
Get database statistics
```

[Source](https://github.com/neep305/mcp-for-gtm/blob/c40aa2ae454e9fbe33eabe0675212f65f5a09f23/mcp_server.py#L500-L556) · Schema: tools/list.

Exposure: All registered by mcp_server.py; not exposed by the other production entrypoint.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "get_database_statsArguments",
  "type": "object"
}
```

</details>
