import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
const email = ref('');
const password = ref('');
const error = ref(null);
const auth = useAuthStore();
const routerInstance = useRouter();
const handleLogin = async () => {
    try {
        error.value = null;
        await auth.login(email.value, password.value);
        routerInstance.push('/dashboard');
    }
    catch (err) {
        error.value = 'Credenciales incorrectas';
    }
};
const handleGoogleLogin = async () => {
    try {
        error.value = null;
        await auth.loginWithGoogle();
        routerInstance.push('/dashboard');
    }
    catch (err) {
        error.value = 'Error al iniciar con Google';
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
    ...{ class: "d-flex justify-center align-center" },
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "d-flex justify-center align-center" },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
const { default: __VLS_6 } = __VLS_3.slots;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components.vCard | typeof __VLS_components.VCard} */
vCard;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ class: "pa-6" },
    maxWidth: "400",
}));
const __VLS_9 = __VLS_8({
    ...{ class: "pa-6" },
    maxWidth: "400",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle | typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle} */
vCardTitle;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({
    ...{ class: "text-h5 text-center" },
}));
const __VLS_15 = __VLS_14({
    ...{ class: "text-h5 text-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
const { default: __VLS_18 } = __VLS_16.slots;
var __VLS_16;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText} */
vCardText;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({}));
const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_24 } = __VLS_22.slots;
let __VLS_25;
/** @ts-ignore @type {typeof __VLS_components.vForm | typeof __VLS_components.VForm | typeof __VLS_components.vForm | typeof __VLS_components.VForm} */
vForm;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    ...{ 'onSubmit': {} },
}));
const __VLS_27 = __VLS_26({
    ...{ 'onSubmit': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
let __VLS_30;
const __VLS_31 = ({ submit: {} },
    { onSubmit: (__VLS_ctx.handleLogin) });
const { default: __VLS_32 } = __VLS_28.slots;
let __VLS_33;
/** @ts-ignore @type {typeof __VLS_components.vTextField | typeof __VLS_components.VTextField} */
vTextField;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent1(__VLS_33, new __VLS_33({
    modelValue: (__VLS_ctx.email),
    label: "Correo electrónico",
    type: "email",
    required: true,
    prependIcon: "mdi-email",
}));
const __VLS_35 = __VLS_34({
    modelValue: (__VLS_ctx.email),
    label: "Correo electrónico",
    type: "email",
    required: true,
    prependIcon: "mdi-email",
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
let __VLS_38;
/** @ts-ignore @type {typeof __VLS_components.vTextField | typeof __VLS_components.VTextField} */
vTextField;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent1(__VLS_38, new __VLS_38({
    modelValue: (__VLS_ctx.password),
    label: "Contraseña",
    type: "password",
    required: true,
    prependIcon: "mdi-lock",
}));
const __VLS_40 = __VLS_39({
    modelValue: (__VLS_ctx.password),
    label: "Contraseña",
    type: "password",
    required: true,
    prependIcon: "mdi-lock",
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
let __VLS_43;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({
    type: "submit",
    color: "primary",
    ...{ class: "mt-4" },
    block: true,
    loading: (__VLS_ctx.auth.loading),
}));
const __VLS_45 = __VLS_44({
    type: "submit",
    color: "primary",
    ...{ class: "mt-4" },
    block: true,
    loading: (__VLS_ctx.auth.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
const { default: __VLS_48 } = __VLS_46.slots;
// @ts-ignore
[handleLogin, email, password, auth,];
var __VLS_46;
// @ts-ignore
[];
var __VLS_28;
var __VLS_29;
let __VLS_49;
/** @ts-ignore @type {typeof __VLS_components.vDivider | typeof __VLS_components.VDivider | typeof __VLS_components.vDivider | typeof __VLS_components.VDivider} */
vDivider;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent1(__VLS_49, new __VLS_49({
    ...{ class: "my-4" },
}));
const __VLS_51 = __VLS_50({
    ...{ class: "my-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
/** @type {__VLS_StyleScopedClasses['my-4']} */ ;
let __VLS_54;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
    ...{ 'onClick': {} },
    color: "red-darken-1",
    block: true,
}));
const __VLS_56 = __VLS_55({
    ...{ 'onClick': {} },
    color: "red-darken-1",
    block: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
let __VLS_59;
const __VLS_60 = ({ click: {} },
    { onClick: (__VLS_ctx.handleGoogleLogin) });
const { default: __VLS_61 } = __VLS_57.slots;
// @ts-ignore
[handleGoogleLogin,];
var __VLS_57;
var __VLS_58;
if (__VLS_ctx.error) {
    let __VLS_62;
    /** @ts-ignore @type {typeof __VLS_components.vAlert | typeof __VLS_components.VAlert | typeof __VLS_components.vAlert | typeof __VLS_components.VAlert} */
    vAlert;
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent1(__VLS_62, new __VLS_62({
        type: "error",
        ...{ class: "mt-4" },
        border: "start",
        prominent: true,
    }));
    const __VLS_64 = __VLS_63({
        type: "error",
        ...{ class: "mt-4" },
        border: "start",
        prominent: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    /** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
    const { default: __VLS_67 } = __VLS_65.slots;
    (__VLS_ctx.error);
    // @ts-ignore
    [error, error,];
    var __VLS_65;
}
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mt-4 text-center" },
});
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
let __VLS_68;
/** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
routerLink;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent1(__VLS_68, new __VLS_68({
    to: "/register",
}));
const __VLS_70 = __VLS_69({
    to: "/register",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
const { default: __VLS_73 } = __VLS_71.slots;
// @ts-ignore
[];
var __VLS_71;
// @ts-ignore
[];
var __VLS_22;
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
//# sourceMappingURL=LoginView.vue.js.map