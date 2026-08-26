/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref } from 'vue';
const props = defineProps();
const lightboxOpen = ref(false);
const activeImage = ref('');
const openLightbox = (imgUrl) => {
    activeImage.value = imgUrl;
    lightboxOpen.value = true;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['scatter-detail-card']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "product-gallery" },
});
const __VLS_0 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
const __VLS_4 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    cols: "12",
    md: "8",
}));
const __VLS_6 = __VLS_5({
    cols: "12",
    md: "8",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
const __VLS_8 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    ...{ 'onClick': {} },
    elevation: "2",
    ...{ class: "gallery-primary-card cursor-pointer" },
}));
const __VLS_10 = __VLS_9({
    ...{ 'onClick': {} },
    elevation: "2",
    ...{ class: "gallery-primary-card cursor-pointer" },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
let __VLS_12;
let __VLS_13;
let __VLS_14;
const __VLS_15 = {
    onClick: (...[$event]) => {
        __VLS_ctx.openLightbox(__VLS_ctx.primaryImage);
    }
};
__VLS_11.slots.default;
const __VLS_16 = {}.VImg;
/** @type {[typeof __VLS_components.VImg, typeof __VLS_components.vImg, typeof __VLS_components.VImg, typeof __VLS_components.vImg, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    src: (__VLS_ctx.primaryImage),
    aspectRatio: "1.2",
    cover: true,
    ...{ class: "rounded-lg" },
}));
const __VLS_18 = __VLS_17({
    src: (__VLS_ctx.primaryImage),
    aspectRatio: "1.2",
    cover: true,
    ...{ class: "rounded-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
{
    const { placeholder: __VLS_thisSlot } = __VLS_19.slots;
    const __VLS_20 = {}.VRow;
    /** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
        ...{ class: "fill-height ma-0" },
        align: "center",
        justify: "center",
    }));
    const __VLS_22 = __VLS_21({
        ...{ class: "fill-height ma-0" },
        align: "center",
        justify: "center",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_23.slots.default;
    const __VLS_24 = {}.VProgressCircular;
    /** @type {[typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, ]} */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
        indeterminate: true,
        color: "primary",
    }));
    const __VLS_26 = __VLS_25({
        indeterminate: true,
        color: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    var __VLS_23;
}
const __VLS_28 = {}.VChip;
/** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    color: "accent",
    size: "small",
    ...{ class: "ma-3 font-weight-bold" },
    label: true,
}));
const __VLS_30 = __VLS_29({
    color: "accent",
    size: "small",
    ...{ class: "ma-3 font-weight-bold" },
    label: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
const __VLS_32 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    start: true,
    size: "x-small",
}));
const __VLS_34 = __VLS_33({
    start: true,
    size: "x-small",
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
var __VLS_35;
var __VLS_31;
var __VLS_19;
var __VLS_11;
var __VLS_7;
const __VLS_36 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    cols: "12",
    md: "4",
    ...{ class: "d-flex flex-column gap-3" },
}));
const __VLS_38 = __VLS_37({
    cols: "12",
    md: "4",
    ...{ class: "d-flex flex-column gap-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
for (const [img, idx] of __VLS_getVForSourceType((__VLS_ctx.detailImages.slice(0, 3)))) {
    const __VLS_40 = {}.VCard;
    /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
        ...{ 'onClick': {} },
        key: (idx),
        elevation: "1",
        ...{ class: "scatter-detail-card cursor-pointer" },
        ...{ style: ({ transform: `rotate(${(idx % 2 === 0 ? 1.5 : -1.5)}deg)` }) },
    }));
    const __VLS_42 = __VLS_41({
        ...{ 'onClick': {} },
        key: (idx),
        elevation: "1",
        ...{ class: "scatter-detail-card cursor-pointer" },
        ...{ style: ({ transform: `rotate(${(idx % 2 === 0 ? 1.5 : -1.5)}deg)` }) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    let __VLS_44;
    let __VLS_45;
    let __VLS_46;
    const __VLS_47 = {
        onClick: (...[$event]) => {
            __VLS_ctx.openLightbox(img);
        }
    };
    __VLS_43.slots.default;
    const __VLS_48 = {}.VImg;
    /** @type {[typeof __VLS_components.VImg, typeof __VLS_components.vImg, typeof __VLS_components.VImg, typeof __VLS_components.vImg, ]} */ ;
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
        src: (img),
        height: "110",
        cover: true,
        ...{ class: "rounded" },
    }));
    const __VLS_50 = __VLS_49({
        src: (img),
        height: "110",
        cover: true,
        ...{ class: "rounded" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    __VLS_51.slots.default;
    const __VLS_52 = {}.VBadge;
    /** @type {[typeof __VLS_components.VBadge, typeof __VLS_components.vBadge, typeof __VLS_components.VBadge, typeof __VLS_components.vBadge, ]} */ ;
    // @ts-ignore
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
        color: "primary",
        content: (`細節 ${idx + 1}`),
        inline: true,
        ...{ class: "ma-2" },
    }));
    const __VLS_54 = __VLS_53({
        color: "primary",
        content: (`細節 ${idx + 1}`),
        inline: true,
        ...{ class: "ma-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    var __VLS_51;
    var __VLS_43;
}
var __VLS_39;
var __VLS_3;
const __VLS_56 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    modelValue: (__VLS_ctx.lightboxOpen),
    maxWidth: "900",
}));
const __VLS_58 = __VLS_57({
    modelValue: (__VLS_ctx.lightboxOpen),
    maxWidth: "900",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
__VLS_59.slots.default;
const __VLS_60 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
    color: "neutral",
    ...{ class: "pa-2" },
}));
const __VLS_62 = __VLS_61({
    color: "neutral",
    ...{ class: "pa-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_61));
__VLS_63.slots.default;
const __VLS_64 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    ...{ class: "d-flex justify-space-between align-center text-secondary" },
}));
const __VLS_66 = __VLS_65({
    ...{ class: "d-flex justify-space-between align-center text-secondary" },
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
__VLS_67.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
const __VLS_68 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({
    ...{ 'onClick': {} },
    icon: "mdi-close",
    variant: "text",
    color: "secondary",
}));
const __VLS_70 = __VLS_69({
    ...{ 'onClick': {} },
    icon: "mdi-close",
    variant: "text",
    color: "secondary",
}, ...__VLS_functionalComponentArgsRest(__VLS_69));
let __VLS_72;
let __VLS_73;
let __VLS_74;
const __VLS_75 = {
    onClick: (...[$event]) => {
        __VLS_ctx.lightboxOpen = false;
    }
};
var __VLS_71;
var __VLS_67;
const __VLS_76 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({
    ...{ class: "d-flex justify-center align-center" },
}));
const __VLS_78 = __VLS_77({
    ...{ class: "d-flex justify-center align-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_77));
__VLS_79.slots.default;
const __VLS_80 = {}.VImg;
/** @type {[typeof __VLS_components.VImg, typeof __VLS_components.vImg, typeof __VLS_components.VImg, typeof __VLS_components.vImg, ]} */ ;
// @ts-ignore
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({
    src: (__VLS_ctx.activeImage),
    maxHeight: "700",
    fit: "contain",
    ...{ class: "rounded-lg" },
}));
const __VLS_82 = __VLS_81({
    src: (__VLS_ctx.activeImage),
    maxHeight: "700",
    fit: "contain",
    ...{ class: "rounded-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_81));
var __VLS_79;
var __VLS_63;
var __VLS_59;
/** @type {__VLS_StyleScopedClasses['product-gallery']} */ ;
/** @type {__VLS_StyleScopedClasses['gallery-primary-card']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['fill-height']} */ ;
/** @type {__VLS_StyleScopedClasses['ma-0']} */ ;
/** @type {__VLS_StyleScopedClasses['ma-3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['scatter-detail-card']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['ma-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-2']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            lightboxOpen: lightboxOpen,
            activeImage: activeImage,
            openLightbox: openLightbox,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
