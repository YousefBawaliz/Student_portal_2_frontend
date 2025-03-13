import { defineStore } from 'pinia';
import type { Course, CourseQueryParams, CourseCreate, CourseUpdate } from '../types/course';
import { courseService } from '../services/courses';

interface CourseState {
  courses: Course[];
  currentCourse: Course | null;
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  perPage: number;
}

export const useCourseStore = defineStore('courses', {
  state: (): CourseState => ({
    courses: [],
    currentCourse: null,
    loading: false,
    error: null,
    total: 0,
    page: 1,
    perPage: 10,
  }),

  getters: {
    getCourseById: (state) => {
      return (id: number) => state.courses.find((course) => course.id === id);
    },
    
    sortedCourses: (state) => {
      return [...state.courses].sort((a, b) => a.title.localeCompare(b.title));
    },

    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null,
  },

  actions: {
    async fetchCourses(params?: CourseQueryParams) {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await courseService.getCourses(params);
        this.courses = response.courses;
        this.total = response.total;
        this.page = response.page;
        this.perPage = response.per_page;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch courses';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async fetchCourseById(id: number) {
      this.loading = true;
      this.error = null;
      
      try {
        const course = await courseService.getCourseById(id);
        this.currentCourse = course;
        
        // Update course in the list if it exists
        const index = this.courses.findIndex(c => c.id === id);
        if (index !== -1) {
          this.courses[index] = course;
        }
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch course';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async createCourse(courseData: CourseCreate) {
      this.loading = true;
      this.error = null;
      
      try {
        const course = await courseService.createCourse(courseData);
        this.courses.push(course);
        return course;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to create course';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async updateCourse(id: number, courseData: CourseUpdate) {
      this.loading = true;
      this.error = null;
      
      try {
        const updated = await courseService.updateCourse(id, courseData);
        const index = this.courses.findIndex(c => c.id === id);
        if (index !== -1) {
          this.courses[index] = updated;
        }
        if (this.currentCourse?.id === id) {
          this.currentCourse = updated;
        }
        return updated;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to update course';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async deleteCourse(id: number) {
      this.loading = true;
      this.error = null;
      
      try {
        await courseService.deleteCourse(id);
        this.courses = this.courses.filter(c => c.id !== id);
        if (this.currentCourse?.id === id) {
          this.currentCourse = null;
        }
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to delete course';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    clearError() {
      this.error = null;
    },

    resetState() {
      this.courses = [];
      this.currentCourse = null;
      this.loading = false;
      this.error = null;
      this.total = 0;
      this.page = 1;
      this.perPage = 10;
    },
  },
});