---
name: generate_api_docs
description: 產生 API 說明文件
---

# 產生 API 文件技能

當你需要為後端的 Express 路由產生 API 文件時，請遵循以下格式輸出：

```markdown
### [METHOD] /api/path/to/endpoint

**描述**：簡短說明此 API 的用途。

**需要授權 (Auth Required)**：Yes / No (標明使用的 Strategy，如 JWT)

**請求參數 (Request Body / Query / Params)**：
| 欄位名稱 | 型別 | 必填 | 說明 |
| -------- | ---- | ---- | ---- |
| field    | type | Y/N  | ...  |

**成功回應 (200 OK / 201 Created)**：
\`\`\`json
{
  "success": true,
  "message": "",
  "result": {}
}
\`\`\`

**錯誤回應 (400 / 401 / 403 / 500)**：
說明何種情況會觸發何種錯誤碼。
```

請掃描 `back/src/controllers/` 與 `back/src/routes/` 的程式碼來產生精確的文件。
