<script setup>
import { reactive, ref } from 'vue'
import { register } from '@/services/auth_service'
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';

const user = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const router = useRouter()
const errors = ref({})
const handleRegister = async () => {
  try {
    const response = await register(user)
    toast.success('Account created!');
    user.first_name=""
    user.last_name=""
    user.email=""
    user.password=""
    user.password_confirmation=""
    setTimeout(() => {
      router.push('/login')
    }, 1000)

  } catch (error) {
    errors.value = error.response.data.errors
  }
}
</script>

<style scoped></style>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-2xl shadow-lg w-96">
      <h2 class="text-2xl font-bold text-center mb-6">Create Account</h2>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <!-- First Name -->
        <div>
          <input
            v-model="user.first_name"
            type="text"
            placeholder="First Name"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <small v-if="errors.first_name" class="text-red-500 text-sm">
            {{ errors.first_name[0] }}
          </small>
        </div>

        <!-- Last Name -->
        <div>
          <input
            v-model="user.last_name"
            type="text"
            placeholder="Last Name"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <small v-if="errors.last_name" class="text-red-500 text-sm">
            {{ errors.last_name[0] }}
          </small>
        </div>

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

        <!-- Password -->
        <div>
          <input
            v-model="user.password"
            type="password"
            placeholder="Password"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <small v-if="errors.password" class="text-red-500 text-sm">
            {{ errors.password[0] }}
          </small>
        </div>

        <!-- Confirm Password -->
        <div>
          <input
            v-model="user.password_confirmation"
            type="password"
            placeholder="Confirm Password"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Create Account
        </button>
      </form>
      <p class="mt-4 text-center">
        Déjà un compte ? 
        <router-link to="/login" class="text-blue-500 hover:text-blue-600">Se connecter</router-link>
      </p>
    </div>
  </div>
</template>


