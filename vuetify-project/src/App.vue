<template>
  <v-app class="bg-secondary">
    <!-- 頂部導覽列 -->
    <v-app-bar flat color="primary" class="px-4">
      <v-app-bar-title class="calligraphy-title text-h5 font-weight-bold text-white d-flex align-center">
        <v-icon icon="mdi-tree" class="mr-2" color="accent"></v-icon>
        匠心木藝 ｜ Woodcraft Studio
      </v-app-bar-title>

      <!-- 全站關鍵字搜尋框 -->
      <v-text-field
        v-model="searchKeyword"
        placeholder="搜尋作品名稱 (如：茶盤、邊桌、檜木)..."
        variant="solo-filled"
        density="compact"
        hide-details
        prepend-inner-icon="mdi-magnify"
        class="mx-4 max-w-sm"
        @update:model-value="fetchProducts"
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn variant="text" color="white" class="font-weight-bold" @click="scrollToSection('artisan-section')">當週主打職人</v-btn>
      <v-btn variant="text" color="white" class="font-weight-bold" @click="scrollToSection('products-section')">精選作品庫</v-btn>
      <v-btn variant="text" color="white" class="font-weight-bold" @click="showOrdersModal = true">
        <v-badge :content="ordersList.length" color="accent" class="mr-1">
          <v-icon>mdi-receipt-text-outline</v-icon>
        </v-badge>
        我的帳單與訂單
      </v-btn>
      <v-btn variant="text" color="amber-lighten-4" class="font-weight-bold" @click="showDisputeModal = true">
        <v-icon start>mdi-gavel</v-icon>
        爭議處理中心
      </v-btn>

      <template v-if="!authStore.isAuthenticated">
        <v-btn color="accent" variant="flat" class="text-neutral font-weight-bold ml-2" @click="showAuthModal = true">
          職人登入 / 申請
        </v-btn>
      </template>
      <template v-else>
        <v-chip color="accent" class="ml-2 font-weight-bold text-neutral">
          {{ authStore.user?.email }} ({{ authStore.user?.role === 'artisan' ? '職人' : authStore.user?.role === 'admin' ? '管理者' : '買家' }})
        </v-chip>
        <v-btn variant="text" color="white" @click="authStore.logout">登出</v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container class="py-8">
        <!-- Hero Banner Section -->
        <v-card color="primary" class="pa-8 text-white rounded-lg mb-8 shadow-wood" elevation="3">
          <v-row align="center">
            <v-col cols="12" md="8">
              <div class="calligraphy-title text-h3 font-weight-bold mb-3" style="line-height: 1.3;">
                傳承木藝溫潤 ✕ 打造獨一無二的生活美學
              </div>
              <div class="text-subtitle-1 text-amber-lighten-5 mb-5 font-weight-bold">
                匯聚臺灣頂級木工職人，精選檜木、胡桃木與天然油裝作品。已整合綠界 (ECPay) 金流與大榮貨運！
              </div>
              <v-btn color="accent" size="x-large" class="text-neutral font-weight-bold" @click="showAuthModal = true">
                <v-icon start>mdi-brush</v-icon>
                申請成為合作職人
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <!-- 當週主打職人專區 (含真實職人寫真照) -->
        <div id="artisan-section" class="mb-10">
          <div class="d-flex align-center mb-4">
            <v-icon color="accent" size="large" class="mr-2">mdi-account-star</v-icon>
            <div class="calligraphy-title text-h4 font-weight-bold text-primary">當週主打職人專區 (Artisan Studio)</div>
          </div>

          <v-row>
            <v-col v-for="artisan in artisansList" :key="artisan._id" cols="12" md="4">
              <v-card class="pa-5 rounded-lg bg-white h-100 d-flex flex-column border shadow-wood" elevation="2">
                <div class="d-flex align-center mb-3">
                  <!-- 職人個人擬真寫真大頭照 -->
                  <v-avatar size="64" class="mr-3 border border-amber-darken-3">
                    <v-img
                      :src="artisan.artisanProfile?.portfolioImages?.[0] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300'"
                      cover
                    ></v-img>
                  </v-avatar>
                  <div>
                    <div class="font-weight-bold text-h6 text-neutral calligraphy-title">
                      {{ artisan.email.split('@')[0] }}
                    </div>
                    <v-chip size="small" color="accent" label class="font-weight-bold text-neutral">
                      <v-icon start size="x-small">mdi-seal-variant</v-icon>
                      匠人資歷 {{ artisan.artisanProfile?.experienceYears || 10 }} 年
                    </v-chip>
                  </div>
                </div>
                <div class="text-body-1 text-grey-darken-3 mb-4 flex-grow-1" style="line-height: 1.6;">
                  {{ artisan.artisanProfile?.brandBio }}
                </div>
                <v-btn color="primary" variant="outlined" block class="font-weight-bold">瀏覽該職人作品</v-btn>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- 多條件篩選器 -->
        <ProductFilterBar @filter-change="handleFilterChange" />

        <!-- 精選作品庫 (動態連線 MongoDB Atlas) -->
        <div id="products-section" class="mb-8">
          <div class="d-flex align-center justify-space-between mb-4">
            <div class="calligraphy-title text-h4 font-weight-bold text-primary">
              <v-icon color="primary" class="mr-2">mdi-storefront</v-icon>
              精選作品庫 (共 {{ productsList.length }} 件作品)
            </div>
            <v-progress-circular v-if="loadingProducts" indeterminate color="primary" size="24"></v-progress-circular>
          </div>

          <v-row v-if="productsList.length > 0">
            <v-col v-for="product in productsList" :key="product._id" cols="12" md="6">
              <v-card class="pa-5 rounded-lg bg-white border shadow-wood" elevation="2">
                <div class="d-flex justify-space-between align-center mb-2">
                  <div class="calligraphy-title text-h5 font-weight-bold text-primary">{{ product.title }}</div>
                  <v-chip
                    :color="product.saleType === 'UNIQUE' ? 'accent' : product.saleType === 'CUSTOM' ? 'info' : 'success'"
                    size="small"
                    class="font-weight-bold text-neutral"
                  >
                    {{ product.saleType === 'UNIQUE' ? 'UNIQUE 孤品 (庫存:1)' : product.saleType === 'CUSTOM' ? `CUSTOM 訂製 (${product.customPrepDays}天)` : 'BATCH 批次現貨' }}
                  </v-chip>
                </div>

                <div class="text-body-1 text-grey-darken-3 mb-3" style="line-height: 1.6;">{{ product.description }}</div>

                <!-- 木材質與塗漆 Chip -->
                <div class="mb-3">
                  <v-chip v-for="wood in product.woodSpecies" :key="wood" size="small" color="primary" variant="tonal" class="mr-1 font-weight-bold">
                    🪵 {{ wood }}
                  </v-chip>
                  <v-chip v-for="coat in product.coatingMethod" :key="coat" size="small" color="accent" variant="tonal" class="mr-1 font-weight-bold">
                    ✨ {{ coat }}
                  </v-chip>
                </div>

                <!-- 畫廊圖片與放大鏡 -->
                <ProductGallery
                  :primary-image="product.images.primary"
                  :detail-images="product.images.details"
                />

                <div class="d-flex justify-space-between align-center mt-5">
                  <div>
                    <span class="text-h4 font-weight-bold text-primary calligraphy-title">NT$ {{ product.price.toLocaleString() }}</span>
                  </div>
                  <v-btn color="accent" size="x-large" class="text-neutral font-weight-bold" @click="openCheckoutModal(product)">
                    <v-icon start>mdi-credit-card-outline</v-icon>
                    前往結帳與金流
                  </v-btn>
                </div>

                <!-- 買家評價與實體開箱照區塊 -->
                <ReviewSection :product-id="product._id" />
              </v-card>
            </v-col>
          </v-row>

          <v-alert v-else type="warning" variant="tonal" class="mt-4">
            查無符合篩選條件的木工作品，請嘗試調整搜尋關鍵字或勾選其他木材。
          </v-alert>
        </div>

        <!-- 結帳畫面、金流與帳單明細 Modal -->
        <CheckoutModal
          v-if="selectedProduct"
          v-model="showCheckoutModal"
          :product="selectedProduct"
          @order-success="onOrderSuccess"
        />

        <!-- 獨立訂單爭議處理中心 Modal -->
        <DisputeCenterModal v-model="showDisputeModal" />

        <!-- 我的帳單與訂單 Modal -->
        <v-dialog v-model="showOrdersModal" max-width="750">
          <v-card class="pa-4 rounded-lg">
            <v-card-title class="calligraphy-title text-h4 font-weight-bold text-primary d-flex align-center justify-space-between">
              <span>全站帳單與訂單列表 (MongoDB Atlas 實時資料)</span>
              <v-btn icon="mdi-close" variant="text" @click="showOrdersModal = false"></v-btn>
            </v-card-title>
            <v-card-text>
              <v-list v-if="ordersList.length > 0">
                <v-list-item v-for="order in ordersList" :key="order._id" class="border rounded mb-2 pa-3">
                  <v-list-item-title class="calligraphy-title text-h6 font-weight-bold text-primary">
                    {{ order.orderNo }} ｜ {{ order.productTitle }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-body-2 text-grey-darken-3 mt-1">
                    買家 Email: {{ order.buyerEmail }} ｜ 物流: {{ order.shippingOption }} ｜ 總金額 (含大榮運費): NT$ {{ order.totalPrice.toLocaleString() }}
                  </v-list-item-subtitle>
                  <template #append>
                    <v-chip color="success" size="medium" class="font-weight-bold">
                      <v-icon start size="x-small">mdi-check-decagram</v-icon>
                      已開立綠界電子發票
                    </v-chip>
                  </template>
                </v-list-item>
              </v-list>
              <div v-else class="text-center py-6 text-grey-darken-1">目前尚無帳單紀錄，歡迎點擊作品「前往結帳」體驗！</div>
            </v-card-text>
          </v-card>
        </v-dialog>

        <!-- 登入與職人申請對話框 -->
        <AuthModal v-model="showAuthModal" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from './stores/auth';
import api from './api/axios';
import ProductGallery from './components/ProductGallery.vue';
import CheckoutModal from './components/CheckoutModal.vue';
import ProductFilterBar from './components/ProductFilterBar.vue';
import AuthModal from './components/AuthModal.vue';
import ReviewSection from './components/ReviewSection.vue';
import DisputeCenterModal from './components/DisputeCenterModal.vue';

const authStore = useAuthStore();
const searchKeyword = ref('');
const productsList = ref<any[]>([]);
const artisansList = ref<any[]>([]);
const ordersList = ref<any[]>([]);
const loadingProducts = ref(false);
const showCheckoutModal = ref(false);
const showAuthModal = ref(false);
const showOrdersModal = ref(false);
const showDisputeModal = ref(false);
const selectedProduct = ref<any>(null);

const activeFilters = ref<{ woodSpecies: string[]; coatingMethods: string[] }>({
  woodSpecies: [],
  coatingMethods: [],
});

const fetchProducts = async () => {
  loadingProducts.value = true;
  try {
    const params: any = {};
    if (searchKeyword.value) params.keyword = searchKeyword.value;
    if (activeFilters.value.woodSpecies.length > 0) params.woodSpecies = activeFilters.value.woodSpecies.join(',');
    if (activeFilters.value.coatingMethods.length > 0) params.coatingMethod = activeFilters.value.coatingMethods.join(',');

    const res = await api.get('/products', { params });
    productsList.value = res.data.products;
  } catch (err) {
    console.error('撈取商品失敗:', err);
  } finally {
    loadingProducts.value = false;
  }
};

const fetchArtisans = async () => {
  try {
    const res = await api.get('/artisans');
    artisansList.value = res.data.artisans;
  } catch (err) {
    console.error('撈取職人失敗:', err);
  }
};

const fetchOrders = async () => {
  try {
    const res = await api.get('/orders');
    ordersList.value = res.data.orders;
  } catch (err) {
    console.error('撈取帳單失敗:', err);
  }
};

const handleFilterChange = (filters: any) => {
  activeFilters.value = filters;
  fetchProducts();
};

const openCheckoutModal = (product: any) => {
  selectedProduct.value = product;
  showCheckoutModal.value = true;
};

const onOrderSuccess = () => {
  fetchOrders();
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

onMounted(() => {
  fetchProducts();
  fetchArtisans();
  fetchOrders();
});
</script>

<style scoped>
.max-w-sm {
  max-width: 340px;
}
.shadow-wood {
  box-shadow: 0 6px 24px rgba(139, 69, 19, 0.12) !important;
}
</style>
