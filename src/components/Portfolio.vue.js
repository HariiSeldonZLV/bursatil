import { ref, onMounted } from 'vue';
// Aquí podrías integrar tu store o API para obtener datos reales
const portfolio = ref([]);
onMounted(() => {
    // Ejemplo estático (puedes reemplazar con datos de Firestore o tu API)
    portfolio.value = [
        { symbol: 'AAPL', quantity: 10, value: 175.32 },
        { symbol: 'TSLA', quantity: 5, value: 210.45 },
        { symbol: 'SQM', quantity: 20, value: 95.12 },
    ];
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
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "text-h5 mb-4 text-center" },
});
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.vCard | typeof __VLS_components.VCard | typeof __VLS_components.vCard | typeof __VLS_components.VCard} */
vCard;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    ...{ class: "pa-4" },
    outlined: true,
}));
const __VLS_9 = __VLS_8({
    ...{ class: "pa-4" },
    outlined: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
const { default: __VLS_12 } = __VLS_10.slots;
let __VLS_13;
/** @ts-ignore @type {typeof __VLS_components.vCardText | typeof __VLS_components.VCardText | typeof __VLS_components.vCardText | typeof __VLS_components.VCardText} */
vCardText;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent1(__VLS_13, new __VLS_13({}));
const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const { default: __VLS_18 } = __VLS_16.slots;
if (__VLS_ctx.portfolio.length === 0) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
}
else {
    let __VLS_19;
    /** @ts-ignore @type {typeof __VLS_components.vList | typeof __VLS_components.VList | typeof __VLS_components.vList | typeof __VLS_components.VList} */
    vList;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const { default: __VLS_24 } = __VLS_22.slots;
    for (const [stock, index] of __VLS_vFor((__VLS_ctx.portfolio))) {
        let __VLS_25;
        /** @ts-ignore @type {typeof __VLS_components.vListItem | typeof __VLS_components.VListItem | typeof __VLS_components.vListItem | typeof __VLS_components.VListItem} */
        vListItem;
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
            key: (index),
        }));
        const __VLS_27 = __VLS_26({
            key: (index),
        }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        const { default: __VLS_30 } = __VLS_28.slots;
        let __VLS_31;
        /** @ts-ignore @type {typeof __VLS_components.vListItemContent | typeof __VLS_components.VListItemContent | typeof __VLS_components.vListItemContent | typeof __VLS_components.VListItemContent} */
        vListItemContent;
        // @ts-ignore
        const __VLS_32 = __VLS_asFunctionalComponent1(__VLS_31, new __VLS_31({}));
        const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
        const { default: __VLS_36 } = __VLS_34.slots;
        let __VLS_37;
        /** @ts-ignore @type {typeof __VLS_components.vListItemTitle | typeof __VLS_components.VListItemTitle | typeof __VLS_components.vListItemTitle | typeof __VLS_components.VListItemTitle} */
        vListItemTitle;
        // @ts-ignore
        const __VLS_38 = __VLS_asFunctionalComponent1(__VLS_37, new __VLS_37({}));
        const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
        const { default: __VLS_42 } = __VLS_40.slots;
        (stock.symbol);
        (stock.quantity);
        // @ts-ignore
        [portfolio, portfolio,];
        var __VLS_40;
        let __VLS_43;
        /** @ts-ignore @type {typeof __VLS_components.vListItemSubtitle | typeof __VLS_components.VListItemSubtitle | typeof __VLS_components.vListItemSubtitle | typeof __VLS_components.VListItemSubtitle} */
        vListItemSubtitle;
        // @ts-ignore
        const __VLS_44 = __VLS_asFunctionalComponent1(__VLS_43, new __VLS_43({}));
        const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
        const { default: __VLS_48 } = __VLS_46.slots;
        (stock.value ? stock.value.toFixed(2) : 'N/A');
        // @ts-ignore
        [];
        var __VLS_46;
        // @ts-ignore
        [];
        var __VLS_34;
        // @ts-ignore
        [];
        var __VLS_28;
        // @ts-ignore
        [];
    }
    // @ts-ignore
    [];
    var __VLS_22;
}
// @ts-ignore
[];
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
//# sourceMappingURL=Portfolio.vue.js.map