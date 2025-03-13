import api from './api';
import type { LoginCredentials, LoginResponse, RefreshTokenResponse } from '../types/auth';
import type { UserUpdatePayload, User } from '../types/user';

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', credentials);
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
  },

  async refreshToken(refreshToken: string): Promise<RefreshTokenResponse> {
    const response = await api.post<RefreshTokenResponse>('/auth/refresh', {
      refreshToken,
    });
    return response.data;
  },

  async getCurrentUser(): Promise<User> {
    const response = await api.get<User>('/users/me');
    return response.data;
  },

  async updateProfile(payload: UserUpdatePayload): Promise<User> {
    const response = await api.put<User>('/users/me', payload);
    return response.data;
  },
};

export default authService;