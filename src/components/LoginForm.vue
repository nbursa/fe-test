<script setup lang="ts">
import BaseInput from './base/Input.vue';
import BaseButton from './base/Button.vue';
// import { ref, reactive, computed } from 'vue';
import { useAuthStore } from '@/stores/auth'
import router from '@/router';
import { mapActions } from 'pinia';

let name = '';
let password = '';
let error = '';

const authStore = useAuthStore();

function updateName(val: any): void {
  name = val;
  // console.log('name: ', name)
};

function updatePassword(val: any): void {
  password = val;
  // console.log('password: ', password)
};

async function onSubmit(): Promise<void> {
  // console.log('submit: ', { name, password });
  await authStore.submitForm({ name, password });
  if (authStore.authorized) {
    // console.log('pushing welcome');
    router.push('welcome');
  }
  error = 'some error';
};
</script>

<template>
  <form>
    <BaseInput :type="'text'" :placeholder="'Name'" :label="'name'" :value="name" @on-input="updateName" />
    <BaseInput :type="'password'" :placeholder="'Password'" :label="'password'" :value="password" @on-input="updatePassword" />
    <BaseButton :type="'submit'" :label="'Submit'" @btnClick="onSubmit" />
    <div v-if="error">{{error}}</div>
  </form>
</template>
