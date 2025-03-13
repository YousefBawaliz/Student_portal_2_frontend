<script setup lang="ts">
import type { Class } from '../../types/class';

interface Props {
  classData: Class;
}

const props = defineProps<Props>();

// Generate a random gradient for now (later this could be based on course type/category)
const gradientColors = [
  ['#FF7A00', '#FFB366'], // Orange theme
  ['#4158D0', '#C850C0'], // Purple theme
  ['#0093E9', '#80D0C7'], // Blue theme
  ['#8EC5FC', '#E0C3FC'], // Lavender theme
];

const randomGradient = () => {
  const colors = gradientColors[Math.floor(Math.random() * gradientColors.length)];
  return `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
};
</script>

<template>
  <div class="course-card">
    <div class="course-card__image" :style="{ background: randomGradient() }">
      <div class="course-card__overlay"></div>
    </div>
    <div class="course-card__content">
      <h3 class="course-card__class">{{ classData.course?.title }}</h3>
      <p class="course-card__section">Section {{ classData.section_number }}</p>
      <p class="course-card__teacher">
        {{ classData.teacher?.firstName }} {{ classData.teacher?.lastName }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.course-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 300px;
  display: flex;
  flex-direction: column;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.course-card__image {
  height: 70%;
  position: relative;
}

.course-card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}

.course-card__content {
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.course-card__class {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.3;
}

.course-card__section {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.course-card__teacher {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  font-style: italic;
}
</style>