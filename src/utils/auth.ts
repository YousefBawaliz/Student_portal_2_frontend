import type { RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../store/auth';

export const isAuthenticated = (): boolean => {
  const authStore = useAuthStore();
  return authStore.isAuthenticated;
};

export const requireAuth = async (to: RouteLocationNormalized) => {
  const authStore = useAuthStore();
  
  if (!authStore.isAuthenticated) {
    // Try to initialize auth from stored tokens
    await authStore.initializeAuth();
    
    // If still not authenticated, redirect to login
    if (!authStore.isAuthenticated) {
      return {
        path: '/login',
        query: { redirect: to.fullPath },
      };
    }
  }

  // Role-based route protection
  if (to.meta.requiresAdmin && !authStore.isAdmin) {
    return { path: '/' };
  }
  
  if (to.meta.requiresTeacher && !authStore.isTeacher) {
    return { path: '/' };
  }

  return true;
};

export const parseJwt = (token: string): any => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (error) {
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = parseJwt(token);
  if (!decoded) return true;
  
  const currentTime = Date.now() / 1000;
  return decoded.exp < currentTime;
};