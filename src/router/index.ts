import { createRouter, createWebHistory } from "vue-router"
import DashboardView from "@/views/DashboardView.vue"
import TransactionsView from "@/views/TransactionsView.vue"
import MarketView from "@/views/MarketView.vue"
import NewsView from "@/views/NewsView.vue"
import LoginView from "@/views/LoginView.vue"
import RegisterView from "@/views/RegisterView.vue" // 👈 importa la vista de registro

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardView,
    meta: { requiresAuth: true }
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: TransactionsView,
    meta: { requiresAuth: true }
  },
  {
    path: "/market",
    name: "Market",
    component: MarketView,
    meta: { requiresAuth: true }
  },
  {
    path: "/news",
    name: "News",
    component: NewsView,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView
  },
  {
    path: "/register", // 👈 nueva ruta
    name: "Register",
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Middleware de autenticación
import { useAuthStore } from "@/stores/authStore"

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.user) {
    next("/login")
  } else {
    next()
  }
})

export default router