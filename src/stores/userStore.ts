import { defineStore } from "pinia"
import { ref } from "vue"
import { auth } from "@/firebase"
import { db } from "@/firebase"
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore"

export const useUserStore = defineStore("user", () => {
  const balance = ref(0)
  const portfolio = ref<any[]>([])
  const transactions = ref<any[]>([]) // 👈 historial

  async function loadUserData() {
    if (!auth.user) return
    const userRef = doc(db, "users", auth.user.uid)
    const userSnap = await getDoc(userRef)
    if (userSnap.exists()) {
      const data = userSnap.data()
      balance.value = data.balance || 0
      portfolio.value = data.portfolio || []
      transactions.value = data.transactions || []
    }
  }

  async function createUserDoc() {
    if (!auth.user) return
    const userRef = doc(db, "users", auth.user.uid)
    await setDoc(userRef, {
      balance: 10000,
      portfolio: [],
      transactions: [] // 👈 inicializamos vacío
    })
    balance.value = 10000
    portfolio.value = []
    transactions.value = []
  }

  async function buyStock(symbol: string, quantity: number, price: number) {
    if (!auth.user) return
    const cost = quantity * price
    if (balance.value < cost) throw new Error("Saldo insuficiente")

    balance.value -= cost
    const existing = portfolio.value.find(s => s.symbol === symbol)
    if (existing) {
      existing.quantity += quantity
      existing.value += cost
    } else {
      portfolio.value.push({ symbol, quantity, value: cost })
    }

    const transaction = {
      type: "COMPRA",
      symbol,
      quantity,
      price,
      total: cost,
      date: new Date().toISOString()
    }
    transactions.value.push(transaction)

    const userRef = doc(db, "users", auth.user.uid)
    await updateDoc(userRef, {
      balance: balance.value,
      portfolio: portfolio.value,
      transactions: arrayUnion(transaction) // 👈 guardamos en Firestore
    })
  }

  async function sellStock(symbol: string, quantity: number, price: number) {
    if (!auth.user) return
    const revenue = quantity * price
    const existing = portfolio.value.find(s => s.symbol === symbol)
    if (!existing || existing.quantity < quantity) throw new Error("Acciones insuficientes")

    existing.quantity -= quantity
    existing.value -= revenue
    if (existing.quantity === 0) {
      portfolio.value = portfolio.value.filter(s => s.symbol !== symbol)
    }

    balance.value += revenue

    const transaction = {
      type: "VENTA",
      symbol,
      quantity,
      price,
      total: revenue,
      date: new Date().toISOString()
    }
    transactions.value.push(transaction)

    const userRef = doc(db, "users", auth.user.uid)
    await updateDoc(userRef, {
      balance: balance.value,
      portfolio: portfolio.value,
      transactions: arrayUnion(transaction)
    })
  }

  return { balance, portfolio, transactions, loadUserData, createUserDoc, buyStock, sellStock }
})