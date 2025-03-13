<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '../store/auth';

const authStore = useAuthStore();

const welcomeMessage = computed(() => {
  const role = authStore.user?.role;
  const name = authStore.user?.firstName || 'User';
  
  switch (role) {
    case 'admin':
      return `Welcome Administrator ${name}`;
    case 'teacher':
      return `Welcome Teacher ${name}`;
    case 'student':
      return `Welcome Student ${name}`;
    default:
      return `Welcome ${name}`;
  }
});

const dashboardStats = computed(() => {
  const role = authStore.user?.role;
  
  switch (role) {
    case 'admin':
      return [
        { label: 'Total Users', value: '---' },
        { label: 'Active Courses', value: '---' },
        { label: 'Total Classes', value: '---' }
      ];
    case 'teacher':
      return [
        { label: 'My Courses', value: '---' },
        { label: 'Active Students', value: '---' },
        { label: 'Pending Tasks', value: '---' }
      ];
    case 'student':
      return [
        { label: 'Enrolled Courses', value: '---' },
        { label: 'Completed Modules', value: '---' },
        { label: 'Upcoming Tasks', value: '---' }
      ];
    default:
      return [];
  }
});
</script>

<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>{{ welcomeMessage }}</h1>
    </header>

    <div class="stats-container">
      <div v-for="(stat, index) in dashboardStats" 
           :key="index" 
           class="stat-card">
        <h3>{{ stat.label }}</h3>
        <p class="stat-value">{{ stat.value }}</p>
      </div>
    </div>

    <div class="dashboard-content">
      <div class="content-section">
        <h2>Quick Actions</h2>
        <div class="placeholder-content">
          Quick actions will be displayed here
        </div>
      </div>

      <div class="content-section">
        <h2>Recent Activity</h2>
        <div class="placeholder-content">
          Recent activity will be displayed here
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  margin-bottom: 2rem;
}

.dashboard-header h1 {
  color: var(--text-color);
  font-size: 1.8rem;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: var(--white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stat-card h3 {
  color: var(--text-color);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.dashboard-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.content-section {
  background: var(--white);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content-section h2 {
  color: var(--text-color);
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.placeholder-content {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-color);
  border-radius: 4px;
  color: #666;
  font-style: italic;
}

@media (max-width: 768px) {
  .dashboard {
    padding: 1rem;
  }

  .stats-container {
    grid-template-columns: 1fr;
  }

  .dashboard-content {
    grid-template-columns: 1fr;
  }
}
</style>