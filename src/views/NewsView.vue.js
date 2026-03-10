import { ref, onMounted } from 'vue';
import { getQuote } from '@/services/finnhubService';
const headers = [
    { text: 'Acción', value: 'symbol' },
    { text: 'Precio', value: 'price' },
    { text: 'Máximo día', value: 'high' },
    { text: 'Mínimo día', value: 'low' },
];
const symbols = ['AAPL', 'TSLA', 'MSFT', 'AMZN', 'SQM'];
const stocks = ref([]);
const loading = ref(true);
async function loadData() {
    try {
        stocks.value = await Promise.all(symbols.map(async (symbol) => {
            const quote = await getQuote(symbol);
            return {
                symbol,
                price: quote.c,
                high: quote.h,
                low: quote.l,
            };
        }));
    }
    catch (err) {
        console.error('Error al cargar cotizaciones:', err);
    }
    finally {
        loading.value = false;
    }
}
onMounted(loadData);
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
/** @ts-ignore @type {typeof __VLS_components.vDataTable | typeof __VLS_components.VDataTable | typeof __VLS_components.vDataTable | typeof __VLS_components.VDataTable} */
vDataTable;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    headers: (__VLS_ctx.headers),
    items: (__VLS_ctx.stocks),
    ...{ class: "elevation-1" },
    loading: (__VLS_ctx.loading),
    loadingText: "Cargando cotizaciones...",
}));
const __VLS_9 = __VLS_8({
    headers: (__VLS_ctx.headers),
    items: (__VLS_ctx.stocks),
    ...{ class: "elevation-1" },
    loading: (__VLS_ctx.loading),
    loadingText: "Cargando cotizaciones...",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['elevation-1']} */ ;
const { default: __VLS_12 } = __VLS_10.slots;
{
    const { 'item.price': __VLS_13 } = __VLS_10.slots;
    const [{ item }] = __VLS_vSlot(__VLS_13);
    (item.price ? item.price.toFixed(2) : 'N/A');
    // @ts-ignore
    [headers, stocks, loading,];
}
{
    const { 'item.high': __VLS_14 } = __VLS_10.slots;
    const [{ item }] = __VLS_vSlot(__VLS_14);
    (item.high ? item.high.toFixed(2) : 'N/A');
    // @ts-ignore
    [];
}
{
    const { 'item.low': __VLS_15 } = __VLS_10.slots;
    const [{ item }] = __VLS_vSlot(__VLS_15);
    (item.low ? item.low.toFixed(2) : 'N/A');
    // @ts-ignore
    [];
}
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
//# sourceMappingURL=NewsView.vue.js.map