---
name: vue_component_dev
description: Vue 3 與 Vuetify 4 元件開發
---

# Vue 元件開發技能

當你需要開發新的 Vue 元件時，請遵循以下最佳實踐：

1. **檔案結構**：
   ```vue
   <template>
     <!-- Vuetify 元件 -->
   </template>

   <script setup lang="ts">
     // imports
     // props & emits
     // state & computed
     // methods
   </script>

   <style scoped>
     /* 盡量少用，優先使用 Vuetify CSS utility classes */
   </style>
   ```

2. **開發指引**：
   * Props 必須定義明確的型別（使用 `defineProps<{}>()`）。
   * 事件傳遞使用 `defineEmits<{}>()`。
   * 表單綁定優先使用 `v-model`。
   * 請將可重複使用的邏輯抽離到 `utils/` 或以 Composables (`useXxx`) 的形式存在。
