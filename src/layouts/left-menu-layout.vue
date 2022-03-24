<template>
  <sider-menu></sider-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SiderMenu from "@/components/base-layouts/sider-menu.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { SiderMenu },
});
</script>

<style scoped></style>
