<template>
  <v-dialog v-model="internalModel" max-width="550" persistent>
    <v-card class="woodwork-dialog pa-4">
      <v-card-title class="text-h5 font-weight-bold text-primary d-flex align-center">
        <v-icon color="accent" class="mr-2">mdi-shield-check-outline</v-icon>
        確認您的木工訂單
      </v-card-title>

      <v-divider class="my-3"></v-divider>

      <v-card-text class="text-neutral">
        <div class="d-flex align-center mb-4 pa-2 rounded bg-secondary">
          <v-img :src="productPrimaryImage" width="70" height="70" cover class="rounded mr-3"></v-img>
          <div>
            <div class="font-weight-bold text-subtitle-1">{{ productTitle }}</div>
            <div class="text-caption text-grey-darken-1">數量：{{ quantity }} 件</div>
            <div class="text-subtitle-2 text-primary font-weight-bold">小計：NT$ {{ totalPrice.toLocaleString() }}</div>
          </div>
        </div>

        <!-- 木工特殊運送備註警示區 -->
        <v-alert
          type="info"
          variant="tonal"
          color="primary"
          icon="mdi-truck-cargo-container"
          class="mb-3"
          title="木工特殊運送備註"
        >
          {{ shippingNote || '本作品涉及天然實木結構，大型家具預設採大榮貨運專車配送。拆封請全程錄影檢查。' }}
        </v-alert>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn variant="outlined" color="neutral" @click="cancel">返回修改</v-btn>
        <v-btn color="accent" variant="elevated" class="text-neutral font-weight-bold" :loading="loading" @click="confirm">
          確認付款 / 下單
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: boolean;
  productTitle: string;
  productPrimaryImage: string;
  quantity: number;
  totalPrice: number;
  shippingNote?: string;
  loading?: boolean;
}>();

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel']);

const internalModel = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const cancel = () => {
  emit('cancel');
  internalModel.value = false;
};

const confirm = () => {
  emit('confirm');
};
</script>

<style scoped>
.woodwork-dialog {
  border: 1px solid #E8E2D8;
  border-radius: 12px;
}
</style>
