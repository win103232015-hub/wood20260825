<template>
  <div class="review-section mt-4 pt-4 border-t">
    <div class="d-flex align-center justify-space-between mb-3">
      <div class="calligraphy-title text-h6 font-weight-bold text-primary">
        買家評價與實體開箱照 (Reviews & Unboxing)
      </div>
      <v-btn size="small" color="accent" class="text-neutral font-weight-bold" @click="showWriteReview = true">
        <v-icon start size="x-small">mdi-pencil-plus</v-icon>
        發表開箱評價
      </v-btn>
    </div>

    <!-- 評價列表 -->
    <div v-if="reviews.length > 0">
      <v-card v-for="rev in reviews" :key="rev._id" class="pa-3 mb-2 bg-secondary border" elevation="0">
        <div class="d-flex align-center justify-space-between mb-1">
          <span class="font-weight-bold text-neutral">{{ rev.userEmail }}</span>
          <v-rating :model-value="rev.rating" color="accent" active-color="accent" density="compact" size="small" readonly></v-rating>
        </div>
        <div class="text-body-2 text-grey-darken-3 mb-2">{{ rev.comment }}</div>

        <!-- 5 張實體開箱照照片網格 (Photo Grid) -->
        <div v-if="rev.unboxingImages?.length > 0" class="d-flex gap-2">
          <v-img
            v-for="(img, idx) in rev.unboxingImages"
            :key="idx"
            :src="img"
            width="60"
            height="60"
            cover
            class="rounded border cursor-pointer"
          ></v-img>
        </div>
      </v-card>
    </div>
    <div v-else class="text-caption text-grey-darken-1 py-2">目前尚無開箱評價，歡迎成為第一位評價的買家！</div>

    <!-- 撰寫評價對話框 -->
    <v-dialog v-model="showWriteReview" max-width="500">
      <v-card class="pa-4 rounded-lg">
        <v-card-title class="calligraphy-title text-h5 text-primary">撰寫買家開箱評價</v-card-title>
        <v-card-text>
          <div class="mb-3">
            <span class="font-weight-bold mr-2">星等評分：</span>
            <v-rating v-model="newRating" color="accent" active-color="accent" hover></v-rating>
          </div>
          <v-textarea v-model="newComment" label="您的實體使用心得與感言" rows="3" variant="outlined" density="compact"></v-textarea>
          <v-text-field v-model="unboxingUrl" label="實體開箱照片 URL (最多 5 張，逗號隔開)" variant="outlined" density="compact"></v-text-field>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn variant="text" @click="showWriteReview = false">取消</v-btn>
          <v-btn color="accent" class="text-neutral font-weight-bold" @click="submitReview">發布評價</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from '../api/axios';

const props = defineProps<{ productId: string }>();

const reviews = ref<any[]>([]);
const showWriteReview = ref(false);
const newRating = ref(5);
const newComment = ref('');
const unboxingUrl = ref('');

const fetchReviews = async () => {
  try {
    const res = await api.get(`/reviews/product/${props.productId}`);
    reviews.value = res.data.reviews;
  } catch (err) {
    console.error('撈取評價失敗:', err);
  }
};

const submitReview = async () => {
  if (!newComment.value) return;
  try {
    const images = unboxingUrl.value ? unboxingUrl.value.split(',') : ['https://images.unsplash.com/photo-1546484475-7f7bd55792da'];
    await api.post('/reviews', {
      productId: props.productId,
      rating: newRating.value,
      comment: newComment.value,
      unboxingImages: images,
    });
    alert('評價發布成功！');
    showWriteReview.value = false;
    newComment.value = '';
    fetchReviews();
  } catch (err) {
    alert('評價發布失敗');
  }
};

onMounted(() => {
  fetchReviews();
});
</script>

<style scoped>
.gap-2 {
  gap: 8px;
}
</style>
