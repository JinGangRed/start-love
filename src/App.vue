<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import localStorage from "@/utils/local-storage";
import { STORAGE_LANG_KEY } from "./store/typing";
import { SET_LANG } from "@/store/app/typing";

const store = useStore();
const lang = localStorage.get(STORAGE_LANG_KEY, "en-US");
if (lang) {
  store.dispatch(`app/${SET_LANG}`, lang);
}

const i18n = useI18n();
const locale = computed(() => {
  return i18n.getLocaleMessage(i18n.locale.value).antd;
});
</script>

<template>
  <a-config-provider :locale="locale">
    <router-view></router-view>
  </a-config-provider>
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
