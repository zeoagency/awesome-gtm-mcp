# lpecom/webaudit-mcp

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/lpecom/webaudit-mcp) · [Machine-readable inventory](../data/mcps/lpecom--webaudit-mcp.json)

**7 extracted tools.** Scan page HTML for installed GTM containers, duplicate installations, and tracking configuration patterns.

Snapshot: 2026-10-13 · [0fad86958891](https://github.com/lpecom/webaudit-mcp/tree/0fad8695889102a820c208c13df3d565c9068c34) · Method: tools/list.

Exposure: All seven tools registered unconditionally by default; measure_performance remains exposed when Playwright/Chromium is missing but returns installation guidance. Every tool has only the required URL parameter, with no input defaults or nested parameters.

## Limits

- Offline MCP initialize/tools/list verified registrations and schemas only; no tool operations or live web audits were invoked.
- Tracking tools scan served HTML only: runtime-injected GTM/CMP tags, actual event firing, container contents and consent behavior are unobservable; server-side/first-party findings are URL-pattern heuristics.
- measure_performance dynamically imports Playwright, which is a devDependency, and additionally requires an installed Chromium browser; npm production installs can lack the package.
- Page-weight GET fallback uses fetched body bytes, which may be decompressed by the fetch client; reports should not be assumed to be exact wire-transfer sizes.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`audit_page`](#tool-audit_page-b688e52f) | GTM | Fetches served HTML and combines static GTM/analytics detection, duplicate-risk heuristics, response headers and resource counts without running page JavaScript. |
| [`detect_tracking_tags`](#tool-detect_tracking_tags-f86a7da4) | GTM | Parses served HTML for tag loader URLs, inline IDs, noscript pixels and consent signatures, including GTM and heuristic first-party/server-side signals; does not execute scripts or inspect container contents. |
| [`find_duplicate_tags`](#tool-find_duplicate_tags-389f5e23) | GTM | Analyzes static HTML findings for multiple GTM container IDs, repeated inline initializations and GTM plus hardcoded GA4 coexistence; cannot confirm runtime double firing or inspect the container. |
| [`measure_performance`](#tool-measure_performance-775d39eb) | Other product | General web-performance tool loads the URL in headless Chromium, waits three seconds after load, and reports browser Performance API lab timing and resource totals without inspecting GTM configuration or event firing. |
| [`analyze_page_weight`](#tool-analyze_page_weight-b6252ed3) | Other product | General web-page sizing tool extracts HTML-referenced resources and sizes at most 30 using guarded HEAD requests with capped GET fallback, without executing JavaScript. |
| [`check_headers`](#tool-check_headers-380aa5cd) | Other product | General HTTP hygiene tool fetches the URL and reports caching, compression and security/CDN response-header checks. |
| [`tracking_summary`](#tool-tracking_summary-8beb3741) | GTM | Turns static HTML tracking detections and duplicate heuristics into a marketer-facing summary, including GTM IDs and consent signals, without checking live event delivery. |

<a id="tool-audit_page-b688e52f"></a>

## audit_page

Handler: Fetches served HTML and combines static GTM/analytics detection, duplicate-risk heuristics, response headers and resource counts without running page JavaScript.

```text
One-shot audit of a URL: tracking tags, duplicate-tag risks, response-header hygiene, and resource counts, as a single readable report. Fast (no browser). For byte-level page weight use analyze_page_weight; for lab Core Web Vitals use measure_performance.
```

[Source](https://github.com/lpecom/webaudit-mcp/blob/0fad8695889102a820c208c13df3d565c9068c34/src/tools.ts#L266-L317) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "Absolute http(s) URL of the page to audit, e.g. https://example.com"
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

<a id="tool-detect_tracking_tags-f86a7da4"></a>

## detect_tracking_tags

Handler: Parses served HTML for tag loader URLs, inline IDs, noscript pixels and consent signatures, including GTM and heuristic first-party/server-side signals; does not execute scripts or inspect container contents.

```text
Static scan of a page's HTML for analytics/advertising tags: GA4, Google Tag Manager, Universal Analytics, Google Ads, Meta Pixel, TikTok, LinkedIn Insight, Hotjar, Microsoft Clarity, server-side/first-party tagging, and consent platforms. Reports IDs and where each was found.
```

[Source](https://github.com/lpecom/webaudit-mcp/blob/0fad8695889102a820c208c13df3d565c9068c34/src/tools.ts#L319-L337) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "Absolute http(s) URL of the page to audit, e.g. https://example.com"
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

<a id="tool-find_duplicate_tags-389f5e23"></a>

## find_duplicate_tags

Handler: Analyzes static HTML findings for multiple GTM container IDs, repeated inline initializations and GTM plus hardcoded GA4 coexistence; cannot confirm runtime double firing or inspect the container.

```text
Flag duplicate GA4/GTM/pixel installations and double-fire patterns: same ID initialized twice, multiple containers, hardcoded GA4 next to GTM, multiple pixel IDs, legacy UA leftovers.
```

[Source](https://github.com/lpecom/webaudit-mcp/blob/0fad8695889102a820c208c13df3d565c9068c34/src/tools.ts#L339-L357) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "Absolute http(s) URL of the page to audit, e.g. https://example.com"
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

<a id="tool-measure_performance-775d39eb"></a>

## measure_performance

Handler: General web-performance tool loads the URL in headless Chromium, waits three seconds after load, and reports browser Performance API lab timing and resource totals without inspecting GTM configuration or event firing.

```text
Load the page in headless Chromium (Playwright) and capture lab metrics: TTFB, FCP, LCP, CLS, load times, request count and transfer sizes. Clearly labeled lab data, not field data. Requires the Playwright Chromium browser; returns the install command if missing.
```

[Source](https://github.com/lpecom/webaudit-mcp/blob/0fad8695889102a820c208c13df3d565c9068c34/src/tools.ts#L359-L376) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "Absolute http(s) URL of the page to audit, e.g. https://example.com"
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

<a id="tool-analyze_page_weight-b6252ed3"></a>

## analyze_page_weight

Handler: General web-page sizing tool extracts HTML-referenced resources and sizes at most 30 using guarded HEAD requests with capped GET fallback, without executing JavaScript.

```text
Static page-weight analysis: counts and byte sizes of scripts, stylesheets, images, fonts and iframes referenced in the HTML, plus the largest third-party scripts. Measures up to 30 resources with capped, guarded requests.
```

[Source](https://github.com/lpecom/webaudit-mcp/blob/0fad8695889102a820c208c13df3d565c9068c34/src/tools.ts#L378-L396) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "Absolute http(s) URL of the page to audit, e.g. https://example.com"
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

<a id="tool-check_headers-380aa5cd"></a>

## check_headers

Handler: General HTTP hygiene tool fetches the URL and reports caching, compression and security/CDN response-header checks.

```text
Inspect the page's HTTP response headers: caching policy, compression, HSTS, CSP, clickjacking protection, referrer policy, CDN presence. Informational grades with explanations, no synthetic scores.
```

[Source](https://github.com/lpecom/webaudit-mcp/blob/0fad8695889102a820c208c13df3d565c9068c34/src/tools.ts#L398-L415) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "Absolute http(s) URL of the page to audit, e.g. https://example.com"
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

<a id="tool-tracking_summary-8beb3741"></a>

## tracking_summary

Handler: Turns static HTML tracking detections and duplicate heuristics into a marketer-facing summary, including GTM IDs and consent signals, without checking live event delivery.

```text
Plain-language summary of a site's tracking setup written for a media buyer or marketer: what is installed, what it means for campaigns, consent posture, and issues to raise with the dev team.
```

[Source](https://github.com/lpecom/webaudit-mcp/blob/0fad8695889102a820c208c13df3d565c9068c34/src/tools.ts#L417-L435) · Schema: tools/list.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "description": "Absolute http(s) URL of the page to audit, e.g. https://example.com"
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
