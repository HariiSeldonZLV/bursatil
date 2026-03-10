import { onMounted, ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";
import Portfolio from "@/components/Portfolio.vue";
const auth = useAuthStore();
const userStore = useUserStore();
const router = useRouter();
const loading = ref(true);
onMounted(async () => {
    try {
        if (auth.user) {
            await userStore.loadUserData();
        }
        else {
            router.push("/login");
        }
    }
    catch (err) {
        console.error("Error al cargar datos del usuario:", err);
    }
    finally {
        loading.value = false;
    }
});
const logout = async () => {
    await auth.logout();
    router.push("/login");
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
if (__VLS_ctx.loading) {
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
        ...{ class: "text-center" },
    }));
    const __VLS_15 = __VLS_14({
        cols: "12",
        ...{ class: "text-center" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    const { default: __VLS_18 } = __VLS_16.slots;
    let __VLS_19;
    /** @ts-ignore @type {typeof __VLS_components.vProgressCircular | typeof __VLS_components.VProgressCircular | typeof __VLS_components.vProgressCircular | typeof __VLS_components.VProgressCircular} */
    vProgressCircular;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
        indeterminate: true,
        color: "primary",
    }));
    const __VLS_21 = __VLS_20({
        indeterminate: true,
        color: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "mt-2" },
    });
    /** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
    // @ts-ignore
    [loading,];
    var __VLS_16;
    // @ts-ignore
    [];
    var __VLS_10;
}
else {
    let __VLS_24;
    /** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
    vRow;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
        justify: "center",
        ...{ class: "gap-6" },
    }));
    const __VLS_26 = __VLS_25({
        justify: "center",
        ...{ class: "gap-6" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    /** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
    const { default: __VLS_29 } = __VLS_27.slots;
    let __VLS_30;
    /** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
    vCol;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
        cols: "12",
        md: "5",
    }));
    const __VLS_32 = __VLS_31({
        cols: "12",
        md: "5",
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    const { default: __VLS_35 } = __VLS_33.slots;
    let __VLS_36;
    /** @ts-ignore @type {typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components.vCard | typeof __VLS_components.VCard} */
    vCard;
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent1(__VLS_36, new __VLS_36({
        ...{ class: "pa-4" },
    }));
    const __VLS_38 = __VLS_37({
        ...{ class: "pa-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    /** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
    const { default: __VLS_41 } = __VLS_39.slots;
    let __VLS_42;
    /** @ts-ignore @type {typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle | typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle} */
    vCardTitle;
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({
        ...{ class: "text-h6" },
    }));
    const __VLS_44 = __VLS_43({
        ...{ class: "text-h6" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    /** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
    const { default: __VLS_47 } = __VLS_45.slots;
    // @ts-ignore
    [];
    var __VLS_45;
    let __VLS_48;
    /** @ts-ignore @type {typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText} */
    vCardText;
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    const { default: __VLS_53 } = __VLS_51.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-h5 font-weight-bold text-success" },
    });
    /** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-success']} */ ;
    (__VLS_ctx.userStore.balance);
    // @ts-ignore
    [userStore,];
    var __VLS_51;
    // @ts-ignore
    [];
    var __VLS_39;
    // @ts-ignore
    [];
    var __VLS_33;
    let __VLS_54;
    /** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
    vCol;
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
        cols: "12",
        md: "5",
    }));
    const __VLS_56 = __VLS_55({
        cols: "12",
        md: "5",
    }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    const { default: __VLS_59 } = __VLS_57.slots;
    const __VLS_60 = Portfolio;
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({}));
    const __VLS_62 = __VLS_61({}, ...__VLS_functionalComponentArgsRest(__VLS_61));
    // @ts-ignore
    [];
    var __VLS_57;
    // @ts-ignore
    [];
    var __VLS_27;
}
let __VLS_65;
/** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
vRow;
// @ts-ignore
const __VLS_66 = __VLS_asFunctionalComponent1(__VLS_65, new __VLS_65({
    justify: "center",
    ...{ class: "mt-8" },
}));
const __VLS_67 = __VLS_66({
    justify: "center",
    ...{ class: "mt-8" },
}, ...__VLS_functionalComponentArgsRest(__VLS_66));
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
const { default: __VLS_70 } = __VLS_68.slots;
let __VLS_71;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_72 = __VLS_asFunctionalComponent1(__VLS_71, new __VLS_71({
    cols: "12",
    md: "10",
}));
const __VLS_73 = __VLS_72({
    cols: "12",
    md: "10",
}, ...__VLS_functionalComponentArgsRest(__VLS_72));
const { default: __VLS_76 } = __VLS_74.slots;
let __VLS_77;
/** @ts-ignore @type {typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components.vCard | typeof __VLS_components.VCard} */
vCard;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent1(__VLS_77, new __VLS_77({
    ...{ class: "pa-4" },
}));
const __VLS_79 = __VLS_78({
    ...{ class: "pa-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_78));
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
const { default: __VLS_82 } = __VLS_80.slots;
let __VLS_83;
/** @ts-ignore @type {typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle | typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle} */
vCardTitle;
// @ts-ignore
const __VLS_84 = __VLS_asFunctionalComponent1(__VLS_83, new __VLS_83({
    ...{ class: "text-h6" },
}));
const __VLS_85 = __VLS_84({
    ...{ class: "text-h6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_84));
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
const { default: __VLS_88 } = __VLS_86.slots;
// @ts-ignore
[];
var __VLS_86;
let __VLS_89;
/** @ts-ignore @type {typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText} */
vCardText;
// @ts-ignore
const __VLS_90 = __VLS_asFunctionalComponent1(__VLS_89, new __VLS_89({}));
const __VLS_91 = __VLS_90({}, ...__VLS_functionalComponentArgsRest(__VLS_90));
const { default: __VLS_94 } = __VLS_92.slots;
let __VLS_95;
/** @ts-ignore @type {typeof __VLS_components.vTable | typeof __VLS_components.VTable | typeof __VLS_components.vTable | typeof __VLS_components.VTable} */
vTable;
// @ts-ignore
const __VLS_96 = __VLS_asFunctionalComponent1(__VLS_95, new __VLS_95({}));
const __VLS_97 = __VLS_96({}, ...__VLS_functionalComponentArgsRest(__VLS_96));
const { default: __VLS_100 } = __VLS_98.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [t] of __VLS_vFor((__VLS_ctx.userStore.transactions))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (t.date + t.symbol),
        ...{ class: (t.type === 'COMPRA' ? 'text-success' : 'text-error') },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    (t.type);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    (t.symbol);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    (t.quantity);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    (t.price);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    (t.total);
    __VLS_asFunctionalElement1(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    (new Date(t.date).toLocaleString());
    // @ts-ignore
    [userStore,];
}
// @ts-ignore
[];
var __VLS_98;
// @ts-ignore
[];
var __VLS_92;
// @ts-ignore
[];
var __VLS_80;
// @ts-ignore
[];
var __VLS_74;
// @ts-ignore
[];
var __VLS_68;
let __VLS_101;
/** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
vRow;
// @ts-ignore
const __VLS_102 = __VLS_asFunctionalComponent1(__VLS_101, new __VLS_101({
    justify: "center",
    ...{ class: "mt-8" },
}));
const __VLS_103 = __VLS_102({
    justify: "center",
    ...{ class: "mt-8" },
}, ...__VLS_functionalComponentArgsRest(__VLS_102));
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
const { default: __VLS_106 } = __VLS_104.slots;
let __VLS_107;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_108 = __VLS_asFunctionalComponent1(__VLS_107, new __VLS_107({
    ...{ 'onClick': {} },
    color: "error",
}));
const __VLS_109 = __VLS_108({
    ...{ 'onClick': {} },
    color: "error",
}, ...__VLS_functionalComponentArgsRest(__VLS_108));
let __VLS_112;
const __VLS_113 = ({ click: {} },
    { onClick: (__VLS_ctx.logout) });
const { default: __VLS_114 } = __VLS_110.slots;
// @ts-ignore
[logout,];
var __VLS_110;
var __VLS_111;
// @ts-ignore
[];
var __VLS_104;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=DashboardView.vue.js.map