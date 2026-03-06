<template>
  <v-container class="mt-10">
    <h1 class="text-h4 text-center mb-6">Mercado Bursátil</h1>

    <v-data-table
      :headers="headers"
      :items="stocks"
      class="elevation-1"
      :loading="loading"
      loading-text="Cargando cotizaciones..."
    >
      <template v-slot:item.price="{ item }">
        {{ item.price ? item.price.toFixed(2) : 'N/A' }} USD
      </template>
      <template v-slot:item.high="{ item }">
        {{ item.high ? item.high.toFixed(2) : 'N/A' }} USD
      </template>
      <template v-slot:item.low="{ item }">
        {{ item.low ? item.low.toFixed(2) : 'N/A' }} USD
      </template>
    </v-data-table>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getQuote } from '@/services/finnhubService'

const headers = [
  { text: 'Acción', value: 'symbol' },
  { text: 'Precio', value: 'price' },
  { text: 'Máximo día', value: 'high' },
  { text: 'Mínimo día', value: 'low' },
]

const symbols = ['AAPL', 'TSLA', 'MSFT', 'AMZN', 'SQM']
const stocks = ref<any[]>([])
const loading = ref(true)

async function loadData() {
  try {
    stocks.value = await Promise.all(
      symbols.map(async (symbol) => {
        const quote = await getQuote(symbol)
        return {
          symbol,
          price: quote.c,
          high: quote.h,
          low: quote.l,
        }
      })
    )
  } catch (err) {
    console.error('Error al cargar cotizaciones:', err)
  } finally {
    loading.value = false
  }
}

onMounted(loadData)
</script>