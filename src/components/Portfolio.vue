<template>
  <v-container class="mt-10">
    <h2 class="text-h5 mb-4 text-center">Mi Portafolio</h2>

    <v-card class="pa-4" outlined>
      <v-card-text>
        <div v-if="portfolio.length === 0">
          No tienes acciones en tu portafolio.
        </div>

        <v-list v-else>
          <v-list-item
            v-for="(stock, index) in portfolio"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ stock.symbol }} - {{ stock.quantity }} acciones
              </v-list-item-title>
              <v-list-item-subtitle>
                Valor actual: {{ stock.value ? stock.value.toFixed(2) : 'N/A' }} USD
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Aquí podrías integrar tu store o API para obtener datos reales
const portfolio = ref<any[]>([])

onMounted(() => {
  // Ejemplo estático (puedes reemplazar con datos de Firestore o tu API)
  portfolio.value = [
    { symbol: 'AAPL', quantity: 10, value: 175.32 },
    { symbol: 'TSLA', quantity: 5, value: 210.45 },
    { symbol: 'SQM', quantity: 20, value: 95.12 },
  ]
})
</script>