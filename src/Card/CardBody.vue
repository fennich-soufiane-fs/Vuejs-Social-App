<script setup>
import { useCommonStore } from '@/stores/commonStore';
const commonStore = useCommonStore()
const {post} = defineProps(['post'])
</script>

<template>
  <div class="flex flex-col justify-center pt-4 pb-2 gap-2">
    <p class="text-sm">
      {{ post.text }}
    </p>
    <img class="rounded-lg" :src="commonStore.mediaUrl + post.image" alt="" />
  </div>
</template>

<style lang="scss" scoped></style>
