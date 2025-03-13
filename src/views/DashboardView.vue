<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useClassStore } from '../store/classes';
import { useAuthStore } from '../store/auth';
import CourseCard from '../components/common/CourseCard.vue';
import Navbar from '../components/common/Navbar.vue'; 
import Footer from '../components/common/Footer.vue';

const classStore = useClassStore();
const authStore = useAuthStore();

const hasClasses = computed(() => classStore.classes.length > 0);

onMounted(async () => {
  await classStore.fetchClasses({
    page: 1,
    per_page: 10,
  });
});
</script>

<template>
  <div class="dashboard-container">
    <Navbar />
    
    <main class="dashboard-content">
      <div class="content-container">
        <h1 class="dashboard-title">My Courses</h1>
        
        <div v-if="hasClasses" class="courses-grid">
          <CourseCard
            v-for="class_ in classStore.classes"
            :key="class_.id"
            :class-data="class_"
          />
        </div>
        
        <div v-else class="empty-state">
          <p>Currently not enrolled in any courses</p>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.dashboard-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.dashboard-content {
  flex: 1;
  padding: 2rem;
  background-color: var(--background-color);
}

.content-container {
  max-width: 1400px;
  width: 80%;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dashboard-title {
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: #666;
  font-size: 1.1rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .content-container {
    width: 95%;
    padding: 1rem;
  }

  .courses-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .dashboard-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}
</style>