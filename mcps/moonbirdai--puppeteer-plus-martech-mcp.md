# moonbirdai/puppeteer-plus-martech-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/moonbirdai/puppeteer-plus-martech-mcp) · [Machine-readable inventory](../data/mcps/moonbirdai--puppeteer-plus-martech-mcp.json)

**16 extracted tools.** Open pages in a browser to identify GTM, sample dataLayer events, and visualize installed tracking technologies.

Snapshot: 2026-10-13 · [1878a43bc929](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/tree/1878a43bc92934e45a919b656c8399a9f99f4b71) · Method: mixed.

Exposure: All 16 tools are registered unconditionally by index.js; no configuration or credentials required for registration.

## Limits

- Offline tools/list obtained using original registration modules, actual SDK McpServer and in-memory client transport; no browser launch or tool handler executed. Handler functionality reviewed statically.
- GTM detection in pixelDetector treats presence of dataLayer as GTM evidence and extracts GTM IDs from script text; heuristic detection can yield false positives and miss external-script-only IDs.
- parse-analytics-beacons installs interception after navigation, so initial page-load requests may be missed. Its optional interaction capture reuses setupRequestInterception, which returns a fresh unattached request array when interception already exists, so interaction beacons may be empty.
- Marketing inspection and highlighted screenshots block images/fonts/media, potentially suppressing image pixels or altering screenshot appearance.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`puppeteer_navigate`](#tool-puppeteer_navigate-5e88d256) | Supporting | Opens the supplied URL in the shared Puppeteer browser, applying supplied launch options. |
| [`puppeteer_screenshot`](#tool-puppeteer_screenshot-ef2e8dd6) | Supporting | Captures the current page or selected element as a PNG screenshot. |
| [`find-marketing-technologies`](#tool-find-marketing-technologies-1848d89c) | GTM | Navigates to a webpage and reports marketing technologies including GTM IDs and dataLayer samples, network activity and SEO metadata. |
| [`analyze-analytics-platforms`](#tool-analyze-analytics-platforms-376e8841) | Other product | Google Analytics, Adobe Analytics and other analytics: reports detected platforms, IDs, requests and custom analytics globals. |
| [`detect-ad-pixels`](#tool-detect-ad-pixels-a25dbd92) | Other product | Advertising platforms: reports detected advertising pixels, IDs and sample advertising requests. |
| [`identify-tag-managers`](#tool-identify-tag-managers-114dcc70) | GTM | Reports detected GTM and other tag managers, container IDs, dataLayer samples and event names from the webpage. |
| [`track-marketing-beacons`](#tool-track-marketing-beacons-150ac746) | Supporting | Captures webpage requests and groups marketing beacons by vendor to inspect deployed tracking. |
| [`highlight-marketing-tools`](#tool-highlight-marketing-tools-1e3b7bdf) | GTM | Injects visual markers for marketing scripts including GTM and returns a screenshot. |
| [`scan-marketing-stack`](#tool-scan-marketing-stack-d3237a45) | GTM | Detects GTM and other marketing globals and data layers, parses recognized provider requests, and returns a combined stack report. |
| [`visualize-marketing-tech`](#tool-visualize-marketing-tech-0285c275) | GTM | Injects configurable markers for GTM, marketing scripts, pixels and data layers and returns a screenshot. |
| [`parse-analytics-beacons`](#tool-parse-analytics-beacons-5864d560) | Other product | Adobe Analytics and Experience Platform: captures and parses analytics beacons and optional click interactions, extracting Adobe variables and XDM. |
| [`audit-seo`](#tool-audit-seo-9ac25813) | Other product | SEO: returns webpage SEO metadata and URL structure analysis. |
| [`check-page-metadata`](#tool-check-page-metadata-2be6fd79) | Other product | SEO: extracts titles, descriptions, meta tags and social metadata and evaluates common metadata issues. |
| [`evaluate-page-structure`](#tool-evaluate-page-structure-8a512ad7) | Other product | SEO: reports URL structure, heading hierarchy, content counts, links and breadcrumbs with evaluations. |
| [`extract-schema-markup`](#tool-extract-schema-markup-c92f7497) | Other product | SEO: extracts JSON-LD and simplified microdata, lists schema types and reports missing structured data. |
| [`audit-image-alt-text`](#tool-audit-image-alt-text-a285bc84) | Other product | SEO and accessibility: audits image alt attributes and returns issue details, compliance rates and recommendations. |

<a id="tool-puppeteer_navigate-5e88d256"></a>

## puppeteer_navigate

Handler: Opens the supplied URL in the shared Puppeteer browser, applying supplied launch options.

```text
Navigate to a URL
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/coreTools.js#L8-L49) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "URL to navigate to"
    },
    "launchOptions": {
      "type": "object",
      "properties": {},
      "additionalProperties": false,
      "description": "PuppeteerJS LaunchOptions. Default null."
    },
    "allowDangerous": {
      "type": "boolean",
      "description": "Allow dangerous LaunchOptions that reduce security."
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

<a id="tool-puppeteer_screenshot-ef2e8dd6"></a>

## puppeteer_screenshot

Handler: Captures the current page or selected element as a PNG screenshot.

```text
Take a screenshot of the current page or a specific element
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/coreTools.js#L50-L116) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Name for the screenshot"
    },
    "selector": {
      "type": "string",
      "description": "CSS selector for element to screenshot"
    },
    "width": {
      "type": "number",
      "description": "Width in pixels (default: 800)"
    },
    "height": {
      "type": "number",
      "description": "Height in pixels (default: 600)"
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

<a id="tool-find-marketing-technologies-1848d89c"></a>

## find-marketing-technologies

Handler: Navigates to a webpage and reports marketing technologies including GTM IDs and dataLayer samples, network activity and SEO metadata.

```text
Get a high-level overview of all marketing technologies on a webpage
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/marketingTools.js#L11-L83) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
    },
    "waitTime": {
      "type": "number",
      "description": "Additional time to wait in milliseconds for delayed pixels to fire"
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

<a id="tool-analyze-analytics-platforms-376e8841"></a>

## analyze-analytics-platforms

Handler: Google Analytics, Adobe Analytics and other analytics: reports detected platforms, IDs, requests and custom analytics globals.

```text
Deep dive into analytics platforms (GA4, UA, Adobe Analytics, etc.) on a webpage
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/marketingTools.js#L84-L251) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
    },
    "waitTime": {
      "type": "number",
      "description": "Additional time to wait in milliseconds"
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

<a id="tool-detect-ad-pixels-a25dbd92"></a>

## detect-ad-pixels

Handler: Advertising platforms: reports detected advertising pixels, IDs and sample advertising requests.

```text
Focus on advertising platforms (Facebook, TikTok, etc.) on a webpage
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/marketingTools.js#L252-L361) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
    },
    "waitTime": {
      "type": "number",
      "description": "Additional time to wait in milliseconds"
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

<a id="tool-identify-tag-managers-114dcc70"></a>

## identify-tag-managers

Handler: Reports detected GTM and other tag managers, container IDs, dataLayer samples and event names from the webpage.

```text
Analyze tag management systems (GTM, Tealium, etc.) on a webpage
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/marketingTools.js#L362-L471) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
    },
    "waitTime": {
      "type": "number",
      "description": "Additional time to wait in milliseconds"
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

<a id="tool-track-marketing-beacons-150ac746"></a>

## track-marketing-beacons

Handler: Captures webpage requests and groups marketing beacons by vendor to inspect deployed tracking.

```text
Analyze network requests for tracking and marketing activities
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/marketingTools.js#L472-L641) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
    },
    "waitTime": {
      "type": "number",
      "description": "Additional time to wait in milliseconds"
    },
    "maxRequests": {
      "type": "number",
      "description": "Maximum number of requests to include in results"
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

<a id="tool-highlight-marketing-tools-1e3b7bdf"></a>

## highlight-marketing-tools

Handler: Injects visual markers for marketing scripts including GTM and returns a screenshot.

```text
Take a screenshot with marketing technologies visually highlighted
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/marketingTools.js#L642-L782) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to screenshot"
    },
    "highlightPixels": {
      "type": "boolean",
      "description": "Whether to highlight detected marketing pixels"
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

<a id="tool-scan-marketing-stack-d3237a45"></a>

## scan-marketing-stack

Handler: Detects GTM and other marketing globals and data layers, parses recognized provider requests, and returns a combined stack report.

```text
Comprehensive analysis of all marketing and analytics technologies on a webpage
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/marketingAnalysisTool.js#L16-L468) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
    },
    "waitTime": {
      "type": "number",
      "description": "Additional time to wait in milliseconds for delayed pixels to fire"
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

<a id="tool-visualize-marketing-tech-0285c275"></a>

## visualize-marketing-tech

Handler: Injects configurable markers for GTM, marketing scripts, pixels and data layers and returns a screenshot.

```text
Take a screenshot with detailed marketing technologies visually highlighted
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/marketingAnalysisTool.js#L469-L712) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to screenshot"
    },
    "highlightMode": {
      "type": "string",
      "enum": [
        "basic",
        "detailed",
        "none"
      ],
      "description": "How to highlight detected marketing technologies"
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

<a id="tool-parse-analytics-beacons-5864d560"></a>

## parse-analytics-beacons

Handler: Adobe Analytics and Experience Platform: captures and parses analytics beacons and optional click interactions, extracting Adobe variables and XDM.

```text
Capture and parse Adobe Analytics and Experience Platform beacons on a webpage
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/analyticsTools.js#L16-L307) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
    },
    "waitTime": {
      "type": "number",
      "description": "Time to wait for beacons to fire (milliseconds)"
    },
    "simulateClick": {
      "type": "string",
      "description": "Optional CSS selector to click for interaction beacons"
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

<a id="tool-audit-seo-9ac25813"></a>

## audit-seo

Handler: SEO: returns webpage SEO metadata and URL structure analysis.

```text
Analyze SEO metadata and structure on a webpage
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/seoTools.js#L9-L69) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
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

<a id="tool-check-page-metadata-2be6fd79"></a>

## check-page-metadata

Handler: SEO: extracts titles, descriptions, meta tags and social metadata and evaluates common metadata issues.

```text
Analyze meta tags, titles, and descriptions on a webpage
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/seoTools.js#L70-L159) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
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

<a id="tool-evaluate-page-structure-8a512ad7"></a>

## evaluate-page-structure

Handler: SEO: reports URL structure, heading hierarchy, content counts, links and breadcrumbs with evaluations.

```text
Analyze URL structure, headings hierarchy, and page organization
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/seoTools.js#L160-L297) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
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

<a id="tool-extract-schema-markup-c92f7497"></a>

## extract-schema-markup

Handler: SEO: extracts JSON-LD and simplified microdata, lists schema types and reports missing structured data.

```text
Analyze JSON-LD, microdata, and schema.org markup on a webpage
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/seoTools.js#L298-L421) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
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

<a id="tool-audit-image-alt-text-a285bc84"></a>

## audit-image-alt-text

Handler: SEO and accessibility: audits image alt attributes and returns issue details, compliance rates and recommendations.

```text
Audit image alt text on a webpage for accessibility and SEO compliance
```

[Source](https://github.com/moonbirdai/puppeteer-plus-martech-mcp/blob/1878a43bc92934e45a919b656c8399a9f99f4b71/src/tools/seoTools.js#L422-L540) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "format": "uri",
      "description": "The URL of the webpage to analyze"
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
