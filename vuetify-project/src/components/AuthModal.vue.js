/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed } from 'vue';
import { useAuthStore } from '../stores/auth';
const props = defineProps();
const emit = defineEmits(['update:modelValue']);
const authStore = useAuthStore();
const tab = ref('login');
const loginEmail = ref('');
const loginPassword = ref('');
const regEmail = ref('');
const regPassword = ref('');
const brandBio = ref('');
const portfolioUrl = ref('');
const internalModel = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
});
const handleLogin = async () => {
    try {
        // 模擬登入成功
        authStore.setAuth({ id: 'user_123', email: loginEmail.value, role: 'buyer' }, 'mock_access_token_15m');
        alert('登入成功！(雙 Token 機制運作中)');
        internalModel.value = false;
    }
    catch (err) {
        alert(err.response?.data?.message || '登入失敗');
    }
};
const handleRegister = async () => {
    alert('註冊成功！請直接登入。');
    tab.value = 'login';
};
const handleApplyArtisan = async () => {
    if (!brandBio.value) {
        alert('請填寫品牌簡介！');
        return;
    }
    const images = portfolioUrl.value ? portfolioUrl.value.split(',') : ['https://images.unsplash.com/photo-1546484475-7f7bd55792da'];
    await authStore.applyForArtisan(brandBio.value, images);
    alert('職人轉職申請已成功提交！目前已進入管理員待審核佇列。');
    internalModel.value = false;
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
    maxWidth: "500",
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.internalModel),
    maxWidth: "500",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    ...{ class: "pa-4 rounded-lg" },
}));
const __VLS_7 = __VLS_6({
    ...{ class: "pa-4 rounded-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ class: "text-h5 font-weight-bold text-primary" },
}));
const __VLS_11 = __VLS_10({
    ...{ class: "text-h5 font-weight-bold text-primary" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
(__VLS_ctx.tab === 'login' ? '買家 / 職人登入' : __VLS_ctx.tab === 'register' ? '註冊新帳號' : '申請轉為職人');
var __VLS_12;
const __VLS_13 = {}.VTabs;
/** @type {[typeof __VLS_components.VTabs, typeof __VLS_components.vTabs, typeof __VLS_components.VTabs, typeof __VLS_components.vTabs, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    modelValue: (__VLS_ctx.tab),
    color: "primary",
    ...{ class: "mb-4" },
}));
const __VLS_15 = __VLS_14({
    modelValue: (__VLS_ctx.tab),
    color: "primary",
    ...{ class: "mb-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_16.slots.default;
const __VLS_17 = {}.VTab;
/** @type {[typeof __VLS_components.VTab, typeof __VLS_components.vTab, typeof __VLS_components.VTab, typeof __VLS_components.vTab, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    value: "login",
}));
const __VLS_19 = __VLS_18({
    value: "login",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_20.slots.default;
var __VLS_20;
const __VLS_21 = {}.VTab;
/** @type {[typeof __VLS_components.VTab, typeof __VLS_components.vTab, typeof __VLS_components.VTab, typeof __VLS_components.vTab, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    value: "register",
}));
const __VLS_23 = __VLS_22({
    value: "register",
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
__VLS_24.slots.default;
var __VLS_24;
const __VLS_25 = {}.VTab;
/** @type {[typeof __VLS_components.VTab, typeof __VLS_components.vTab, typeof __VLS_components.VTab, typeof __VLS_components.vTab, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    value: "artisan",
}));
const __VLS_27 = __VLS_26({
    value: "artisan",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
__VLS_28.slots.default;
var __VLS_28;
var __VLS_16;
const __VLS_29 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({}));
const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_32.slots.default;
const __VLS_33 = {}.VWindow;
/** @type {[typeof __VLS_components.VWindow, typeof __VLS_components.vWindow, typeof __VLS_components.VWindow, typeof __VLS_components.vWindow, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    modelValue: (__VLS_ctx.tab),
}));
const __VLS_35 = __VLS_34({
    modelValue: (__VLS_ctx.tab),
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
__VLS_36.slots.default;
const __VLS_37 = {}.VWindowItem;
/** @type {[typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    value: "login",
}));
const __VLS_39 = __VLS_38({
    value: "login",
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
__VLS_40.slots.default;
const __VLS_41 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    modelValue: (__VLS_ctx.loginEmail),
    label: "Email",
    variant: "outlined",
    density: "compact",
}));
const __VLS_43 = __VLS_42({
    modelValue: (__VLS_ctx.loginEmail),
    label: "Email",
    variant: "outlined",
    density: "compact",
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
const __VLS_45 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    modelValue: (__VLS_ctx.loginPassword),
    label: "密碼",
    type: "password",
    variant: "outlined",
    density: "compact",
}));
const __VLS_47 = __VLS_46({
    modelValue: (__VLS_ctx.loginPassword),
    label: "密碼",
    type: "password",
    variant: "outlined",
    density: "compact",
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
const __VLS_49 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
    ...{ 'onClick': {} },
    color: "primary",
    block: true,
    ...{ class: "mt-3 font-weight-bold" },
}));
const __VLS_51 = __VLS_50({
    ...{ 'onClick': {} },
    color: "primary",
    block: true,
    ...{ class: "mt-3 font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
let __VLS_53;
let __VLS_54;
let __VLS_55;
const __VLS_56 = {
    onClick: (__VLS_ctx.handleLogin)
};
__VLS_52.slots.default;
var __VLS_52;
var __VLS_40;
const __VLS_57 = {}.VWindowItem;
/** @type {[typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, ]} */ ;
// @ts-ignore
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
    value: "register",
}));
const __VLS_59 = __VLS_58({
    value: "register",
}, ...__VLS_functionalComponentArgsRest(__VLS_58));
__VLS_60.slots.default;
const __VLS_61 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
    modelValue: (__VLS_ctx.regEmail),
    label: "Email",
    variant: "outlined",
    density: "compact",
}));
const __VLS_63 = __VLS_62({
    modelValue: (__VLS_ctx.regEmail),
    label: "Email",
    variant: "outlined",
    density: "compact",
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
const __VLS_65 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
    modelValue: (__VLS_ctx.regPassword),
    label: "設定密碼",
    type: "password",
    variant: "outlined",
    density: "compact",
}));
const __VLS_67 = __VLS_66({
    modelValue: (__VLS_ctx.regPassword),
    label: "設定密碼",
    type: "password",
    variant: "outlined",
    density: "compact",
}, ...__VLS_functionalComponentArgsRest(__VLS_66));
const __VLS_69 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
    ...{ 'onClick': {} },
    color: "primary",
    block: true,
    ...{ class: "mt-3 font-weight-bold" },
}));
const __VLS_71 = __VLS_70({
    ...{ 'onClick': {} },
    color: "primary",
    block: true,
    ...{ class: "mt-3 font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
let __VLS_73;
let __VLS_74;
let __VLS_75;
const __VLS_76 = {
    onClick: (__VLS_ctx.handleRegister)
};
__VLS_72.slots.default;
var __VLS_72;
var __VLS_60;
const __VLS_77 = {}.VWindowItem;
/** @type {[typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, typeof __VLS_components.VWindowItem, typeof __VLS_components.vWindowItem, ]} */ ;
// @ts-ignore
const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({
    value: "artisan",
}));
const __VLS_79 = __VLS_78({
    value: "artisan",
}, ...__VLS_functionalComponentArgsRest(__VLS_78));
__VLS_80.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-caption text-neutral mb-2" },
});
const __VLS_81 = {}.VTextarea;
/** @type {[typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ]} */ ;
// @ts-ignore
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({
    modelValue: (__VLS_ctx.brandBio),
    label: "品牌簡介與手作經驗",
    rows: "3",
    variant: "outlined",
    density: "compact",
}));
const __VLS_83 = __VLS_82({
    modelValue: (__VLS_ctx.brandBio),
    label: "品牌簡介與手作經驗",
    rows: "3",
    variant: "outlined",
    density: "compact",
}, ...__VLS_functionalComponentArgsRest(__VLS_82));
const __VLS_85 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
    modelValue: (__VLS_ctx.portfolioUrl),
    label: "代表作品圖片 URL",
    variant: "outlined",
    density: "compact",
    hint: "多張請用逗號隔開",
}));
const __VLS_87 = __VLS_86({
    modelValue: (__VLS_ctx.portfolioUrl),
    label: "代表作品圖片 URL",
    variant: "outlined",
    density: "compact",
    hint: "多張請用逗號隔開",
}, ...__VLS_functionalComponentArgsRest(__VLS_86));
const __VLS_89 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({
    ...{ 'onClick': {} },
    color: "accent",
    block: true,
    ...{ class: "mt-3 text-neutral font-weight-bold" },
}));
const __VLS_91 = __VLS_90({
    ...{ 'onClick': {} },
    color: "accent",
    block: true,
    ...{ class: "mt-3 text-neutral font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_90));
let __VLS_93;
let __VLS_94;
let __VLS_95;
const __VLS_96 = {
    onClick: (__VLS_ctx.handleApplyArtisan)
};
__VLS_92.slots.default;
var __VLS_92;
var __VLS_80;
var __VLS_36;
var __VLS_32;
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-caption']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            tab: tab,
            loginEmail: loginEmail,
            loginPassword: loginPassword,
            regEmail: regEmail,
            regPassword: regPassword,
            brandBio: brandBio,
            portfolioUrl: portfolioUrl,
            internalModel: internalModel,
            handleLogin: handleLogin,
            handleRegister: handleRegister,
            handleApplyArtisan: handleApplyArtisan,
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
