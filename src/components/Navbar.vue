<template>
  <v-app-bar app color="primary" dark>
    <!-- Logo o título -->
    <v-toolbar-title class="font-weight-bold">Mi App Financiera</v-toolbar-title>

    <v-spacer />

    <!-- Links de navegación (solo si hay sesión) -->
    <template v-if="auth.user">
      <v-btn to="/" text>Dashboard</v-btn>
      <v-btn to="/market" text>Mercado</v-btn>
      <v-btn to="/news" text>Noticias</v-btn>
      <v-btn to="/transactions" text>Transacciones</v-btn>
      <v-btn text color="error" @click="logout">Logout</v-btn>
    </template>

    <!-- Si no hay sesión -->
    <template v-else>
      <v-btn to="/login" text>Login</v-btn>
      <v-btn to="/register" text>Register</v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore"

const auth = useAuthStore()

const logout = async () => {
  await auth.logout()
}
</script>