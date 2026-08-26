/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed, onMounted } from 'vue';
import api from '../api/axios';
const props = defineProps();
const emit = defineEmits(['update:modelValue']);
const disputes = ref([]);
const replyText = ref({});
const internalModel = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
});
const closeModal = () => {
    internalModel.value = false;
};
const fetchDisputes = async () => {
    try {
        const res = await api.get('/disputes');
        disputes.value = res.data.disputes;
    }
    catch (err) {
        console.error('撈取爭議失敗:', err);
    }
};
const sendReply = async (disputeId) => {
    const content = replyText.value[disputeId];
    if (!content)
        return;
    try {
        await api.post(`/disputes/${disputeId}/messages`, {
            sender: '管理員客服',
            role: 'admin',
            content,
        });
        replyText.value[disputeId] = '';
        fetchDisputes();
    }
    catch (err) {
        alert('發送爭議留言失敗');
    }
};
onMounted(() => {
    fetchDisputes();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.internalModel),
    maxWidth: "700",
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.internalModel),
    maxWidth: "700",
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
    color: "error",
    ...{ class: "mr-2" },
}));
const __VLS_15 = __VLS_14({
    color: "error",
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
const __VLS_25 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_28.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-caption text-grey-darken-2 mb-3" },
});
if (__VLS_ctx.disputes.length > 0) {
    const __VLS_29 = {}.VExpansionPanels;
    /** @type {[typeof __VLS_components.VExpansionPanels, typeof __VLS_components.vExpansionPanels, typeof __VLS_components.VExpansionPanels, typeof __VLS_components.vExpansionPanels, ]} */ ;
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
    const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
    __VLS_32.slots.default;
    for (const [disp] of __VLS_getVForSourceType((__VLS_ctx.disputes))) {
        const __VLS_33 = {}.VExpansionPanel;
        /** @type {[typeof __VLS_components.VExpansionPanel, typeof __VLS_components.vExpansionPanel, typeof __VLS_components.VExpansionPanel, typeof __VLS_components.vExpansionPanel, ]} */ ;
        // @ts-ignore
        const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
            key: (disp._id),
        }));
        const __VLS_35 = __VLS_34({
            key: (disp._id),
        }, ...__VLS_functionalComponentArgsRest(__VLS_34));
        __VLS_36.slots.default;
        const __VLS_37 = {}.VExpansionPanelTitle;
        /** @type {[typeof __VLS_components.VExpansionPanelTitle, typeof __VLS_components.vExpansionPanelTitle, typeof __VLS_components.VExpansionPanelTitle, typeof __VLS_components.vExpansionPanelTitle, ]} */ ;
        // @ts-ignore
        const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
            ...{ class: "font-weight-bold text-primary" },
        }));
        const __VLS_39 = __VLS_38({
            ...{ class: "font-weight-bold text-primary" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_38));
        __VLS_40.slots.default;
        (disp.orderNo);
        (disp.reason);
        const __VLS_41 = {}.VChip;
        /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
        // @ts-ignore
        const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
            size: "x-small",
            color: (disp.status === 'resolved' ? 'success' : 'warning'),
            ...{ class: "ml-2" },
        }));
        const __VLS_43 = __VLS_42({
            size: "x-small",
            color: (disp.status === 'resolved' ? 'success' : 'warning'),
            ...{ class: "ml-2" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_42));
        __VLS_44.slots.default;
        (disp.status === 'resolved' ? '已仲裁解決' : '爭議處理中');
        var __VLS_44;
        var __VLS_40;
        const __VLS_45 = {}.VExpansionPanelText;
        /** @type {[typeof __VLS_components.VExpansionPanelText, typeof __VLS_components.vExpansionPanelText, typeof __VLS_components.VExpansionPanelText, typeof __VLS_components.vExpansionPanelText, ]} */ ;
        // @ts-ignore
        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
        const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
        __VLS_48.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "pa-2 bg-white rounded border mb-3" },
        });
        for (const [msg, idx] of __VLS_getVForSourceType((disp.messages))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: (idx),
                ...{ class: "mb-2 pb-2 border-b" },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: "d-flex align-center justify-space-between" },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: "font-weight-bold text-caption" },
                ...{ class: (msg.role === 'admin' ? 'text-error' : 'text-primary') },
            });
            (msg.role === 'admin' ? '👑 管理員強制仲裁' : msg.role === 'artisan' ? '🪵 職人回應' : '👤 買家發言');
            (msg.sender);
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: "text-caption text-grey" },
            });
            (new Date(msg.createdAt).toLocaleTimeString());
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: "text-body-2 mt-1" },
            });
            (msg.content);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "d-flex gap-2" },
        });
        const __VLS_49 = {}.VTextField;
        /** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
        // @ts-ignore
        const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
            modelValue: (__VLS_ctx.replyText[disp._id]),
            placeholder: "輸入爭議說明或仲裁留言...",
            density: "compact",
            variant: "outlined",
            hideDetails: true,
        }));
        const __VLS_51 = __VLS_50({
            modelValue: (__VLS_ctx.replyText[disp._id]),
            placeholder: "輸入爭議說明或仲裁留言...",
            density: "compact",
            variant: "outlined",
            hideDetails: true,
        }, ...__VLS_functionalComponentArgsRest(__VLS_50));
        const __VLS_53 = {}.VBtn;
        /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
        // @ts-ignore
        const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
            ...{ 'onClick': {} },
            color: "primary",
            ...{ class: "font-weight-bold" },
        }));
        const __VLS_55 = __VLS_54({
            ...{ 'onClick': {} },
            color: "primary",
            ...{ class: "font-weight-bold" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_54));
        let __VLS_57;
        let __VLS_58;
        let __VLS_59;
        const __VLS_60 = {
            onClick: (...[$event]) => {
                if (!(__VLS_ctx.disputes.length > 0))
                    return;
                __VLS_ctx.sendReply(disp._id);
            }
        };
        __VLS_56.slots.default;
        var __VLS_56;
        var __VLS_48;
        var __VLS_36;
    }
    var __VLS_32;
}
else {
    const __VLS_61 = {}.VAlert;
    /** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
    // @ts-ignore
    const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
        type: "info",
        variant: "tonal",
        ...{ class: "my-4" },
    }));
    const __VLS_63 = __VLS_62({
        type: "info",
        variant: "tonal",
        ...{ class: "my-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_62));
    __VLS_64.slots.default;
    var __VLS_64;
}
var __VLS_28;
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
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-darken-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['my-4']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            disputes: disputes,
            replyText: replyText,
            internalModel: internalModel,
            closeModal: closeModal,
            sendReply: sendReply,
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
