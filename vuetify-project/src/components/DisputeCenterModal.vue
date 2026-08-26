<template>
  <v-dialog v-model="internalModel" max-width="700">
    <v-card class="pa-4 rounded-lg bg-secondary border">
      <v-card-title class="calligraphy-title text-h4 font-weight-bold text-primary d-flex align-center justify-space-between">
        <span class="d-flex align-center">
          <v-icon color="error" class="mr-2">mdi-gavel</v-icon>
          獨立訂單爭議處理中心 (Dispute Arbitration)
        </span>
        <v-btn icon="mdi-close" variant="text" @click="closeModal"></v-btn>
      </v-card-title>

      <v-card-text>
        <div class="text-caption text-grey-darken-2 mb-3">
          專屬買家與職人之爭議對話留言板，管理員擁有開啟/封閉與強制介入仲裁之權限。
        </div>

        <!-- 爭議列表 -->
        <v-expansion-panels v-if="disputes.length > 0">
          <v-expansion-panel v-for="disp in disputes" :key="disp._id">
            <v-expansion-panel-title class="font-weight-bold text-primary">
              訂單號：{{ disp.orderNo }} ｜ 原因：{{ disp.reason }}
              <v-chip size="x-small" :color="disp.status === 'resolved' ? 'success' : 'warning'" class="ml-2">
                {{ disp.status === 'resolved' ? '已仲裁解決' : '爭議處理中' }}
              </v-chip>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <!-- 留言板對話紀錄 -->
              <div class="pa-2 bg-white rounded border mb-3">
                <div v-for="(msg, idx) in disp.messages" :key="idx" class="mb-2 pb-2 border-b">
                  <div class="d-flex align-center justify-space-between">
                    <span class="font-weight-bold text-caption" :class="msg.role === 'admin' ? 'text-error' : 'text-primary'">
                      [{{ msg.role === 'admin' ? '👑 管理員強制仲裁' : msg.role === 'artisan' ? '🪵 職人回應' : '👤 買家發言' }}] {{ msg.sender }}
                    </span>
                    <span class="text-caption text-grey">{{ new Date(msg.createdAt).toLocaleTimeString() }}</span>
                  </div>
                  <div class="text-body-2 mt-1">{{ msg.content }}</div>
                </div>
              </div>

              <!-- 發送留言 -->
              <div class="d-flex gap-2">
                <v-text-field v-model="replyText[disp._id]" placeholder="輸入爭議說明或仲裁留言..." density="compact" variant="outlined" hide-details></v-text-field>
                <v-btn color="primary" class="font-weight-bold" @click="sendReply(disp._id)">發送留言</v-btn>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-alert v-else type="info" variant="tonal" class="my-4">
          目前全站無任何處理中的訂單爭議。
        </v-alert>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import api from '../api/axios';

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(['update:modelValue']);

const disputes = ref<any[]>([]);
const replyText = ref<Record<string, string>>({});

const internalModel = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const closeModal = () => {
  internalModel.value = false;
};

const fetchDisputes = async () => {
  try {
    const res = await api.get('/disputes');
    disputes.value = res.data.disputes;
  } catch (err) {
    console.error('撈取爭議失敗:', err);
  }
};

const sendReply = async (disputeId: string) => {
  const content = replyText.value[disputeId];
  if (!content) return;

  try {
    await api.post(`/disputes/${disputeId}/messages`, {
      sender: '管理員客服',
      role: 'admin',
      content,
    });
    replyText.value[disputeId] = '';
    fetchDisputes();
  } catch (err) {
    alert('發送爭議留言失敗');
  }
};

onMounted(() => {
  fetchDisputes();
});
</script>
