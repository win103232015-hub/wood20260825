/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed } from 'vue';
import api from '../api/axios';
const props = defineProps();
const emit = defineEmits(['update:modelValue', 'order-success']);
const paymentMethod = ref('ecpay');
const buyerEmail = ref('buyer@woodwork.com');
const shippingNote = ref('');
const loading = ref(false);
const internalModel = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
});
const closeModal = () => {
    internalModel.value = false;
};
// 綠界金流 SDK 重定向
const checkoutECPay = async () => {
    loading.value = true;
    try {
        const totalAmount = props.product.price + 150;
        const res = await api.post('/payments/ecpay/checkout', {
            orderId: `ORD${Date.now()}`,
            totalAmount,
            itemTitle: props.product.title,
        });
        // 綠界會回傳 HTML auto-submit form，新開視窗或寫入 document
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write(res.data);
            newWindow.document.close();
        }
        else {
            alert('請允許開啟彈出視窗以進入綠界支付頁面！');
        }
        emit('order-success');
        closeModal();
    }
    catch (err) {
        alert('綠界金流呼叫失敗：' + (err.response?.data?.message || err.message));
    }
    finally {
        loading.value = false;
    }
};
// 一般直接建立訂單寫入 MongoDB
const checkoutDirect = async () => {
    loading.value = true;
    try {
        const totalAmount = props.product.price + 150;
        await api.post('/orders', {
            buyerEmail: buyerEmail.value,
            productId: props.product._id,
            productTitle: props.product.title,
            quantity: 1,
            totalPrice: totalAmount,
            shippingOption: '大榮貨運',
            shippingNote: shippingNote.value || '標準專車配送',
        });
        alert(`🎉 帳單建立成功！已開立綠界電子發票明細並寫入 MongoDB Atlas 雲端資料庫！`);
        emit('order-success');
        closeModal();
    }
    catch (err) {
        alert('訂單建立失敗：' + (err.response?.data?.message || err.message));
    }
    finally {
        loading.value = false;
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.internalModel),
    maxWidth: "650",
    persistent: true,
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.internalModel),
    maxWidth: "650",
    persistent: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ class: "pa-4 rounded-lg bg-secondary border" },
}));
const __VLS_7 = __VLS_6({
    ...{ class: "pa-4 rounded-lg bg-secondary border" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ class: "calligraphy-title text-h4 font-weight-bold text-primary d-flex align-center justify-space-between" },
}));
const __VLS_11 = __VLS_10({
    ...{ class: "calligraphy-title text-h4 font-weight-bold text-primary d-flex align-center justify-space-between" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "d-flex align-center" },
});
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
const __VLS_17 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    ...{ 'onClick': {} },
    icon: "mdi-close",
    variant: "text",
}));
const __VLS_19 = __VLS_18({
    ...{ 'onClick': {} },
    icon: "mdi-close",
    variant: "text",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
let __VLS_21;
let __VLS_22;
let __VLS_23;
const __VLS_24 = {
    onClick: (__VLS_ctx.closeModal)
};
var __VLS_20;
var __VLS_12;
const __VLS_25 = {}.VDivider;
/** @type {[typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    ...{ class: "my-3" },
}));
const __VLS_27 = __VLS_26({
    ...{ class: "my-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
if (__VLS_ctx.product) {
    const __VLS_29 = {}.VCardText;
    /** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
    const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
    __VLS_32.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "pa-4 bg-white rounded-lg border mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "calligraphy-title text-h6 font-weight-bold text-primary mb-2" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "d-flex align-center mb-3" },
    });
    const __VLS_33 = {}.VImg;
    /** @type {[typeof __VLS_components.VImg, typeof __VLS_components.vImg, typeof __VLS_components.VImg, typeof __VLS_components.vImg, ]} */ ;
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
        src: (__VLS_ctx.product.images.primary),
        width: "80",
        height: "80",
        cover: true,
        ...{ class: "rounded mr-3" },
    }));
    const __VLS_35 = __VLS_34({
        src: (__VLS_ctx.product.images.primary),
        width: "80",
        height: "80",
        cover: true,
        ...{ class: "rounded mr-3" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_34));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "font-weight-bold text-subtitle-1 text-neutral" },
    });
    (__VLS_ctx.product.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-caption text-grey-darken-2" },
    });
    const __VLS_37 = {}.VChip;
    /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
        size: "x-small",
        color: "accent",
        label: true,
        ...{ class: "font-weight-bold text-neutral" },
    }));
    const __VLS_39 = __VLS_38({
        size: "x-small",
        color: "accent",
        label: true,
        ...{ class: "font-weight-bold text-neutral" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    __VLS_40.slots.default;
    (__VLS_ctx.product.saleType);
    var __VLS_40;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-caption text-primary" },
    });
    (__VLS_ctx.product.price.toLocaleString());
    const __VLS_41 = {}.VDivider;
    /** @type {[typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ]} */ ;
    // @ts-ignore
    const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
        ...{ class: "my-2" },
    }));
    const __VLS_43 = __VLS_42({
        ...{ class: "my-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_42));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "d-flex justify-space-between text-body-2 mb-1" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.product.price.toLocaleString());
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "d-flex justify-space-between text-body-2 mb-1" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "text-success font-weight-bold" },
    });
    const __VLS_45 = {}.VDivider;
    /** @type {[typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ]} */ ;
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
        ...{ class: "my-2" },
    }));
    const __VLS_47 = __VLS_46({
        ...{ class: "my-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "d-flex justify-space-between text-h6 font-weight-bold text-primary" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "calligraphy-title text-h5 text-primary" },
    });
    ((__VLS_ctx.product.price + 150).toLocaleString());
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "pa-4 bg-white rounded-lg border mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "calligraphy-title text-h6 font-weight-bold text-primary mb-2" },
    });
    const __VLS_49 = {}.VRadioGroup;
    /** @type {[typeof __VLS_components.VRadioGroup, typeof __VLS_components.vRadioGroup, typeof __VLS_components.VRadioGroup, typeof __VLS_components.vRadioGroup, ]} */ ;
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
        modelValue: (__VLS_ctx.paymentMethod),
        hideDetails: true,
        ...{ class: "mt-1" },
    }));
    const __VLS_51 = __VLS_50({
        modelValue: (__VLS_ctx.paymentMethod),
        hideDetails: true,
        ...{ class: "mt-1" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    __VLS_52.slots.default;
    const __VLS_53 = {}.VRadio;
    /** @type {[typeof __VLS_components.VRadio, typeof __VLS_components.vRadio, typeof __VLS_components.VRadio, typeof __VLS_components.vRadio, ]} */ ;
    // @ts-ignore
    const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
        value: "ecpay",
        color: "primary",
    }));
    const __VLS_55 = __VLS_54({
        value: "ecpay",
        color: "primary",
    }, ...__VLS_functionalComponentArgsRest(__VLS_54));
    __VLS_56.slots.default;
    {
        const { label: __VLS_thisSlot } = __VLS_56.slots;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "d-flex align-center" },
        });
        const __VLS_57 = {}.VChip;
        /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
        // @ts-ignore
        const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
            color: "success",
            size: "small",
            ...{ class: "mr-2 font-weight-bold" },
        }));
        const __VLS_59 = __VLS_58({
            color: "success",
            size: "small",
            ...{ class: "mr-2 font-weight-bold" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_58));
        __VLS_60.slots.default;
        var __VLS_60;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "font-weight-bold" },
        });
    }
    var __VLS_56;
    const __VLS_61 = {}.VRadio;
    /** @type {[typeof __VLS_components.VRadio, typeof __VLS_components.vRadio, typeof __VLS_components.VRadio, typeof __VLS_components.vRadio, ]} */ ;
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
        value: "cod",
        color: "primary",
        ...{ class: "mt-2" },
    }));
    const __VLS_63 = __VLS_62({
        value: "cod",
        color: "primary",
        ...{ class: "mt-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    __VLS_64.slots.default;
    {
        const { label: __VLS_thisSlot } = __VLS_64.slots;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "d-flex align-center" },
        });
        const __VLS_65 = {}.VChip;
        /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
        // @ts-ignore
        const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
            color: "primary",
            size: "small",
            ...{ class: "mr-2 font-weight-bold" },
        }));
        const __VLS_67 = __VLS_66({
            color: "primary",
            size: "small",
            ...{ class: "mr-2 font-weight-bold" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_66));
        __VLS_68.slots.default;
        var __VLS_68;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    var __VLS_64;
    var __VLS_52;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "pa-4 bg-white rounded-lg border" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "calligraphy-title text-h6 font-weight-bold text-primary mb-2" },
    });
    const __VLS_69 = {}.VTextField;
    /** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
        modelValue: (__VLS_ctx.buyerEmail),
        label: "買家 Email (接收綠界電子發票)",
        variant: "outlined",
        density: "compact",
    }));
    const __VLS_71 = __VLS_70({
        modelValue: (__VLS_ctx.buyerEmail),
        label: "買家 Email (接收綠界電子發票)",
        variant: "outlined",
        density: "compact",
    }, ...__VLS_functionalComponentArgsRest(__VLS_70));
    const __VLS_73 = {}.VTextField;
    /** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
        modelValue: (__VLS_ctx.shippingNote),
        label: "配送特殊備註 (如：大樓有無電梯、希望送達時段)",
        variant: "outlined",
        density: "compact",
    }));
    const __VLS_75 = __VLS_74({
        modelValue: (__VLS_ctx.shippingNote),
        label: "配送特殊備註 (如：大樓有無電梯、希望送達時段)",
        variant: "outlined",
        density: "compact",
    }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    var __VLS_32;
}
const __VLS_77 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
    ...{ class: "justify-end pt-3" },
}));
const __VLS_79 = __VLS_78({
    ...{ class: "justify-end pt-3" },
}, ...__VLS_functionalComponentArgsRest(__VLS_78));
__VLS_80.slots.default;
const __VLS_81 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({
    ...{ 'onClick': {} },
    variant: "outlined",
    color: "neutral",
    ...{ class: "font-weight-bold" },
}));
const __VLS_83 = __VLS_82({
    ...{ 'onClick': {} },
    variant: "outlined",
    color: "neutral",
    ...{ class: "font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_82));
let __VLS_85;
let __VLS_86;
let __VLS_87;
const __VLS_88 = {
    onClick: (__VLS_ctx.closeModal)
};
__VLS_84.slots.default;
var __VLS_84;
if (__VLS_ctx.paymentMethod === 'ecpay') {
    const __VLS_89 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({
        ...{ 'onClick': {} },
        color: "success",
        size: "large",
        ...{ class: "font-weight-bold text-white" },
        loading: (__VLS_ctx.loading),
    }));
    const __VLS_91 = __VLS_90({
        ...{ 'onClick': {} },
        color: "success",
        size: "large",
        ...{ class: "font-weight-bold text-white" },
        loading: (__VLS_ctx.loading),
    }, ...__VLS_functionalComponentArgsRest(__VLS_90));
    let __VLS_93;
    let __VLS_94;
    let __VLS_95;
    const __VLS_96 = {
        onClick: (__VLS_ctx.checkoutECPay)
    };
    __VLS_92.slots.default;
    const __VLS_97 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({
        start: true,
    }));
    const __VLS_99 = __VLS_98({
        start: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_98));
    __VLS_100.slots.default;
    var __VLS_100;
    var __VLS_92;
}
else {
    const __VLS_101 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({
        ...{ 'onClick': {} },
        color: "accent",
        size: "large",
        ...{ class: "font-weight-bold text-neutral" },
        loading: (__VLS_ctx.loading),
    }));
    const __VLS_103 = __VLS_102({
        ...{ 'onClick': {} },
        color: "accent",
        size: "large",
        ...{ class: "font-weight-bold text-neutral" },
        loading: (__VLS_ctx.loading),
    }, ...__VLS_functionalComponentArgsRest(__VLS_102));
    let __VLS_105;
    let __VLS_106;
    let __VLS_107;
    const __VLS_108 = {
        onClick: (__VLS_ctx.checkoutDirect)
    };
    __VLS_104.slots.default;
    const __VLS_109 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({
        start: true,
    }));
    const __VLS_111 = __VLS_110({
        start: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_110));
    __VLS_112.slots.default;
    var __VLS_112;
    var __VLS_104;
}
var __VLS_80;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['my-3']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-darken-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['my-2']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-success']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['my-2']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            paymentMethod: paymentMethod,
            buyerEmail: buyerEmail,
            shippingNote: shippingNote,
            loading: loading,
            internalModel: internalModel,
            closeModal: closeModal,
            checkoutECPay: checkoutECPay,
            checkoutDirect: checkoutDirect,
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
