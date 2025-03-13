import { defineStore } from 'pinia';
import type { Class, ClassQueryParams, ClassCreate, ClassUpdate } from '../types/class';
import { classService } from '../services/classes';

interface ClassState {
  classes: Class[];
  currentClass: Class | null;
  loading: boolean;
  error: string | null;
  total: number;
  page: number;
  perPage: number;
}

export const useClassStore = defineStore('classes', {
  state: (): ClassState => ({
    classes: [],
    currentClass: null,
    loading: false,
    error: null,
    total: 0,
    page: 1,
    perPage: 10,
  }),

  getters: {
    getClassById: (state) => {
      return (id: number) => state.classes.find((cls) => cls.id === id);
    },

    getClassesByCourseId: (state) => {
      return (courseId: number) => 
        state.classes.filter((cls) => cls.course_id === courseId);
    },

    getClassesByTeacherId: (state) => {
      return (teacherId: number) => 
        state.classes.filter((cls) => cls.teacher_id === teacherId);
    },

    currentSemesterClasses: (state) => {
      const currentYear = new Date().getFullYear();
      return state.classes.filter((cls) => cls.year === currentYear);
    },

    isLoading: (state) => state.loading,
    hasError: (state) => state.error !== null,
  },

  actions: {
    async fetchClasses(params?: ClassQueryParams) {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await classService.getClasses(params);
        this.classes = response.classes;
        this.total = response.total;
        this.page = response.page;
        this.perPage = response.per_page;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch classes';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async fetchClassById(id: number) {
      this.loading = true;
      this.error = null;
      
      try {
        const cls = await classService.getClassById(id);
        this.currentClass = cls;
        
        // Update class in the list if it exists
        const index = this.classes.findIndex(c => c.id === id);
        if (index !== -1) {
          this.classes[index] = cls;
        }
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to fetch class';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async createClass(classData: ClassCreate) {
      this.loading = true;
      this.error = null;
      
      try {
        const cls = await classService.createClass(classData);
        this.classes.push(cls);
        return cls;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to create class';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async updateClass(id: number, classData: ClassUpdate) {
      this.loading = true;
      this.error = null;
      
      try {
        const updated = await classService.updateClass(id, classData);
        const index = this.classes.findIndex(c => c.id === id);
        if (index !== -1) {
          this.classes[index] = updated;
        }
        if (this.currentClass?.id === id) {
          this.currentClass = updated;
        }
        return updated;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to update class';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async deleteClass(id: number) {
      this.loading = true;
      this.error = null;
      
      try {
        await classService.deleteClass(id);
        this.classes = this.classes.filter(c => c.id !== id);
        if (this.currentClass?.id === id) {
          this.currentClass = null;
        }
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to delete class';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async enrollInClass(classId: number) {
      this.loading = true;
      this.error = null;
      
      try {
        const response = await classService.enrollInClass(classId);
        // Refresh the class data after enrollment
        await this.fetchClassById(classId);
        return response;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to enroll in class';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async unenrollFromClass(classId: number) {
      this.loading = true;
      this.error = null;
      
      try {
        await classService.unenrollFromClass(classId);
        // Refresh the class data after unenrollment
        await this.fetchClassById(classId);
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Failed to unenroll from class';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    clearError() {
      this.error = null;
    },

    resetState() {
      this.classes = [];
      this.currentClass = null;
      this.loading = false;
      this.error = null;
      this.total = 0;
      this.page = 1;
      this.perPage = 10;
    },
  },
});