import { defineStore } from 'pinia';
import type { AuthState, LoginCredentials, AuthTokens } from '../types/auth';
import type { User, UserUpdatePayload } from '../types/user';
import { authService } from '../services/auth';
import { router } from '../router';

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isAuthenticated: false,
    tokens: null,
    loading: false,
    error: null,
  }),

  getters: {
    currentUser: (state): User | null => state.user,
    isAdmin: (state): boolean => state.user?.role === 'admin',
    isTeacher: (state): boolean => state.user?.role === 'teacher',
    isStudent: (state): boolean => state.user?.role === 'student',
  },

  actions: {
    async login(credentials: LoginCredentials) {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await authService.login(credentials);
        this.user = response.user;
        this.tokens = response.tokens;
        this.isAuthenticated = true;
        
        // Store tokens in localStorage
        localStorage.setItem('tokens', JSON.stringify(response.tokens));
        
        // Redirect based on role
        if (this.user.role === 'admin') {
          router.push('/admin/dashboard');
        } else if (this.user.role === 'teacher') {
          router.push('/teacher/dashboard');
        } else {
          router.push('/student/dashboard');
        }
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Login failed';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      try {
        await authService.logout();
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        this.resetState();
        localStorage.removeItem('tokens');
        router.push('/login');
      }
    },

    async refreshToken() {
      try {
        if (!this.tokens?.refreshToken) {
          throw new Error('No refresh token available');
        }
        
        const response = await authService.refreshToken(this.tokens.refreshToken);
        this.tokens = {
          ...this.tokens,
          accessToken: response.accessToken,
        };
        
        localStorage.setItem('tokens', JSON.stringify(this.tokens));
      } catch (error) {
        this.resetState();
        throw error;
      }
    },

    async updateProfile(payload: UserUpdatePayload) {
      try {
        const updatedUser = await authService.updateProfile(payload);
        this.user = updatedUser;
      } catch (error) {
        throw error;
      }
    },

    async initializeAuth() {
      const tokensStr = localStorage.getItem('tokens');
      if (tokensStr) {
        try {
          const tokens = JSON.parse(tokensStr) as AuthTokens;
          this.tokens = tokens;
          const user = await authService.getCurrentUser();
          this.user = user;
          this.isAuthenticated = true;
        } catch (error) {
          this.resetState();
        }
      }
    },

    resetState() {
      this.user = null;
      this.isAuthenticated = false;
      this.tokens = null;
      this.error = null;
    },
  },
});