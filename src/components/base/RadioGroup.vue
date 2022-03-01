<script setup lang="ts">
defineProps<{
  options: string[];
}>();

let picked = false
</script>

<template>
  <div class="radio-button-group">
    <label :for="option" v-for="option in options">
      <input
        type="radio"
        name="radio-input"
        :value="option"
        :id="option"
        @change="$emit('input', option)"
      />
      {{ option }}
    </label>
  </div>
</template>

<style scoped lang="scss">
@import '@/styles/colors.scss';

.radio-button-group {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 1rem;
    
  label {
    display: flex;
    margin-right: 16px;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      color: green;
      input {
        border: 1px solid $outer-space;
        &:checked {
          &::before {
            border: 1px solid green;
          }
          &::after {
            background-color: green;
          }
        }
      }
      
    }
    input {
      cursor: pointer;
      border: 1px solid $outer-space;
      margin: 0 8px 0 0;
      width: 18px;
      height: 18px;
      z-index: 1;
      &:checked {
        // background-color: red;
        // color: red;
        // border: red;
        position: relative;
        &::before {
          content: '';
          width: 18px;
          height: 18px;
          position: absolute;
          display: block;
          background-color: white;
          border-radius: 50%;
          border: 1px solid $outer-space;
          z-index: 100;
        }
        &::after {
          content: '';
          width: 12px;
          height: 12px;
          position: absolute;
          top: 4px;
          left: 4px;
          display: block;
          background-color: $outer-space;
          border-radius: 50%;
          border: 0;
          z-index: 1001;
        }
      }
    }
  }
}
</style>
