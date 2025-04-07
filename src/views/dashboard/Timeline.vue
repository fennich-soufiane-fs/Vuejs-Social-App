<script setup>
import Card from '@/components/Card.vue';
import { usePostStore } from '@/stores/postStore';
import { ref } from 'vue';

const postStore = usePostStore()

postStore.getPosts()
</script>

<template>
    <Card v-for="post in postStore.posts" :post="post" :key="post.id" />
</template>


<style lang="scss" scoped>

</style>