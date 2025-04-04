<script setup>
import { reactive, ref } from 'vue'
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router'
import { login } from '@/services/auth_service'

const user = reactive({
  email: '',
  password: '',
})
const errors = ref({})

const handleLogin = async () => {
  try {
    const response = await login(user)
    toast.success('Logging successfully!')
    user.email = ''
    user.password = ''
  } catch (error) {
    errors.value = error.response.data.errors
    console.log(error)
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
          <small v-if="errors.email" class="text-red-500 text-sm">
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
