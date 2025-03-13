// Basic course interface matching backend model
export interface Course {
  id: number;
  course_code: string;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

// Used when creating a new course
export interface CourseCreate {
  course_code: string;
  title: string;
  description?: string;
}

// Used when updating an existing course
export interface CourseUpdate {
  title?: string;
  description?: string;
  is_active?: boolean;
}

// Response from the API when listing courses
export interface CourseListResponse {
  courses: Course[];
  total: number;
  page: number;
  per_page: number;
}

// Query parameters for course listing
export interface CourseQueryParams {
  page?: number;
  per_page?: number;
  search?: string;
  sort_by?: 'title' | 'course_code' | 'created_at';
  sort_order?: 'asc' | 'desc';
}

// Error response from the API
export interface CourseError {
  message: string;
  errors?: Record<string, string[]>;
}