# RoyAzran/mcp-ads: supporting and other-product tools

[Provider inventory](royazran--mcp-ads.md) · [Global tool index](../TOOL_INDEX.md)

Tools 1351–1500 of 3131. Exact schemas from the same upstream snapshot.

<a id="tool-elementor_custom_code_add-7c091936"></a>

## elementor_custom_code_add

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required, locals().items, locals.

```text
[READ] Elementor tool. Add a custom code snippet (header/body scripts) via Elementor
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L555-L569) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "location": {
      "title": "Location",
      "type": "string"
    },
    "code": {
      "title": "Code",
      "type": "string"
    },
    "priority": {
      "default": 10,
      "title": "Priority",
      "type": "integer"
    },
    "conditions": {
      "default": null,
      "items": {},
      "title": "Conditions",
      "type": "array"
    },
    "status": {
      "default": "publish",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "title",
    "location",
    "code"
  ],
  "title": "elementor_custom_code_addArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_custom_code_update-3bd4eb54"></a>

## elementor_custom_code_update

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required, locals().items, locals.

```text
[READ] Elementor tool. Update an existing Elementor custom code snippet
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L571-L587) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "location": {
      "default": null,
      "title": "Location",
      "type": "string"
    },
    "code": {
      "default": null,
      "title": "Code",
      "type": "string"
    },
    "priority": {
      "default": null,
      "title": "Priority",
      "type": "integer"
    },
    "conditions": {
      "default": null,
      "items": {},
      "title": "Conditions",
      "type": "array"
    },
    "status": {
      "default": null,
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "elementor_custom_code_updateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_custom_code_remove-0264465b"></a>

## elementor_custom_code_remove

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Delete an Elementor custom code snippet
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L589-L600) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "force": {
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "elementor_custom_code_removeArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_landing_page_create-3f57b3d0"></a>

## elementor_landing_page_create

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] Elementor tool. Create an Elementor landing page (no header/footer, full-width)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L602-L613) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "slug": {
      "default": null,
      "title": "Slug",
      "type": "string"
    },
    "status": {
      "default": "draft",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "title"
  ],
  "title": "elementor_landing_page_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_landing_page_list-fb0a1282"></a>

## elementor_landing_page_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, \_elementor\_flatten\_items, \_wp, isinstance, page.get.

```text
[READ] Elementor tool. List all Elementor landing pages
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L615-L632) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    },
    "status": {
      "default": "any",
      "title": "Status",
      "type": "string"
    }
  },
  "title": "elementor_landing_page_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_experiments_list-d308ccf1"></a>

## elementor_experiments_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. List all Elementor experiments and their status
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L634-L640) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_experiments_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_experiments_toggle-62ebb14f"></a>

## elementor_experiments_toggle

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Enable or disable an Elementor experiment feature
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L642-L653) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "experiment": {
      "title": "Experiment",
      "type": "string"
    },
    "state": {
      "title": "State",
      "type": "string"
    }
  },
  "required": [
    "experiment",
    "state"
  ],
  "title": "elementor_experiments_toggleArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_custom_fonts_add-84ec77b2"></a>

## elementor_custom_fonts_add

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Add a custom font to Elementor (requires Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L655-L666) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "font_face": {
      "items": {},
      "title": "Font Face",
      "type": "array"
    }
  },
  "required": [
    "title",
    "font_face"
  ],
  "title": "elementor_custom_fonts_addArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_custom_fonts_list-be5cd02e"></a>

## elementor_custom_fonts_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. List all custom fonts registered in Elementor
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L668-L677) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "elementor_custom_fonts_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_custom_fonts_remove-a9beffcb"></a>

## elementor_custom_fonts_remove

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Remove a custom font from Elementor
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L679-L690) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "force": {
      "default": true,
      "title": "Force",
      "type": "boolean"
    }
  },
  "required": [
    "id"
  ],
  "title": "elementor_custom_fonts_removeArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_custom_icons_upload-f3b9e9ff"></a>

## elementor_custom_icons_upload

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. Register a custom icon set in Elementor (provide the icon set config)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L692-L705) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "icon_set_config": {
      "additionalProperties": true,
      "title": "Icon Set Config",
      "type": "object"
    },
    "css_url": {
      "default": null,
      "title": "Css Url",
      "type": "string"
    }
  },
  "required": [
    "title",
    "icon_set_config"
  ],
  "title": "elementor_custom_icons_uploadArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_custom_icons_list-c83ccd22"></a>

## elementor_custom_icons_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_schema\_required.

```text
[READ] Elementor tool. List all custom icon sets registered in Elementor
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L707-L713) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_custom_icons_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_container_create-00ff5176"></a>

## elementor_container_create

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, container\_settings.setdefault, structure.insert, \_elementor\_update\_document\_structure, \_elementor\_resolve\_insert\_index, \_elementor\_make\_container.

```text
[READ] Elementor tool. Create a flex or grid container element in Elementor page data
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L715-L727) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "container_type": {
      "default": "flex",
      "title": "Container Type",
      "type": "string"
    },
    "position": {
      "default": null,
      "title": "Position",
      "type": "integer"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_container_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_container_set_layout-f248db6e"></a>

## elementor_container_set_layout

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_find\_element, \_elementor\_update\_document\_structure, ValueError, element.get.

```text
[READ] Elementor tool. Set flex/grid layout properties on an Elementor container
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L729-L744) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "container_id": {
      "title": "Container Id",
      "type": "string"
    },
    "layout": {
      "additionalProperties": true,
      "title": "Layout",
      "type": "object"
    }
  },
  "required": [
    "page_id",
    "container_id",
    "layout"
  ],
  "title": "elementor_container_set_layoutArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_build_full_page-573dd362"></a>

## elementor_build_full_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_build\_page.

```text
[READ] Elementor tool. Build a complete Elementor page from supported section briefs or native Elementor element JSON.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L746-L758) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "sections": {
      "items": {},
      "title": "Sections",
      "type": "array"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "sections"
  ],
  "title": "elementor_build_full_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_page_structure-d29c5ad6"></a>

## elementor_get_page_structure

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_format\_document, \_elementor\_get\_document, document.get.

```text
[READ] Elementor tool. Get the full Elementor section/column/widget tree of a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L760-L772) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_get_page_structureArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_clear_page-bffee215"></a>

## elementor_clear_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_content\_collection, \_wp().post, \_elementor\_format\_document, \_wp.

```text
[WRITE] Elementor tool. Remove all Elementor content from a page (empty canvas)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L774-L785) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_clear_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_section-c93037bf"></a>

## elementor_add_section

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_make\_section, structure.insert, \_elementor\_update\_document\_structure, \_elementor\_resolve\_insert\_index, section\_settings.items.

```text
[WRITE] Elementor tool. Add a new section (with columns) to an Elementor page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L787-L823) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "position": {
      "default": "last",
      "title": "Position",
      "type": "string"
    },
    "columns": {
      "default": 1,
      "title": "Columns",
      "type": "integer"
    },
    "background_color": {
      "default": null,
      "title": "Background Color",
      "type": "string"
    },
    "background_image_url": {
      "default": null,
      "title": "Background Image Url",
      "type": "string"
    },
    "padding_top": {
      "default": "50",
      "title": "Padding Top",
      "type": "string"
    },
    "padding_bottom": {
      "default": "50",
      "title": "Padding Bottom",
      "type": "string"
    },
    "min_height": {
      "default": null,
      "title": "Min Height",
      "type": "string"
    },
    "content_width": {
      "default": null,
      "title": "Content Width",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    },
    "css_id": {
      "default": null,
      "title": "Css Id",
      "type": "string"
    },
    "html_tag": {
      "default": null,
      "title": "Html Tag",
      "type": "string"
    },
    "column_gap": {
      "default": null,
      "title": "Column Gap",
      "type": "string"
    },
    "reverse_on_mobile": {
      "default": null,
      "title": "Reverse On Mobile",
      "type": "boolean"
    },
    "entrance_animation": {
      "default": null,
      "title": "Entrance Animation",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_add_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_delete_section-37d56c74"></a>

## elementor_delete_section

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_find\_element, found\['siblings'\].pop, \_elementor\_update\_document\_structure, ValueError, found\['element'\].get.

```text
[WRITE] Elementor tool. Delete a section from an Elementor page by its ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L825-L839) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "section_id": {
      "title": "Section Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "section_id"
  ],
  "title": "elementor_delete_sectionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_section_settings-b28e548a"></a>

## elementor_update_section_settings

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_find\_element, \_elementor\_update\_document\_structure, ValueError, found\['element'\].get.

```text
[WRITE] Elementor tool. Update styling/settings of an existing section
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L841-L856) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "section_id": {
      "title": "Section Id",
      "type": "string"
    },
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "section_id",
    "settings"
  ],
  "title": "elementor_update_section_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_heading-24a216a3"></a>

## elementor_widget_heading

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Heading widget to an Elementor page section/column
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L858-L882) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "text": {
      "title": "Text",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "tag": {
      "default": "h2",
      "title": "Tag",
      "type": "string"
    },
    "align": {
      "default": "left",
      "title": "Align",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "string"
    },
    "font_weight": {
      "default": null,
      "title": "Font Weight",
      "type": "string"
    },
    "font_family": {
      "default": null,
      "title": "Font Family",
      "type": "string"
    },
    "line_height": {
      "default": null,
      "title": "Line Height",
      "type": "string"
    },
    "letter_spacing": {
      "default": null,
      "title": "Letter Spacing",
      "type": "string"
    },
    "text_transform": {
      "default": null,
      "title": "Text Transform",
      "type": "string"
    },
    "link_url": {
      "default": null,
      "title": "Link Url",
      "type": "string"
    },
    "link_external": {
      "default": null,
      "title": "Link External",
      "type": "boolean"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    },
    "css_id": {
      "default": null,
      "title": "Css Id",
      "type": "string"
    },
    "animation": {
      "default": null,
      "title": "Animation",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "text"
  ],
  "title": "elementor_widget_headingArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_text-dd8e55a2"></a>

## elementor_widget_text

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Text Editor widget (rich HTML content) to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L884-L899) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "text_color": {
      "default": null,
      "title": "Text Color",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "string"
    },
    "font_family": {
      "default": null,
      "title": "Font Family",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "content"
  ],
  "title": "elementor_widget_textArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_image-0681bd05"></a>

## elementor_widget_image

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add an Image widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L901-L919) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "image_url": {
      "title": "Image Url",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "image_id": {
      "default": null,
      "title": "Image Id",
      "type": "integer"
    },
    "alt": {
      "default": null,
      "title": "Alt",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "size": {
      "default": null,
      "title": "Size",
      "type": "string"
    },
    "link_url": {
      "default": null,
      "title": "Link Url",
      "type": "string"
    },
    "link_to_file": {
      "default": null,
      "title": "Link To File",
      "type": "boolean"
    },
    "hover_animation": {
      "default": null,
      "title": "Hover Animation",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "image_url"
  ],
  "title": "elementor_widget_imageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_button-9fd8af1c"></a>

## elementor_widget_button

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Button widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L921-L950) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "text": {
      "title": "Text",
      "type": "string"
    },
    "link_url": {
      "title": "Link Url",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "link_external": {
      "default": null,
      "title": "Link External",
      "type": "boolean"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "size": {
      "default": null,
      "title": "Size",
      "type": "string"
    },
    "background_color": {
      "default": null,
      "title": "Background Color",
      "type": "string"
    },
    "text_color": {
      "default": null,
      "title": "Text Color",
      "type": "string"
    },
    "border_radius": {
      "default": null,
      "title": "Border Radius",
      "type": "string"
    },
    "hover_background_color": {
      "default": null,
      "title": "Hover Background Color",
      "type": "string"
    },
    "hover_text_color": {
      "default": null,
      "title": "Hover Text Color",
      "type": "string"
    },
    "icon": {
      "default": null,
      "title": "Icon",
      "type": "string"
    },
    "icon_align": {
      "default": null,
      "title": "Icon Align",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "string"
    },
    "font_weight": {
      "default": null,
      "title": "Font Weight",
      "type": "string"
    },
    "padding_top": {
      "default": null,
      "title": "Padding Top",
      "type": "string"
    },
    "padding_right": {
      "default": null,
      "title": "Padding Right",
      "type": "string"
    },
    "padding_bottom": {
      "default": null,
      "title": "Padding Bottom",
      "type": "string"
    },
    "padding_left": {
      "default": null,
      "title": "Padding Left",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    },
    "animation": {
      "default": null,
      "title": "Animation",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "text",
    "link_url"
  ],
  "title": "elementor_widget_buttonArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_video-f8ea27a5"></a>

## elementor_widget_video

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Video widget (YouTube, Vimeo, hosted) to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L952-L971) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "video_type": {
      "default": "youtube",
      "title": "Video Type",
      "type": "string"
    },
    "youtube_url": {
      "default": null,
      "title": "Youtube Url",
      "type": "string"
    },
    "vimeo_url": {
      "default": null,
      "title": "Vimeo Url",
      "type": "string"
    },
    "hosted_url": {
      "default": null,
      "title": "Hosted Url",
      "type": "string"
    },
    "autoplay": {
      "default": null,
      "title": "Autoplay",
      "type": "boolean"
    },
    "mute": {
      "default": null,
      "title": "Mute",
      "type": "boolean"
    },
    "loop": {
      "default": null,
      "title": "Loop",
      "type": "boolean"
    },
    "controls": {
      "default": null,
      "title": "Controls",
      "type": "boolean"
    },
    "aspect_ratio": {
      "default": null,
      "title": "Aspect Ratio",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_videoArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_icon-b94dbc60"></a>

## elementor_widget_icon

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add an Icon widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L973-L991) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "icon": {
      "title": "Icon",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "library": {
      "default": "fa-solid",
      "title": "Library",
      "type": "string"
    },
    "size": {
      "default": null,
      "title": "Size",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "view": {
      "default": null,
      "title": "View",
      "type": "string"
    },
    "shape": {
      "default": null,
      "title": "Shape",
      "type": "string"
    },
    "link_url": {
      "default": null,
      "title": "Link Url",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "icon"
  ],
  "title": "elementor_widget_iconArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_divider-b8093b04"></a>

## elementor_widget_divider

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Divider/separator widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L993-L1009) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "style": {
      "default": "solid",
      "title": "Style",
      "type": "string"
    },
    "weight": {
      "default": "1",
      "title": "Weight",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "width": {
      "default": null,
      "title": "Width",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "gap": {
      "default": null,
      "title": "Gap",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_dividerArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_spacer-9f6ad2e7"></a>

## elementor_widget_spacer

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Spacer widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1011-L1022) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "height": {
      "default": "50",
      "title": "Height",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_spacerArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_image_box-24ad7a66"></a>

## elementor_widget_image_box

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add an Image Box widget (image + title + description) to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1024-L1044) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "image_url": {
      "title": "Image Url",
      "type": "string"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "image_id": {
      "default": null,
      "title": "Image Id",
      "type": "integer"
    },
    "image_alt": {
      "default": null,
      "title": "Image Alt",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "title_tag": {
      "default": null,
      "title": "Title Tag",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "title_color": {
      "default": null,
      "title": "Title Color",
      "type": "string"
    },
    "description_color": {
      "default": null,
      "title": "Description Color",
      "type": "string"
    },
    "link_url": {
      "default": null,
      "title": "Link Url",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "image_url",
    "title"
  ],
  "title": "elementor_widget_image_boxArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_icon_box-7e3abd61"></a>

## elementor_widget_icon_box

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add an Icon Box widget (icon + title + description) to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1046-L1065) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "icon": {
      "title": "Icon",
      "type": "string"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "library": {
      "default": "fa-solid",
      "title": "Library",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "icon_color": {
      "default": null,
      "title": "Icon Color",
      "type": "string"
    },
    "icon_size": {
      "default": null,
      "title": "Icon Size",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "view": {
      "default": null,
      "title": "View",
      "type": "string"
    },
    "link_url": {
      "default": null,
      "title": "Link Url",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "icon",
    "title"
  ],
  "title": "elementor_widget_icon_boxArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_image_gallery-678968be"></a>

## elementor_widget_image_gallery

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add an Image Gallery widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1067-L1081) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "images": {
      "default": null,
      "items": {},
      "title": "Images",
      "type": "array"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "image_size": {
      "default": "medium",
      "title": "Image Size",
      "type": "string"
    },
    "gap": {
      "default": null,
      "title": "Gap",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_image_galleryArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_testimonial-610c86db"></a>

## elementor_widget_testimonial

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Testimonial widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1083-L1101) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "name": {
      "title": "Name",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "company": {
      "default": null,
      "title": "Company",
      "type": "string"
    },
    "job_title": {
      "default": null,
      "title": "Job Title",
      "type": "string"
    },
    "image_url": {
      "default": null,
      "title": "Image Url",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "content_color": {
      "default": null,
      "title": "Content Color",
      "type": "string"
    },
    "name_color": {
      "default": null,
      "title": "Name Color",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "content",
    "name"
  ],
  "title": "elementor_widget_testimonialArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_tabs-6f79e779"></a>

## elementor_widget_tabs

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Tabs widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1103-L1115) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "tabs": {
      "default": null,
      "items": {},
      "title": "Tabs",
      "type": "array"
    },
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_tabsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_accordion-9b651720"></a>

## elementor_widget_accordion

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add an Accordion/FAQ widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1117-L1130) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "items": {
      "default": null,
      "items": {},
      "title": "Items",
      "type": "array"
    },
    "icon_closed": {
      "default": null,
      "title": "Icon Closed",
      "type": "string"
    },
    "icon_opened": {
      "default": null,
      "title": "Icon Opened",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_accordionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_counter-6524897c"></a>

## elementor_widget_counter

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add an animated Counter widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1132-L1151) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "number": {
      "title": "Number",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "prefix": {
      "default": null,
      "title": "Prefix",
      "type": "string"
    },
    "suffix": {
      "default": null,
      "title": "Suffix",
      "type": "string"
    },
    "duration": {
      "default": null,
      "title": "Duration",
      "type": "integer"
    },
    "number_color": {
      "default": null,
      "title": "Number Color",
      "type": "string"
    },
    "title_color": {
      "default": null,
      "title": "Title Color",
      "type": "string"
    },
    "font_size": {
      "default": null,
      "title": "Font Size",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "number"
  ],
  "title": "elementor_widget_counterArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_progress_bar-f8fdc767"></a>

## elementor_widget_progress_bar

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Progress Bar widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1153-L1169) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "percent": {
      "title": "Percent",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "bar_color": {
      "default": null,
      "title": "Bar Color",
      "type": "string"
    },
    "track_color": {
      "default": null,
      "title": "Track Color",
      "type": "string"
    },
    "height": {
      "default": null,
      "title": "Height",
      "type": "string"
    },
    "display_percent": {
      "default": null,
      "title": "Display Percent",
      "type": "boolean"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "title",
    "percent"
  ],
  "title": "elementor_widget_progress_barArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_google_maps-c68a024f"></a>

## elementor_widget_google_maps

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Google Maps widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1171-L1184) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "address": {
      "title": "Address",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "zoom": {
      "default": 14,
      "title": "Zoom",
      "type": "integer"
    },
    "height": {
      "default": "300",
      "title": "Height",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "address"
  ],
  "title": "elementor_widget_google_mapsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_icon_list-dbc2244f"></a>

## elementor_widget_icon_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add an Icon List widget (bulleted list with icons) to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1186-L1201) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "items": {
      "default": null,
      "items": {},
      "title": "Items",
      "type": "array"
    },
    "layout": {
      "default": null,
      "title": "Layout",
      "type": "string"
    },
    "icon_color": {
      "default": null,
      "title": "Icon Color",
      "type": "string"
    },
    "text_color": {
      "default": null,
      "title": "Text Color",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_icon_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_social_icons-45d4507a"></a>

## elementor_widget_social_icons

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add Social Icons widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1203-L1217) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "items": {
      "default": "fa-brands",
      "items": {},
      "title": "Items",
      "type": "array"
    },
    "shape": {
      "default": null,
      "title": "Shape",
      "type": "string"
    },
    "size": {
      "default": null,
      "title": "Size",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_social_iconsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_alert-cd6d5eaa"></a>

## elementor_widget_alert

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add an Alert/notice widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1219-L1233) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "type": {
      "default": "info",
      "title": "Type",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "show_dismiss": {
      "default": null,
      "title": "Show Dismiss",
      "type": "boolean"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "content"
  ],
  "title": "elementor_widget_alertArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_html-e9ca1f37"></a>

## elementor_widget_html

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a raw HTML widget to a page (custom code, embeds, scripts)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1235-L1246) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "html": {
      "title": "Html",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "html"
  ],
  "title": "elementor_widget_htmlArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_shortcode-1ac5979c"></a>

## elementor_widget_shortcode

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a WordPress shortcode widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1248-L1259) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "shortcode": {
      "title": "Shortcode",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "shortcode"
  ],
  "title": "elementor_widget_shortcodeArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_slides-31c98eea"></a>

## elementor_widget_slides

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Slides/Slider widget to a page (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1261-L1278) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "slides": {
      "items": {},
      "title": "Slides",
      "type": "array"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "transition": {
      "default": null,
      "title": "Transition",
      "type": "string"
    },
    "autoplay": {
      "default": null,
      "title": "Autoplay",
      "type": "boolean"
    },
    "autoplay_speed": {
      "default": null,
      "title": "Autoplay Speed",
      "type": "integer"
    },
    "loop": {
      "default": null,
      "title": "Loop",
      "type": "boolean"
    },
    "show_dots": {
      "default": null,
      "title": "Show Dots",
      "type": "boolean"
    },
    "show_arrows": {
      "default": null,
      "title": "Show Arrows",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "slides"
  ],
  "title": "elementor_widget_slidesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_form-98fb13c8"></a>

## elementor_widget_form

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Contact/Lead Form widget to a page (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1280-L1299) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "fields": {
      "default": null,
      "items": {},
      "title": "Fields",
      "type": "array"
    },
    "submit_text": {
      "default": "Send",
      "title": "Submit Text",
      "type": "string"
    },
    "email_to": {
      "default": null,
      "title": "Email To",
      "type": "string"
    },
    "email_subject": {
      "default": null,
      "title": "Email Subject",
      "type": "string"
    },
    "success_message": {
      "default": null,
      "title": "Success Message",
      "type": "string"
    },
    "redirect_url": {
      "default": null,
      "title": "Redirect Url",
      "type": "string"
    },
    "submit_align": {
      "default": null,
      "title": "Submit Align",
      "type": "string"
    },
    "submit_bg_color": {
      "default": null,
      "title": "Submit Bg Color",
      "type": "string"
    },
    "submit_text_color": {
      "default": null,
      "title": "Submit Text Color",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_countdown-e08f6c1c"></a>

## elementor_widget_countdown

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Countdown Timer widget to a page (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1301-L1318) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "end_date": {
      "title": "End Date",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "digit_color": {
      "default": null,
      "title": "Digit Color",
      "type": "string"
    },
    "label_color": {
      "default": null,
      "title": "Label Color",
      "type": "string"
    },
    "expire_action": {
      "default": null,
      "title": "Expire Action",
      "type": "string"
    },
    "expire_message": {
      "default": null,
      "title": "Expire Message",
      "type": "string"
    },
    "expire_redirect_url": {
      "default": null,
      "title": "Expire Redirect Url",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "end_date"
  ],
  "title": "elementor_widget_countdownArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_price_table-24a39a9f"></a>

## elementor_widget_price_table

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Pricing Table widget to a page (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1320-L1340) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "heading": {
      "default": null,
      "title": "Heading",
      "type": "string"
    },
    "price": {
      "default": null,
      "title": "Price",
      "type": "string"
    },
    "currency": {
      "default": null,
      "title": "Currency",
      "type": "string"
    },
    "period": {
      "default": null,
      "title": "Period",
      "type": "string"
    },
    "subheading": {
      "default": null,
      "title": "Subheading",
      "type": "string"
    },
    "features": {
      "default": null,
      "items": {},
      "title": "Features",
      "type": "array"
    },
    "button_text": {
      "default": null,
      "title": "Button Text",
      "type": "string"
    },
    "button_link": {
      "default": null,
      "title": "Button Link",
      "type": "string"
    },
    "ribbon_text": {
      "default": null,
      "title": "Ribbon Text",
      "type": "string"
    },
    "header_bg_color": {
      "default": null,
      "title": "Header Bg Color",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "title": "elementor_widget_price_tableArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_posts-183e9782"></a>

## elementor_widget_posts

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_add\_widget\_to\_page, locals().items, locals.

```text
[READ] Elementor tool. Add a Posts Grid/List widget to a page (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1342-L1364) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "posts_count": {
      "default": 3,
      "title": "Posts Count",
      "type": "integer"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "categories": {
      "default": null,
      "items": {},
      "title": "Categories",
      "type": "array"
    },
    "orderby": {
      "default": null,
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": null,
      "title": "Order",
      "type": "string"
    },
    "show_image": {
      "default": null,
      "title": "Show Image",
      "type": "boolean"
    },
    "show_title": {
      "default": null,
      "title": "Show Title",
      "type": "boolean"
    },
    "show_excerpt": {
      "default": null,
      "title": "Show Excerpt",
      "type": "boolean"
    },
    "show_date": {
      "default": null,
      "title": "Show Date",
      "type": "boolean"
    },
    "show_read_more": {
      "default": null,
      "title": "Show Read More",
      "type": "boolean"
    },
    "read_more_text": {
      "default": null,
      "title": "Read More Text",
      "type": "string"
    },
    "image_size": {
      "default": null,
      "title": "Image Size",
      "type": "string"
    },
    "css_class": {
      "default": null,
      "title": "Css Class",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_postsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_product_title-8291254d"></a>

## elementor_widget_woo_product_title

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Add WooCommerce Product Title widget (for single product pages)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1366-L1376) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_product_titleArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_product_images-6c596462"></a>

## elementor_widget_woo_product_images

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Add WooCommerce Product Images gallery widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1378-L1388) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_product_imagesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_product_price-d42fc162"></a>

## elementor_widget_woo_product_price

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Add WooCommerce Product Price widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1390-L1400) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_product_priceArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_add_to_cart-d89694bc"></a>

## elementor_widget_woo_add_to_cart

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Add WooCommerce Add to Cart button widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1402-L1412) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_add_to_cartArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_cart-c48b7bab"></a>

## elementor_widget_woo_cart

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Add WooCommerce Cart widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1414-L1424) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_cartArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_checkout-2d55d145"></a>

## elementor_widget_woo_checkout

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Add WooCommerce Checkout widget to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1426-L1436) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_widget_woo_checkoutArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_preset_hero-ce129b5d"></a>

## elementor_preset_hero

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_make\_section, \_elementor\_append\_widget\_to\_section, structure.append, \_elementor\_update\_document\_structure.

```text
[READ] Elementor tool. Add a full hero section (heading + subtext + CTA button) to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1438-L1470) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "heading": {
      "title": "Heading",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "subtext": {
      "default": null,
      "title": "Subtext",
      "type": "string"
    },
    "cta_text": {
      "default": null,
      "title": "Cta Text",
      "type": "string"
    },
    "cta_url": {
      "default": null,
      "title": "Cta Url",
      "type": "string"
    },
    "bg_color": {
      "default": "#1e1e2e",
      "title": "Bg Color",
      "type": "string"
    },
    "bg_image_url": {
      "default": null,
      "title": "Bg Image Url",
      "type": "string"
    },
    "heading_color": {
      "default": "#ffffff",
      "title": "Heading Color",
      "type": "string"
    },
    "text_color": {
      "default": "#ffffff",
      "title": "Text Color",
      "type": "string"
    },
    "padding_top": {
      "default": "100",
      "title": "Padding Top",
      "type": "string"
    },
    "padding_bottom": {
      "default": "100",
      "title": "Padding Bottom",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "heading"
  ],
  "title": "elementor_preset_heroArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_preset_features-6f18a21a"></a>

## elementor_preset_features

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_update\_document\_structure, ValueError, \_elementor\_make\_section, \_elementor\_append\_widget\_to\_section, structure.append, section\_ids.append.

```text
[READ] Elementor tool. Add a Features/Services cards section (icon boxes in columns) to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1472-L1511) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "heading": {
      "default": null,
      "title": "Heading",
      "type": "string"
    },
    "cards": {
      "default": null,
      "items": {},
      "title": "Cards",
      "type": "array"
    },
    "bg_color": {
      "default": "#ffffff",
      "title": "Bg Color",
      "type": "string"
    }
  },
  "title": "elementor_preset_featuresArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_preset_testimonials-5bf75f1c"></a>

## elementor_preset_testimonials

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_update\_document\_structure, ValueError, \_elementor\_make\_section, \_elementor\_append\_widget\_to\_section, structure.append, section\_ids.append.

```text
[READ] Elementor tool. Add a Testimonials section to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1513-L1551) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "heading": {
      "default": null,
      "title": "Heading",
      "type": "string"
    },
    "testimonials": {
      "default": null,
      "items": {},
      "title": "Testimonials",
      "type": "array"
    },
    "bg_color": {
      "default": "#f5f5f5",
      "title": "Bg Color",
      "type": "string"
    }
  },
  "title": "elementor_preset_testimonialsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_preset_cta-d5acfd8f"></a>

## elementor_preset_cta

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_make\_section, \_elementor\_append\_widget\_to\_section, structure.append, \_elementor\_update\_document\_structure.

```text
[READ] Elementor tool. Add a CTA (Call to Action) banner section to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1553-L1574) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "heading": {
      "title": "Heading",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "subtext": {
      "default": null,
      "title": "Subtext",
      "type": "string"
    },
    "button_text": {
      "default": null,
      "title": "Button Text",
      "type": "string"
    },
    "button_url": {
      "default": null,
      "title": "Button Url",
      "type": "string"
    },
    "bg_color": {
      "default": "#4054B2",
      "title": "Bg Color",
      "type": "string"
    },
    "text_color": {
      "default": "#ffffff",
      "title": "Text Color",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "heading"
  ],
  "title": "elementor_preset_ctaArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_preset_pricing-f7b46ee9"></a>

## elementor_preset_pricing

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_update\_document\_structure, ValueError, \_elementor\_make\_section, \_elementor\_append\_widget\_to\_section, structure.append, section\_ids.append.

```text
[READ] Elementor tool. Add a full Pricing section (multiple price tables) to a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1576-L1616) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "heading": {
      "title": "Heading",
      "type": "string"
    },
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "plans": {
      "default": null,
      "items": {},
      "title": "Plans",
      "type": "array"
    },
    "bg_color": {
      "default": "#f9f9f9",
      "title": "Bg Color",
      "type": "string"
    }
  },
  "required": [
    "heading"
  ],
  "title": "elementor_preset_pricingArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_preset_full_landing_page-411ad955"></a>

## elementor_preset_full_landing_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_clear\_page, ValueError, hero\_payload.pop, elementor\_preset\_hero, features\_payload.pop, elementor\_preset\_features, testimonials\_payload.pop.

```text
[READ] Elementor tool. Build a complete landing page with hero + features + testimonials + CTA in one call
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1618-L1652) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    },
    "hero": {
      "additionalProperties": true,
      "default": null,
      "title": "Hero",
      "type": "object"
    },
    "features": {
      "additionalProperties": true,
      "default": null,
      "title": "Features",
      "type": "object"
    },
    "testimonials": {
      "additionalProperties": true,
      "default": null,
      "title": "Testimonials",
      "type": "object"
    },
    "cta": {
      "additionalProperties": true,
      "default": null,
      "title": "Cta",
      "type": "object"
    }
  },
  "title": "elementor_preset_full_landing_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_remove_widget-5c45ffe2"></a>

## elementor_remove_widget

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_find\_element, found\['siblings'\].pop, \_elementor\_update\_document\_structure, ValueError, found\['element'\].get.

```text
[WRITE] Elementor tool. Remove a specific widget from an Elementor page by its widget ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1654-L1668) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "widget_id": {
      "title": "Widget Id",
      "type": "string"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "widget_id"
  ],
  "title": "elementor_remove_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_widget_settings-e151c2bd"></a>

## elementor_update_widget_settings

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_find\_element, \_elementor\_update\_document\_structure, ValueError, found\['element'\].get.

```text
[WRITE] Elementor tool. Update settings of a specific widget on a page by its widget ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1670-L1685) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "widget_id": {
      "title": "Widget Id",
      "type": "string"
    },
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id",
    "widget_id",
    "settings"
  ],
  "title": "elementor_update_widget_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_list_widgets_on_page-958d28d9"></a>

## elementor_list_widgets_on_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_content\_collection, \_elementor\_collect\_widgets.

```text
[READ] Elementor tool. List all widgets on a page with their IDs, types, and key settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1687-L1698) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "page_type": {
      "default": "pages",
      "title": "Page Type",
      "type": "string"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "elementor_list_widgets_on_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_list_templates-5868cd92"></a>

## elementor_list_templates

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, \_wp.

```text
[READ] Elementor tool. List all Elementor templates (pages, sections, blocks, popups, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1700-L1711) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "type": {
      "default": null,
      "title": "Type",
      "type": "string"
    },
    "per_page": {
      "default": 50,
      "title": "Per Page",
      "type": "integer"
    },
    "search": {
      "default": null,
      "title": "Search",
      "type": "string"
    }
  },
  "title": "elementor_list_templatesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_template-71850cca"></a>

## elementor_get_template

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_format\_document, \_elementor\_get\_library\_document.

```text
[READ] Elementor tool. Get an Elementor template with its full JSON data
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1713-L1718) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    }
  },
  "required": [
    "id"
  ],
  "title": "elementor_get_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_create_template-bcf072a0"></a>

## elementor_create_template

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_create\_library\_template.

```text
[WRITE] Elementor tool. Create a new Elementor template from JSON data
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1720-L1728) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "type": {
      "default": "page",
      "title": "Type",
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "page_settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Page Settings",
      "type": "object"
    }
  },
  "required": [
    "title"
  ],
  "title": "elementor_create_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_detect-5f78720c"></a>

## elementor_detect

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_match\_plugin, \_elementor\_flatten\_items, bool, \_wp().get, \_unsupported\_from\_http, \_wp, elementor.get.

```text
[READ] Elementor tool. Detect Elementor and Elementor Pro plugin status via the plugins controller when available.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1730-L1744) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_pro_detect-4733a0e3"></a>

## elementor_pro_detect

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_detect, detected.get.

```text
[READ] Elementor tool. Detect whether Elementor Pro is installed and active.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1746-L1754) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_pro_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_rest_capabilities-e6f4ded9"></a>

## elementor_rest_capabilities

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, \_unsupported\_from\_http, \_elementor\_flatten\_items, \_wp.

```text
[READ] Elementor tool. Check which Elementor-related REST surfaces are reachable on the connected WordPress site.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1756-L1775) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_rest_capabilitiesArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_validate_page_data-233a2fa8"></a>

## elementor_validate_page_data

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_validate\_data\_json, json.loads, \_elementor\_normalize\_structure, \_elementor\_count\_widgets.

```text
[READ] Elementor tool. Validate Elementor JSON before attempting to write it to a page.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1777-L1788) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "elementor_data": {
      "title": "Elementor Data"
    }
  },
  "required": [
    "elementor_data"
  ],
  "title": "elementor_validate_page_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_page_data-9c171f60"></a>

## elementor_get_page_data

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_format\_document, \_elementor\_get\_document.

```text
[READ] Elementor tool. Get full Elementor JSON data for a page or post (the _elementor_data meta field)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1790-L1796) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "type": {
      "default": "page",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "elementor_get_page_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_backup_page_data-a97028ff"></a>

## elementor_backup_page_data

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document, document.get, \_elementor\_format\_document, meta.get.

```text
[READ] Elementor tool. Capture current Elementor page meta so it can be restored later.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1798-L1815) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "type": {
      "default": "page",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "elementor_backup_page_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_page_data-6f5a9861"></a>

## elementor_update_page_data

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_content\_collection, \_wp().post, \_elementor\_format\_document, \_elementor\_encode\_json\_blob, \_elementor\_validate\_data\_json, \_wp.

```text
[WRITE] Elementor tool. Replace native Elementor JSON for a page/post. Descriptive section briefs are not accepted here.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1817-L1835) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "elementor_data": {
      "title": "Elementor Data",
      "type": "string"
    },
    "type": {
      "default": "page",
      "title": "Type",
      "type": "string"
    },
    "page_settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Page Settings",
      "type": "object"
    }
  },
  "required": [
    "id",
    "elementor_data"
  ],
  "title": "elementor_update_page_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_restore_page_data-d5535f0e"></a>

## elementor_restore_page_data

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_content\_collection, \_wp().post, \_elementor\_format\_document, \_elementor\_validate\_data\_json, \_elementor\_encode\_json\_blob, \_wp.

```text
[WRITE] Elementor tool. Restore Elementor page meta from a prior backup payload.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1837-L1853) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "backup": {
      "additionalProperties": true,
      "title": "Backup",
      "type": "object"
    },
    "type": {
      "default": "page",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id",
    "backup"
  ],
  "title": "elementor_restore_page_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_enable_on_page-d0a7e9b2"></a>

## elementor_enable_on_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_content\_collection, \_wp().post, \_elementor\_format\_document, \_wp.

```text
[WRITE] Elementor tool. Enable Elementor editor on an existing page/post (sets _elementor_edit_mode = builder)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1855-L1866) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "type": {
      "default": "page",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "elementor_enable_on_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_disable_on_page-43e44e1a"></a>

## elementor_disable_on_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_content\_collection, \_wp().post, \_elementor\_format\_document, \_wp.

```text
[WRITE] Elementor tool. Disable Elementor on a page (revert to default editor)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1868-L1879) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "type": {
      "default": "page",
      "title": "Type",
      "type": "string"
    }
  },
  "required": [
    "id"
  ],
  "title": "elementor_disable_on_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_kit_settings-c80821f2"></a>

## elementor_get_kit_settings

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Get Elementor Site Kit global settings (colors, typography, spacing, buttons, forms, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1881-L1885) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_get_kit_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_kit_settings-2bc3654c"></a>

## elementor_update_kit_settings

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Update Elementor Site Kit settings (global colors, fonts, button styles, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1887-L1893) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "settings"
  ],
  "title": "elementor_update_kit_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_global_colors-5ffd16ba"></a>

## elementor_get_global_colors

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Get all Elementor global colors defined in the Site Kit
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1895-L1899) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_get_global_colorsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_global_color-af7ff78c"></a>

## elementor_add_global_color

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Add a new global color to Elementor Site Kit
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1901-L1908) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "value": {
      "title": "Value",
      "type": "string"
    }
  },
  "required": [
    "title",
    "value"
  ],
  "title": "elementor_add_global_colorArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_clear_cache-f0003286"></a>

## elementor_clear_cache

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().delete, \_wp.

```text
[WRITE] Elementor tool. Clear Elementor CSS/file cache (forces regeneration of all CSS files)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1910-L1914) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_clear_cacheArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_export_template-36363ed9"></a>

## elementor_export_template

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_format\_document, \_elementor\_get\_library\_document, template.get.

```text
[READ] Elementor tool. Export an Elementor template as JSON (for backup or migration)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1916-L1930) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    }
  },
  "required": [
    "id"
  ],
  "title": "elementor_export_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_import_template-29999359"></a>

## elementor_import_template

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, isinstance, \_elementor\_create\_library\_template, import\_settings.get.

```text
[READ] Elementor tool. Import an Elementor template from JSON data
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1932-L1946) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "content": {
      "title": "Content",
      "type": "string"
    },
    "type": {
      "default": "page",
      "title": "Type",
      "type": "string"
    },
    "import_settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Import Settings",
      "type": "object"
    }
  },
  "required": [
    "title",
    "content"
  ],
  "title": "elementor_import_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_list_popups-7f77cb82"></a>

## elementor_list_popups

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, elementor\_list\_templates.

```text
[READ] Elementor tool. List all Elementor popups
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1948-L1953) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "per_page": {
      "default": 20,
      "title": "Per Page",
      "type": "integer"
    }
  },
  "title": "elementor_list_popupsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_create_page_with_template-3b15e08a"></a>

## elementor_create_page_with_template

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_format\_document, \_wp().post, elementor\_update\_page\_data, \_elementor\_get\_library\_document, \_wp, template.get.

```text
[WRITE] Elementor tool. Create a new page and apply an Elementor template to it
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1955-L1977) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "template_id": {
      "title": "Template Id",
      "type": "integer"
    },
    "slug": {
      "default": null,
      "title": "Slug",
      "type": "string"
    },
    "status": {
      "default": "draft",
      "title": "Status",
      "type": "string"
    }
  },
  "required": [
    "title",
    "template_id"
  ],
  "title": "elementor_create_page_with_templateArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_page_settings-2736f104"></a>

## elementor_get_page_settings

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document, document.get, meta.get, \_elementor\_decode\_meta\_json.

```text
[READ] Elementor tool. Get Elementor page-level settings for a specific page (padding, background, layout, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1979-L1991) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    }
  },
  "required": [
    "id"
  ],
  "title": "elementor_get_page_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_page_settings-c2ec3fd6"></a>

## elementor_update_page_settings

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, updated.get, meta.get, \_elementor\_decode\_meta\_json, \_wp, \_elementor\_encode\_json\_blob.

```text
[WRITE] Elementor tool. Update Elementor page settings (background color/image, padding, custom CSS, hide header/footer, etc.)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L1993-L2009) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "id": {
      "title": "Id",
      "type": "integer"
    },
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "id",
    "settings"
  ],
  "title": "elementor_update_page_settingsArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_from_brief-19baeb82"></a>

## sitegen_from_brief

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Generate a structured site plan from a business brief (pages, sections, content outline, colors, fonts)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2011-L2028) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_name": {
      "title": "Business Name",
      "type": "string"
    },
    "business_type": {
      "title": "Business Type",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "language": {
      "default": "he",
      "title": "Language",
      "type": "string"
    },
    "rtl": {
      "default": true,
      "title": "Rtl",
      "type": "boolean"
    },
    "color_palette": {
      "default": null,
      "title": "Color Palette",
      "type": "string"
    },
    "pages": {
      "default": null,
      "items": {},
      "title": "Pages",
      "type": "array"
    },
    "has_ecommerce": {
      "default": false,
      "title": "Has Ecommerce",
      "type": "boolean"
    },
    "has_booking": {
      "default": false,
      "title": "Has Booking",
      "type": "boolean"
    },
    "has_blog": {
      "default": true,
      "title": "Has Blog",
      "type": "boolean"
    },
    "has_portfolio": {
      "default": false,
      "title": "Has Portfolio",
      "type": "boolean"
    },
    "style": {
      "default": "modern-minimal",
      "title": "Style",
      "type": "string"
    }
  },
  "required": [
    "business_name",
    "business_type"
  ],
  "title": "sitegen_from_briefArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_create_pages_batch-da3b42bf"></a>

## sitegen_create_pages_batch

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create all pages for a site plan at once
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2030-L2036) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "pages": {
      "default": null,
      "items": {},
      "title": "Pages",
      "type": "array"
    }
  },
  "title": "sitegen_create_pages_batchArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_setup_menu-1bdfb5c5"></a>

## sitegen_setup_menu

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp, wp.post, menu.get, enumerate, items.append, menu\_name.lower().replace, menu\_name.lower.

```text
[WRITE] Tool tool. Auto-create main navigation menu from page list
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2038-L2057) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_ids": {
      "items": {},
      "title": "Page Ids",
      "type": "array"
    },
    "menu_name": {
      "default": "Main Menu",
      "title": "Menu Name",
      "type": "string"
    },
    "location": {
      "default": "primary",
      "title": "Location",
      "type": "string"
    }
  },
  "required": [
    "page_ids"
  ],
  "title": "sitegen_setup_menuArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_setup_homepage-52bb290c"></a>

## sitegen_setup_homepage

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Set a page as the static homepage
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2059-L2066) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "blog_page_id": {
      "default": null,
      "title": "Blog Page Id",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "sitegen_setup_homepageArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_setup_footer-ed41fa2e"></a>

## sitegen_setup_footer

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Create footer template with business info, links, social icons
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2068-L2080) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_name": {
      "title": "Business Name",
      "type": "string"
    },
    "phone": {
      "default": null,
      "title": "Phone",
      "type": "string"
    },
    "email": {
      "default": null,
      "title": "Email",
      "type": "string"
    },
    "address": {
      "default": null,
      "title": "Address",
      "type": "string"
    },
    "social_links": {
      "additionalProperties": true,
      "default": null,
      "title": "Social Links",
      "type": "object"
    },
    "copyright_text": {
      "default": null,
      "title": "Copyright Text",
      "type": "string"
    },
    "menu_id": {
      "default": null,
      "title": "Menu Id",
      "type": "integer"
    }
  },
  "required": [
    "business_name"
  ],
  "title": "sitegen_setup_footerArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_setup_header-3eef179c"></a>

## sitegen_setup_header

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Create header template with logo, menu, CTA button
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2082-L2093) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "logo_media_id": {
      "default": null,
      "title": "Logo Media Id",
      "type": "integer"
    },
    "menu_id": {
      "default": null,
      "title": "Menu Id",
      "type": "integer"
    },
    "cta_text": {
      "default": null,
      "title": "Cta Text",
      "type": "string"
    },
    "cta_url": {
      "default": null,
      "title": "Cta Url",
      "type": "string"
    },
    "sticky": {
      "default": true,
      "title": "Sticky",
      "type": "boolean"
    },
    "transparent": {
      "default": false,
      "title": "Transparent",
      "type": "boolean"
    }
  },
  "title": "sitegen_setup_headerArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_setup_woocommerce-343a2d2e"></a>

## sitegen_setup_woocommerce

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Configure WooCommerce basics for a new site (currency, location, pages)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2095-L2106) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "currency": {
      "default": "ILS",
      "title": "Currency",
      "type": "string"
    },
    "country": {
      "default": "IL",
      "title": "Country",
      "type": "string"
    },
    "weight_unit": {
      "default": "kg",
      "title": "Weight Unit",
      "type": "string"
    },
    "dimension_unit": {
      "default": "cm",
      "title": "Dimension Unit",
      "type": "string"
    },
    "enable_taxes": {
      "default": true,
      "title": "Enable Taxes",
      "type": "boolean"
    },
    "tax_rate": {
      "default": 17,
      "title": "Tax Rate",
      "type": "integer"
    }
  },
  "title": "sitegen_setup_woocommerceArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_import_demo_content-fbc5a9dd"></a>

## sitegen_import_demo_content

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Import sample content for a specific industry/business type
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2108-L2116) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_type": {
      "title": "Business Type",
      "type": "string"
    },
    "language": {
      "default": "he",
      "title": "Language",
      "type": "string"
    },
    "count": {
      "default": 5,
      "title": "Count",
      "type": "integer"
    }
  },
  "required": [
    "business_type"
  ],
  "title": "sitegen_import_demo_contentArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_configure_seo_defaults-46ac86d3"></a>

## sitegen_configure_seo_defaults

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set up Yoast/AIOSEO defaults for all pages (title templates, meta descriptions)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2118-L2126) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "business_name": {
      "title": "Business Name",
      "type": "string"
    },
    "separator": {
      "default": "|",
      "title": "Separator",
      "type": "string"
    },
    "default_og_image_id": {
      "default": null,
      "title": "Default Og Image Id",
      "type": "integer"
    }
  },
  "required": [
    "business_name"
  ],
  "title": "sitegen_configure_seo_defaultsArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_configure_analytics-5a433fc6"></a>

## sitegen_configure_analytics

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Set up Google Analytics / GTM tracking for the site
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2128-L2136) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "ga4_measurement_id": {
      "default": null,
      "title": "Ga4 Measurement Id",
      "type": "string"
    },
    "gtm_container_id": {
      "default": null,
      "title": "Gtm Container Id",
      "type": "string"
    },
    "meta_pixel_id": {
      "default": null,
      "title": "Meta Pixel Id",
      "type": "string"
    }
  },
  "title": "sitegen_configure_analyticsArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_create_contact_form-f5f8a18a"></a>

## sitegen_create_contact_form

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Create a contact form and optionally place it on a page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2138-L2148) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "form_title": {
      "default": "Contact Form",
      "title": "Form Title",
      "type": "string"
    },
    "fields": {
      "default": null,
      "items": {},
      "title": "Fields",
      "type": "array"
    },
    "recipient_email": {
      "default": null,
      "title": "Recipient Email",
      "type": "string"
    },
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "language": {
      "default": "he",
      "title": "Language",
      "type": "string"
    }
  },
  "title": "sitegen_create_contact_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_create_about_page-ba896c02"></a>

## sitegen_create_about_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Generate about page content with team section
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2150-L2160) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "business_name": {
      "title": "Business Name",
      "type": "string"
    },
    "story": {
      "default": null,
      "title": "Story",
      "type": "string"
    },
    "team": {
      "default": null,
      "items": {},
      "title": "Team",
      "type": "array"
    },
    "values": {
      "default": null,
      "items": {},
      "title": "Values",
      "type": "array"
    }
  },
  "required": [
    "page_id",
    "business_name"
  ],
  "title": "sitegen_create_about_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_create_services_page-74c52a4b"></a>

## sitegen_create_services_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Generate services grid page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2162-L2171) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "services": {
      "items": {},
      "title": "Services",
      "type": "array"
    },
    "layout": {
      "default": "grid",
      "title": "Layout",
      "type": "string"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    }
  },
  "required": [
    "page_id",
    "services"
  ],
  "title": "sitegen_create_services_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_create_portfolio_page-1851c03d"></a>

## sitegen_create_portfolio_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Tool tool. Generate portfolio/gallery page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2173-L2182) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "page_id": {
      "title": "Page Id",
      "type": "integer"
    },
    "items": {
      "default": null,
      "items": {},
      "title": "Items",
      "type": "array"
    },
    "layout": {
      "default": "grid",
      "title": "Layout",
      "type": "string"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    }
  },
  "required": [
    "page_id"
  ],
  "title": "sitegen_create_portfolio_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-sitegen_finalize-e384d15c"></a>

## sitegen_finalize

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Tool tool. Finalize site: clear caches, flush rewrites, verify all pages load
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2184-L2192) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "check_pages": {
      "default": true,
      "title": "Check Pages",
      "type": "boolean"
    },
    "clear_cache": {
      "default": true,
      "title": "Clear Cache",
      "type": "boolean"
    },
    "flush_rewrites": {
      "default": true,
      "title": "Flush Rewrites",
      "type": "boolean"
    }
  },
  "title": "sitegen_finalizeArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_detect-bf8b4462"></a>

## woodmart_detect

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. Check if the WoodMart theme is active on the site and return its version and configuration status.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2194-L2198) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woodmart_detectArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_options_get-c2a32a93"></a>

## woodmart_options_get

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. Get WoodMart theme options (stored in xts-flavor_theme_settings_flavor or theme mods). Optionally filter by specific option key.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2200-L2206) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "key": {
      "default": null,
      "title": "Key",
      "type": "string"
    }
  },
  "title": "woodmart_options_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_options_set-a615b1ed"></a>

## woodmart_options_set

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WoodMart tool. Update one or more WoodMart theme options.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2208-L2214) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "options": {
      "additionalProperties": true,
      "title": "Options",
      "type": "object"
    }
  },
  "required": [
    "options"
  ],
  "title": "woodmart_options_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_header_builder_get-015d4244"></a>

## woodmart_header_builder_get

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. Get the current WoodMart header builder layout configuration.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2216-L2220) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woodmart_header_builder_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_header_builder_set-b9399c99"></a>

## woodmart_header_builder_set

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WoodMart tool. Update the WoodMart header builder layout configuration.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2222-L2229) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "header_id": {
      "default": null,
      "title": "Header Id",
      "type": "integer"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "title": "woodmart_header_builder_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_footer_get-cd86be5d"></a>

## woodmart_footer_get

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. Get the current WoodMart footer configuration and widget areas.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2231-L2235) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woodmart_footer_getArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_footer_set-426c9137"></a>

## woodmart_footer_set

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WoodMart tool. Update WoodMart footer configuration.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2237-L2246) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "footer_layout": {
      "default": null,
      "title": "Footer Layout",
      "type": "string"
    },
    "footer_widgets": {
      "default": null,
      "title": "Footer Widgets",
      "type": "boolean"
    },
    "copyright_text": {
      "default": null,
      "title": "Copyright Text",
      "type": "string"
    },
    "scroll_to_top": {
      "default": null,
      "title": "Scroll To Top",
      "type": "boolean"
    }
  },
  "title": "woodmart_footer_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_prebuilt_list-6de7b5c6"></a>

## woodmart_prebuilt_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. List available WoodMart prebuilt demo layouts that can be imported.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2248-L2252) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woodmart_prebuilt_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_prebuilt_import-2454d4dc"></a>

## woodmart_prebuilt_import

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. Import a WoodMart prebuilt demo layout by slug or ID.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2254-L2261) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "demo": {
      "title": "Demo",
      "type": "string"
    },
    "import_type": {
      "default": null,
      "title": "Import Type",
      "type": "string"
    }
  },
  "required": [
    "demo"
  ],
  "title": "woodmart_prebuilt_importArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_shop_page_configure-7a8cf9a8"></a>

## woodmart_shop_page_configure

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. Configure the WoodMart shop/catalog page layout: grid/list mode, columns, sidebar, filters, products per page.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2263-L2276) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "view_mode": {
      "default": null,
      "title": "View Mode",
      "type": "string"
    },
    "columns": {
      "default": null,
      "title": "Columns",
      "type": "integer"
    },
    "products_per_page": {
      "default": null,
      "title": "Products Per Page",
      "type": "integer"
    },
    "sidebar": {
      "default": null,
      "title": "Sidebar",
      "type": "string"
    },
    "product_hover": {
      "default": null,
      "title": "Product Hover",
      "type": "string"
    },
    "filters_area": {
      "default": null,
      "title": "Filters Area",
      "type": "boolean"
    },
    "ajax_shop": {
      "default": null,
      "title": "Ajax Shop",
      "type": "boolean"
    },
    "infinite_scroll": {
      "default": null,
      "title": "Infinite Scroll",
      "type": "boolean"
    }
  },
  "title": "woodmart_shop_page_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_product_page_configure-7fe890d2"></a>

## woodmart_product_page_configure

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. Configure the WoodMart single product page layout and features.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2278-L2291) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "layout": {
      "default": null,
      "title": "Layout",
      "type": "string"
    },
    "image_width": {
      "default": null,
      "title": "Image Width",
      "type": "integer"
    },
    "thumbnails_position": {
      "default": null,
      "title": "Thumbnails Position",
      "type": "string"
    },
    "related_products": {
      "default": null,
      "title": "Related Products",
      "type": "boolean"
    },
    "related_count": {
      "default": null,
      "title": "Related Count",
      "type": "integer"
    },
    "tabs_layout": {
      "default": null,
      "title": "Tabs Layout",
      "type": "string"
    },
    "sticky_add_to_cart": {
      "default": null,
      "title": "Sticky Add To Cart",
      "type": "boolean"
    },
    "size_guide": {
      "default": null,
      "title": "Size Guide",
      "type": "boolean"
    }
  },
  "title": "woodmart_product_page_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_ajax_filters_configure-b150d11b"></a>

## woodmart_ajax_filters_configure

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. Configure WoodMart built-in AJAX product filters (price, color, size, attributes).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2293-L2305) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enable_ajax": {
      "default": null,
      "title": "Enable Ajax",
      "type": "boolean"
    },
    "price_slider": {
      "default": null,
      "title": "Price Slider",
      "type": "boolean"
    },
    "color_swatches": {
      "default": null,
      "title": "Color Swatches",
      "type": "boolean"
    },
    "size_filter": {
      "default": null,
      "title": "Size Filter",
      "type": "boolean"
    },
    "stock_filter": {
      "default": null,
      "title": "Stock Filter",
      "type": "boolean"
    },
    "categories_filter": {
      "default": null,
      "title": "Categories Filter",
      "type": "boolean"
    },
    "brands_filter": {
      "default": null,
      "title": "Brands Filter",
      "type": "boolean"
    }
  },
  "title": "woodmart_ajax_filters_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_color_scheme_set-863c55fb"></a>

## woodmart_color_scheme_set

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WoodMart tool. Set the WoodMart color scheme: primary, secondary, and accent colors.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2307-L2317) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "primary_color": {
      "title": "Primary Color",
      "type": "string"
    },
    "secondary_color": {
      "default": null,
      "title": "Secondary Color",
      "type": "string"
    },
    "accent_color": {
      "default": null,
      "title": "Accent Color",
      "type": "string"
    },
    "link_color": {
      "default": null,
      "title": "Link Color",
      "type": "string"
    },
    "link_hover_color": {
      "default": null,
      "title": "Link Hover Color",
      "type": "string"
    }
  },
  "required": [
    "primary_color"
  ],
  "title": "woodmart_color_scheme_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_typography_set-295c7591"></a>

## woodmart_typography_set

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WoodMart tool. Set WoodMart typography: heading font, body font, and menu font families and sizes.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2319-L2330) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "heading_font": {
      "title": "Heading Font",
      "type": "string"
    },
    "body_font": {
      "title": "Body Font",
      "type": "string"
    },
    "heading_weight": {
      "default": null,
      "title": "Heading Weight",
      "type": "string"
    },
    "body_size": {
      "default": null,
      "title": "Body Size",
      "type": "string"
    },
    "menu_font": {
      "default": null,
      "title": "Menu Font",
      "type": "string"
    },
    "menu_size": {
      "default": null,
      "title": "Menu Size",
      "type": "string"
    }
  },
  "required": [
    "heading_font",
    "body_font"
  ],
  "title": "woodmart_typography_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_css_custom_set-64ea4c8f"></a>

## woodmart_css_custom_set

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WoodMart tool. Add or update custom CSS in the WoodMart theme options.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2332-L2339) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "css": {
      "title": "Css",
      "type": "string"
    },
    "append": {
      "default": null,
      "title": "Append",
      "type": "boolean"
    }
  },
  "required": [
    "css"
  ],
  "title": "woodmart_css_custom_setArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_mega_menu_configure-1c44fb31"></a>

## woodmart_mega_menu_configure

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. Configure WoodMart mega menu settings for the main navigation.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2341-L2350) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enable_mega_menu": {
      "default": null,
      "title": "Enable Mega Menu",
      "type": "boolean"
    },
    "dropdown_width": {
      "default": null,
      "title": "Dropdown Width",
      "type": "string"
    },
    "design": {
      "default": null,
      "title": "Design",
      "type": "string"
    },
    "menu_id": {
      "default": null,
      "title": "Menu Id",
      "type": "integer"
    }
  },
  "title": "woodmart_mega_menu_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_slider_list-fc5b42cb"></a>

## woodmart_slider_list

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. List WoodMart sliders (built-in slider or Revolution Slider if installed).
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2352-L2356) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "woodmart_slider_listArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_size_guide_create-10b8694a"></a>

## woodmart_size_guide_create

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] WoodMart tool. Create a product size guide that can be assigned to WooCommerce products.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2358-L2366) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "table_html": {
      "title": "Table Html",
      "type": "string"
    },
    "categories": {
      "default": null,
      "items": {},
      "title": "Categories",
      "type": "array"
    }
  },
  "required": [
    "title",
    "table_html"
  ],
  "title": "woodmart_size_guide_createArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_compare_configure-b087b323"></a>

## woodmart_compare_configure

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. Configure the WoodMart product compare feature.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2368-L2376) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enable": {
      "default": null,
      "title": "Enable",
      "type": "boolean"
    },
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "fields": {
      "default": null,
      "items": {},
      "title": "Fields",
      "type": "array"
    }
  },
  "title": "woodmart_compare_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-woodmart_wishlist_configure-ba1dd38e"></a>

## woodmart_wishlist_configure

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] WoodMart tool. Configure the WoodMart wishlist feature.
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2378-L2388) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "enable": {
      "default": null,
      "title": "Enable",
      "type": "boolean"
    },
    "page_id": {
      "default": null,
      "title": "Page Id",
      "type": "integer"
    },
    "logged_in_only": {
      "default": null,
      "title": "Logged In Only",
      "type": "boolean"
    },
    "show_on_product": {
      "default": null,
      "title": "Show On Product",
      "type": "boolean"
    },
    "show_on_shop": {
      "default": null,
      "title": "Show On Shop",
      "type": "boolean"
    }
  },
  "title": "woodmart_wishlist_configureArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_page_structure-b5e643be"></a>

## elementor_set_page_structure

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_update\_document\_structure, \_elementor\_normalize\_structure.

```text
[WRITE] Elementor tool. Replace the entire Elementor page structure with new JSON data
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2390-L2396) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "elements": {
      "items": {},
      "title": "Elements",
      "type": "array"
    }
  },
  "required": [
    "post_id",
    "elements"
  ],
  "title": "elementor_set_page_structureArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_container-b00927cd"></a>

## elementor_add_container

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, structure.insert, \_elementor\_update\_document\_structure, \_elementor\_resolve\_insert\_index, \_elementor\_make\_container, container\_settings.items.

```text
[WRITE] Elementor tool. Add a Flexbox Container to an Elementor page (Elementor 3.6+ containers)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2398-L2427) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "direction": {
      "default": "row",
      "title": "Direction",
      "type": "string"
    },
    "content_width": {
      "default": "boxed",
      "title": "Content Width",
      "type": "string"
    },
    "align_items": {
      "default": "stretch",
      "title": "Align Items",
      "type": "string"
    },
    "justify_content": {
      "default": null,
      "title": "Justify Content",
      "type": "string"
    },
    "gap": {
      "default": null,
      "title": "Gap",
      "type": "string"
    },
    "background_color": {
      "default": null,
      "title": "Background Color",
      "type": "string"
    },
    "padding": {
      "additionalProperties": true,
      "default": null,
      "title": "Padding",
      "type": "object"
    },
    "min_height": {
      "default": null,
      "title": "Min Height",
      "type": "string"
    },
    "insert_position": {
      "default": null,
      "title": "Insert Position",
      "type": "integer"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "elementor_add_containerArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_add_widget_to_page-c669ed84"></a>

## elementor_add_widget_to_page

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_insert\_widget.

```text
[WRITE] Elementor tool. Add any Elementor widget to a page at a specified location
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2429-L2438) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "widget_type": {
      "title": "Widget Type",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "settings": {
      "additionalProperties": true,
      "default": null,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "post_id",
    "widget_type"
  ],
  "title": "elementor_add_widget_to_pageArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_widget-81a6a4e7"></a>

## elementor_update_widget

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_find\_element, \_elementor\_update\_document\_structure, ValueError, found\['element'\].get.

```text
[WRITE] Elementor tool. Update settings of an existing Elementor widget by its element ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2440-L2454) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "post_id",
    "element_id",
    "settings"
  ],
  "title": "elementor_update_widgetArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_delete_element-0a744416"></a>

## elementor_delete_element

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_find\_element, found\['siblings'\].pop, \_elementor\_update\_document\_structure, ValueError.

```text
[WRITE] Elementor tool. Delete an element (section, column, widget) from an Elementor page by element ID
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2456-L2467) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "element_id"
  ],
  "title": "elementor_delete_elementArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_duplicate_element-c7ae57aa"></a>

## elementor_duplicate_element

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_get\_document\_structure, \_elementor\_find\_element, found\['siblings'\].insert, \_elementor\_update\_document\_structure, ValueError, \_elementor\_clone\_with\_new\_ids.

```text
[WRITE] Elementor tool. Duplicate an element (section, column, or widget) on an Elementor page
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2469-L2480) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "element_id"
  ],
  "title": "elementor_duplicate_elementArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_text_editor-082259ca"></a>

## elementor_widget_text_editor

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Create or update a Text Editor widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2482-L2496) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "editor": {
      "title": "Editor",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "text_color": {
      "default": null,
      "title": "Text Color",
      "type": "string"
    },
    "typography_font_size": {
      "default": null,
      "title": "Typography Font Size",
      "type": "string"
    },
    "typography_font_family": {
      "default": null,
      "title": "Typography Font Family",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "editor"
  ],
  "title": "elementor_widget_text_editorArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_toggle-9000b8f5"></a>

## elementor_widget_toggle

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Create or update a Toggle widget (like accordion but multiple can be open)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2498-L2508) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "tabs": {
      "items": {},
      "title": "Tabs",
      "type": "array"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "tabs"
  ],
  "title": "elementor_widget_toggleArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_star_rating-b6078f8f"></a>

## elementor_widget_star_rating

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Create or update a Star Rating widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2510-L2529) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "rating_scale": {
      "default": 5,
      "title": "Rating Scale",
      "type": "integer"
    },
    "rating": {
      "default": null,
      "title": "Rating",
      "type": "integer"
    },
    "star_style": {
      "default": "star",
      "title": "Star Style",
      "type": "string"
    },
    "unmarked_style": {
      "default": "solid",
      "title": "Unmarked Style",
      "type": "string"
    },
    "color": {
      "default": null,
      "title": "Color",
      "type": "string"
    },
    "unmarked_color": {
      "default": null,
      "title": "Unmarked Color",
      "type": "string"
    },
    "star_size": {
      "default": null,
      "title": "Star Size",
      "type": "string"
    },
    "space_between": {
      "default": null,
      "title": "Space Between",
      "type": "string"
    },
    "align": {
      "default": null,
      "title": "Align",
      "type": "string"
    },
    "title": {
      "default": null,
      "title": "Title",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "elementor_widget_star_ratingArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_image_carousel-941edb38"></a>

## elementor_widget_image_carousel

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Create or update an Image Carousel widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2531-L2551) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "carousel_image_ids": {
      "default": null,
      "items": {},
      "title": "Carousel Image Ids",
      "type": "array"
    },
    "image_size": {
      "default": "medium_large",
      "title": "Image Size",
      "type": "string"
    },
    "slides_to_show": {
      "default": 3,
      "title": "Slides To Show",
      "type": "integer"
    },
    "slides_to_scroll": {
      "default": 1,
      "title": "Slides To Scroll",
      "type": "integer"
    },
    "autoplay": {
      "default": true,
      "title": "Autoplay",
      "type": "boolean"
    },
    "pause_on_hover": {
      "default": null,
      "title": "Pause On Hover",
      "type": "boolean"
    },
    "infinite": {
      "default": true,
      "title": "Infinite",
      "type": "boolean"
    },
    "effect": {
      "default": null,
      "title": "Effect",
      "type": "string"
    },
    "speed": {
      "default": 500,
      "title": "Speed",
      "type": "integer"
    },
    "autoplay_speed": {
      "default": 5000,
      "title": "Autoplay Speed",
      "type": "integer"
    },
    "navigation": {
      "default": "both",
      "title": "Navigation",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "elementor_widget_image_carouselArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_nav_menu-fec44854"></a>

## elementor_widget_nav_menu

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Create or update a Nav Menu widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2553-L2569) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "menu": {
      "default": null,
      "title": "Menu",
      "type": "integer"
    },
    "layout": {
      "default": "horizontal",
      "title": "Layout",
      "type": "string"
    },
    "align_items": {
      "default": null,
      "title": "Align Items",
      "type": "string"
    },
    "pointer": {
      "default": null,
      "title": "Pointer",
      "type": "string"
    },
    "animation_duration": {
      "default": null,
      "title": "Animation Duration",
      "type": "integer"
    },
    "indicator": {
      "default": null,
      "title": "Indicator",
      "type": "string"
    },
    "mobile_breakpoint": {
      "default": null,
      "title": "Mobile Breakpoint",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "elementor_widget_nav_menuArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_flip_box-294f6161"></a>

## elementor_widget_flip_box

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Create or update a Flip Box widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2571-L2596) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "flip_effect": {
      "default": "flip",
      "title": "Flip Effect",
      "type": "string"
    },
    "flip_direction": {
      "default": "left",
      "title": "Flip Direction",
      "type": "string"
    },
    "front_title_text": {
      "default": null,
      "title": "Front Title Text",
      "type": "string"
    },
    "front_description_text": {
      "default": null,
      "title": "Front Description Text",
      "type": "string"
    },
    "front_icon": {
      "default": null,
      "title": "Front Icon",
      "type": "string"
    },
    "front_background_color": {
      "default": null,
      "title": "Front Background Color",
      "type": "string"
    },
    "front_color": {
      "default": null,
      "title": "Front Color",
      "type": "string"
    },
    "back_title_text": {
      "default": null,
      "title": "Back Title Text",
      "type": "string"
    },
    "back_description_text": {
      "default": null,
      "title": "Back Description Text",
      "type": "string"
    },
    "back_icon": {
      "default": null,
      "title": "Back Icon",
      "type": "string"
    },
    "back_background_color": {
      "default": null,
      "title": "Back Background Color",
      "type": "string"
    },
    "back_color": {
      "default": null,
      "title": "Back Color",
      "type": "string"
    },
    "button_text": {
      "default": null,
      "title": "Button Text",
      "type": "string"
    },
    "button_url": {
      "default": null,
      "title": "Button Url",
      "type": "string"
    },
    "height": {
      "default": null,
      "title": "Height",
      "type": "string"
    },
    "border_radius": {
      "default": null,
      "title": "Border Radius",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "elementor_widget_flip_boxArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_call_to_action-2e2c33bb"></a>

## elementor_widget_call_to_action

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Create or update a Call to Action widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2598-L2617) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "title": {
      "title": "Title",
      "type": "string"
    },
    "skin": {
      "default": "classic",
      "title": "Skin",
      "type": "string"
    },
    "description": {
      "default": null,
      "title": "Description",
      "type": "string"
    },
    "button": {
      "default": null,
      "title": "Button",
      "type": "string"
    },
    "button_url": {
      "default": null,
      "title": "Button Url",
      "type": "string"
    },
    "image_url": {
      "default": null,
      "title": "Image Url",
      "type": "string"
    },
    "background_color": {
      "default": null,
      "title": "Background Color",
      "type": "string"
    },
    "title_color": {
      "default": null,
      "title": "Title Color",
      "type": "string"
    },
    "description_color": {
      "default": null,
      "title": "Description Color",
      "type": "string"
    },
    "layout": {
      "default": null,
      "title": "Layout",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "title"
  ],
  "title": "elementor_widget_call_to_actionArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_login-45b6a617"></a>

## elementor_widget_login

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Create or update a Login widget (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2619-L2638) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "show_labels": {
      "default": true,
      "title": "Show Labels",
      "type": "boolean"
    },
    "label_username": {
      "default": "Username or Email Address",
      "title": "Label Username",
      "type": "string"
    },
    "label_password": {
      "default": "Password",
      "title": "Label Password",
      "type": "string"
    },
    "label_remember": {
      "default": "Remember Me",
      "title": "Label Remember",
      "type": "string"
    },
    "label_log_in": {
      "default": "Log In",
      "title": "Label Log In",
      "type": "string"
    },
    "show_remember_me": {
      "default": true,
      "title": "Show Remember Me",
      "type": "boolean"
    },
    "show_lost_password": {
      "default": true,
      "title": "Show Lost Password",
      "type": "boolean"
    },
    "lost_password_link_text": {
      "default": null,
      "title": "Lost Password Link Text",
      "type": "string"
    },
    "redirect_after_login": {
      "default": null,
      "title": "Redirect After Login",
      "type": "string"
    },
    "redirect_after_logout": {
      "default": null,
      "title": "Redirect After Logout",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "elementor_widget_loginArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_woo_products-d70a8e9b"></a>

## elementor_widget_woo_products

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Create or update a WooCommerce Products widget (Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2640-L2664) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "posts_per_page": {
      "default": 6,
      "title": "Posts Per Page",
      "type": "integer"
    },
    "columns": {
      "default": 3,
      "title": "Columns",
      "type": "integer"
    },
    "orderby": {
      "default": null,
      "title": "Orderby",
      "type": "string"
    },
    "order": {
      "default": null,
      "title": "Order",
      "type": "string"
    },
    "query_type": {
      "default": null,
      "title": "Query Type",
      "type": "string"
    },
    "include_categories": {
      "default": null,
      "items": {},
      "title": "Include Categories",
      "type": "array"
    },
    "exclude_categories": {
      "default": null,
      "items": {},
      "title": "Exclude Categories",
      "type": "array"
    },
    "include_tags": {
      "default": null,
      "items": {},
      "title": "Include Tags",
      "type": "array"
    },
    "skin": {
      "default": null,
      "title": "Skin",
      "type": "string"
    },
    "show_title": {
      "default": true,
      "title": "Show Title",
      "type": "boolean"
    },
    "show_price": {
      "default": true,
      "title": "Show Price",
      "type": "boolean"
    },
    "show_rating": {
      "default": true,
      "title": "Show Rating",
      "type": "boolean"
    },
    "show_add_to_cart": {
      "default": true,
      "title": "Show Add To Cart",
      "type": "boolean"
    },
    "enable_lazyload": {
      "default": null,
      "title": "Enable Lazyload",
      "type": "boolean"
    },
    "paginate": {
      "default": null,
      "title": "Paginate",
      "type": "boolean"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "elementor_widget_woo_productsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_search_form-d0fc4f9c"></a>

## elementor_widget_search_form

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Create or update a Search Form widget
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2666-L2684) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "skin": {
      "default": "classic",
      "title": "Skin",
      "type": "string"
    },
    "placeholder": {
      "default": "Search",
      "title": "Placeholder",
      "type": "string"
    },
    "button_type": {
      "default": "icon",
      "title": "Button Type",
      "type": "string"
    },
    "button_text": {
      "default": "Search",
      "title": "Button Text",
      "type": "string"
    },
    "button_icon": {
      "default": null,
      "title": "Button Icon",
      "type": "string"
    },
    "background_color": {
      "default": null,
      "title": "Background Color",
      "type": "string"
    },
    "border_width": {
      "default": null,
      "title": "Border Width",
      "type": "string"
    },
    "border_color": {
      "default": null,
      "title": "Border Color",
      "type": "string"
    },
    "input_background_color": {
      "default": null,
      "title": "Input Background Color",
      "type": "string"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id"
  ],
  "title": "elementor_widget_search_formArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_widget_testimonial_carousel-4bd61185"></a>

## elementor_widget_testimonial_carousel

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_upsert\_widget, locals().items, locals.

```text
[READ] Elementor tool. Create or update a Testimonial Carousel widget (Elementor Pro)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2686-L2700) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "slides": {
      "items": {},
      "title": "Slides",
      "type": "array"
    },
    "skin": {
      "default": "basic",
      "title": "Skin",
      "type": "string"
    },
    "layout": {
      "default": null,
      "title": "Layout",
      "type": "string"
    },
    "slides_to_show": {
      "default": 2,
      "title": "Slides To Show",
      "type": "integer"
    },
    "autoplay": {
      "default": null,
      "title": "Autoplay",
      "type": "boolean"
    },
    "section_index": {
      "default": 0,
      "title": "Section Index",
      "type": "integer"
    },
    "column_index": {
      "default": 0,
      "title": "Column Index",
      "type": "integer"
    },
    "element_id": {
      "default": null,
      "title": "Element Id",
      "type": "string"
    }
  },
  "required": [
    "post_id",
    "slides"
  ],
  "title": "elementor_widget_testimonial_carouselArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_section_style-e528bed5"></a>

## elementor_update_section_style

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_merge\_element\_settings.

```text
[WRITE] Elementor tool. Update styling and settings of an existing section/row
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2702-L2709) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "post_id",
    "element_id",
    "settings"
  ],
  "title": "elementor_update_section_styleArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_column_style-08cd7c04"></a>

## elementor_update_column_style

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_merge\_element\_settings.

```text
[WRITE] Elementor tool. Update styling and settings of an existing column
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2711-L2718) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "settings": {
      "additionalProperties": true,
      "title": "Settings",
      "type": "object"
    }
  },
  "required": [
    "post_id",
    "element_id",
    "settings"
  ],
  "title": "elementor_update_column_styleArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_responsive-d81c49eb"></a>

## elementor_set_element_responsive

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_merge\_element\_settings, {'hide\_desktop': hide\_desktop, 'hide\_tablet': hide\_tablet, 'hide\_mobile': hide\_mobile}.items.

```text
[WRITE] Elementor tool. Set responsive visibility (hide/show on desktop, tablet, mobile) for any element
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2720-L2730) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "hide_desktop": {
      "default": null,
      "title": "Hide Desktop",
      "type": "boolean"
    },
    "hide_tablet": {
      "default": null,
      "title": "Hide Tablet",
      "type": "boolean"
    },
    "hide_mobile": {
      "default": null,
      "title": "Hide Mobile",
      "type": "boolean"
    }
  },
  "required": [
    "post_id",
    "element_id"
  ],
  "title": "elementor_set_element_responsiveArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_element_animation-b14714ea"></a>

## elementor_set_element_animation

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_elementor\_merge\_element\_settings, {'animation': animation, 'animation\_duration': animation\_duration, 'animation\_delay': animation\_delay}.items.

```text
[WRITE] Elementor tool. Set entrance animation for any Elementor element
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2732-L2746) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "post_id": {
      "title": "Post Id",
      "type": "integer"
    },
    "element_id": {
      "title": "Element Id",
      "type": "string"
    },
    "animation": {
      "default": null,
      "title": "Animation",
      "type": "string"
    },
    "animation_duration": {
      "default": null,
      "title": "Animation Duration",
      "type": "string"
    },
    "animation_delay": {
      "default": null,
      "title": "Animation Delay",
      "type": "integer"
    }
  },
  "required": [
    "post_id",
    "element_id"
  ],
  "title": "elementor_set_element_animationArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_global_typography-5bad4f11"></a>

## elementor_set_global_typography

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set global typography presets (Primary, Secondary, Text, Accent)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2748-L2762) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "typography_key": {
      "title": "Typography Key",
      "type": "string"
    },
    "font_family": {
      "default": null,
      "title": "Font Family",
      "type": "string"
    },
    "font_size": {
      "additionalProperties": true,
      "default": null,
      "title": "Font Size",
      "type": "object"
    },
    "font_weight": {
      "default": null,
      "title": "Font Weight",
      "type": "string"
    },
    "line_height": {
      "additionalProperties": true,
      "default": null,
      "title": "Line Height",
      "type": "object"
    },
    "letter_spacing": {
      "additionalProperties": true,
      "default": null,
      "title": "Letter Spacing",
      "type": "object"
    },
    "font_style": {
      "default": null,
      "title": "Font Style",
      "type": "string"
    },
    "text_transform": {
      "default": null,
      "title": "Text Transform",
      "type": "string"
    },
    "text_decoration": {
      "default": null,
      "title": "Text Decoration",
      "type": "string"
    }
  },
  "required": [
    "typography_key"
  ],
  "title": "elementor_set_global_typographyArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_global_color-5dda2601"></a>

## elementor_set_global_color

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Add or update a global color in the Elementor design system
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2764-L2772) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "color": {
      "title": "Color",
      "type": "string"
    },
    "id": {
      "default": null,
      "title": "Id",
      "type": "string"
    }
  },
  "required": [
    "title",
    "color"
  ],
  "title": "elementor_set_global_colorArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_kit_buttons-131a03ba"></a>

## elementor_update_kit_buttons

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Update global button styles in Elementor Site Kit
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2774-L2787) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "button_background_color": {
      "default": null,
      "title": "Button Background Color",
      "type": "string"
    },
    "button_text_color": {
      "default": null,
      "title": "Button Text Color",
      "type": "string"
    },
    "button_border_radius": {
      "additionalProperties": true,
      "default": null,
      "title": "Button Border Radius",
      "type": "object"
    },
    "button_padding": {
      "additionalProperties": true,
      "default": null,
      "title": "Button Padding",
      "type": "object"
    },
    "button_typography_font_size": {
      "default": null,
      "title": "Button Typography Font Size",
      "type": "string"
    },
    "button_typography_font_weight": {
      "default": null,
      "title": "Button Typography Font Weight",
      "type": "string"
    },
    "button_hover_background_color": {
      "default": null,
      "title": "Button Hover Background Color",
      "type": "string"
    },
    "button_hover_text_color": {
      "default": null,
      "title": "Button Hover Text Color",
      "type": "string"
    }
  },
  "title": "elementor_update_kit_buttonsArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_get_kit_data-871d7c34"></a>

## elementor_get_kit_data

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().get, locals().items, \_wp, locals.

```text
[READ] Elementor tool. Get all Elementor Site Kit settings (colors, typography, button, form, header, footer)
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2789-L2793) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {},
  "title": "elementor_get_kit_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_update_kit_data-d1299fda"></a>

## elementor_update_kit_data

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Update Elementor Site Kit settings in bulk
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2795-L2801) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "kit_settings": {
      "additionalProperties": true,
      "title": "Kit Settings",
      "type": "object"
    }
  },
  "required": [
    "kit_settings"
  ],
  "title": "elementor_update_kit_dataArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_site_name-3e45a989"></a>

## elementor_set_site_name

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, \_wp.

```text
[WRITE] Elementor tool. Set site name and site tagline via Elementor kit
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2803-L2812) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_name": {
      "default": null,
      "title": "Site Name",
      "type": "string"
    },
    "site_description": {
      "default": null,
      "title": "Site Description",
      "type": "string"
    }
  },
  "title": "elementor_set_site_nameArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_set_site_logo-6a5682c1"></a>

## elementor_set_site_logo

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Set the site logo via Elementor kit settings
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2814-L2821) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "site_logo_id": {
      "default": null,
      "title": "Site Logo Id",
      "type": "integer"
    },
    "site_favicon_id": {
      "default": null,
      "title": "Site Favicon Id",
      "type": "integer"
    }
  },
  "title": "elementor_set_site_logoArguments",
  "type": "object"
}
```

</details>

<a id="tool-elementor_create_header_template-2565dc07"></a>

## elementor_create_header_template

Handler: Other product (tools/wordpress/builders.py): calls mcp.tool, \_wp().post, locals().items, \_wp, locals.

```text
[WRITE] Elementor tool. Create a new Elementor Pro Header template
```

[Source](https://github.com/RoyAzran/mcp-ads/blob/c5886e306ff8bd8c447042cfc151ccd46f304eb7/tools/wordpress/builders.py#L2823-L2831) · Schema: tools/list.

Exposure: Full surface (--surface full), WordPress enabled by default. Conditional on WORDPRESS_TOOLS_ENABLED not 0/false/no.

<details>
<summary>Full input parameters</summary>

```json
{
  "properties": {
    "title": {
      "title": "Title",
      "type": "string"
    },
    "content": {
      "default": null,
      "title": "Content",
      "type": "string"
    },
    "conditions": {
      "default": null,
      "items": {},
      "title": "Conditions",
      "type": "array"
    }
  },
  "required": [
    "title"
  ],
  "title": "elementor_create_header_templateArguments",
  "type": "object"
}
```

</details>
