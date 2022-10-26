<script setup lang="ts">
defineProps({
  height: {
    type: String,
    default: '300px'
  },
  blur: {
    type: String,
    default: '20px'
  },
  saturate: {
    type: String,
    default: '50%'
  },
  opacity: {
    type: Number,
    default: 0.3
  },
  defaultBgColor: {
    type: String
  },
  url: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div
    class="ground-glassbg"
    :style="{
      height,
      backgroundColor: defaultBgColor,
      backgroundImage: `url(${url})`
    }"
  >
    <div
      class="warp"
      :style="{
        backgroundColor: `rgba(0,0,0, ${opacity})`,
        backdropFilter: `blur(${blur}) saturate(${saturate})`
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ground-glassbg {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  .warp {
    width: 100%;
    height: 100%;
  }
}
</style>
