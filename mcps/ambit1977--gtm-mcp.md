# ambit1977/GTM-MCP

[Catalog](../README.md) · [Tool index](../TOOL_INDEX.md) · [Upstream project](https://github.com/ambit1977/GTM-MCP) · [Machine-readable inventory](../data/mcps/ambit1977--gtm-mcp.json)

**45 extracted tools.** Manages account permissions, container entities, workspaces, previews, and version publication.

Snapshot: 2026-10-13 · [6d9b0a35f753](https://github.com/ambit1977/GTM-MCP/tree/6d9b0a35f75378dcd034689142864cb07a4aba14) · Method: source.

Exposure: All 45 literal tools are registered unconditionally. Startup requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET; GTM operations require OAuth2 authorization. No read-only or configurable tool groups.

## Limits

- Static extraction of the literal tools/list registration; server and GTM operations were never executed.
- list_versions invokes containers.versions.list instead of version_headers.list; its containerVersion result extraction also differs from the version header resource.
- get_workspace_review_info groups changes using entity.path/entity.name, although workspace change resources nest the affected tag/trigger/variable; detailed counts can be incomplete.
- Duplicate create/update/delete/sync/quick_preview workspace switch cases at src/index.js lines 1758-1854 are unreachable redundant copies; only the first cases execute.
- List handlers return one API response without pagination, so large collections can be incomplete.
- GTMClient.resolveConflict is implemented but not registered as a public MCP tool.

## Tools

| Tool | Scope | What the handler does |
|---|---|---|
| [`get_auth_url`](#tool-get_auth_url-dd56d1b1) | Supporting | Generates the OAuth2 consent URL for configured GTM scopes. |
| [`authenticate`](#tool-authenticate-20dc65af) | Supporting | Exchanges an authorization code for OAuth2 tokens and saves them to the local token file. |
| [`check_auth_status`](#tool-check_auth_status-459a7847) | Supporting | Checks whether the local OAuth2 client currently contains an access token. |
| [`reset_auth`](#tool-reset_auth-21c8ca0a) | Supporting | Deletes the saved token file and clears OAuth2 client credentials. |
| [`list_accounts`](#tool-list_accounts-1090ba6a) | GTM | Lists GTM accounts through the authenticated Google Tag Manager v2 client. |
| [`get_account`](#tool-get_account-896a62e4) | GTM | Fetches GTM account through the authenticated Google Tag Manager v2 client. |
| [`update_account`](#tool-update_account-ad80eae4) | GTM | Updates GTM account through the authenticated Google Tag Manager v2 client. |
| [`list_user_permissions`](#tool-list_user_permissions-9cabc1e3) | GTM | Lists GTM user permissions through the authenticated Google Tag Manager v2 client. |
| [`get_user_permission`](#tool-get_user_permission-66c42a4c) | GTM | Fetches GTM user permission through the authenticated Google Tag Manager v2 client. |
| [`create_user_permission`](#tool-create_user_permission-ed2ceb20) | GTM | Creates GTM user permission through the authenticated Google Tag Manager v2 client. |
| [`update_user_permission`](#tool-update_user_permission-0063613f) | GTM | Updates GTM user permission through the authenticated Google Tag Manager v2 client. |
| [`delete_user_permission`](#tool-delete_user_permission-15a81315) | GTM | Deletes GTM user permission through the authenticated Google Tag Manager v2 client. |
| [`list_containers`](#tool-list_containers-a53dbc4d) | GTM | Lists GTM containers through the authenticated Google Tag Manager v2 client. |
| [`get_container`](#tool-get_container-9a0808eb) | GTM | Fetches GTM container through the authenticated Google Tag Manager v2 client. |
| [`create_container`](#tool-create_container-352b1505) | GTM | Creates GTM container through the authenticated Google Tag Manager v2 client. |
| [`update_container`](#tool-update_container-cacd7302) | GTM | Fetches the container fingerprint, then updates its name using the supplied or fetched fingerprint. |
| [`delete_container`](#tool-delete_container-a8bba20f) | GTM | Deletes GTM container through the authenticated Google Tag Manager v2 client. |
| [`list_workspaces`](#tool-list_workspaces-af844119) | GTM | Lists GTM workspaces through the authenticated Google Tag Manager v2 client. |
| [`get_workspace`](#tool-get_workspace-80ffee6a) | GTM | Fetches GTM workspace through the authenticated Google Tag Manager v2 client. |
| [`get_workspace_status`](#tool-get_workspace_status-23f21bb9) | GTM | Calls GTM workspace getStatus to return changes and merge conflicts. |
| [`get_workspace_review_info`](#tool-get_workspace_review_info-48dd81e9) | GTM | Combines workspace metadata and status with a change summary, but reads paths directly from change entities rather than their nested resources. |
| [`create_workspace`](#tool-create_workspace-a1af8425) | GTM | Creates GTM workspace through the authenticated Google Tag Manager v2 client. |
| [`update_workspace`](#tool-update_workspace-1a76edb7) | GTM | Fetches the workspace fingerprint, then updates its name and description. |
| [`delete_workspace`](#tool-delete_workspace-50bbbf2e) | GTM | Deletes GTM workspace through the authenticated Google Tag Manager v2 client. |
| [`sync_workspace`](#tool-sync_workspace-4b02a6d9) | GTM | Calls GTM workspace sync and returns the synchronization result. |
| [`quick_preview`](#tool-quick_preview-3dec8646) | GTM | Calls the GTM workspace quick\_preview endpoint and returns preview data. |
| [`list_tags`](#tool-list_tags-86fc0f9c) | GTM | Lists GTM tags through the authenticated Google Tag Manager v2 client. |
| [`get_tag`](#tool-get_tag-749bab4b) | GTM | Fetches GTM tag through the authenticated Google Tag Manager v2 client. |
| [`create_tag`](#tool-create_tag-e71dcc44) | GTM | Creates a GTM tag with parameters and firing trigger IDs, defaulting tagFiringOption to oncePerEvent. |
| [`update_tag`](#tool-update_tag-ff9e7962) | GTM | Fetches the existing tag, merges exposed fields, preserves selected metadata and fingerprint, and updates it. |
| [`delete_tag`](#tool-delete_tag-1345d160) | GTM | Deletes GTM tag through the authenticated Google Tag Manager v2 client. |
| [`list_triggers`](#tool-list_triggers-4ca44d74) | GTM | Lists GTM triggers through the authenticated Google Tag Manager v2 client. |
| [`get_trigger`](#tool-get_trigger-e2f13ee6) | GTM | Fetches GTM trigger through the authenticated Google Tag Manager v2 client. |
| [`update_trigger`](#tool-update_trigger-60ddeb77) | GTM | Fetches the existing trigger, merges filters and type-specific parameters, preserves the fingerprint, then updates it. |
| [`delete_trigger`](#tool-delete_trigger-ec67de91) | GTM | Deletes GTM trigger through the authenticated Google Tag Manager v2 client. |
| [`create_trigger`](#tool-create_trigger-71660c93) | GTM | Builds filters and type-specific trigger parameters from inputs, then creates a GTM trigger. |
| [`list_variables`](#tool-list_variables-1adaa2a1) | GTM | Lists GTM variables through the authenticated Google Tag Manager v2 client. |
| [`get_variable`](#tool-get_variable-ba0cd778) | GTM | Fetches GTM variable through the authenticated Google Tag Manager v2 client. |
| [`create_variable`](#tool-create_variable-2f5e4ddb) | GTM | Creates GTM variable through the authenticated Google Tag Manager v2 client. |
| [`update_variable`](#tool-update_variable-63c48ad7) | GTM | Fetches the existing variable, merges exposed fields and fingerprint, then updates it. |
| [`delete_variable`](#tool-delete_variable-3ead6fdb) | GTM | Deletes GTM variable through the authenticated Google Tag Manager v2 client. |
| [`create_version`](#tool-create_version-fc39e936) | GTM | Calls GTM workspace create\_version with optional name and notes. |
| [`list_versions`](#tool-list_versions-3eb8d6c0) | GTM | Attempts containers.versions.list and reads containerVersion; the GTM v2 version listing resource is version\_headers, so this handler needs correction. |
| [`get_version`](#tool-get_version-e67e6685) | GTM | Fetches GTM version through the authenticated Google Tag Manager v2 client. |
| [`publish_version`](#tool-publish_version-0628e4c5) | GTM | Calls GTM container versions.publish to publish the specified version. |

<a id="tool-get_auth_url-dd56d1b1"></a>

## get_auth_url

Handler: Generates the OAuth2 consent URL for configured GTM scopes.

```text
OAuth2認証URLを取得します。このURLにアクセスして認証を完了してください。
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L36-L42) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-authenticate-20dc65af"></a>

## authenticate

Handler: Exchanges an authorization code for OAuth2 tokens and saves them to the local token file.

```text
認証コードを使用して認証を完了します。get_auth_urlで取得したURLにアクセスし、リダイレクト先のURLから認証コードを取得して使用してください。
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L44-L56) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "description": "OAuth2認証コード（リダイレクト先のURLの「code=」の後の値）"
    }
  },
  "required": [
    "code"
  ]
}
```

</details>

<a id="tool-check_auth_status-459a7847"></a>

## check_auth_status

Handler: Checks whether the local OAuth2 client currently contains an access token.

```text
現在の認証状態を確認します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L58-L64) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-reset_auth-21c8ca0a"></a>

## reset_auth

Handler: Deletes the saved token file and clears OAuth2 client credentials.

```text
保存された認証情報をリセットします
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L66-L72) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-list_accounts-1090ba6a"></a>

## list_accounts

Handler: Lists GTM accounts through the authenticated Google Tag Manager v2 client.

```text
Google Tag Managerのアカウント一覧を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L74-L80) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {}
}
```

</details>

<a id="tool-get_account-896a62e4"></a>

## get_account

Handler: Fetches GTM account through the authenticated Google Tag Manager v2 client.

```text
指定されたアカウントの詳細を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L82-L94) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    }
  },
  "required": [
    "accountId"
  ]
}
```

</details>

<a id="tool-update_account-ad80eae4"></a>

## update_account

Handler: Updates GTM account through the authenticated Google Tag Manager v2 client.

```text
アカウント情報を更新します（名前など）
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L96-L112) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "name": {
      "type": "string",
      "description": "新しいアカウント名"
    }
  },
  "required": [
    "accountId",
    "name"
  ]
}
```

</details>

<a id="tool-list_user_permissions-9cabc1e3"></a>

## list_user_permissions

Handler: Lists GTM user permissions through the authenticated Google Tag Manager v2 client.

```text
指定されたアカウントのユーザー権限一覧を取得します（tagmanager.manage.usersスコープ必要）
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L114-L126) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    }
  },
  "required": [
    "accountId"
  ]
}
```

</details>

<a id="tool-get_user_permission-66c42a4c"></a>

## get_user_permission

Handler: Fetches GTM user permission through the authenticated Google Tag Manager v2 client.

```text
指定されたユーザー権限の詳細を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L128-L144) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "userPermissionId": {
      "type": "string",
      "description": "ユーザー権限ID（list_user_permissionsで取得したpathの末尾）"
    }
  },
  "required": [
    "accountId",
    "userPermissionId"
  ]
}
```

</details>

<a id="tool-create_user_permission-ed2ceb20"></a>

## create_user_permission

Handler: Creates GTM user permission through the authenticated Google Tag Manager v2 client.

```text
アカウント・コンテナへのユーザーアクセスを作成します。emailAddress、accountAccess（permission: noAccess/user/admin）、containerAccess（containerIdとpermission: noAccess/read/edit/approve/publish）を指定します。
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L146-L187) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "emailAddress": {
      "type": "string",
      "description": "ユーザーのメールアドレス"
    },
    "accountAccess": {
      "type": "object",
      "description": "アカウント権限",
      "properties": {
        "permission": {
          "type": "string",
          "enum": [
            "noAccess",
            "user",
            "admin"
          ],
          "description": "noAccess / user / admin"
        }
      }
    },
    "containerAccess": {
      "type": "array",
      "description": "コンテナごとの権限",
      "items": {
        "type": "object",
        "properties": {
          "containerId": {
            "type": "string"
          },
          "permission": {
            "type": "string",
            "enum": [
              "noAccess",
              "read",
              "edit",
              "approve",
              "publish"
            ]
          }
        }
      }
    }
  },
  "required": [
    "accountId",
    "emailAddress",
    "accountAccess"
  ]
}
```

</details>

<a id="tool-update_user_permission-0063613f"></a>

## update_user_permission

Handler: Updates GTM user permission through the authenticated Google Tag Manager v2 client.

```text
ユーザー権限を更新します（accountAccess、containerAccessを指定）
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L189-L218) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "userPermissionId": {
      "type": "string"
    },
    "accountAccess": {
      "type": "object",
      "properties": {
        "permission": {
          "type": "string",
          "enum": [
            "noAccess",
            "user",
            "admin"
          ]
        }
      }
    },
    "containerAccess": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "containerId": {
            "type": "string"
          },
          "permission": {
            "type": "string",
            "enum": [
              "noAccess",
              "read",
              "edit",
              "approve",
              "publish"
            ]
          }
        }
      }
    }
  },
  "required": [
    "accountId",
    "userPermissionId"
  ]
}
```

</details>

<a id="tool-delete_user_permission-15a81315"></a>

## delete_user_permission

Handler: Deletes GTM user permission through the authenticated Google Tag Manager v2 client.

```text
ユーザー権限を削除し、アカウントへのアクセスを取り消します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L220-L230) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string"
    },
    "userPermissionId": {
      "type": "string"
    }
  },
  "required": [
    "accountId",
    "userPermissionId"
  ]
}
```

</details>

<a id="tool-list_containers-a53dbc4d"></a>

## list_containers

Handler: Lists GTM containers through the authenticated Google Tag Manager v2 client.

```text
指定されたアカウントのコンテナ一覧を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L232-L244) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    }
  },
  "required": [
    "accountId"
  ]
}
```

</details>

<a id="tool-get_container-9a0808eb"></a>

## get_container

Handler: Fetches GTM container through the authenticated Google Tag Manager v2 client.

```text
指定されたコンテナの詳細を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L246-L262) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
}
```

</details>

<a id="tool-create_container-352b1505"></a>

## create_container

Handler: Creates GTM container through the authenticated Google Tag Manager v2 client.

```text
新しいコンテナを作成します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L264-L288) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "name": {
      "type": "string",
      "description": "コンテナ名"
    },
    "usageContext": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "web",
          "android",
          "ios",
          "amp"
        ]
      },
      "description": "使用コンテキスト（例: [\"web\"]）"
    }
  },
  "required": [
    "accountId",
    "name",
    "usageContext"
  ]
}
```

</details>

<a id="tool-update_container-cacd7302"></a>

## update_container

Handler: Fetches the container fingerprint, then updates its name using the supplied or fetched fingerprint.

```text
コンテナ情報を更新します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L290-L314) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "name": {
      "type": "string",
      "description": "新しいコンテナ名"
    },
    "fingerprint": {
      "type": "string",
      "description": "フィンガープリント（既存のコンテナを取得して取得）"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "name",
    "fingerprint"
  ]
}
```

</details>

<a id="tool-delete_container-a8bba20f"></a>

## delete_container

Handler: Deletes GTM container through the authenticated Google Tag Manager v2 client.

```text
コンテナを削除します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L316-L332) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
}
```

</details>

<a id="tool-list_workspaces-af844119"></a>

## list_workspaces

Handler: Lists GTM workspaces through the authenticated Google Tag Manager v2 client.

```text
指定されたコンテナのワークスペース一覧を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L334-L350) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
}
```

</details>

<a id="tool-get_workspace-80ffee6a"></a>

## get_workspace

Handler: Fetches GTM workspace through the authenticated Google Tag Manager v2 client.

```text
指定されたワークスペースの詳細を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L352-L372) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
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

<a id="tool-get_workspace_status-23f21bb9"></a>

## get_workspace_status

Handler: Calls GTM workspace getStatus to return changes and merge conflicts.

```text
ワークスペースのステータスを取得します。ベースバージョンからの変更エンティティ（workspaceChange）とマージコンフリクト（mergeConflict）を返します。承認レビュー前の確認に利用できます。
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L374-L394) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
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

<a id="tool-get_workspace_review_info-48dd81e9"></a>

## get_workspace_review_info

Handler: Combines workspace metadata and status with a change summary, but reads paths directly from change entities rather than their nested resources.

```text
承認レビュー用にワークスペースの変更サマリと参考情報をまとめて取得します。ワークスペース名・変更対象（タグ/トリガー/変数等）の集計・マージコンフリクトの有無・レビュー用メモを返します。承認依頼を受けた際の判断材料として利用できます。
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L396-L416) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
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

<a id="tool-create_workspace-a1af8425"></a>

## create_workspace

Handler: Creates GTM workspace through the authenticated Google Tag Manager v2 client.

```text
新しいワークスペースを作成します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L418-L442) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "name": {
      "type": "string",
      "description": "ワークスペース名"
    },
    "description": {
      "type": "string",
      "description": "ワークスペースの説明"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "name"
  ]
}
```

</details>

<a id="tool-update_workspace-1a76edb7"></a>

## update_workspace

Handler: Fetches the workspace fingerprint, then updates its name and description.

```text
ワークスペース情報を更新します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L444-L476) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "name": {
      "type": "string",
      "description": "新しいワークスペース名"
    },
    "description": {
      "type": "string",
      "description": "ワークスペースの説明"
    },
    "fingerprint": {
      "type": "string",
      "description": "フィンガープリント（既存のワークスペースを取得して取得）"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "fingerprint"
  ]
}
```

</details>

<a id="tool-delete_workspace-50bbbf2e"></a>

## delete_workspace

Handler: Deletes GTM workspace through the authenticated Google Tag Manager v2 client.

```text
ワークスペースを削除します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L478-L498) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
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

<a id="tool-sync_workspace-4b02a6d9"></a>

## sync_workspace

Handler: Calls GTM workspace sync and returns the synchronization result.

```text
ワークスペースを同期します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L500-L520) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
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

<a id="tool-quick_preview-3dec8646"></a>

## quick_preview

Handler: Calls the GTM workspace quick\_preview endpoint and returns preview data.

```text
ワークスペースのクイックプレビューを取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L522-L542) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
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

<a id="tool-list_tags-86fc0f9c"></a>

## list_tags

Handler: Lists GTM tags through the authenticated Google Tag Manager v2 client.

```text
指定されたワークスペースのタグ一覧を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L544-L564) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
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

<a id="tool-get_tag-749bab4b"></a>

## get_tag

Handler: Fetches GTM tag through the authenticated Google Tag Manager v2 client.

```text
指定されたタグの詳細を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L566-L590) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "tagId": {
      "type": "string",
      "description": "タグID"
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

<a id="tool-create_tag-e71dcc44"></a>

## create_tag

Handler: Creates a GTM tag with parameters and firing trigger IDs, defaulting tagFiringOption to oncePerEvent.

```text
新しいタグを作成します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L592-L653) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "name": {
      "type": "string",
      "description": "タグ名"
    },
    "type": {
      "type": "string",
      "description": "タグタイプ（例: \"googtag\"=GA4設定, \"gaawe\"=GA4イベント, \"awct\"=Google広告コンバージョン, \"html\"=カスタムHTML, \"img\"=カスタム画像, \"fbq\"=Facebookピクセル, \"ua\"=Universal Analyticsなど）"
    },
    "parameter": {
      "type": "array",
      "description": "タグのパラメータ配列",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "description": "パラメータタイプ"
          },
          "key": {
            "type": "string",
            "description": "パラメータキー"
          },
          "value": {
            "type": "string",
            "description": "パラメータ値"
          }
        }
      }
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "発火トリガーIDの配列"
    },
    "tagFiringOption": {
      "type": "string",
      "enum": [
        "unlimited",
        "oncePerEvent",
        "oncePerLoad"
      ],
      "description": "タグの呼び出しオプション。未指定時は UI デフォルト相当の oncePerEvent を設定する（省略すると API 上ブランクになり unlimited 相当の挙動になるため）"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ]
}
```

</details>

<a id="tool-update_tag-ff9e7962"></a>

## update_tag

Handler: Fetches the existing tag, merges exposed fields, preserves selected metadata and fingerprint, and updates it.

```text
既存のタグを更新します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L655-L703) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "tagId": {
      "type": "string",
      "description": "タグID"
    },
    "name": {
      "type": "string",
      "description": "タグ名"
    },
    "type": {
      "type": "string",
      "description": "タグタイプ"
    },
    "parameter": {
      "type": "array",
      "description": "タグのパラメータ配列"
    },
    "firingTriggerId": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "発火トリガーIDの配列"
    },
    "tagFiringOption": {
      "type": "string",
      "enum": [
        "unlimited",
        "oncePerEvent",
        "oncePerLoad"
      ],
      "description": "タグの呼び出しオプション。未指定時は既存値を維持し、既存もブランクなら oncePerEvent を補完する"
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

<a id="tool-delete_tag-1345d160"></a>

## delete_tag

Handler: Deletes GTM tag through the authenticated Google Tag Manager v2 client.

```text
タグを削除します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L705-L729) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "tagId": {
      "type": "string",
      "description": "タグID"
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

<a id="tool-list_triggers-4ca44d74"></a>

## list_triggers

Handler: Lists GTM triggers through the authenticated Google Tag Manager v2 client.

```text
指定されたワークスペースのトリガー一覧を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L731-L751) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
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

<a id="tool-get_trigger-e2f13ee6"></a>

## get_trigger

Handler: Fetches GTM trigger through the authenticated Google Tag Manager v2 client.

```text
指定されたトリガーの詳細を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L753-L777) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "triggerId": {
      "type": "string",
      "description": "トリガーID"
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

<a id="tool-update_trigger-60ddeb77"></a>

## update_trigger

Handler: Fetches the existing trigger, merges filters and type-specific parameters, preserves the fingerprint, then updates it.

```text
既存のトリガーを更新します。filter、autoEventFilter、waitForTagsなどのすべての設定を更新できます。
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L779-L904) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "triggerId": {
      "type": "string",
      "description": "トリガーID"
    },
    "name": {
      "type": "string",
      "description": "トリガー名"
    },
    "type": {
      "type": "string",
      "description": "トリガータイプ"
    },
    "customEventFilter": {
      "type": "array",
      "description": "カスタムイベントフィルタ（CUSTOM_EVENTタイプ用）"
    },
    "filter": {
      "type": "array",
      "description": "フィルタ（linkClick、clickなどのタイプ用）"
    },
    "autoEventFilter": {
      "type": "array",
      "description": "自動イベントフィルタ（linkClickタイプ用）"
    },
    "waitForTags": {
      "type": "boolean",
      "description": "タグの待機を有効化（linkClickタイプ用）"
    },
    "checkValidation": {
      "type": "boolean",
      "description": "バリデーションチェック（linkClickタイプ用）"
    },
    "waitForTagsTimeout": {
      "type": "number",
      "description": "タグ待機タイムアウト（ミリ秒、linkClickタイプ用）"
    },
    "formId": {
      "type": "string",
      "description": "フォームID（formSubmissionタイプ用）"
    },
    "formClasses": {
      "type": "string",
      "description": "フォームクラス（formSubmissionタイプ用）"
    },
    "verticalThreshold": {
      "type": "number",
      "description": "垂直スクロール閾値（パーセント、scrollDepthタイプ用）"
    },
    "horizontalThreshold": {
      "type": "number",
      "description": "水平スクロール閾値（パーセント、scrollDepthタイプ用）"
    },
    "selector": {
      "type": "string",
      "description": "CSSセレクタ（elementVisibilityタイプ用）"
    },
    "visiblePercentageThreshold": {
      "type": "number",
      "description": "表示割合閾値（パーセント、elementVisibilityタイプ用）"
    },
    "continuousTimeMinMilliseconds": {
      "type": "number",
      "description": "連続表示時間（ミリ秒、elementVisibilityタイプ用）"
    },
    "videoId": {
      "type": "string",
      "description": "YouTube動画ID（youtubeVideoタイプ用）"
    },
    "enableTriggerOnVideoStart": {
      "type": "boolean",
      "description": "動画開始時に発火（youtubeVideoタイプ用）"
    },
    "enableTriggerOnVideoProgress": {
      "type": "boolean",
      "description": "動画再生中に発火（youtubeVideoタイプ用）"
    },
    "enableTriggerOnVideoComplete": {
      "type": "boolean",
      "description": "動画完了時に発火（youtubeVideoタイプ用）"
    },
    "enableTriggerOnVideoPause": {
      "type": "boolean",
      "description": "動画一時停止時に発火（youtubeVideoタイプ用）"
    },
    "enableTriggerOnVideoSeek": {
      "type": "boolean",
      "description": "動画シーク時に発火（youtubeVideoタイプ用）"
    },
    "interval": {
      "type": "number",
      "description": "インターバル（ミリ秒、timerタイプ用）"
    },
    "limit": {
      "type": "number",
      "description": "発火回数の上限（timerタイプ用）"
    },
    "startTimerOn": {
      "type": "string",
      "description": "タイマー開始タイミング（timerタイプ用、例: \"windowLoad\", \"domReady\"）"
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

<a id="tool-delete_trigger-ec67de91"></a>

## delete_trigger

Handler: Deletes GTM trigger through the authenticated Google Tag Manager v2 client.

```text
トリガーを削除します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L906-L930) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "triggerId": {
      "type": "string",
      "description": "トリガーID"
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

<a id="tool-create_trigger-71660c93"></a>

## create_trigger

Handler: Builds filters and type-specific trigger parameters from inputs, then creates a GTM trigger.

```text
新しいトリガーを作成します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L932-L1053) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "name": {
      "type": "string",
      "description": "トリガー名"
    },
    "type": {
      "type": "string",
      "description": "トリガータイプ（例: \"PAGEVIEW\", \"CLICK\", \"CUSTOM_EVENT\", \"linkClick\"など）"
    },
    "customEventFilter": {
      "type": "array",
      "description": "カスタムイベントフィルタ（CUSTOM_EVENTタイプ用）"
    },
    "filter": {
      "type": "array",
      "description": "フィルタ（linkClick、clickなどのタイプ用）"
    },
    "autoEventFilter": {
      "type": "array",
      "description": "自動イベントフィルタ（linkClickタイプ用）"
    },
    "waitForTags": {
      "type": "boolean",
      "description": "タグの待機を有効化（linkClickタイプ用）"
    },
    "checkValidation": {
      "type": "boolean",
      "description": "バリデーションチェック（linkClickタイプ用）"
    },
    "waitForTagsTimeout": {
      "type": "number",
      "description": "タグ待機タイムアウト（ミリ秒、linkClickタイプ用）"
    },
    "formId": {
      "type": "string",
      "description": "フォームID（formSubmissionタイプ用）"
    },
    "formClasses": {
      "type": "string",
      "description": "フォームクラス（formSubmissionタイプ用）"
    },
    "verticalThreshold": {
      "type": "number",
      "description": "垂直スクロール閾値（パーセント、scrollDepthタイプ用）"
    },
    "horizontalThreshold": {
      "type": "number",
      "description": "水平スクロール閾値（パーセント、scrollDepthタイプ用）"
    },
    "selector": {
      "type": "string",
      "description": "CSSセレクタ（elementVisibilityタイプ用）"
    },
    "visiblePercentageThreshold": {
      "type": "number",
      "description": "表示割合閾値（パーセント、elementVisibilityタイプ用）"
    },
    "continuousTimeMinMilliseconds": {
      "type": "number",
      "description": "連続表示時間（ミリ秒、elementVisibilityタイプ用）"
    },
    "videoId": {
      "type": "string",
      "description": "YouTube動画ID（youtubeVideoタイプ用）"
    },
    "enableTriggerOnVideoStart": {
      "type": "boolean",
      "description": "動画開始時に発火（youtubeVideoタイプ用）"
    },
    "enableTriggerOnVideoProgress": {
      "type": "boolean",
      "description": "動画再生中に発火（youtubeVideoタイプ用）"
    },
    "enableTriggerOnVideoComplete": {
      "type": "boolean",
      "description": "動画完了時に発火（youtubeVideoタイプ用）"
    },
    "enableTriggerOnVideoPause": {
      "type": "boolean",
      "description": "動画一時停止時に発火（youtubeVideoタイプ用）"
    },
    "enableTriggerOnVideoSeek": {
      "type": "boolean",
      "description": "動画シーク時に発火（youtubeVideoタイプ用）"
    },
    "interval": {
      "type": "number",
      "description": "インターバル（ミリ秒、timerタイプ用）"
    },
    "limit": {
      "type": "number",
      "description": "発火回数の上限（timerタイプ用）"
    },
    "startTimerOn": {
      "type": "string",
      "description": "タイマー開始タイミング（timerタイプ用、例: \"windowLoad\", \"domReady\"）"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ]
}
```

</details>

<a id="tool-list_variables-1adaa2a1"></a>

## list_variables

Handler: Lists GTM variables through the authenticated Google Tag Manager v2 client.

```text
指定されたワークスペースの変数一覧を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L1055-L1075) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
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

<a id="tool-get_variable-ba0cd778"></a>

## get_variable

Handler: Fetches GTM variable through the authenticated Google Tag Manager v2 client.

```text
指定された変数の詳細を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L1077-L1101) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "variableId": {
      "type": "string",
      "description": "変数ID"
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

<a id="tool-create_variable-2f5e4ddb"></a>

## create_variable

Handler: Creates GTM variable through the authenticated Google Tag Manager v2 client.

```text
新しい変数を作成します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L1103-L1135) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "name": {
      "type": "string",
      "description": "変数名"
    },
    "type": {
      "type": "string",
      "description": "変数タイプ（例: \"c\"=定数, \"v\"=データレイヤー, \"j\"=JavaScript, \"d\"=DOM要素, \"k\"=Cookie, \"u\"=URL, \"ae\"=自動イベント, \"b\"=組み込み変数など）"
    },
    "parameter": {
      "type": "array",
      "description": "変数のパラメータ配列。タイプに応じて必要なパラメータを設定してください。"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "workspaceId",
    "name",
    "type"
  ]
}
```

</details>

<a id="tool-update_variable-63c48ad7"></a>

## update_variable

Handler: Fetches the existing variable, merges exposed fields and fingerprint, then updates it.

```text
既存の変数を更新します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L1137-L1173) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "variableId": {
      "type": "string",
      "description": "変数ID"
    },
    "name": {
      "type": "string",
      "description": "変数名"
    },
    "type": {
      "type": "string",
      "description": "変数タイプ"
    },
    "parameter": {
      "type": "array",
      "description": "変数のパラメータ配列"
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

<a id="tool-delete_variable-3ead6fdb"></a>

## delete_variable

Handler: Deletes GTM variable through the authenticated Google Tag Manager v2 client.

```text
変数を削除します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L1175-L1199) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "variableId": {
      "type": "string",
      "description": "変数ID"
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

<a id="tool-create_version-fc39e936"></a>

## create_version

Handler: Calls GTM workspace create\_version with optional name and notes.

```text
ワークスペースの変更をバージョンとして作成（公開準備）します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L1201-L1229) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "workspaceId": {
      "type": "string",
      "description": "ワークスペースID"
    },
    "name": {
      "type": "string",
      "description": "バージョン名（オプション）"
    },
    "notes": {
      "type": "string",
      "description": "バージョンノート（オプション）"
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

<a id="tool-list_versions-3eb8d6c0"></a>

## list_versions

Handler: Attempts containers.versions.list and reads containerVersion; the GTM v2 version listing resource is version\_headers, so this handler needs correction.

```text
コンテナのバージョン一覧を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L1231-L1247) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    }
  },
  "required": [
    "accountId",
    "containerId"
  ]
}
```

</details>

<a id="tool-get_version-e67e6685"></a>

## get_version

Handler: Fetches GTM version through the authenticated Google Tag Manager v2 client.

```text
指定されたバージョンの詳細を取得します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L1249-L1269) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "versionId": {
      "type": "string",
      "description": "バージョンID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId"
  ]
}
```

</details>

<a id="tool-publish_version-0628e4c5"></a>

## publish_version

Handler: Calls GTM container versions.publish to publish the specified version.

```text
バージョンを公開します
```

[Source](https://github.com/ambit1977/GTM-MCP/blob/6d9b0a35f75378dcd034689142864cb07a4aba14/src/index.js#L1271-L1292) · Schema: literal-source.

<details>
<summary>Full input parameters</summary>

```json
{
  "type": "object",
  "properties": {
    "accountId": {
      "type": "string",
      "description": "アカウントID"
    },
    "containerId": {
      "type": "string",
      "description": "コンテナID"
    },
    "versionId": {
      "type": "string",
      "description": "バージョンID"
    }
  },
  "required": [
    "accountId",
    "containerId",
    "versionId"
  ]
}
```

</details>
