import { computed, ref, onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const filterType = ref("TODAS");
const page = ref(1);
const itemsPerPage = 5;
onMounted(async () => {
    await userStore.loadUserData();
});
const filteredTransactions = computed(() => {
    if (filterType.value === "TODAS")
        return userStore.transactions;
    return userStore.transactions.filter(t => t.type === filterType.value);
});
const totalPages = computed(() => Math.ceil(filteredTransactions.value.length / itemsPerPage));
const paginatedTransactions = computed(() => {
    const start = (page.value - 1) * itemsPerPage;
    return filteredTransactions.value.slice(start, start + itemsPerPage);
});
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
    ...{ class: "mb-6" },
}));
const __VLS_9 = __VLS_8({
    justify: "center",
    ...{ class: "mb-6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
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
/** @ts-ignore @type {typeof __VLS_components.vSelect | typeof __VLS_components.VSelect} */
vSelect;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    modelValue: (__VLS_ctx.filterType),
    items: (['TODAS', 'COMPRA', 'VENTA']),
    label: "Filtrar por tipo",
}));
const __VLS_21 = __VLS_20({
    modelValue: (__VLS_ctx.filterType),
    items: (['TODAS', 'COMPRA', 'VENTA']),
    label: "Filtrar por tipo",
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
// @ts-ignore
[filterType,];
var __VLS_16;
// @ts-ignore
[];
var __VLS_10;
let __VLS_24;
/** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
vRow;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    justify: "center",
}));
const __VLS_26 = __VLS_25({
    justify: "center",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
const { default: __VLS_29 } = __VLS_27.slots;
let __VLS_30;
/** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
vCol;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
    cols: "12",
    md: "10",
}));
const __VLS_32 = __VLS_31({
    cols: "12",
    md: "10",
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
/** @ts-ignore @type {typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText} */
vCardText;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({}));
const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
const { default: __VLS_47 } = __VLS_45.slots;
let __VLS_48;
/** @ts-ignore @type {typeof __VLS_components.vTable | typeof __VLS_components.VTable | typeof __VLS_components.vTable | typeof __VLS_components.VTable} */
vTable;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent1(__VLS_48, new __VLS_48({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const { default: __VLS_53 } = __VLS_51.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.th, __VLS_intrinsics.th)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({});
for (const [t] of __VLS_vFor((__VLS_ctx.paginatedTransactions))) {
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
    [paginatedTransactions,];
}
// @ts-ignore
[];
var __VLS_51;
// @ts-ignore
[];
var __VLS_45;
let __VLS_54;
/** @ts-ignore @type {typeof __VLS_components.vCardActions | typeof __VLS_components.VCardActions | typeof __VLS_components.vCardActions | typeof __VLS_components.VCardActions} */
vCardActions;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent1(__VLS_54, new __VLS_54({
    ...{ class: "justify-center" },
}));
const __VLS_56 = __VLS_55({
    ...{ class: "justify-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
const { default: __VLS_59 } = __VLS_57.slots;
let __VLS_60;
/** @ts-ignore @type {typeof __VLS_components.vPagination | typeof __VLS_components.VPagination} */
vPagination;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({
    modelValue: (__VLS_ctx.page),
    length: (__VLS_ctx.totalPages),
    color: "primary",
}));
const __VLS_62 = __VLS_61({
    modelValue: (__VLS_ctx.page),
    length: (__VLS_ctx.totalPages),
    color: "primary",
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
// @ts-ignore
[page, totalPages,];
var __VLS_57;
// @ts-ignore
[];
var __VLS_39;
// @ts-ignore
[];
var __VLS_33;
// @ts-ignore
[];
var __VLS_27;
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=TransactionsView.vue.js.map