<script setup>
import ChangePassword from '@/components/settings/ChangePassword.vue'
import Profile from '@/components/settings/Profile.vue'
import { useAuthStore } from '@/stores/AuthStore'
import { ref, reactive } from 'vue'
import { toast } from 'vue3-toastify'

const activeTab = ref('profile')
const changeTab = (tab) => {
  activeTab.value = tab
}

const authStore = useAuthStore()
const user = reactive(authStore.user)

const updateProfile = async () => {
  try {
    await authStore.handleUpdateProfile(user)
    toast.success('Profile updated')
  } catch (error) {}
}

const passwordData = reactive({
  current_password: '',
  password: '',
  password_confirmation: '',
})
const errors = ref({})
const changePassword = async () => {
  errors.value = {}
  try {
    await authStore.handleChangePassword(passwordData)
    toast.success('Password updated')
    passwordData.current_password = ''
    passwordData.password = ''
    passwordData.password_confirmation = ''
  } catch (error) {
    console.log(error)
    errors.value = error.response.data.errors
  }
}
</script>

<template>
  <div>
    <div class="flex justify-center gap-4 py-4 font-semibold">
      <button
        @click="changeTab('profile') && 'border-b-4 boder-gray-600'"
        :class="activeTab == 'profile' && 'border-b-4 border-gray-600'"
      >
        Profile
      </button>
      <button
        @click="changeTab('change-password')"
        :class="activeTab == 'change-password' && 'border-b-4 border-gray-600'"
      >
        Change Password
      </button>
    </div>

    <div v-if="activeTab == 'profile'">
      <Profile :user="user" @updateProfile="updateProfile" />
    </div>

    <div v-if="activeTab == 'change-password'">
      <ChangePassword
        :passwordData="passwordData"
        :errors="errors"
        @changePassword="changePassword"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
