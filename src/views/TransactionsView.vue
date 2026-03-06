<template>
  <v-container class="mt-10">
    <h1 class="text-h4 text-center mb-6">Historial de Transacciones</h1>

    <!-- Filtros -->
    <v-row justify="center" class="mb-6">
      <v-col cols="12" md="6">
        <v-select
          v-model="filterType"
          :items="['TODAS', 'COMPRA', 'VENTA']"
          label="Filtrar por tipo"
        />
      </v-col>
    </v-row>

    <!-- Tabla de transacciones -->
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-4">
          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Símbolo</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="t in paginatedTransactions"
                  :key="t.date + t.symbol"
                  :class="t.type === 'COMPRA' ? 'text-success' : 'text-error'"
                >
                  <td>{{ t.type }}</td>
                  <td>{{ t.symbol }}</td>
                  <td>{{ t.quantity }}</td>
                  <td>${{ t.price }}</td>
                  <td>${{ t.total }}</td>
                  <td>{{ new Date(t.date).toLocaleString() }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>

          <!-- Paginación -->
          <v-card-actions class="justify-center">
            <v-pagination
              v-model="page"
              :length="totalPages"
              color="primary"
            />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue"
import { useUserStore } from "@/stores/userStore"

const userStore = useUserStore()
const filterType = ref("TODAS")
const page = ref(1)
const itemsPerPage = 5

onMounted(async () => {
  await userStore.loadUserData()
})

const filteredTransactions = computed(() => {
  if (filterType.value === "TODAS") return userStore.transactions
  return userStore.transactions.filter(t => t.type === filterType.value)
})

const totalPages = computed(() =>
  Math.ceil(filteredTransactions.value.length / itemsPerPage)
)

const paginatedTransactions = computed(() => {
  const start = (page.value - 1) * itemsPerPage
  return filteredTransactions.value.slice(start, start + itemsPerPage)
})
</script>

<style scoped>
.text-success {
  color: #2e7d32; /* verde para compras */
}
.text-error {
  color: #c62828; /* rojo para ventas */
}
</style>