<template>
  <div>
    <input v-model="username" placeholder="Usuario">
    <input v-model="password" type="password">
    <button @click="login">Login</button>

    <button @click="getProtectedData">Ver data protegida</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const token = ref('');

// Cambia esta URL a la de tu backend en Vercel
const API_URL = 'https://bursatil-backend.vercel.app';

async function login() {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: username.value, password: password.value })
  });

  const data = await res.json();
  if (res.ok) {
    token.value = data.token;
    localStorage.setItem('jwt', token.value);
    alert('Login exitoso');
  } else {
    alert(data.message);
  }
}

async function getProtectedData() {
  const token = localStorage.getItem('jwt');
  const res = await fetch(`${API_URL}/api/data`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });

  const data = await res.json();
  console.log(data);
  alert(JSON.stringify(data));
}
</script>