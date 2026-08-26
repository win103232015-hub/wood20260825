<template>
  <v-card class="pa-4 rounded-lg bg-secondary border mb-6" elevation="0">
    <div class="text-subtitle-1 font-weight-bold text-primary mb-3">
      <v-icon color="primary" class="mr-1">mdi-filter-variant</v-icon>
      木工專屬篩選器
    </div>

    <v-row density="compact">
      <!-- 木材種類多選 -->
      <v-col cols="12" md="6">
        <div class="text-caption font-weight-bold text-neutral mb-1">木材種類 (Wood Species)</div>
        <v-chip-group v-model="selectedWoodSpecies" multiple selected-class="bg-primary text-white">
          <v-chip v-for="wood in woodOptions" :key="wood" :value="wood" filter size="small" variant="outlined">
            {{ wood }}
          </v-chip>
        </v-chip-group>
      </v-col>

      <!-- 塗漆方式多選 -->
      <v-col cols="12" md="6">
        <div class="text-caption font-weight-bold text-neutral mb-1">塗漆方式 (Coating Method)</div>
        <v-chip-group v-model="selectedCoatingMethods" multiple selected-class="bg-accent text-neutral">
          <v-chip v-for="coat in coatingOptions" :key="coat" :value="coat" filter size="small" variant="outlined">
            {{ coat }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const woodOptions = ['臺灣檜木', '黑胡桃木', '柚木', '櫸木', '白橡木', '其他'];
const coatingOptions = ['天然護木油', '木蠟油', '生漆/推光漆', '無塗裝'];

const selectedWoodSpecies = ref<string[]>([]);
const selectedCoatingMethods = ref<string[]>([]);

const emit = defineEmits(['filter-change']);

watch([selectedWoodSpecies, selectedCoatingMethods], () => {
  emit('filter-change', {
    woodSpecies: selectedWoodSpecies.value,
    coatingMethods: selectedCoatingMethods.value,
  });
});
</script>
