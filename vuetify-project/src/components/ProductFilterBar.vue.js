/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, watch } from 'vue';
const woodOptions = ['臺灣檜木', '黑胡桃木', '柚木', '櫸木', '白橡木', '其他'];
const coatingOptions = ['天然護木油', '木蠟油', '生漆/推光漆', '無塗裝'];
const selectedWoodSpecies = ref([]);
const selectedCoatingMethods = ref([]);
const emit = defineEmits(['filter-change']);
watch([selectedWoodSpecies, selectedCoatingMethods], () => {
    emit('filter-change', {
        woodSpecies: selectedWoodSpecies.value,
        coatingMethods: selectedCoatingMethods.value,
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "pa-4 rounded-lg bg-secondary border mb-6" },
    elevation: "0",
}));
const __VLS_2 = __VLS_1({
    ...{ class: "pa-4 rounded-lg bg-secondary border mb-6" },
    elevation: "0",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-subtitle-1 font-weight-bold text-primary mb-3" },
});
const __VLS_5 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    color: "primary",
    ...{ class: "mr-1" },
}));
const __VLS_7 = __VLS_6({
    color: "primary",
    ...{ class: "mr-1" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
var __VLS_8;
const __VLS_9 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    density: "compact",
}));
const __VLS_11 = __VLS_10({
    density: "compact",
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
const __VLS_13 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    cols: "12",
    md: "6",
}));
const __VLS_15 = __VLS_14({
    cols: "12",
    md: "6",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_16.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-caption font-weight-bold text-neutral mb-1" },
});
const __VLS_17 = {}.VChipGroup;
/** @type {[typeof __VLS_components.VChipGroup, typeof __VLS_components.vChipGroup, typeof __VLS_components.VChipGroup, typeof __VLS_components.vChipGroup, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    modelValue: (__VLS_ctx.selectedWoodSpecies),
    multiple: true,
    selectedClass: "bg-primary text-white",
}));
const __VLS_19 = __VLS_18({
    modelValue: (__VLS_ctx.selectedWoodSpecies),
    multiple: true,
    selectedClass: "bg-primary text-white",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_20.slots.default;
for (const [wood] of __VLS_getVForSourceType((__VLS_ctx.woodOptions))) {
    const __VLS_21 = {}.VChip;
    /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
        key: (wood),
        value: (wood),
        filter: true,
        size: "small",
        variant: "outlined",
    }));
    const __VLS_23 = __VLS_22({
        key: (wood),
        value: (wood),
        filter: true,
        size: "small",
        variant: "outlined",
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    __VLS_24.slots.default;
    (wood);
    var __VLS_24;
}
var __VLS_20;
var __VLS_16;
const __VLS_25 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    cols: "12",
    md: "6",
}));
const __VLS_27 = __VLS_26({
    cols: "12",
    md: "6",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_28.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-caption font-weight-bold text-neutral mb-1" },
});
const __VLS_29 = {}.VChipGroup;
/** @type {[typeof __VLS_components.VChipGroup, typeof __VLS_components.vChipGroup, typeof __VLS_components.VChipGroup, typeof __VLS_components.vChipGroup, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    modelValue: (__VLS_ctx.selectedCoatingMethods),
    multiple: true,
    selectedClass: "bg-accent text-neutral",
}));
const __VLS_31 = __VLS_30({
    modelValue: (__VLS_ctx.selectedCoatingMethods),
    multiple: true,
    selectedClass: "bg-accent text-neutral",
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_32.slots.default;
for (const [coat] of __VLS_getVForSourceType((__VLS_ctx.coatingOptions))) {
    const __VLS_33 = {}.VChip;
    /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
        key: (coat),
        value: (coat),
        filter: true,
        size: "small",
        variant: "outlined",
    }));
    const __VLS_35 = __VLS_34({
        key: (coat),
        value: (coat),
        filter: true,
        size: "small",
        variant: "outlined",
    }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    __VLS_36.slots.default;
    (coat);
    var __VLS_36;
}
var __VLS_32;
var __VLS_28;
var __VLS_12;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            woodOptions: woodOptions,
            coatingOptions: coatingOptions,
            selectedWoodSpecies: selectedWoodSpecies,
            selectedCoatingMethods: selectedCoatingMethods,
        };
    },
    emits: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
});
; /* PartiallyEnd: #4569/main.vue */
