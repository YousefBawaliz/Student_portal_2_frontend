<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../../store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const logout = async () => {
  await authStore.logout();
  router.push('/login');
};
</script>

<template>
  <nav class="navbar">
    <div class="navbar__content">
      <div class="navbar__logo">
        <img src="../../assets/images/logo.png" alt="Logo" />
        <span>Student Portal</span>
      </div>

      <div class="navbar__profile" @click="toggleDropdown">
        <img 
          :src="authStore.user?.profileImage || '/default-avatar.png'" 
          alt="Profile" 
          class="navbar__avatar"
        />
        <div class="navbar__dropdown" v-show="showDropdown">
          <router-link to="/profile" class="navbar__dropdown-item">
            Profile
          </router-link>
          <router-link to="/settings" class="navbar__dropdown-item">
            Settings
          </router-link>
          <button @click="logout" class="navbar__dropdown-item navbar__logout">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.75rem 0;
}

.navbar__content {
  max-width: 1400px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar__logo img {
  height: 32px;
}

.navbar__logo span {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.navbar__profile {
  position: relative;
  cursor: pointer;
}

.navbar__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.navbar__dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 100;
}

.navbar__dropdown-item {
  display: block;
  padding: 0.75rem 1rem;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s;
}

.navbar__dropdown-item:hover {
  background-color: #f5f5f5;
}

.navbar__logout {
  width: 100%;
  text-align: left;
  border: none;
  background: none;
  color: #dc3545;
  cursor: pointer;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .navbar__content {
    width: 95%;
  }
}
</style>