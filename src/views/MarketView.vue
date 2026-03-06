<template>
  <v-container class="mt-10">
    <h1 class="text-h4 text-center mb-6">Mercado</h1>

    <!-- Formulario de compra/venta -->
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title class="text-h6">Operar Acción</v-card-title>
          <v-card-text>
            <v-text-field v-model="symbol" label="Símbolo (ej: AAPL)" />
            <v-text-field v-model.number="quantity" label="Cantidad" type="number" />

            <v-btn color="primary" class="mt-4" @click="buy">Comprar</v-btn>
            <v-btn color="error" class="mt-4 ml-2" @click="sell">Vender</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Cotización actual -->
    <v-row justify="center" v-if="quote">
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title class="text-h6">Cotización Actual</v-card-title>
          <v-card-text>
            <p><strong>Símbolo:</strong> {{ symbol }}</p>
            <p><strong>Precio:</strong> ${{ quote.c }}</p>
            <p><strong>Máximo día:</strong> ${{ quote.h }}</p>
            <p><strong>Mínimo día:</strong> ${{ quote.l }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useUserStore } from "@/stores/userStore"
import { getQuote } from "@/services/finnhubService"

const userStore = useUserStore()

const symbol = ref("AAPL")
const quantity = ref(1)
const quote = ref<any>(null)

async function loadQuote() {
  if (!symbol.value) return
  quote.value = await getQuote(symbol.value)
}

async function buy() {
  await loadQuote()
  if (quote.value) {
    try {
      await userStore.buyStock(symbol.value, quantity.value, quote.value.c)
      alert(`Compra realizada: ${quantity.value} de ${symbol.value}`)
    } catch (err: any) {
      alert(err.message)
    }
  }
}

async function sell() {
  await loadQuote()
  if (quote.value) {
    try {
      await userStore.sellStock(symbol.value, quantity.value, quote.value.c)
      alert(`Venta realizada: ${quantity.value} de ${symbol.value}`)
    } catch (err: any) {
      alert(err.message)
    }
  }
}
</script>