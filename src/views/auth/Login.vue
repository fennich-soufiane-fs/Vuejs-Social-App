<script setup>
import { reactive, ref } from 'vue'
import { toast } from 'vue3-toastify'
import { useRouter } from 'vue-router'
import { login } from '@/services/auth_service'
import { useAuthStore } from '@/stores/AuthStore'

const authStore = useAuthStore()
const router = useRouter()
const user = reactive({
  email: '',
  password: '',
})
const errors = ref({})

const handleLogin = async () => {
  try {
    const response = await login(user)
    console.log(response)
    if (response?.data?.user && response?.data?.access_token) {
      authStore?.setUser(response?.data?.user)
      authStore?.setToken(response.data.access_token)
      toast.success('Logging successfully!')
      router.push('/timeline')
      user.email = ''
      user.password = ''
    }
  } catch (error) {
    if (error?.response?.data?.errors) {
      errors.value = error.response.data.errors
      console.log(errors.value)
    } else if (error?.response?.data?.message) {
      errors.value = { general: error.response.data.message }
    } else {
      errors.value = { general: 'Une erreur inconnue est survenue.' }
    }
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-2xl shadow-lg w-96">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-700">Sign in to your account</h2>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Email -->
        <div>
          <input
            v-model="user.email"
            type="email"
            placeholder="Email"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <small v-if="errors.email && errors.email.length > 0" class="text-red-500 text-sm">
            {{ errors.email[0] }}
          </small>
        </div>

        <!-- Mot de passe -->
        <div>
          <input
            v-model="user.password"
            type="password"
            placeholder="Mot de passe"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <small v-if="errors.password" class="text-red-500 text-sm">
            {{ errors.password[0] }}
          </small>
        </div>
        <small v-if="errors.general" class="block text-red-500 text-sm text-center mb-2">
          {{ errors.general }}
        </small>
        <!-- Bouton de connexion -->
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Se connecter
        </button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
