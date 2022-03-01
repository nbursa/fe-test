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
    <input
      class="input-field"
      :id="label"
      :type="type"
      :placeholder="placeholder"
      autocomplete="off"
      @input="onInput"
    />
    <label class="input-label" :for="label">{{ label }}</label>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

.input {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  line-height: 22px;
  position: relative;
  &:focus {
    border: 1px solid #82827d;
  }
  &-label {
    color: #202624;
    background-color: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    transition: top ease-in 0.3s, background-color ease-in 0.1s;
  }
  &-field {
    &::placeholder {
      opacity: 0;
    }
    color: #202624;
    padding: 14px 14px 12px 16px;
    border: 1px solid #82827d;
    &:focus {
      border: 1px solid #82827d !important;
    }
  }
}

.input-field:not(:placeholder-shown) + .input-label,
.input-field:focus + .input-label {
  top: 0;
  font-size: 11px;
  color: $friar-gray;
  padding: 3px;
}
.input-field:not(:placeholder-shown) + .input-label,
.input-field:focus + .input-label {
  top: 0;
  font-size: 11px;
  color: $friar-gray;
  padding: 0 3px;
  background-color: white;
}
</style>
