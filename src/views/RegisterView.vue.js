import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { useUserStore } from "@/stores/userStore";
const email = ref("");
const password = ref("");
const error = ref("");
const success = ref("");
const router = useRouter();
const auth = useAuthStore();
const userStore = useUserStore();
const register = async () => {
    error.value = "";
    success.value = "";
    try {
        await auth.register(email.value, password.value);
        await userStore.createUserDoc();
        success.value = "Registro exitoso. Redirigiendo...";
        setTimeout(() => router.push("/"), 1500);
    }
    catch (err) {
        error.value = err.message || "Error al registrar usuario";
    }
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vContainer | typeof __VLS_components.VContainer | typeof __VLS_components.vContainer | typeof __VLS_components.VContainer} */
vContainer;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "mt-10" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "mt-10" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
/** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
const { default: __VLS_6 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "text-h4 text-center mb-6" },
});
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
vRow;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    justify: "center",
}));
const __VLS_9 = __VLS_8({
    justify: "center",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    cols: "12",
    md: "6",
}));
const __VLS_15 = __VLS_14({
    cols: "12",
    md: "6",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const { default: __VLS_18 } = __VLS_16.slots;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components.vCard | typeof __VLS_components.VCard} */
vCard;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    ...{ class: "pa-4" },
}));
const __VLS_21 = __VLS_20({
    ...{ class: "pa-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
const { default: __VLS_24 } = __VLS_22.slots;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText} */
vCardText;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
const { default: __VLS_30 } = __VLS_28.slots;
let __VLS_31;
/** @ts-ignore @type {typeof __VLS_components.vTextField | typeof __VLS_components.VTextField} */
vTextField;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({
    modelValue: (__VLS_ctx.email),
    label: "Correo electrónico",
    type: "email",
}));
const __VLS_33 = __VLS_32({
    modelValue: (__VLS_ctx.email),
    label: "Correo electrónico",
    type: "email",
}, ...__VLS_functionalComponentArgsRest(__VLS_32));
let __VLS_36;
/** @ts-ignore @type {typeof __VLS_components.vTextField | typeof __VLS_components.VTextField} */
vTextField;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
    modelValue: (__VLS_ctx.password),
    label: "Contraseña",
    type: "password",
}));
const __VLS_38 = __VLS_37({
    modelValue: (__VLS_ctx.password),
    label: "Contraseña",
    type: "password",
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
let __VLS_41;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent1(__VLS_41, new __VLS_41({
    ...{ 'onClick': {} },
    color: "primary",
    ...{ class: "mt-4" },
}));
const __VLS_43 = __VLS_42({
    ...{ 'onClick': {} },
    color: "primary",
    ...{ class: "mt-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
let __VLS_46;
const __VLS_47 = ({ click: {} },
    { onClick: (__VLS_ctx.register) });
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
const { default: __VLS_48 } = __VLS_44.slots;
// @ts-ignore
[email, password, register,];
var __VLS_44;
var __VLS_45;
// @ts-ignore
[];
var __VLS_28;
// @ts-ignore
[];
var __VLS_22;
if (__VLS_ctx.error) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-error mt-4" },
    });
    /** @type {__VLS_StyleScopedClasses['text-error']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
    (__VLS_ctx.error);
}
if (__VLS_ctx.success) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-success mt-4" },
    });
    /** @type {__VLS_StyleScopedClasses['text-success']} */ ;
    /** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
    (__VLS_ctx.success);
}
// @ts-ignore
[error, error, success, success,];
var __VLS_16;
// @ts-ignore
[];
var __VLS_10;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=RegisterView.vue.js.map