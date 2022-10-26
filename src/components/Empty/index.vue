<script lang="ts" setup>
import { type PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'course' | 'message' | 'person'>,
    default: 'course'
  },
  width: {
    type: String,
    default: '80px'
  },
  description: {
    type: String,
    default: '暂无相关内容'
  }
})

const getImageUrl = (name: string): string => {
  return new URL(`../../../assets/img/empty/${name}.png`, import.meta.url).href
}

const imageMap = reactive({
  course: getImageUrl('empty_course'),
  message: getImageUrl('empty_message'),
  person: getImageUrl('empty_person')
})

const image = computed(() => imageMap[props.type])
</script>

<template>
  <div class="empty">
    <img class="empty__image" :style="{ width }" :src="image" />
    <div class="empty__description">{{ description }}</div>
  </div>
</template>

<style lang="scss" scoped>
.empty {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  margin: auto;
  &__image {
    display: block;
  }
  &__description {
    margin-top: 10px;
    font-size: 12px;
    color: #666;
  }
}
</style>
