<template>
  <a-layout-header
    :style="{
      padding: 0,
      height: `${headerHeight}px`,
      lineHeight: `${headerHeight}px`,
      width,
    }"
    :class="baseClassName"
  >
    <div :class="classNames">Header</div>
    <template #rightContent>
      <slot />
    </template>
  </a-layout-header>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from "vue";

const props = defineProps({
  headerHeight: {
    type: Number,
    default: 48,
  },
  prefix: {
    type: String,
    default: "app-root",
  },
});

const width = computed(() => "100%");
const baseClassName = `${props.prefix}-layout-header`;
const classNames = ref({
  [`${baseClassName}-left`]: true,
});
</script>

<style lang="less" scoped>
.@{prefix}-layout-header {
  background: @component-background;
  .@{prefix}-layout-header-left{
      flex: 1;
  }
}
</style>
