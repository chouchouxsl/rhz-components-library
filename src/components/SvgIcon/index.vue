<script setup lang="ts">
import { computed } from 'vue'
import type { Component } from 'vue'

const props = defineProps({
  name: {
    required: true,
    type: String
  },
  size: {
    type: [String, Number],
    default: '1em'
  },
  color: {
    type: String,
    default: '#777777'
  },
  iconClass: String
})

const transfromSize = computed(() =>
  typeof props.size === 'number' ? `${props.size}px` : props.size
)

const modules = import.meta.globEager('@/assets/icons/*.svg', {
  as: 'component'
})
const currentComponent = computed<Component>(() => {
  const fileName = `/${props.name}.svg`
  // eslint-disable-next-line no-restricted-syntax
  for (const path in modules) {
    const mod = modules[path]
    if (path.endsWith(fileName)) {
      return mod as Component
    }
  }
  throw new Error(`not found svg file:${fileName}`)
})
</script>

<template>
  <component
    :is="currentComponent"
    class="svg-icon"
    :class="iconClass"
    :color="color"
    :width="transfromSize"
    :height="transfromSize"
  />
</template>

<style scoped lang="scss">
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;

  &.m-l {
    margin-left: 7px;
  }

  &.m-r {
    margin-right: 7px;
  }

  &.cursor {
    cursor: pointer;
    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
