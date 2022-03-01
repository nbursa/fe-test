<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  type: string;
  placeholder: string;
  label: string;
}>();

const emit = defineEmits(['on-input'])

let value = null;

function onInput(event: Event): void {
  value = (event.target as HTMLTextAreaElement).value;
  emit('on-input', value);
};
</script>

<template>
  <div class="input">
    <label class="input-label" :for="label">{{ label }}</label>
    <input
      class="input-field"
      :id="label"
      :type="type"
      :placeholder="placeholder"
      autocomplete="off"
      @input="onInput"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

.input {
  // padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  &-label {
    color: $green;
  }
  &-field {
    border-color: $border-dark;
  }
}
</style>
