<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div v-if="isAuthenticated">
          <h1 class="mb-4">Привет, {{ username }}</h1>

          <button @click="logout" class="btn btn-primary" :disabled="isLoading">
            {{ isLoading ? 'Загрузка...' : 'Выйти' }}
          </button>
        </div>
        <div v-else>
          <h1 class="mb-4">Вы не авторизованы</h1>

          <router-link to="/login" class="btn btn-primary mt-3">Авторизация</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('auth', ['isAuthenticated', 'user', 'isLoading']),
    username() {
      return this.user.username;
    },
  },
  methods: {
    ...mapActions('auth', ['logout']),
  },
};
</script>

<style>
h1 {
  font-size: 28px;
  font-weight: bold;
}

.btn {
  font-size: 18px;
  padding: 10px 20px;
}
</style>
