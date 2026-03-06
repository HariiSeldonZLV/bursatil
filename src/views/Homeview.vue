<template>
  <v-container class="text-center mt-12">
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-h3 mb-4">Simulador Bursátil</h1>
        <p class="text-subtitle-1 mb-6">
          Bienvenido a tu plataforma de inversión simulada.
        </p>
      </v-col>

      <v-col cols="12">
        <v-btn class="ma-2" color="primary" to="/market">Ver Mercado</v-btn>
        <v-btn class="ma-2" color="primary" to="/news">Noticias</v-btn>
        <v-btn class="ma-2" color="primary" to="/login">Iniciar Sesión</v-btn>
        <v-btn class="ma-2" color="secondary" to="/register">Registrarse</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
</script>