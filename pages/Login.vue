<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <router-link to="/" class="btn btn-secondary mb-3">На главную</router-link>
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style>

</style>
