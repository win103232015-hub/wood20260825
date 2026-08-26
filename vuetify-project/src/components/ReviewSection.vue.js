/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, onMounted } from 'vue';
import api from '../api/axios';
const props = defineProps();
const reviews = ref([]);
const showWriteReview = ref(false);
const newRating = ref(5);
const newComment = ref('');
const unboxingUrl = ref('');
const fetchReviews = async () => {
    try {
        const res = await api.get(`/reviews/product/${props.productId}`);
        reviews.value = res.data.reviews;
    }
    catch (err) {
        console.error('撈取評價失敗:', err);
    }
};
const submitReview = async () => {
    if (!newComment.value)
        return;
    try {
        const images = unboxingUrl.value ? unboxingUrl.value.split(',') : ['https://images.unsplash.com/photo-1546484475-7f7bd55792da'];
        await api.post('/reviews', {
            productId: props.productId,
            rating: newRating.value,
            comment: newComment.value,
            unboxingImages: images,
        });
        alert('評價發布成功！');
        showWriteReview.value = false;
        newComment.value = '';
        fetchReviews();
    }
    catch (err) {
        alert('評價發布失敗');
    }
};
onMounted(() => {
    fetchReviews();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "review-section mt-4 pt-4 border-t" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "d-flex align-center justify-space-between mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "calligraphy-title text-h6 font-weight-bold text-primary" },
});
const __VLS_0 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    size: "small",
    color: "accent",
    ...{ class: "text-neutral font-weight-bold" },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    size: "small",
    color: "accent",
    ...{ class: "text-neutral font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
let __VLS_6;
const __VLS_7 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showWriteReview = true;
    }
};
__VLS_3.slots.default;
const __VLS_8 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    start: true,
    size: "x-small",
}));
const __VLS_10 = __VLS_9({
    start: true,
    size: "x-small",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
var __VLS_11;
var __VLS_3;
if (__VLS_ctx.reviews.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    for (const [rev] of __VLS_getVForSourceType((__VLS_ctx.reviews))) {
        const __VLS_12 = {}.VCard;
        /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            key: (rev._id),
            ...{ class: "pa-3 mb-2 bg-secondary border" },
            elevation: "0",
        }));
        const __VLS_14 = __VLS_13({
            key: (rev._id),
            ...{ class: "pa-3 mb-2 bg-secondary border" },
            elevation: "0",
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_15.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "d-flex align-center justify-space-between mb-1" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-weight-bold text-neutral" },
        });
        (rev.userEmail);
        const __VLS_16 = {}.VRating;
        /** @type {[typeof __VLS_components.VRating, typeof __VLS_components.vRating, typeof __VLS_components.VRating, typeof __VLS_components.vRating, ]} */ ;
        // @ts-ignore
        const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
            modelValue: (rev.rating),
            color: "accent",
            activeColor: "accent",
            density: "compact",
            size: "small",
            readonly: true,
        }));
        const __VLS_18 = __VLS_17({
            modelValue: (rev.rating),
            color: "accent",
            activeColor: "accent",
            density: "compact",
            size: "small",
            readonly: true,
        }, ...__VLS_functionalComponentArgsRest(__VLS_17));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-body-2 text-grey-darken-3 mb-2" },
        });
        (rev.comment);
        if (rev.unboxingImages?.length > 0) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: "d-flex gap-2" },
            });
            for (const [img, idx] of __VLS_getVForSourceType((rev.unboxingImages))) {
                const __VLS_20 = {}.VImg;
                /** @type {[typeof __VLS_components.VImg, typeof __VLS_components.vImg, typeof __VLS_components.VImg, typeof __VLS_components.vImg, ]} */ ;
                // @ts-ignore
                const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
                    key: (idx),
                    src: (img),
                    width: "60",
                    height: "60",
                    cover: true,
                    ...{ class: "rounded border cursor-pointer" },
                }));
                const __VLS_22 = __VLS_21({
                    key: (idx),
                    src: (img),
                    width: "60",
                    height: "60",
                    cover: true,
                    ...{ class: "rounded border cursor-pointer" },
                }, ...__VLS_functionalComponentArgsRest(__VLS_21));
            }
        }
        var __VLS_15;
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-caption text-grey-darken-1 py-2" },
    });
}
const __VLS_24 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
    modelValue: (__VLS_ctx.showWriteReview),
    maxWidth: "500",
}));
const __VLS_26 = __VLS_25({
    modelValue: (__VLS_ctx.showWriteReview),
    maxWidth: "500",
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    ...{ class: "pa-4 rounded-lg" },
}));
const __VLS_30 = __VLS_29({
    ...{ class: "pa-4 rounded-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
__VLS_31.slots.default;
const __VLS_32 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    ...{ class: "calligraphy-title text-h5 text-primary" },
}));
const __VLS_34 = __VLS_33({
    ...{ class: "calligraphy-title text-h5 text-primary" },
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
__VLS_35.slots.default;
var __VLS_35;
const __VLS_36 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
__VLS_39.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mb-3" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "font-weight-bold mr-2" },
});
const __VLS_40 = {}.VRating;
/** @type {[typeof __VLS_components.VRating, typeof __VLS_components.vRating, typeof __VLS_components.VRating, typeof __VLS_components.vRating, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    modelValue: (__VLS_ctx.newRating),
    color: "accent",
    activeColor: "accent",
    hover: true,
}));
const __VLS_42 = __VLS_41({
    modelValue: (__VLS_ctx.newRating),
    color: "accent",
    activeColor: "accent",
    hover: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
const __VLS_44 = {}.VTextarea;
/** @type {[typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ]} */ ;
// @ts-ignore
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({
    modelValue: (__VLS_ctx.newComment),
    label: "您的實體使用心得與感言",
    rows: "3",
    variant: "outlined",
    density: "compact",
}));
const __VLS_46 = __VLS_45({
    modelValue: (__VLS_ctx.newComment),
    label: "您的實體使用心得與感言",
    rows: "3",
    variant: "outlined",
    density: "compact",
}, ...__VLS_functionalComponentArgsRest(__VLS_45));
const __VLS_48 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
    modelValue: (__VLS_ctx.unboxingUrl),
    label: "實體開箱照片 URL (最多 5 張，逗號隔開)",
    variant: "outlined",
    density: "compact",
}));
const __VLS_50 = __VLS_49({
    modelValue: (__VLS_ctx.unboxingUrl),
    label: "實體開箱照片 URL (最多 5 張，逗號隔開)",
    variant: "outlined",
    density: "compact",
}, ...__VLS_functionalComponentArgsRest(__VLS_49));
var __VLS_39;
const __VLS_52 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({
    ...{ class: "justify-end" },
}));
const __VLS_54 = __VLS_53({
    ...{ class: "justify-end" },
}, ...__VLS_functionalComponentArgsRest(__VLS_53));
__VLS_55.slots.default;
const __VLS_56 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({
    ...{ 'onClick': {} },
    variant: "text",
}));
const __VLS_58 = __VLS_57({
    ...{ 'onClick': {} },
    variant: "text",
}, ...__VLS_functionalComponentArgsRest(__VLS_57));
let __VLS_60;
let __VLS_61;
let __VLS_62;
const __VLS_63 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showWriteReview = false;
    }
};
__VLS_59.slots.default;
var __VLS_59;
const __VLS_64 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    ...{ 'onClick': {} },
    color: "accent",
    ...{ class: "text-neutral font-weight-bold" },
}));
const __VLS_66 = __VLS_65({
    ...{ 'onClick': {} },
    color: "accent",
    ...{ class: "text-neutral font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
let __VLS_68;
let __VLS_69;
let __VLS_70;
const __VLS_71 = {
    onClick: (__VLS_ctx.submitReview)
};
__VLS_67.slots.default;
var __VLS_67;
var __VLS_55;
var __VLS_31;
var __VLS_27;
/** @type {__VLS_StyleScopedClasses['review-section']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border-t']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-darken-1']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            reviews: reviews,
            showWriteReview: showWriteReview,
            newRating: newRating,
            newComment: newComment,
            unboxingUrl: unboxingUrl,
            submitReview: submitReview,
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
