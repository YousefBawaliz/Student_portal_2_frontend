import type { Course } from './course';
import type { User } from './user';

export interface Class {
  id: number;
  course_id: number;
  teacher_id: number;
  section_number: string;
  semester: string;
  year: number;
  created_at: string;
  updated_at: string;
  // Expanded relationships
  course?: Course;
  teacher?: User;
}

export interface ClassCreate {
  course_id: number;
  teacher_id: number;
  section_number: string;
  semester: string;
  year: number;
}

export interface ClassUpdate {
  teacher_id?: number;
  section_number?: string;
  semester?: string;
  year?: number;
}

export interface ClassListResponse {
  classes: Class[];
  total: number;
  page: number;
  per_page: number;
}

export interface ClassQueryParams {
  page?: number;
  per_page?: number;
  course_id?: number;
  teacher_id?: number;
  year?: number;
  semester?: string;
  search?: string;
  sort_by?: 'section_number' | 'semester' | 'year' | 'created_at';
  sort_order?: 'asc' | 'desc';
}

export interface ClassEnrollmentResponse {
  message: string;
  enrollment_id: number;
}

export interface ClassError {
  message: string;
  errors?: Record<string, string[]>;
}