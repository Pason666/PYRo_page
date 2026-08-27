<script setup lang="ts">
import { computed } from 'vue'
import { VPTeamMembers } from 'vitepress/theme'
import { author } from '../../../public/member_list/members'

const props = defineProps<{
  name: string | string[]
}>()

// 处理 name 参数，支持字符串、数组、或 JSON 字符串格式
const authorMembers = computed(() => {
  let nameValue = props.name

  // 如果是字符串且看起来像数组（以 [ 开头），尝试解析为 JSON
  if (typeof nameValue === 'string' && nameValue.trim().startsWith('[')) {
    try {
      nameValue = JSON.parse(nameValue.replace(/'/g, '"'))
    } catch (e) {
      console.error('Author component: failed to parse name array', e)
    }
  }

  return author(nameValue)
})
</script>

<template>
  <div class="author-section">
    <h2>作者</h2>
    <VPTeamMembers size="small" :members="authorMembers" />
  </div>
</template>

<style scoped>
.author-section {
  margin-top: 3rem;
}
</style>
