<template>
  <v-container class="mt-10">
    <h1 class="text-h4 text-center mb-6">Registro</h1>

    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-text>
            <v-text-field v-model="email" label="Correo electrónico" type="email" />
            <v-text-field v-model="password" label="Contraseña" type="password" />

            <v-btn color="primary" class="mt-4" @click="register">
              Registrarse
            </v-btn>
          </v-card-text>
        </v-card>

        <div v-if="error" class="text-error mt-4">{{ error }}</div>
        <div v-if="success" class="text-success mt-4">{{ success }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "@/stores/authStore"
import { useUserStore } from "@/stores/userStore"

const email = ref("")
const password = ref("")
const error = ref("")
const success = ref("")
const router = useRouter()

const auth = useAuthStore()
const userStore = useUserStore()

const register = async () => {
  error.value = ""
  success.value = ""
  try {
    await auth.register(email.value, password.value)
    await userStore.createUserDoc()
    success.value = "Registro exitoso. Redirigiendo..."
    setTimeout(() => router.push("/"), 1500)
  } catch (err: any) {
    error.value = err.message || "Error al registrar usuario"
  }
}
</script>