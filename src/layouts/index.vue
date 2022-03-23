<template>
  <left-menu-layout></left-menu-layout>
  <basic-layout>
    <slot />
  </basic-layout>
</template>

<script setup lang="ts">
import LeftMenuLayout from "./left-menu-layout.vue";
import BasicLayout from "./basic-layout.vue";
</script>

<style scoped></style>
