import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './store/auth';
import LoginView from './views/LoginView.vue';
import DashboardView from './views/DashboardView.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      requiresAuth: false,
      redirectIfAuth: true
    }
  },
  {
    path: '/admin/dashboard',
    name: 'adminDashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    }
  },
  {
    path: '/teacher/dashboard',
    name: 'teacherDashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true,
      requiresTeacher: true
    }
  },
  {
    path: '/student/dashboard',
    name: 'studentDashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true,
      requiresStudent: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  // Try to initialize auth if not already done
  if (!authStore.isAuthenticated) {
    await authStore.initializeAuth();
  }

  // Redirect to dashboard if user is already logged in and tries to access login page
  if (to.meta.redirectIfAuth && authStore.isAuthenticated) {
    const role = authStore.user?.role;
    if (role === 'admin') {
      return next('/admin/dashboard');
    } else if (role === 'teacher') {
      return next('/teacher/dashboard');
    } else {
      return next('/student/dashboard');
    }
  }

  // Allow access to login page
  if (to.path === '/login') {
    return next();
  }

  // Check if route requires authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  }

  // Check role-based access
  if (to.meta.requiresAdmin && !authStore.isAdmin) {
    return next('/login');
  }
  if (to.meta.requiresTeacher && !authStore.isTeacher) {
    return next('/login');
  }
  if (to.meta.requiresStudent && !authStore.isStudent) {
    return next('/login');
  }

  next();
});

export { router };