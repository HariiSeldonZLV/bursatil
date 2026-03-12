<template>
  <v-footer
    class="pa-6"
    height="auto"
    color="black"
  >
    <v-container>
      <v-row class="text-center text-md-start">

        <!-- LOGO / DESCRIPCIÓN -->
        <v-col cols="12" md="4">
          <h5 class="footer-title white--text">NotiMolina</h5>
          <p class="footer-text white--text">
            Portal independiente de noticias bursátiles y actualidad financiera.
          </p>
          <p>
            <a href="https://HariiSeldonZLV.github.io/maulenoticias2/"
               target="_blank"
               rel="noopener noreferrer"
               class="white--text text-decoration-none"
            >
              Ir a Portal Noticias Maule
            </a>
          </p>
        </v-col>

        <!-- CATEGORÍAS -->
        <v-col cols="12" md="4">
          <h5 class="footer-title white--text">Categorías</h5>
          <v-list dense nav>
            <v-list-item v-for="cat in categorias" :key="cat">
              <v-list-item-content>
                <v-list-item-title>
                  <a href="#" class="white--text text-decoration-none">{{ cat }}</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- CONTACTO -->
        <v-col cols="12" md="4">
          <h5 class="footer-title white--text">Contacto</h5>
          <p class="footer-text white--text">📍 Región del Maule</p>
          <p class="footer-text white--text">✉ contacto@notimolina.cl</p>
        </v-col>

      </v-row>

      <v-divider class="my-4" color="red lighten-1"></v-divider>

      <div class="text-center white--text" style="font-size:0.85rem;">
        © 2026 NotiMolina
      </div>

    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const categorias = ["Mercado", "Inversiones", "Criptomonedas", "Economía"];
</script>

<style scoped>
.footer-title {
  font-weight: bold;
  margin-bottom: 1rem;
}
.footer-text {
  margin-bottom: 0.5rem;
}
.text-decoration-none {
  text-decoration: none;
}
.text-decoration-none:hover {
  text-decoration: underline;
}
</style>