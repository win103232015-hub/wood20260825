/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { computed } from 'vue';
const props = defineProps();
const emit = defineEmits(['update:modelValue', 'confirm', 'cancel']);
const internalModel = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
});
const cancel = () => {
    emit('cancel');
    internalModel.value = false;
};
const confirm = () => {
    emit('confirm');
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.internalModel),
    maxWidth: "550",
    persistent: true,
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.internalModel),
    maxWidth: "550",
    persistent: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ class: "woodwork-dialog pa-4" },
}));
const __VLS_7 = __VLS_6({
    ...{ class: "woodwork-dialog pa-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ class: "text-h5 font-weight-bold text-primary d-flex align-center" },
}));
const __VLS_11 = __VLS_10({
    ...{ class: "text-h5 font-weight-bold text-primary d-flex align-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
const __VLS_13 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    color: "accent",
    ...{ class: "mr-2" },
}));
const __VLS_15 = __VLS_14({
    color: "accent",
    ...{ class: "mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_16.slots.default;
var __VLS_16;
var __VLS_12;
const __VLS_17 = {}.VDivider;
/** @type {[typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    ...{ class: "my-3" },
}));
const __VLS_19 = __VLS_18({
    ...{ class: "my-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
const __VLS_21 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    ...{ class: "text-neutral" },
}));
const __VLS_23 = __VLS_22({
    ...{ class: "text-neutral" },
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
__VLS_24.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "d-flex align-center mb-4 pa-2 rounded bg-secondary" },
});
const __VLS_25 = {}.VImg;
/** @type {[typeof __VLS_components.VImg, typeof __VLS_components.vImg, typeof __VLS_components.VImg, typeof __VLS_components.vImg, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    src: (__VLS_ctx.productPrimaryImage),
    width: "70",
    height: "70",
    cover: true,
    ...{ class: "rounded mr-3" },
}));
const __VLS_27 = __VLS_26({
    src: (__VLS_ctx.productPrimaryImage),
    width: "70",
    height: "70",
    cover: true,
    ...{ class: "rounded mr-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "font-weight-bold text-subtitle-1" },
});
(__VLS_ctx.productTitle);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-caption text-grey-darken-1" },
});
(__VLS_ctx.quantity);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-subtitle-2 text-primary font-weight-bold" },
});
(__VLS_ctx.totalPrice.toLocaleString());
const __VLS_29 = {}.VAlert;
/** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    type: "info",
    variant: "tonal",
    color: "primary",
    icon: "mdi-truck-cargo-container",
    ...{ class: "mb-3" },
    title: "木工特殊運送備註",
}));
const __VLS_31 = __VLS_30({
    type: "info",
    variant: "tonal",
    color: "primary",
    icon: "mdi-truck-cargo-container",
    ...{ class: "mb-3" },
    title: "木工特殊運送備註",
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_32.slots.default;
(__VLS_ctx.shippingNote || '本作品涉及天然實木結構，大型家具預設採大榮貨運專車配送。拆封請全程錄影檢查。');
var __VLS_32;
var __VLS_24;
const __VLS_33 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    ...{ class: "justify-end" },
}));
const __VLS_35 = __VLS_34({
    ...{ class: "justify-end" },
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
__VLS_36.slots.default;
const __VLS_37 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    ...{ 'onClick': {} },
    variant: "outlined",
    color: "neutral",
}));
const __VLS_39 = __VLS_38({
    ...{ 'onClick': {} },
    variant: "outlined",
    color: "neutral",
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
let __VLS_41;
let __VLS_42;
let __VLS_43;
const __VLS_44 = {
    onClick: (__VLS_ctx.cancel)
};
__VLS_40.slots.default;
var __VLS_40;
const __VLS_45 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    ...{ 'onClick': {} },
    color: "accent",
    variant: "elevated",
    ...{ class: "text-neutral font-weight-bold" },
    loading: (__VLS_ctx.loading),
}));
const __VLS_47 = __VLS_46({
    ...{ 'onClick': {} },
    color: "accent",
    variant: "elevated",
    ...{ class: "text-neutral font-weight-bold" },
    loading: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
let __VLS_49;
let __VLS_50;
let __VLS_51;
const __VLS_52 = {
    onClick: (__VLS_ctx.confirm)
};
__VLS_48.slots.default;
var __VLS_48;
var __VLS_36;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['woodwork-dialog']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['my-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-darken-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            internalModel: internalModel,
            cancel: cancel,
            confirm: confirm,
        };
    },
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
