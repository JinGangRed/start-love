<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const locale = computed(() => {
  return i18n.getLocaleMessage(i18n.locale.value).antd;
});
</script>

<template>
  <a-config-provider :locale="locale"> </a-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
