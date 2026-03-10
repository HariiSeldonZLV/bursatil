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
    }
    else {
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
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    placeholder: "Usuario",
});
(__VLS_ctx.username);
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    type: "password",
});
(__VLS_ctx.password);
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.login) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.getProtectedData) },
});
// @ts-ignore
[username, password, login, getProtectedData,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=Login.vue.js.map