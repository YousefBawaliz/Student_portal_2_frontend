import { api } from './api';
import type {
  Course,
  CourseCreate,
  CourseUpdate,
  CourseListResponse,
  CourseQueryParams,
  CourseError,
} from '../types/course';

class CourseService {
  private readonly baseUrl = '/courses';

  async getCourses(params?: CourseQueryParams): Promise<CourseListResponse> {
    try {
      const response = await api.get<CourseListResponse>(this.baseUrl, { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getCourseById(id: number): Promise<Course> {
    try {
      const response = await api.get<Course>(`${this.baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async createCourse(courseData: CourseCreate): Promise<Course> {
    try {
      const response = await api.post<Course>(this.baseUrl, courseData);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async updateCourse(id: number, courseData: CourseUpdate): Promise<Course> {
    try {
      const response = await api.put<Course>(`${this.baseUrl}/${id}`, courseData);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async deleteCourse(id: number): Promise<void> {
    try {
      await api.delete(`${this.baseUrl}/${id}`);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (error.response?.data) {
      const courseError: CourseError = error.response.data;
      throw new Error(courseError.message || 'An error occurred with the course operation');
    }
    throw new Error('An unexpected error occurred');
  }
}

export const courseService = new CourseService();