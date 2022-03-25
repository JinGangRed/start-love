<template>
  <a-layout>
    <layout-header></layout-header>
    <a-layout-content>Content</a-layout-content>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutHeader from "@/components/base-layouts/header/index.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { LayoutHeader },
});
</script>

<style scoped></style>
