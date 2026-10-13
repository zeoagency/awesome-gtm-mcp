# Review decisions

[Back to the catalog](README.md).

Tool inventories were extracted one MCP at a time and reviewed against registration, schemas, and handlers. Authentication-only responses do not establish tool parameters. No live GTM read or write operations were run.

**66 MCP-capable projects inspected; 61 included and 5 excluded.** The review also covers the MCP interface in tagops, previously listed under CLIs.

## Excluded entries

| MCP | Reason | Evidence |
|---|---|---|
| [ag2-mcp-servers/tag-manager-api](mcps/ag2-mcp-servers--tag-manager-api.md) | Bundled configuration targets 1Password and disables GTM tools; proxy security stubs cannot provide a working GTM authentication path. | [Source](https://github.com/ag2-mcp-servers/tag-manager-api/blob/c27bca677a819cf7ceb8b2cd0244fdca8037fb49/mcp_server/main.py#L70-L1699) |
| [archievi/climbpast-mcp](mcps/archievi--climbpast-mcp.md) | Hosted documentation lists tool names but supplies no complete input schemas; tools/list requires credentials. | [Source](https://climbpast.com/docs/mcp) |
| [Dayuse-Labs/gtm-mcp](mcps/dayuse-labs--gtm-mcp.md) | Production transport rejects every request with HTTP 501 because authentication is unimplemented; inverse rollback is a stub. | [Source](https://github.com/Dayuse-Labs/gtm-mcp/blob/0e2d66eccea6b6a3ad46db9a130ae0014d38c274/src/interfaces/mcp/tools.ts#L1-L632) |
| [Insightful-Pipe/google-tag-manager-mcp-server](mcps/insightful-pipe--google-tag-manager-mcp-server.md) | Private hosted documentation lists actions but does not verify registered MCP names or provide full input schemas. | [Source](https://github.com/Insightful-Pipe/google-tag-manager-mcp-server/blob/a4dd293403487ea280eebc7e6839c58a7caa82f7/README.md) |
| [stape-io/stape-mcp-server](mcps/stape-io--stape-mcp-server.md) | Hosted GTM hosting service with documented names but no complete public input schemas; unauthenticated initialize returns 401. | [Source](https://github.com/stape-io/stape-mcp-server/blob/890a2de2f08dc7e5cb544e9cbf29a277304b4028/README.md#L23-L29) |

## Verification

Each detail page identifies its upstream snapshot, extraction method, tool exposure, and specific limits. Source-derived or reconstructed schemas are labeled; documented tools with unavailable parameters remain explicit gaps rather than guessed schemas.

Descriptions are preserved as upstream exposes them. A separate behavior sentence records what the handler does when that differs from the description. Runtime defaults and restrictions absent from the input schema are not invented as schema fields.
