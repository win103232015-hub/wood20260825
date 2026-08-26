---
name: express_api_dev
description: Express API 與 Passport.js 驗證開發 SOP，包含 Controller、Router、Mongoose Schema 與錯誤處理規範。
---

# Express API 與 Passport.js 驗證開發 SOP (`express_api_dev`)

本技能定義了後端 Express.js API、Passport.js 身份驗證與 Mongoose 資料庫操作的標準開發流程。

---

## 1. 職責與角色
- **主要執行者**：後端開發工程師 (`backend_developer`)
- **輔助審查者**：資料庫架構師 (`database_architect`)、程式碼審查員 (`code_reviewer`)

---

## 2. 標準開發流程 (Workflow)

1. **確認 API 需求與 DTO**：
   - 確認請求路徑 (Endpoint)、HTTP Method (GET, POST, PUT, DELETE)。
   - 定義 Request Body / Query 格式與 Response Payload 結構。

2. **建立/更新 Mongoose Schema**：
   - 檢查是否需要新增或修改 `back/models/` 檔案。
   - 務必標明型別、是否 Required、預設值及必要索引 (Index)。

3. **設計 Middleware & 驗證**：
   - 身份認證：使用 `passport.authenticate('jwt', { session: false })` 保護需要權限的路由。
   - 角色權限：檢查 `req.user.role` 是否符合要求（如 admin）。

4. **撰寫 Controller 邏輯**：
   - 保持 Controller 乾淨，業務邏輯導向。
   - 使用 `try-catch` 包裹非同步操作，統一使用標準 HTTP 狀態碼回傳：
     - `200`: 成功
     - `201`: 建立成功
     - `400`: 請求參數錯誤 (Bad Request)
     - `401`: 未授權 / 登入過期 (Unauthorized)
     - `403`: 權限不足 (Forbidden)
     - `404`: 找不到資源 (Not Found)
     - `500`: 伺服器內部錯誤 (Internal Server Error)

5. **註冊 Router**：
   - 在 `back/routes/` 模組中匯出路由，並掛載至主 APP。

---

## 3. 代碼範本 (Templates)

### A. Mongoose Model 範本 (`back/models/example.js`)
```javascript
import { Schema, model } from 'mongoose'

const exampleSchema = new Schema({
  name: {
    type: String,
    required: [true, '請輸入名稱'],
    trim: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: [true, '請提供建立者 ID']
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('examples', exampleSchema)
```

### B. Controller 範本 (`back/controllers/example.js`)
```javascript
import Example from '../models/example.js'

export const create = async (req, res) => {
  try {
    const result = await Example.create({
      ...req.body,
      user: req.user._id
    })
    res.status(201).json({
      success: true,
      message: '建立成功',
      result
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const key = Object.keys(error.errors)[0]
      return res.status(400).json({
        success: false,
        message: error.errors[key].message
      })
    }
    res.status(500).json({
      success: false,
      message: '伺服器內部錯誤'
    })
  }
}
```

### C. Router 範本 (`back/routes/example.js`)
```javascript
import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import { create } from '../controllers/example.js'

const router = Router()

router.post('/', auth.jwt, create)

export default router
```

---

## 4. 檢核清單 (Checklist)
- [ ] 是否已套用 `passport` JWT 認證中間件？
- [ ] 密碼或敏感資料是否已在 Model 層排除或進行 Hash 處理？
- [ ] 所有非同步 `await` 是否都有適當的錯誤捕捉 (`try-catch`)？
- [ ] 回傳格式是否符合前後端約定的 JSON 規範 (`{ success: boolean, message: string, result?: any }`)？
