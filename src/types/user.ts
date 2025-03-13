export enum UserRole {
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin'
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  profileImage?: string;
  themePreference?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile extends Omit<User, 'createdAt' | 'updatedAt'> {
  password?: string;
}

export interface UserUpdatePayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  themePreference?: string;
  profileImage?: string;
}