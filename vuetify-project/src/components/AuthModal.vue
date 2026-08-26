<template>
  <v-dialog v-model="internalModel" max-width="500">
    <v-card class="pa-4 rounded-lg">
      <v-card-title class="text-h5 font-weight-bold text-primary">
        {{ tab === 'login' ? '買家 / 職人登入' : tab === 'register' ? '註冊新帳號' : '申請轉為職人' }}
      </v-card-title>

      <v-tabs v-model="tab" color="primary" class="mb-4">
        <v-tab value="login">登入</v-tab>
        <v-tab value="register">註冊</v-tab>
        <v-tab value="artisan">轉職人申請</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <!-- 登入 Tab -->
          <v-window-item value="login">
            <v-text-field v-model="loginEmail" label="Email" variant="outlined" density="compact"></v-text-field>
            <v-text-field v-model="loginPassword" label="密碼" type="password" variant="outlined" density="compact"></v-text-field>
            <v-btn color="primary" block class="mt-3 font-weight-bold" @click="handleLogin">登入系統</v-btn>
          </v-window-item>

          <!-- 註冊 Tab -->
          <v-window-item value="register">
            <v-text-field v-model="regEmail" label="Email" variant="outlined" density="compact"></v-text-field>
            <v-text-field v-model="regPassword" label="設定密碼" type="password" variant="outlined" density="compact"></v-text-field>
            <v-btn color="primary" block class="mt-3 font-weight-bold" @click="handleRegister">註冊帳號</v-btn>
          </v-window-item>

          <!-- 轉職人申請 Tab (包含品牌簡介與代表作品圖) -->
          <v-window-item value="artisan">
            <div class="text-caption text-neutral mb-2">
              買家申請轉為職人時，須填寫「品牌簡介」並提交代表作品，送出後進入管理員待審核佇列。
            </div>
            <v-textarea v-model="brandBio" label="品牌簡介與手作經驗" rows="3" variant="outlined" density="compact"></v-textarea>
            <v-text-field v-model="portfolioUrl" label="代表作品圖片 URL" variant="outlined" density="compact" hint="多張請用逗號隔開"></v-text-field>
            <v-btn color="accent" block class="mt-3 text-neutral font-weight-bold" @click="handleApplyArtisan">
              提交轉職人申請 (進入待審佇列)
            </v-btn>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useAuthStore } from '../stores/auth';

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(['update:modelValue']);

const authStore = useAuthStore();
const tab = ref('login');

const loginEmail = ref('');
const loginPassword = ref('');
const regEmail = ref('');
const regPassword = ref('');
const brandBio = ref('');
const portfolioUrl = ref('');

const internalModel = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const handleLogin = async () => {
  try {
    // 模擬登入成功
    authStore.setAuth(
      { id: 'user_123', email: loginEmail.value, role: 'buyer' },
      'mock_access_token_15m'
    );
    alert('登入成功！(雙 Token 機制運作中)');
    internalModel.value = false;
  } catch (err: any) {
    alert(err.response?.data?.message || '登入失敗');
  }
};

const handleRegister = async () => {
  alert('註冊成功！請直接登入。');
  tab.value = 'login';
};

const handleApplyArtisan = async () => {
  if (!brandBio.value) {
    alert('請填寫品牌簡介！');
    return;
  }
  const images = portfolioUrl.value ? portfolioUrl.value.split(',') : ['https://images.unsplash.com/photo-1546484475-7f7bd55792da'];
  await authStore.applyForArtisan(brandBio.value, images);
  alert('職人轉職申請已成功提交！目前已進入管理員待審核佇列。');
  internalModel.value = false;
};
</script>
