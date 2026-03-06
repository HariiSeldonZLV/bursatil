import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from '@/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any>(null)
  const loading = ref(false)

  async function login(email: string, password: string) {
    loading.value = true
    const cred = await signInWithEmailAndPassword(auth, email, password)
    user.value = cred.user
    loading.value = false
  }

  async function register(email: string, password: string) {
    loading.value = true
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    user.value = cred.user
    loading.value = false
  }

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider()
    const cred = await signInWithPopup(auth, provider)
    user.value = cred.user
  }

  async function logout() {
    await signOut(auth)
    user.value = null
  }

  return { user, loading, login, register, loginWithGoogle, logout }
})