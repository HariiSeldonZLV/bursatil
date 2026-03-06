<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card class="pa-6" max-width="400">
      <v-card-title class="text-h5 text-center">Iniciar Sesión</v-card-title>

      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="email"
            label="Correo electrónico"
            type="email"
            required
            prepend-icon="mdi-email"
          />

          <v-text-field
            v-model="password"
            label="Contraseña"
            type="password"
            required
            prepend-icon="mdi-lock"
          />

          <v-btn
            type="submit"
            color="primary"
            class="mt-4"
            block
            :loading="auth.loading"
          >
            Ingresar
          </v-btn>
        </v-form>

        <v-divider class="my-4"></v-divider>

        <v-btn color="red-darken-1" block @click="handleGoogleLogin">
          Iniciar con Google
        </v-btn>

        <v-alert
          v-if="error"
          type="error"
          class="mt-4"
          border="start"
          prominent
        >
          {{ error }}
        </v-alert>

        <p class="mt-4 text-center">
          ¿No tienes cuenta?
          <router-link to="/register">Regístrate aquí</router-link>
        </p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const email = ref('')
const password = ref('')
const error = ref<string | null>(null)

const auth = useAuthStore()
const routerInstance = useRouter()

const handleLogin = async () => {
  try {
    error.value = null
    await auth.login(email.value, password.value)
    routerInstance.push('/dashboard')
  } catch (err) {
    error.value = 'Credenciales incorrectas'
  }
}

const handleGoogleLogin = async () => {
  try {
    error.value = null
    await auth.loginWithGoogle()
    routerInstance.push('/dashboard')
  } catch (err) {
    error.value = 'Error al iniciar con Google'
  }
}
</script>