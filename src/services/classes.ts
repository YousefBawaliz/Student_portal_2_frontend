import { api } from './api';
import type {
  Class,
  ClassCreate,
  ClassUpdate,
  ClassListResponse,
  ClassQueryParams,
  ClassEnrollmentResponse,
  ClassError,
} from '../types/class';

class ClassService {
  private readonly baseUrl = '/classes';

  async getClasses(params?: ClassQueryParams): Promise<ClassListResponse> {
    try {
      const response = await api.get<ClassListResponse>(this.baseUrl, { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getClassById(id: number): Promise<Class> {
    try {
      const response = await api.get<Class>(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async createClass(classData: ClassCreate): Promise<Class> {
    try {
      const response = await api.post<Class>(this.baseUrl, classData);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateClass(id: number, classData: ClassUpdate): Promise<Class> {
    try {
      const response = await api.put<Class>(`${this.baseUrl}/${id}`, classData);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async deleteClass(id: number): Promise<void> {
    try {
      await api.delete(`${this.baseUrl}/${id}`);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async enrollInClass(classId: number): Promise<ClassEnrollmentResponse> {
    try {
      const response = await api.post<ClassEnrollmentResponse>(
        `${this.baseUrl}/${classId}/enroll`
      );
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async unenrollFromClass(classId: number): Promise<void> {
    try {
      await api.delete(`${this.baseUrl}/${classId}/enroll`);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (error.response?.data) {
      const classError: ClassError = error.response.data;
      throw new Error(classError.message || 'An error occurred with the class operation');
    }
    throw new Error('An unexpected error occurred');
  }
}

export const classService = new ClassService();