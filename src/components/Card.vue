<script setup>
import CardHeader from '@/Card/CardHeader.vue';
import CardFooter from '@/Card/CardFooter.vue';
import CardBody from '@/Card/CardBody.vue';
const {post} = defineProps(['post'])
</script>

<template>
    <div class="flex justify-center bg-gray-100">
      <div class="bg-white w-[90%] max-w-xl rounded-lg flex flex-col px-4 py-2 shadow-md">
        <CardHeader :post="post"/>
        <CardBody :post="post" />
        <CardFooter />
      </div>
    </div>
  </template>
  

<style lang="scss" scoped></style>
