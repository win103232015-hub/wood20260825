---
name: dual_token_auth
description: 雙 Token (Access Token 15m Pinia / Refresh Token 7d HttpOnly Cookie) 與 Axios 401 無感續簽開發 SOP。
---

# 🔑 雙 Token 驗證與 Axios 無感續簽 SOP (SKILL)

本技能規範前後端實施 15 分鐘 Access Token 與 7 天 Refresh Token 的全流程實作細節。

## 1. 後端 Auth 邏輯 (`back/src/controllers/auth.ts`)
1. **登入發牌**：
   - 驗證成功後產出 `accessToken` (效期 15m) 回傳至 JSON body。
   - 產出 `refreshToken` (效期 7d)，寫入 Cookie:
     ```javascript
     res.cookie('refreshToken', refreshToken, {
       httpOnly: true,
       secure: process.env.NODE_ENV === 'production',
       sameSite: 'strict',
       maxAge: 7 * 24 * 60 * 60 * 1000
     });
     ```
2. **`/api/auth/refresh` 端點**：
   - 從 `req.cookies.refreshToken` 讀取 Token 並進行 jwt.verify。
   - 若有效，回傳全新 `accessToken`。若無效或過期，清除 Cookie 並回傳 401。

## 2. 前端 Pinia 與 Axios 無感續簽 (`vuetify-project/src/api/axios.ts`)
1. **Pinia 狀態**：`authStore.accessToken` 保存在記憶體中，絕不存於 localStorage。
2. **Axios Response Interceptor**：
   ```typescript
   axiosInstance.interceptors.response.use(
     response => response,
     async error => {
       const originalRequest = error.config;
       if (error.response?.status === 401 && !originalRequest._retry) {
         originalRequest._retry = true;
         try {
           const res = await axios.post('/api/auth/refresh', {}, { withCredentials: true });
           const newAccessToken = res.data.accessToken;
           authStore.setAccessToken(newAccessToken);
           originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
           return axiosInstance(originalRequest);
         } catch (refreshError) {
           authStore.logout();
           window.location.href = '/login';
           return Promise.reject(refreshError);
         }
       }
       return Promise.reject(error);
     }
   );
   ```
