import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import api, { setAccessToken } from '../api/axios';

export interface UserState {
  id: string;
  email: string;
  role: 'buyer' | 'artisan' | 'admin';
  artisanProfile?: {
    brandBio: string;
    portfolioImages: string[];
    applicationStatus: 'pending' | 'approved' | 'rejected';
  };
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<UserState | null>(null);
  const token = ref<string | null>(null);

  const isAuthenticated = computed(() => !!token.value);
  const isArtisan = computed(() => user.value?.role === 'artisan');
  const isAdmin = computed(() => user.value?.role === 'admin');

  const setAuth = (newUser: UserState, newToken: string) => {
    user.value = newUser;
    token.value = newToken;
    setAccessToken(newToken);
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    setAccessToken(null);
  };

  const applyForArtisan = async (brandBio: string, portfolioImages: string[]) => {
    if (!user.value) return;
    const res = await api.post('/auth/artisan-apply', {
      userId: user.value.id,
      brandBio,
      portfolioImages,
    });
    user.value.artisanProfile = res.data.artisanProfile;
  };

  return {
    user,
    token,
    isAuthenticated,
    isArtisan,
    isAdmin,
    setAuth,
    logout,
    applyForArtisan,
  };
});
