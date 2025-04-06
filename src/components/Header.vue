<script setup>
import { Settings, LogOut } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
const navigateTo = (path) => {
  router.push(path)
}

const logout = () => {
  alert('logout')
}
</script>

<template>
  <div
    class="sticky top-0 z-10 bg-gray-200 flex justify-between h-16 w-full border-b-2 shadow-sm py-2 px-4 border-gray-300"
  >
    <div><img class="w-12 h-12" src="../assets/logo.svg" alt="" /></div>
    <div class="mt-3 flex gap-4">
      <button>
        <Settings @click="navigateTo('/settings')"/>
      </button>
      <button>
        <LogOut @click="logout"/>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
