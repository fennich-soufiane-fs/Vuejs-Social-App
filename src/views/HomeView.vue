<script setup>
import { useCounterStore } from '../stores/commonStore.js'
const store = useCounterStore()
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold underline">{{store.test}}</h1>
  </main>
</template>
