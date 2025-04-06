<script setup>
const { passwordData, errors } = defineProps({ passwordData: Object, errors: Object })
const emits = defineEmits(['changePassword'])
const emitchangePassword = () => {
  emits('changePassword', passwordData)
}
</script>

<template>
  <div class="py-4 w-1/2 mx-auto">
    <h1 class="text-2xl py-4">Change Passsword</h1>
    <div class="pb-4">
      <label class="block text-sm text-gray-800">Current Password</label>
      <input
        v-model="passwordData.current_password"
        type="password"
        class="rounded-lg px-4 py-2 border border-gray-600 shadow leading-6 w-full"
        placeholder="Current Password"
      />
      <small class="text-red-500" v-if="errors.current_password">{{
        errors.current_password[0]
      }}</small>
    </div>
    <div class="pb-4">
      <label class="block text-sm text-gray-800">New Password</label>
      <input
        v-model="passwordData.password"
        type="password"
        class="rounded-lg px-4 py-2 border border-gray-600 shadow leading-6 w-full"
        placeholder="New Password"
      />
      <small class="text-red-500" v-if="errors.password">{{ errors.password[0] }}</small>
    </div>
    <div class="pb-4">
      <label class="block text-sm text-gray-800">Confirm New Password</label>
      <input
        v-model="passwordData.password_confirmation"
        type="password"
        class="rounded-lg px-4 py-2 border border-gray-600 shadow leading-6 w-full"
        placeholder="New Password Confirmation"
      />
      <small class="text-red-500"></small>
    </div>
    <div class="text-center">
      <button
        type="button"
        @click="emitchangePassword"
        class="py-2 px-4 bg-blue-500 rounded text-white"
      >
        Change Password
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
