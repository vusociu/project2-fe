import Api from '../../services/api'
<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2 class="auth-title">{{ showLogin ? 'Chào mừng bạn trở lại' : 'Đăng ký tài khoản' }}</h2>
      <form @submit.prevent="submitForm">
        <div class="auth-input">
          <label for="username">Email:</label>
          <input type="text" id="email" v-model="formData.email" required>
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="formData.password" required>
          <template v-if="!showLogin">
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" v-model="formData.confirmPassword" required>
          </template>
        </div>
        <button type="submit">{{ showLogin ? 'Login' : 'Register' }}</button>
      </form>
      <p class="auth-switch">
        {{ showLogin ? 'Don\'t have an account?' : 'Already have an account?' }}
        <a href="#" @click="toggleForm"> {{ showLogin ? 'Register Now' : 'Login Now' }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import Api from '@/services/api';

export default {
  data() {
    return {
      showLogin: true,
      formData: {
        username: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    submitForm() {
      if (this.showLogin) {
        this.submitLogin();
      } else {
        this.submitRegister();
      }
    },
    async submitLogin() {
      const api = new Api();
      var data = await api.post("users/login", JSON.stringify({
        email: this.formData.email,
        password: this.formData.password
      }))
      
    },
    submitRegister() {
      // Implement registration logic here (e.g., call API)
      console.log('Submitting registration form...');
    },
    toggleForm() {
      this.showLogin = !this.showLogin;
    }
  }
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.auth-form {
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
}
.auth-input {
  text-align: left !important;
}
.auth-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.auth-form input {
  display: block;
  margin-bottom: 15px;
  padding: 10px 0px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
}

.auth-form button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.auth-form button:hover {
  background-color: #3e8e41;
}

.auth-switch {
  margin-top: 20px;
  font-size: 14px;
  color: #999;
}

.auth-switch a {
  color: #4CAF50;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
}

.auth-switch a:hover {
  color: #3e8e41;
}
</style>
