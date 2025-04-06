<script setup>
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
      <button @click="changeTab('change-password')">Change Password</button>
    </div>

    <div class="">
      <div v-if="activeTab == 'profile'">
        <div class="py-4 w-1/2 mx-auto">
          <h1 class="text-2xl py-4">Profile</h1>
          <form class="space-y-4">
            <div>
              <label for="first_name" class="block text-sm text-gray-800">First Name</label>
              <input
                v-model="user.first_name"
                type="text"
                class="rounded-lg px-4 py-2 border border-gray-600 shadow leading-6 w-full"
                placeholder="enter your firstname"
              />
              <small class="text-red-500"></small>
            </div>
            <div>
              <label for="last_name" class="block text-sm text-gray-800">Last Name</label>
              <input
                v-model="user.last_name"
                type="text"
                class="rounded-lg px-4 py-2 border border-gray-600 shadow leading-6 w-full"
                placeholder="enter your lastname"
              />
              <small class="text-red-500"></small>
            </div>
            <div>
              <label for="email" class="block text-sm text-gray-800">Email</label>
              <input
                v-model="user.email"
                type="email"
                class="rounded-lg px-4 py-2 border border-gray-600 shadow leading-6 w-full"
                placeholder="enter your email"
              />
            </div>
            <div class="text-center">
              <button
                type="button"
                @click="updateProfile"
                class="py-2 px-4 bg-blue-500 rounded text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      <div v-if="activeTab == 'change-password'">
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
              @click="changePassword"
              class="py-2 px-4 bg-blue-500 rounded text-white"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
