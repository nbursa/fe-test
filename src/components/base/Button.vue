<script setup lang="ts">
defineProps<{
  type: "button" | "submit" | "reset" | undefined;
  label: string;
}>();
</script>

<template>
  <button :type="type" @click.prevent="$emit('btnClick')">{{label}}</button>
</template>

<style scoped lang="scss">
@import "../../styles/colors.scss";
</style>
