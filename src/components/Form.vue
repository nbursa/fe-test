<script setup lang="ts">
import BaseInput from './base/Input.vue';
import BaseButton from './base/Button.vue';
import BaseRadioGroup from './base/RadioGroup.vue'
// import { ref, reactive, computed } from 'vue';
import { useAuthStore } from '@/stores/auth'
import router from '@/router';
import { mapActions } from 'pinia';

let prefix = '';
let name = '';
let surname = '';
let email = '';
let password = '';
let error = '';

const authStore = useAuthStore();

function updateName(val: any): void {
  name = val;
  // console.log('name: ', name)
};

function updateSurname(val: any): void {
  surname = val;
  // console.log('name: ', name)
};

function updateEmail(val: any): void {
  email = val;
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

function selectOption(val: any) {
  // console.log('select: ', val)
  prefix = val;
}
</script>

<template>
  <form>
    <div>
      <p class="small">Anrede</p>
      <div>
        <BaseRadioGroup :options="['Frau', 'Herr', 'Keine Angabe']" @input="selectOption" />
      </div>
    </div>

    <BaseInput :type="'text'" :placeholder="'Vorname'" :label="'Vorname'" :value="name" @on-input="updateName" />

    <BaseInput :type="'text'" :placeholder="'Nachname'" :label="'Nachname'" :value="surname" @on-input="updateSurname" />

    <BaseInput :type="'email'" :placeholder="'E-Mail'" :label="'E-Mail'" :value="email" @on-input="updateEmail" />

    <BaseInput :type="'password'" :placeholder="'Password'" :label="'Password'" :value="password" @on-input="updatePassword" />

    <div class="small-info">
        Für ein starkes Passwort, beachte diese Vorgaben: <br>
        - Mindestens 8 Zeichen<br>
        - Klein- und Grossbuchstaben<br>
        - Mindestens eine Zahl<br>
        - Mindestens ein Sonderzeichen
    </div>

    <BaseButton :type="'submit'" :label="'Submit'" @btnClick="onSubmit" />

    <div v-if="error">{{error}}</div>
  </form>
</template>

<style lang="scss" scoped>
@import '@/styles/colors.scss';

.small-info {
  color: $friar-gray;
  font-size: 11px;
  line-height: 16px;
  font-weight: 400;
  padding-left: 16px;
  margin-bottom: 1rem;
}
</style>
