<template>
  <v-app>
    <Navbar />

    <v-main class="app-background pa-6">
      <router-view />
    </v-main>

    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue"; // Importamos el nuevo footer
</script>

<style>
/* Estilos globales opcionales */
html, body, #app {
  height: 100%;
  margin: 0;
}
</style>
