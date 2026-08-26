<template>
  <div class="product-gallery">
    <v-row>
      <!-- 主正面圖 x1 -->
      <v-col cols="12" md="8">
        <v-card elevation="2" class="gallery-primary-card cursor-pointer" @click="openLightbox(primaryImage)">
          <v-img :src="primaryImage" aspect-ratio="1.2" cover class="rounded-lg">
            <template #placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>
            <v-chip color="accent" size="small" class="ma-3 font-weight-bold" label>
              <v-icon start size="x-small">mdi-magnify-plus-outline</v-icon>
              點擊高解析放大
            </v-chip>
          </v-img>
        </v-card>
      </v-col>

      <!-- 縮小版細節圖 最多 3 張 (散落感排列) -->
      <v-col cols="12" md="4" class="d-flex flex-column gap-3">
        <v-card
          v-for="(img, idx) in detailImages.slice(0, 3)"
          :key="idx"
          elevation="1"
          class="scatter-detail-card cursor-pointer"
          :style="{ transform: `rotate(${ (idx % 2 === 0 ? 1.5 : -1.5) }deg)` }"
          @click="openLightbox(img)"
        >
          <v-img :src="img" height="110" cover class="rounded">
            <v-badge color="primary" :content="`細節 ${idx + 1}`" inline class="ma-2"></v-badge>
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- Lightbox 高解析度放大鏡 Modal -->
    <v-dialog v-model="lightboxOpen" max-width="900">
      <v-card color="neutral" class="pa-2">
        <v-card-title class="d-flex justify-space-between align-center text-secondary">
          <span>木頭紋理與細微工藝鑑賞</span>
          <v-btn icon="mdi-close" variant="text" color="secondary" @click="lightboxOpen = false"></v-btn>
        </v-card-title>
        <v-card-text class="d-flex justify-center align-center">
          <v-img :src="activeImage" max-height="700" fit="contain" class="rounded-lg"></v-img>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  primaryImage: string;
  detailImages: string[];
}>();

const lightboxOpen = ref(false);
const activeImage = ref('');

const openLightbox = (imgUrl: string) => {
  activeImage.value = imgUrl;
  lightboxOpen.value = true;
};
</script>

<style scoped>
.scatter-detail-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #E8E2D8;
}
.scatter-detail-card:hover {
  transform: scale(1.03) rotate(0deg) !important;
  box-shadow: 0 4px 15px rgba(139, 69, 19, 0.15) !important;
}
.gap-3 {
  gap: 12px;
}
</style>
