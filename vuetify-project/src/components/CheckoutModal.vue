<template>
  <v-dialog v-model="internalModel" max-width="650" persistent>
    <v-card class="pa-4 rounded-lg bg-secondary border">
      <v-card-title class="calligraphy-title text-h4 font-weight-bold text-primary d-flex align-center justify-space-between">
        <span class="d-flex align-center">
          <v-icon color="accent" class="mr-2">mdi-receipt-text-check</v-icon>
          木工訂單結帳與綠界金流
        </span>
        <v-btn icon="mdi-close" variant="text" @click="closeModal"></v-btn>
      </v-card-title>

      <v-divider class="my-3"></v-divider>

      <v-card-text v-if="product">
        <!-- 1. 訂單商品與帳單明細 -->
        <div class="pa-4 bg-white rounded-lg border mb-4">
          <div class="calligraphy-title text-h6 font-weight-bold text-primary mb-2">📦 購物帳單明細 (Invoice Details)</div>
          
          <div class="d-flex align-center mb-3">
            <v-img :src="product.images.primary" width="80" height="80" cover class="rounded mr-3"></v-img>
            <div>
              <div class="font-weight-bold text-subtitle-1 text-neutral">{{ product.title }}</div>
              <div class="text-caption text-grey-darken-2">
                銷售屬性：
                <v-chip size="x-small" color="accent" label class="font-weight-bold text-neutral">
                  {{ product.saleType }}
                </v-chip>
              </div>
              <div class="text-caption text-primary">單價：NT$ {{ product.price.toLocaleString() }} $\times$ 1</div>
            </div>
          </div>

          <v-divider class="my-2"></v-divider>

          <div class="d-flex justify-space-between text-body-2 mb-1">
            <span>商品小計：</span>
            <span>NT$ {{ product.price.toLocaleString() }}</span>
          </div>
          <div class="d-flex justify-space-between text-body-2 mb-1">
            <span>大榮貨運 (Kerry TJ) 專車運費：</span>
            <span class="text-success font-weight-bold">+ NT$ 150</span>
          </div>
          <v-divider class="my-2"></v-divider>
          <div class="d-flex justify-space-between text-h6 font-weight-bold text-primary">
            <span>應付總金額：</span>
            <span class="calligraphy-title text-h5 text-primary">NT$ {{ (product.price + 150).toLocaleString() }}</span>
          </div>
        </div>

        <!-- 2. 選擇金流支付方式 -->
        <div class="pa-4 bg-white rounded-lg border mb-4">
          <div class="calligraphy-title text-h6 font-weight-bold text-primary mb-2">💳 選擇金流支付方式</div>
          
          <v-radio-group v-model="paymentMethod" hide-details class="mt-1">
            <v-radio value="ecpay" color="primary">
              <template #label>
                <div class="d-flex align-center">
                  <v-chip color="success" size="small" class="mr-2 font-weight-bold">綠界 ECPay</v-chip>
                  <span class="font-weight-bold">綠界線上刷卡 / ATM轉帳 / 超商條碼 (自動開立綠界電子發票)</span>
                </div>
              </template>
            </v-radio>
            
            <v-radio value="cod" color="primary" class="mt-2">
              <template #label>
                <div class="d-flex align-center">
                  <v-chip color="primary" size="small" class="mr-2 font-weight-bold">貨到付款</v-chip>
                  <span>大榮貨運專車配送 (現場驗收後付款)</span>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
        </div>

        <!-- 3. 發票資訊 -->
        <div class="pa-4 bg-white rounded-lg border">
          <div class="calligraphy-title text-h6 font-weight-bold text-primary mb-2">🧾 電子發票與收件備註</div>
          <v-text-field v-model="buyerEmail" label="買家 Email (接收綠界電子發票)" variant="outlined" density="compact"></v-text-field>
          <v-text-field v-model="shippingNote" label="配送特殊備註 (如：大樓有無電梯、希望送達時段)" variant="outlined" density="compact"></v-text-field>
        </div>
      </v-card-text>

      <v-card-actions class="justify-end pt-3">
        <v-btn variant="outlined" color="neutral" class="font-weight-bold" @click="closeModal">取消</v-btn>

        <!-- 若選綠界，觸發綠界 SDK 表單導向 -->
        <v-btn
          v-if="paymentMethod === 'ecpay'"
          color="success"
          size="large"
          class="font-weight-bold text-white"
          :loading="loading"
          @click="checkoutECPay"
        >
          <v-icon start>mdi-credit-card-outline</v-icon>
          前往綠界 (ECPay) 安全刷卡頁面
        </v-btn>

        <!-- 一般建立訂單 -->
        <v-btn
          v-else
          color="accent"
          size="large"
          class="font-weight-bold text-neutral"
          :loading="loading"
          @click="checkoutDirect"
        >
          <v-icon start>mdi-check-circle-outline</v-icon>
          確認下單並開立帳單
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import api from '../api/axios';

const props = defineProps<{
  modelValue: boolean;
  product: any;
}>();

const emit = defineEmits(['update:modelValue', 'order-success']);

const paymentMethod = ref('ecpay');
const buyerEmail = ref('buyer@woodwork.com');
const shippingNote = ref('');
const loading = ref(false);

const internalModel = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const closeModal = () => {
  internalModel.value = false;
};

// 綠界金流 SDK 重定向
const checkoutECPay = async () => {
  loading.value = true;
  try {
    const totalAmount = props.product.price + 150;
    const res = await api.post('/payments/ecpay/checkout', {
      orderId: `ORD${Date.now()}`,
      totalAmount,
      itemTitle: props.product.title,
    });

    // 綠界會回傳 HTML auto-submit form，新開視窗或寫入 document
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.write(res.data);
      newWindow.document.close();
    } else {
      alert('請允許開啟彈出視窗以進入綠界支付頁面！');
    }
    emit('order-success');
    closeModal();
  } catch (err: any) {
    alert('綠界金流呼叫失敗：' + (err.response?.data?.message || err.message));
  } finally {
    loading.value = false;
  }
};

// 一般直接建立訂單寫入 MongoDB
const checkoutDirect = async () => {
  loading.value = true;
  try {
    const totalAmount = props.product.price + 150;
    await api.post('/orders', {
      buyerEmail: buyerEmail.value,
      productId: props.product._id,
      productTitle: props.product.title,
      quantity: 1,
      totalPrice: totalAmount,
      shippingOption: '大榮貨運',
      shippingNote: shippingNote.value || '標準專車配送',
    });

    alert(`🎉 帳單建立成功！已開立綠界電子發票明細並寫入 MongoDB Atlas 雲端資料庫！`);
    emit('order-success');
    closeModal();
  } catch (err: any) {
    alert('訂單建立失敗：' + (err.response?.data?.message || err.message));
  } finally {
    loading.value = false;
  }
};
</script>
