import type { User } from "./user";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  tokens: AuthTokens;
  user: User;
}

export interface RefreshTokenResponse {
  accessToken: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  tokens: AuthTokens | null;
  loading: boolean;
  error: string | null;
}