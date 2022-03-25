<template>
  <a-layout-header
    :style="{
      padding: 0,
      height: `${headerHeight}px`,
      lineHeight: `${headerHeight}px`,
      width,
    }"
  >
    <div :style="{ flex: 1 }"></div>
    <template #rightContent>
      <slot />
    </template>
  </a-layout-header>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineProps({
  headerHeight: {
    type: Number,
    default: 48,
  },
});
const width = computed(() => "100%");
</script>

<style scoped></style>
