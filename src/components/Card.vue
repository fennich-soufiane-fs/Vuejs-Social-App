<script setup>
import { ThumbsUp, MessageSquareDot, Share2 } from 'lucide-vue-next'
const {post} = defineProps(['post'])
import { useCommonStore } from '@/stores/commonStore';
const commonStore = useCommonStore()
</script>

<template>
    <div class="flex justify-center bg-gray-100">
      <div class="bg-white w-[90%] max-w-xl rounded-lg flex flex-col px-4 py-2 shadow-md">
        <div class="h-18 flex justify-start">
          <span class="w-12 h-12 bg-gray-400 rounded-full text-white flex justify-center items-center">
            HB
          </span>
          <div class="px-2 py-1 flex flex-col">
            <span class="font-semibold">{{post.text}}</span>
            <span class="text-gray-400 text-sm">2h ago</span>
          </div>
        </div>
  
        <div class="flex flex-col justify-center pt-4 pb-2 gap-2">
          <p class="text-sm">
            {{ post.text }}
          </p>
          <img class="rounded-lg" :src="commonStore.mediaUrl + post.image" alt="" />
        </div>
  
        <footer class="border flex justify-between my-4 p-2 border-l-0 border-r-0">
          <button class="flex gap-2 font-semibold">
            <ThumbsUp />
          </button>
          <button class="flex gap-2 font-semibold" @click="$emit('openCommentModal')">
            <MessageSquareDot />
          </button>
          <button class="flex gap-2 font-semibold">
            <Share2 />
            Share
          </button>
        </footer>
      </div>
    </div>
  </template>
  

<style lang="scss" scoped></style>
