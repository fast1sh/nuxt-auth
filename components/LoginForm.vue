<template>
  <div class="card">
    <div class="card-header">Вход</div>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="username" class="form-label">Имя пользователя</label>
          <input v-model="username" type="text" class="form-control" id="username" name="username" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Пароль</label>
          <input v-model="password" type="password" class="form-control" id="password" name="password" required>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="isLoading">
          {{ isLoading ? 'Загрузка...' : 'Войти' }}
        </button>
        <div v-if="error" class="alert alert-danger mt-3">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapState('auth', ['isLoading', 'error']),
  },
  methods: {
    async submitForm() {
      try {
        await this.$store.dispatch('auth/login', {
          username: this.username,
          password: this.password,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.card {
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #f8f9fa;
  font-size: 22px;
  font-weight: 700;
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
}

.form-label {
  font-weight: 700;
}

.form-control {
  border-radius: 6px;
  box-shadow: none;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
