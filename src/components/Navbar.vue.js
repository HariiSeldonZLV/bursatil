import { useAuthStore } from "@/stores/authStore";
const auth = useAuthStore();
const logout = async () => {
    await auth.logout();
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.vAppBar | typeof __VLS_components.VAppBar | typeof __VLS_components.vAppBar | typeof __VLS_components.VAppBar} */
vAppBar;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    app: true,
    color: "primary",
    dark: true,
}));
const __VLS_2 = __VLS_1({
    app: true,
    color: "primary",
    dark: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.vToolbarTitle | typeof __VLS_components.VToolbarTitle | typeof __VLS_components.vToolbarTitle | typeof __VLS_components.VToolbarTitle} */
vToolbarTitle;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ class: "font-weight-bold" },
}));
const __VLS_9 = __VLS_8({
    ...{ class: "font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
const { default: __VLS_12 } = __VLS_10.slots;
var __VLS_10;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.vSpacer | typeof __VLS_components.VSpacer} */
vSpacer;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({}));
const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
if (__VLS_ctx.auth.user) {
    let __VLS_18;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent1(__VLS_18, new __VLS_18({
        to: "/",
        text: true,
    }));
    const __VLS_20 = __VLS_19({
        to: "/",
        text: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    const { default: __VLS_23 } = __VLS_21.slots;
    // @ts-ignore
    [auth,];
    var __VLS_21;
    let __VLS_24;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
        to: "/market",
        text: true,
    }));
    const __VLS_26 = __VLS_25({
        to: "/market",
        text: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    const { default: __VLS_29 } = __VLS_27.slots;
    // @ts-ignore
    [];
    var __VLS_27;
    let __VLS_30;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
        to: "/news",
        text: true,
    }));
    const __VLS_32 = __VLS_31({
        to: "/news",
        text: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    const { default: __VLS_35 } = __VLS_33.slots;
    // @ts-ignore
    [];
    var __VLS_33;
    let __VLS_36;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
        to: "/transactions",
        text: true,
    }));
    const __VLS_38 = __VLS_37({
        to: "/transactions",
        text: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    const { default: __VLS_41 } = __VLS_39.slots;
    // @ts-ignore
    [];
    var __VLS_39;
    let __VLS_42;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({
        ...{ 'onClick': {} },
        text: true,
        color: "error",
    }));
    const __VLS_44 = __VLS_43({
        ...{ 'onClick': {} },
        text: true,
        color: "error",
    }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    let __VLS_47;
    const __VLS_48 = ({ click: {} },
        { onClick: (__VLS_ctx.logout) });
    const { default: __VLS_49 } = __VLS_45.slots;
    // @ts-ignore
    [logout,];
    var __VLS_45;
    var __VLS_46;
}
else {
    let __VLS_50;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
        to: "/login",
        text: true,
    }));
    const __VLS_52 = __VLS_51({
        to: "/login",
        text: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    const { default: __VLS_55 } = __VLS_53.slots;
    // @ts-ignore
    [];
    var __VLS_53;
    let __VLS_56;
    /** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
    vBtn;
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent1(__VLS_56, new __VLS_56({
        to: "/register",
        text: true,
    }));
    const __VLS_58 = __VLS_57({
        to: "/register",
        text: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    const { default: __VLS_61 } = __VLS_59.slots;
    // @ts-ignore
    [];
    var __VLS_59;
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=Navbar.vue.js.map