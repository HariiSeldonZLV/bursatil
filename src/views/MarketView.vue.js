import { ref } from "vue";
import { useUserStore } from "@/stores/userStore";
import { getQuote } from "@/services/finnhubService";
const userStore = useUserStore();
const symbol = ref("AAPL");
const quantity = ref(1);
const quote = ref(null);
async function loadQuote() {
    if (!symbol.value)
        return;
    quote.value = await getQuote(symbol.value);
}
async function buy() {
    await loadQuote();
    if (quote.value) {
        try {
            await userStore.buyStock(symbol.value, quantity.value, quote.value.c);
            alert(`Compra realizada: ${quantity.value} de ${symbol.value}`);
        }
        catch (err) {
            alert(err.message);
        }
    }
}
async function sell() {
    await loadQuote();
    if (quote.value) {
        try {
            await userStore.sellStock(symbol.value, quantity.value, quote.value.c);
            alert(`Venta realizada: ${quantity.value} de ${symbol.value}`);
        }
        catch (err) {
            alert(err.message);
        }
    }
}
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
/** @ts-ignore @type {typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle | typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle} */
vCardTitle;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
    ...{ class: "text-h6" },
}));
const __VLS_27 = __VLS_26({
    ...{ class: "text-h6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
const { default: __VLS_30 } = __VLS_28.slots;
var __VLS_28;
let __VLS_31;
/** @ts-ignore @type {typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText} */
vCardText;
// @ts-ignore
const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({}));
const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
const { default: __VLS_36 } = __VLS_34.slots;
let __VLS_37;
/** @ts-ignore @type {typeof __VLS_components.vTextField | typeof __VLS_components.VTextField} */
vTextField;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({
    modelValue: (__VLS_ctx.symbol),
    label: "Símbolo (ej: AAPL)",
}));
const __VLS_39 = __VLS_38({
    modelValue: (__VLS_ctx.symbol),
    label: "Símbolo (ej: AAPL)",
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
let __VLS_42;
/** @ts-ignore @type {typeof __VLS_components.vTextField | typeof __VLS_components.VTextField} */
vTextField;
// @ts-ignore
const __VLS_43 = __VLS_asFunctionalComponent1(__VLS_42, new __VLS_42({
    modelValue: (__VLS_ctx.quantity),
    modelModifiers: { number: true, },
    label: "Cantidad",
    type: "number",
}));
const __VLS_44 = __VLS_43({
    modelValue: (__VLS_ctx.quantity),
    modelModifiers: { number: true, },
    label: "Cantidad",
    type: "number",
}, ...__VLS_functionalComponentArgsRest(__VLS_43));
let __VLS_47;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent1(__VLS_47, new __VLS_47({
    ...{ 'onClick': {} },
    color: "primary",
    ...{ class: "mt-4" },
}));
const __VLS_49 = __VLS_48({
    ...{ 'onClick': {} },
    color: "primary",
    ...{ class: "mt-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_48));
let __VLS_52;
const __VLS_53 = ({ click: {} },
    { onClick: (__VLS_ctx.buy) });
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
const { default: __VLS_54 } = __VLS_50.slots;
// @ts-ignore
[symbol, quantity, buy,];
var __VLS_50;
var __VLS_51;
let __VLS_55;
/** @ts-ignore @type {typeof __VLS_components.vBtn | typeof __VLS_components.VBtn | typeof __VLS_components.vBtn | typeof __VLS_components.VBtn} */
vBtn;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
    ...{ 'onClick': {} },
    color: "error",
    ...{ class: "mt-4 ml-2" },
}));
const __VLS_57 = __VLS_56({
    ...{ 'onClick': {} },
    color: "error",
    ...{ class: "mt-4 ml-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
let __VLS_60;
const __VLS_61 = ({ click: {} },
    { onClick: (__VLS_ctx.sell) });
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
const { default: __VLS_62 } = __VLS_58.slots;
// @ts-ignore
[sell,];
var __VLS_58;
var __VLS_59;
// @ts-ignore
[];
var __VLS_34;
// @ts-ignore
[];
var __VLS_22;
// @ts-ignore
[];
var __VLS_16;
// @ts-ignore
[];
var __VLS_10;
if (__VLS_ctx.quote) {
    let __VLS_63;
    /** @ts-ignore @type {typeof __VLS_components.vRow | typeof __VLS_components.VRow | typeof __VLS_components.vRow | typeof __VLS_components.VRow} */
    vRow;
    // @ts-ignore
    const __VLS_64 = __VLS_asFunctionalComponent1(__VLS_63, new __VLS_63({
        justify: "center",
    }));
    const __VLS_65 = __VLS_64({
        justify: "center",
    }, ...__VLS_functionalComponentArgsRest(__VLS_64));
    const { default: __VLS_68 } = __VLS_66.slots;
    let __VLS_69;
    /** @ts-ignore @type {typeof __VLS_components.vCol | typeof __VLS_components.VCol | typeof __VLS_components.vCol | typeof __VLS_components.VCol} */
    vCol;
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent1(__VLS_69, new __VLS_69({
        cols: "12",
        md: "6",
    }));
    const __VLS_71 = __VLS_70({
        cols: "12",
        md: "6",
    }, ...__VLS_functionalComponentArgsRest(__VLS_70));
    const { default: __VLS_74 } = __VLS_72.slots;
    let __VLS_75;
    /** @ts-ignore @type {typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components.vCard | typeof __VLS_components.VCard} */
    vCard;
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent1(__VLS_75, new __VLS_75({
        ...{ class: "pa-4" },
    }));
    const __VLS_77 = __VLS_76({
        ...{ class: "pa-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_76));
    /** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
    const { default: __VLS_80 } = __VLS_78.slots;
    let __VLS_81;
    /** @ts-ignore @type {typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle | typeof __VLS_components.vCardTitle | typeof __VLS_components.VCardTitle} */
    vCardTitle;
    // @ts-ignore
    const __VLS_82 = __VLS_asFunctionalComponent1(__VLS_81, new __VLS_81({
        ...{ class: "text-h6" },
    }));
    const __VLS_83 = __VLS_82({
        ...{ class: "text-h6" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_82));
    /** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
    const { default: __VLS_86 } = __VLS_84.slots;
    // @ts-ignore
    [quote,];
    var __VLS_84;
    let __VLS_87;
    /** @ts-ignore @type {typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText} */
    vCardText;
    // @ts-ignore
    const __VLS_88 = __VLS_asFunctionalComponent1(__VLS_87, new __VLS_87({}));
    const __VLS_89 = __VLS_88({}, ...__VLS_functionalComponentArgsRest(__VLS_88));
    const { default: __VLS_92 } = __VLS_90.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (__VLS_ctx.symbol);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (__VLS_ctx.quote.c);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (__VLS_ctx.quote.h);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.strong, __VLS_intrinsics.strong)({});
    (__VLS_ctx.quote.l);
    // @ts-ignore
    [symbol, quote, quote, quote,];
    var __VLS_90;
    // @ts-ignore
    [];
    var __VLS_78;
    // @ts-ignore
    [];
    var __VLS_72;
    // @ts-ignore
    [];
    var __VLS_66;
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=MarketView.vue.js.map