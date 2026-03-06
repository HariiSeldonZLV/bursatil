<template>
  <v-container class="mt-10">
    <h1 class="text-h4 text-center mb-6">Dashboard</h1>

    <!-- Loader -->
    <v-row justify="center" v-if="loading">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
        <p class="mt-2">Cargando datos...</p>
      </v-col>
    </v-row>

    <!-- Contenido -->
    <v-row v-else justify="center" class="gap-6">
      <!-- Saldo disponible -->
      <v-col cols="12" md="5">
        <v-card class="pa-4">
          <v-card-title class="text-h6">Saldo Disponible</v-card-title>
          <v-card-text>
            <p class="text-h5 font-weight-bold text-success">
              ${{ userStore.balance }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Portafolio -->
      <v-col cols="12" md="5">
        <Portfolio />
      </v-col>
    </v-row>

    <!-- Historial de transacciones -->
    <v-row justify="center" class="mt-8">
      <v-col cols="12" md="10">
        <v-card class="pa-4">
          <v-card-title class="text-h6">Historial de Transacciones</v-card-title>
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
                  v-for="t in userStore.transactions"
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
        </v-card>
      </v-col>
    </v-row>

    <!-- Botón cerrar sesión -->
    <v-row justify="center" class="mt-8">
      <v-btn color="error" @click="logout">Cerrar Sesión</v-btn>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useAuthStore } from "@/stores/authStore"
import { useUserStore } from "@/stores/userStore"
import { useRouter } from "vue-router"
import Portfolio from "@/components/Portfolio.vue"

const auth = useAuthStore()
const userStore = useUserStore()
const router = useRouter()

const loading = ref(true)

onMounted(async () => {
  try {
    if (auth.user) {
      await userStore.loadUserData()
    } else {
      router.push("/login")
    }
  } catch (err) {
    console.error("Error al cargar datos del usuario:", err)
  } finally {
    loading.value = false
  }
})

const logout = async () => {
  await auth.logout()
  router.push("/login")
}
</script>

<style scoped>
.text-success {
  color: #2e7d32; /* verde para compras */
}
.text-error {
  color: #c62828; /* rojo para ventas */
}
</style>