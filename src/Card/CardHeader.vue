<script setup>
import { computed } from 'vue'  
const {post} = defineProps(['post'])
import { timeAgo } from '@/composables/moment';


const text = computed(() => {
  // je dois returner return post.user.first_name + " " + post.user.laste_name
  // mais j'ai pas les donnée complet dans l'api
  return post.text 
})
</script>

<template>
  <div class="h-18 flex justify-start">
    <span class="w-12 h-12 bg-gray-400 rounded-full text-white flex justify-center items-center">
      HB
    </span>
    <div class="px-2 py-1 flex flex-col">
      <span class="font-semibold">{{ text }}</span>
      <span class="text-gray-400 text-sm">{{ timeAgo(post.created_at) }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
