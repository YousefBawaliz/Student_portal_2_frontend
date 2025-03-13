<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import type { LoginCredentials } from '../types/auth';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const error = ref('');

const handleSubmit = async () => {
  error.value = '';
  
  try {
    await authStore.login({
      email: email.value,
      password: password.value
    });
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Login failed';
  }
};
</script>

<template>
  <div class="login-page">
    <div class="login-content">
      <div class="brand-section">
        <h1 class="university-name">Horizon University</h1>
        <p class="tagline">Empowering Minds, Shaping Futures</p>
      </div>

      <div class="login-container">
        <div class="split-container">
          <!-- Left side - Decorative section -->
          <div class="left-section">
            <div class="welcome-text">
              <h2>Welcome Back!</h2>
              <p>Access your student portal to manage courses, assignments, and more.</p>
            </div>
          </div>

          <!-- Right side - Login form -->
          <div class="right-section">
            <form @submit.prevent="handleSubmit" class="login-form">
              <h2>Student Portal Login</h2>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  v-model="email"
                  required
                  autocomplete="email"
                  placeholder="your.email@horizon.edu"
                />
              </div>

              <div class="form-group">
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  v-model="password"
                  required
                  autocomplete="current-password"
                  placeholder="Enter your password"
                />
              </div>

              <div v-if="error" class="error-message">
                {{ error }}
              </div>

              <button type="submit" :disabled="authStore.loading">
                {{ authStore.loading ? 'Logging in...' : 'Login' }}
              </button>

              <div class="help-links">
                <a href="#" class="help-link">Forgot Password?</a>
                <a href="#" class="help-link">Need Help?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="decoration-overlay"></div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

/* Add this new class for the animated gradient overlay */
.decoration-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 122, 0, 0.3),
    rgba(255, 179, 102, 0.3)
  );
  z-index: 0;
}

.login-content {
  width: 70%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1;
}

.login-container {
  width: 100%;
}

.split-container {
  display: flex;
  background: rgba(255, 255, 255, 0.97);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.left-section {
  flex: 1;
  background: rgba(255, 122, 0, 0.05);
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
}

.welcome-text {
  color: var(--text-color);
  text-align: center;
}

.welcome-text h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.welcome-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.8;
}

.right-section {
  flex: 1;
  padding: 2.5rem;
}

.brand-section {
  text-align: center;
  color: white;
  margin-bottom: 1rem;
}

.university-name {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.tagline {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-top: 0.5rem;
}

.login-form {
  width: 100%;
}

.login-form h2 {
  color: var(--text-color);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(255, 122, 0, 0.1);
  outline: none;
}

input::placeholder {
  color: #aaa;
}

button {
  width: 100%;
  padding: 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

button:hover {
  background-color: var(--primary-hover);
}

button:active {
  transform: scale(0.98);
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  transform: none;
}

.error-message {
  color: var(--error-color);
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
  padding: 0.5rem;
  background-color: rgba(220, 53, 69, 0.1);
  border-radius: 4px;
}

.help-links {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
}

.help-link {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s;
}

.help-link:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .login-content {
    width: 85%;
  }
}

@media (max-width: 768px) {
  .login-content {
    width: 95%;
    padding: 1rem;
  }

  .split-container {
    flex-direction: column;
  }

  .left-section {
    padding: 2rem 1.5rem;
  }

  .right-section {
    padding: 1.5rem;
  }

  .university-name {
    font-size: 2rem;
  }

  .tagline {
    font-size: 1rem;
  }

  .welcome-text h2 {
    font-size: 1.5rem;
  }

  .welcome-text p {
    font-size: 1rem;
  }
}
</style>