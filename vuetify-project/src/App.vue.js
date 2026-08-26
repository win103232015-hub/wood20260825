/// <reference types="../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, onMounted } from 'vue';
import { useAuthStore } from './stores/auth';
import api from './api/axios';
import ProductGallery from './components/ProductGallery.vue';
import CheckoutModal from './components/CheckoutModal.vue';
import ProductFilterBar from './components/ProductFilterBar.vue';
import AuthModal from './components/AuthModal.vue';
import ReviewSection from './components/ReviewSection.vue';
import DisputeCenterModal from './components/DisputeCenterModal.vue';
const authStore = useAuthStore();
const searchKeyword = ref('');
const productsList = ref([]);
const artisansList = ref([]);
const ordersList = ref([]);
const loadingProducts = ref(false);
const showCheckoutModal = ref(false);
const showAuthModal = ref(false);
const showOrdersModal = ref(false);
const showDisputeModal = ref(false);
const selectedProduct = ref(null);
const activeFilters = ref({
    woodSpecies: [],
    coatingMethods: [],
});
const fetchProducts = async () => {
    loadingProducts.value = true;
    try {
        const params = {};
        if (searchKeyword.value)
            params.keyword = searchKeyword.value;
        if (activeFilters.value.woodSpecies.length > 0)
            params.woodSpecies = activeFilters.value.woodSpecies.join(',');
        if (activeFilters.value.coatingMethods.length > 0)
            params.coatingMethod = activeFilters.value.coatingMethods.join(',');
        const res = await api.get('/products', { params });
        productsList.value = res.data.products;
    }
    catch (err) {
        console.error('撈取商品失敗:', err);
    }
    finally {
        loadingProducts.value = false;
    }
};
const fetchArtisans = async () => {
    try {
        const res = await api.get('/artisans');
        artisansList.value = res.data.artisans;
    }
    catch (err) {
        console.error('撈取職人失敗:', err);
    }
};
const fetchOrders = async () => {
    try {
        const res = await api.get('/orders');
        ordersList.value = res.data.orders;
    }
    catch (err) {
        console.error('撈取帳單失敗:', err);
    }
};
const handleFilterChange = (filters) => {
    activeFilters.value = filters;
    fetchProducts();
};
const openCheckoutModal = (product) => {
    selectedProduct.value = product;
    showCheckoutModal.value = true;
};
const onOrderSuccess = () => {
    fetchOrders();
};
const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el)
        el.scrollIntoView({ behavior: 'smooth' });
};
onMounted(() => {
    fetchProducts();
    fetchArtisans();
    fetchOrders();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.VApp;
/** @type {[typeof __VLS_components.VApp, typeof __VLS_components.vApp, typeof __VLS_components.VApp, typeof __VLS_components.vApp, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "bg-secondary" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "bg-secondary" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.VAppBar;
/** @type {[typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    flat: true,
    color: "primary",
    ...{ class: "px-4" },
}));
const __VLS_7 = __VLS_6({
    flat: true,
    color: "primary",
    ...{ class: "px-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.VAppBarTitle;
/** @type {[typeof __VLS_components.VAppBarTitle, typeof __VLS_components.vAppBarTitle, typeof __VLS_components.VAppBarTitle, typeof __VLS_components.vAppBarTitle, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    ...{ class: "calligraphy-title text-h5 font-weight-bold text-white d-flex align-center" },
}));
const __VLS_11 = __VLS_10({
    ...{ class: "calligraphy-title text-h5 font-weight-bold text-white d-flex align-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
const __VLS_13 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    icon: "mdi-tree",
    ...{ class: "mr-2" },
    color: "accent",
}));
const __VLS_15 = __VLS_14({
    icon: "mdi-tree",
    ...{ class: "mr-2" },
    color: "accent",
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
var __VLS_12;
const __VLS_17 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.searchKeyword),
    placeholder: "搜尋作品名稱 (如：茶盤、邊桌、檜木)...",
    variant: "solo-filled",
    density: "compact",
    hideDetails: true,
    prependInnerIcon: "mdi-magnify",
    ...{ class: "mx-4 max-w-sm" },
}));
const __VLS_19 = __VLS_18({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.searchKeyword),
    placeholder: "搜尋作品名稱 (如：茶盤、邊桌、檜木)...",
    variant: "solo-filled",
    density: "compact",
    hideDetails: true,
    prependInnerIcon: "mdi-magnify",
    ...{ class: "mx-4 max-w-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
let __VLS_21;
let __VLS_22;
let __VLS_23;
const __VLS_24 = {
    'onUpdate:modelValue': (__VLS_ctx.fetchProducts)
};
var __VLS_20;
const __VLS_25 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
const __VLS_29 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    ...{ 'onClick': {} },
    variant: "text",
    color: "white",
    ...{ class: "font-weight-bold" },
}));
const __VLS_31 = __VLS_30({
    ...{ 'onClick': {} },
    variant: "text",
    color: "white",
    ...{ class: "font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
let __VLS_33;
let __VLS_34;
let __VLS_35;
const __VLS_36 = {
    onClick: (...[$event]) => {
        __VLS_ctx.scrollToSection('artisan-section');
    }
};
__VLS_32.slots.default;
var __VLS_32;
const __VLS_37 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
    ...{ 'onClick': {} },
    variant: "text",
    color: "white",
    ...{ class: "font-weight-bold" },
}));
const __VLS_39 = __VLS_38({
    ...{ 'onClick': {} },
    variant: "text",
    color: "white",
    ...{ class: "font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_38));
let __VLS_41;
let __VLS_42;
let __VLS_43;
const __VLS_44 = {
    onClick: (...[$event]) => {
        __VLS_ctx.scrollToSection('products-section');
    }
};
__VLS_40.slots.default;
var __VLS_40;
const __VLS_45 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({
    ...{ 'onClick': {} },
    variant: "text",
    color: "white",
    ...{ class: "font-weight-bold" },
}));
const __VLS_47 = __VLS_46({
    ...{ 'onClick': {} },
    variant: "text",
    color: "white",
    ...{ class: "font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_46));
let __VLS_49;
let __VLS_50;
let __VLS_51;
const __VLS_52 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showOrdersModal = true;
    }
};
__VLS_48.slots.default;
const __VLS_53 = {}.VBadge;
/** @type {[typeof __VLS_components.VBadge, typeof __VLS_components.vBadge, typeof __VLS_components.VBadge, typeof __VLS_components.vBadge, ]} */ ;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    content: (__VLS_ctx.ordersList.length),
    color: "accent",
    ...{ class: "mr-1" },
}));
const __VLS_55 = __VLS_54({
    content: (__VLS_ctx.ordersList.length),
    color: "accent",
    ...{ class: "mr-1" },
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
__VLS_56.slots.default;
const __VLS_57 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({}));
const __VLS_59 = __VLS_58({}, ...__VLS_functionalComponentArgsRest(__VLS_58));
__VLS_60.slots.default;
var __VLS_60;
var __VLS_56;
var __VLS_48;
const __VLS_61 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
    ...{ 'onClick': {} },
    variant: "text",
    color: "amber-lighten-4",
    ...{ class: "font-weight-bold" },
}));
const __VLS_63 = __VLS_62({
    ...{ 'onClick': {} },
    variant: "text",
    color: "amber-lighten-4",
    ...{ class: "font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
let __VLS_65;
let __VLS_66;
let __VLS_67;
const __VLS_68 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showDisputeModal = true;
    }
};
__VLS_64.slots.default;
const __VLS_69 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({
    start: true,
}));
const __VLS_71 = __VLS_70({
    start: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_70));
__VLS_72.slots.default;
var __VLS_72;
var __VLS_64;
if (!__VLS_ctx.authStore.isAuthenticated) {
    const __VLS_73 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
        ...{ 'onClick': {} },
        color: "accent",
        variant: "flat",
        ...{ class: "text-neutral font-weight-bold ml-2" },
    }));
    const __VLS_75 = __VLS_74({
        ...{ 'onClick': {} },
        color: "accent",
        variant: "flat",
        ...{ class: "text-neutral font-weight-bold ml-2" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    let __VLS_77;
    let __VLS_78;
    let __VLS_79;
    const __VLS_80 = {
        onClick: (...[$event]) => {
            if (!(!__VLS_ctx.authStore.isAuthenticated))
                return;
            __VLS_ctx.showAuthModal = true;
        }
    };
    __VLS_76.slots.default;
    var __VLS_76;
}
else {
    const __VLS_81 = {}.VChip;
    /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
    // @ts-ignore
    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({
        color: "accent",
        ...{ class: "ml-2 font-weight-bold text-neutral" },
    }));
    const __VLS_83 = __VLS_82({
        color: "accent",
        ...{ class: "ml-2 font-weight-bold text-neutral" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_82));
    __VLS_84.slots.default;
    (__VLS_ctx.authStore.user?.email);
    (__VLS_ctx.authStore.user?.role === 'artisan' ? '職人' : __VLS_ctx.authStore.user?.role === 'admin' ? '管理者' : '買家');
    var __VLS_84;
    const __VLS_85 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, new __VLS_85({
        ...{ 'onClick': {} },
        variant: "text",
        color: "white",
    }));
    const __VLS_87 = __VLS_86({
        ...{ 'onClick': {} },
        variant: "text",
        color: "white",
    }, ...__VLS_functionalComponentArgsRest(__VLS_86));
    let __VLS_89;
    let __VLS_90;
    let __VLS_91;
    const __VLS_92 = {
        onClick: (__VLS_ctx.authStore.logout)
    };
    __VLS_88.slots.default;
    var __VLS_88;
}
var __VLS_8;
const __VLS_93 = {}.VMain;
/** @type {[typeof __VLS_components.VMain, typeof __VLS_components.vMain, typeof __VLS_components.VMain, typeof __VLS_components.vMain, ]} */ ;
// @ts-ignore
const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({}));
const __VLS_95 = __VLS_94({}, ...__VLS_functionalComponentArgsRest(__VLS_94));
__VLS_96.slots.default;
const __VLS_97 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({
    ...{ class: "py-8" },
}));
const __VLS_99 = __VLS_98({
    ...{ class: "py-8" },
}, ...__VLS_functionalComponentArgsRest(__VLS_98));
__VLS_100.slots.default;
const __VLS_101 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({
    color: "primary",
    ...{ class: "pa-8 text-white rounded-lg mb-8 shadow-wood" },
    elevation: "3",
}));
const __VLS_103 = __VLS_102({
    color: "primary",
    ...{ class: "pa-8 text-white rounded-lg mb-8 shadow-wood" },
    elevation: "3",
}, ...__VLS_functionalComponentArgsRest(__VLS_102));
__VLS_104.slots.default;
const __VLS_105 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({
    align: "center",
}));
const __VLS_107 = __VLS_106({
    align: "center",
}, ...__VLS_functionalComponentArgsRest(__VLS_106));
__VLS_108.slots.default;
const __VLS_109 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({
    cols: "12",
    md: "8",
}));
const __VLS_111 = __VLS_110({
    cols: "12",
    md: "8",
}, ...__VLS_functionalComponentArgsRest(__VLS_110));
__VLS_112.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "calligraphy-title text-h3 font-weight-bold mb-3" },
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-subtitle-1 text-amber-lighten-5 mb-5 font-weight-bold" },
});
const __VLS_113 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({
    ...{ 'onClick': {} },
    color: "accent",
    size: "x-large",
    ...{ class: "text-neutral font-weight-bold" },
}));
const __VLS_115 = __VLS_114({
    ...{ 'onClick': {} },
    color: "accent",
    size: "x-large",
    ...{ class: "text-neutral font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_114));
let __VLS_117;
let __VLS_118;
let __VLS_119;
const __VLS_120 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showAuthModal = true;
    }
};
__VLS_116.slots.default;
const __VLS_121 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_122 = __VLS_asFunctionalComponent(__VLS_121, new __VLS_121({
    start: true,
}));
const __VLS_123 = __VLS_122({
    start: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_122));
__VLS_124.slots.default;
var __VLS_124;
var __VLS_116;
var __VLS_112;
var __VLS_108;
var __VLS_104;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "artisan-section",
    ...{ class: "mb-10" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "d-flex align-center mb-4" },
});
const __VLS_125 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_126 = __VLS_asFunctionalComponent(__VLS_125, new __VLS_125({
    color: "accent",
    size: "large",
    ...{ class: "mr-2" },
}));
const __VLS_127 = __VLS_126({
    color: "accent",
    size: "large",
    ...{ class: "mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_126));
__VLS_128.slots.default;
var __VLS_128;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "calligraphy-title text-h4 font-weight-bold text-primary" },
});
const __VLS_129 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({}));
const __VLS_131 = __VLS_130({}, ...__VLS_functionalComponentArgsRest(__VLS_130));
__VLS_132.slots.default;
for (const [artisan] of __VLS_getVForSourceType((__VLS_ctx.artisansList))) {
    const __VLS_133 = {}.VCol;
    /** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
    // @ts-ignore
    const __VLS_134 = __VLS_asFunctionalComponent(__VLS_133, new __VLS_133({
        key: (artisan._id),
        cols: "12",
        md: "4",
    }));
    const __VLS_135 = __VLS_134({
        key: (artisan._id),
        cols: "12",
        md: "4",
    }, ...__VLS_functionalComponentArgsRest(__VLS_134));
    __VLS_136.slots.default;
    const __VLS_137 = {}.VCard;
    /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
    // @ts-ignore
    const __VLS_138 = __VLS_asFunctionalComponent(__VLS_137, new __VLS_137({
        ...{ class: "pa-5 rounded-lg bg-white h-100 d-flex flex-column border shadow-wood" },
        elevation: "2",
    }));
    const __VLS_139 = __VLS_138({
        ...{ class: "pa-5 rounded-lg bg-white h-100 d-flex flex-column border shadow-wood" },
        elevation: "2",
    }, ...__VLS_functionalComponentArgsRest(__VLS_138));
    __VLS_140.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "d-flex align-center mb-3" },
    });
    const __VLS_141 = {}.VAvatar;
    /** @type {[typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, typeof __VLS_components.VAvatar, typeof __VLS_components.vAvatar, ]} */ ;
    // @ts-ignore
    const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({
        size: "64",
        ...{ class: "mr-3 border border-amber-darken-3" },
    }));
    const __VLS_143 = __VLS_142({
        size: "64",
        ...{ class: "mr-3 border border-amber-darken-3" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_142));
    __VLS_144.slots.default;
    const __VLS_145 = {}.VImg;
    /** @type {[typeof __VLS_components.VImg, typeof __VLS_components.vImg, typeof __VLS_components.VImg, typeof __VLS_components.vImg, ]} */ ;
    // @ts-ignore
    const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({
        src: (artisan.artisanProfile?.portfolioImages?.[0] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300'),
        cover: true,
    }));
    const __VLS_147 = __VLS_146({
        src: (artisan.artisanProfile?.portfolioImages?.[0] || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300'),
        cover: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_146));
    var __VLS_144;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "font-weight-bold text-h6 text-neutral calligraphy-title" },
    });
    (artisan.email.split('@')[0]);
    const __VLS_149 = {}.VChip;
    /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
    // @ts-ignore
    const __VLS_150 = __VLS_asFunctionalComponent(__VLS_149, new __VLS_149({
        size: "small",
        color: "accent",
        label: true,
        ...{ class: "font-weight-bold text-neutral" },
    }));
    const __VLS_151 = __VLS_150({
        size: "small",
        color: "accent",
        label: true,
        ...{ class: "font-weight-bold text-neutral" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_150));
    __VLS_152.slots.default;
    const __VLS_153 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    const __VLS_154 = __VLS_asFunctionalComponent(__VLS_153, new __VLS_153({
        start: true,
        size: "x-small",
    }));
    const __VLS_155 = __VLS_154({
        start: true,
        size: "x-small",
    }, ...__VLS_functionalComponentArgsRest(__VLS_154));
    __VLS_156.slots.default;
    var __VLS_156;
    (artisan.artisanProfile?.experienceYears || 10);
    var __VLS_152;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-body-1 text-grey-darken-3 mb-4 flex-grow-1" },
        ...{ style: {} },
    });
    (artisan.artisanProfile?.brandBio);
    const __VLS_157 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    const __VLS_158 = __VLS_asFunctionalComponent(__VLS_157, new __VLS_157({
        color: "primary",
        variant: "outlined",
        block: true,
        ...{ class: "font-weight-bold" },
    }));
    const __VLS_159 = __VLS_158({
        color: "primary",
        variant: "outlined",
        block: true,
        ...{ class: "font-weight-bold" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_158));
    __VLS_160.slots.default;
    var __VLS_160;
    var __VLS_140;
    var __VLS_136;
}
var __VLS_132;
/** @type {[typeof ProductFilterBar, ]} */ ;
// @ts-ignore
const __VLS_161 = __VLS_asFunctionalComponent(ProductFilterBar, new ProductFilterBar({
    ...{ 'onFilterChange': {} },
}));
const __VLS_162 = __VLS_161({
    ...{ 'onFilterChange': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_161));
let __VLS_164;
let __VLS_165;
let __VLS_166;
const __VLS_167 = {
    onFilterChange: (__VLS_ctx.handleFilterChange)
};
var __VLS_163;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "products-section",
    ...{ class: "mb-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "d-flex align-center justify-space-between mb-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "calligraphy-title text-h4 font-weight-bold text-primary" },
});
const __VLS_168 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({
    color: "primary",
    ...{ class: "mr-2" },
}));
const __VLS_170 = __VLS_169({
    color: "primary",
    ...{ class: "mr-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_169));
__VLS_171.slots.default;
var __VLS_171;
(__VLS_ctx.productsList.length);
if (__VLS_ctx.loadingProducts) {
    const __VLS_172 = {}.VProgressCircular;
    /** @type {[typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, ]} */ ;
    // @ts-ignore
    const __VLS_173 = __VLS_asFunctionalComponent(__VLS_172, new __VLS_172({
        indeterminate: true,
        color: "primary",
        size: "24",
    }));
    const __VLS_174 = __VLS_173({
        indeterminate: true,
        color: "primary",
        size: "24",
    }, ...__VLS_functionalComponentArgsRest(__VLS_173));
}
if (__VLS_ctx.productsList.length > 0) {
    const __VLS_176 = {}.VRow;
    /** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
    // @ts-ignore
    const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({}));
    const __VLS_178 = __VLS_177({}, ...__VLS_functionalComponentArgsRest(__VLS_177));
    __VLS_179.slots.default;
    for (const [product] of __VLS_getVForSourceType((__VLS_ctx.productsList))) {
        const __VLS_180 = {}.VCol;
        /** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
        // @ts-ignore
        const __VLS_181 = __VLS_asFunctionalComponent(__VLS_180, new __VLS_180({
            key: (product._id),
            cols: "12",
            md: "6",
        }));
        const __VLS_182 = __VLS_181({
            key: (product._id),
            cols: "12",
            md: "6",
        }, ...__VLS_functionalComponentArgsRest(__VLS_181));
        __VLS_183.slots.default;
        const __VLS_184 = {}.VCard;
        /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
        // @ts-ignore
        const __VLS_185 = __VLS_asFunctionalComponent(__VLS_184, new __VLS_184({
            ...{ class: "pa-5 rounded-lg bg-white border shadow-wood" },
            elevation: "2",
        }));
        const __VLS_186 = __VLS_185({
            ...{ class: "pa-5 rounded-lg bg-white border shadow-wood" },
            elevation: "2",
        }, ...__VLS_functionalComponentArgsRest(__VLS_185));
        __VLS_187.slots.default;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "d-flex justify-space-between align-center mb-2" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "calligraphy-title text-h5 font-weight-bold text-primary" },
        });
        (product.title);
        const __VLS_188 = {}.VChip;
        /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
        // @ts-ignore
        const __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({
            color: (product.saleType === 'UNIQUE' ? 'accent' : product.saleType === 'CUSTOM' ? 'info' : 'success'),
            size: "small",
            ...{ class: "font-weight-bold text-neutral" },
        }));
        const __VLS_190 = __VLS_189({
            color: (product.saleType === 'UNIQUE' ? 'accent' : product.saleType === 'CUSTOM' ? 'info' : 'success'),
            size: "small",
            ...{ class: "font-weight-bold text-neutral" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_189));
        __VLS_191.slots.default;
        (product.saleType === 'UNIQUE' ? 'UNIQUE 孤品 (庫存:1)' : product.saleType === 'CUSTOM' ? `CUSTOM 訂製 (${product.customPrepDays}天)` : 'BATCH 批次現貨');
        var __VLS_191;
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-body-1 text-grey-darken-3 mb-3" },
            ...{ style: {} },
        });
        (product.description);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "mb-3" },
        });
        for (const [wood] of __VLS_getVForSourceType((product.woodSpecies))) {
            const __VLS_192 = {}.VChip;
            /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
            // @ts-ignore
            const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({
                key: (wood),
                size: "small",
                color: "primary",
                variant: "tonal",
                ...{ class: "mr-1 font-weight-bold" },
            }));
            const __VLS_194 = __VLS_193({
                key: (wood),
                size: "small",
                color: "primary",
                variant: "tonal",
                ...{ class: "mr-1 font-weight-bold" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_193));
            __VLS_195.slots.default;
            (wood);
            var __VLS_195;
        }
        for (const [coat] of __VLS_getVForSourceType((product.coatingMethod))) {
            const __VLS_196 = {}.VChip;
            /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
            // @ts-ignore
            const __VLS_197 = __VLS_asFunctionalComponent(__VLS_196, new __VLS_196({
                key: (coat),
                size: "small",
                color: "accent",
                variant: "tonal",
                ...{ class: "mr-1 font-weight-bold" },
            }));
            const __VLS_198 = __VLS_197({
                key: (coat),
                size: "small",
                color: "accent",
                variant: "tonal",
                ...{ class: "mr-1 font-weight-bold" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_197));
            __VLS_199.slots.default;
            (coat);
            var __VLS_199;
        }
        /** @type {[typeof ProductGallery, ]} */ ;
        // @ts-ignore
        const __VLS_200 = __VLS_asFunctionalComponent(ProductGallery, new ProductGallery({
            primaryImage: (product.images.primary),
            detailImages: (product.images.details),
        }));
        const __VLS_201 = __VLS_200({
            primaryImage: (product.images.primary),
            detailImages: (product.images.details),
        }, ...__VLS_functionalComponentArgsRest(__VLS_200));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "d-flex justify-space-between align-center mt-5" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "text-h4 font-weight-bold text-primary calligraphy-title" },
        });
        (product.price.toLocaleString());
        const __VLS_203 = {}.VBtn;
        /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
        // @ts-ignore
        const __VLS_204 = __VLS_asFunctionalComponent(__VLS_203, new __VLS_203({
            ...{ 'onClick': {} },
            color: "accent",
            size: "x-large",
            ...{ class: "text-neutral font-weight-bold" },
        }));
        const __VLS_205 = __VLS_204({
            ...{ 'onClick': {} },
            color: "accent",
            size: "x-large",
            ...{ class: "text-neutral font-weight-bold" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_204));
        let __VLS_207;
        let __VLS_208;
        let __VLS_209;
        const __VLS_210 = {
            onClick: (...[$event]) => {
                if (!(__VLS_ctx.productsList.length > 0))
                    return;
                __VLS_ctx.openCheckoutModal(product);
            }
        };
        __VLS_206.slots.default;
        const __VLS_211 = {}.VIcon;
        /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
        // @ts-ignore
        const __VLS_212 = __VLS_asFunctionalComponent(__VLS_211, new __VLS_211({
            start: true,
        }));
        const __VLS_213 = __VLS_212({
            start: true,
        }, ...__VLS_functionalComponentArgsRest(__VLS_212));
        __VLS_214.slots.default;
        var __VLS_214;
        var __VLS_206;
        /** @type {[typeof ReviewSection, ]} */ ;
        // @ts-ignore
        const __VLS_215 = __VLS_asFunctionalComponent(ReviewSection, new ReviewSection({
            productId: (product._id),
        }));
        const __VLS_216 = __VLS_215({
            productId: (product._id),
        }, ...__VLS_functionalComponentArgsRest(__VLS_215));
        var __VLS_187;
        var __VLS_183;
    }
    var __VLS_179;
}
else {
    const __VLS_218 = {}.VAlert;
    /** @type {[typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, typeof __VLS_components.VAlert, typeof __VLS_components.vAlert, ]} */ ;
    // @ts-ignore
    const __VLS_219 = __VLS_asFunctionalComponent(__VLS_218, new __VLS_218({
        type: "warning",
        variant: "tonal",
        ...{ class: "mt-4" },
    }));
    const __VLS_220 = __VLS_219({
        type: "warning",
        variant: "tonal",
        ...{ class: "mt-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_219));
    __VLS_221.slots.default;
    var __VLS_221;
}
if (__VLS_ctx.selectedProduct) {
    /** @type {[typeof CheckoutModal, ]} */ ;
    // @ts-ignore
    const __VLS_222 = __VLS_asFunctionalComponent(CheckoutModal, new CheckoutModal({
        ...{ 'onOrderSuccess': {} },
        modelValue: (__VLS_ctx.showCheckoutModal),
        product: (__VLS_ctx.selectedProduct),
    }));
    const __VLS_223 = __VLS_222({
        ...{ 'onOrderSuccess': {} },
        modelValue: (__VLS_ctx.showCheckoutModal),
        product: (__VLS_ctx.selectedProduct),
    }, ...__VLS_functionalComponentArgsRest(__VLS_222));
    let __VLS_225;
    let __VLS_226;
    let __VLS_227;
    const __VLS_228 = {
        onOrderSuccess: (__VLS_ctx.onOrderSuccess)
    };
    var __VLS_224;
}
/** @type {[typeof DisputeCenterModal, ]} */ ;
// @ts-ignore
const __VLS_229 = __VLS_asFunctionalComponent(DisputeCenterModal, new DisputeCenterModal({
    modelValue: (__VLS_ctx.showDisputeModal),
}));
const __VLS_230 = __VLS_229({
    modelValue: (__VLS_ctx.showDisputeModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_229));
const __VLS_232 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
const __VLS_233 = __VLS_asFunctionalComponent(__VLS_232, new __VLS_232({
    modelValue: (__VLS_ctx.showOrdersModal),
    maxWidth: "750",
}));
const __VLS_234 = __VLS_233({
    modelValue: (__VLS_ctx.showOrdersModal),
    maxWidth: "750",
}, ...__VLS_functionalComponentArgsRest(__VLS_233));
__VLS_235.slots.default;
const __VLS_236 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
const __VLS_237 = __VLS_asFunctionalComponent(__VLS_236, new __VLS_236({
    ...{ class: "pa-4 rounded-lg" },
}));
const __VLS_238 = __VLS_237({
    ...{ class: "pa-4 rounded-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_237));
__VLS_239.slots.default;
const __VLS_240 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
const __VLS_241 = __VLS_asFunctionalComponent(__VLS_240, new __VLS_240({
    ...{ class: "calligraphy-title text-h4 font-weight-bold text-primary d-flex align-center justify-space-between" },
}));
const __VLS_242 = __VLS_241({
    ...{ class: "calligraphy-title text-h4 font-weight-bold text-primary d-flex align-center justify-space-between" },
}, ...__VLS_functionalComponentArgsRest(__VLS_241));
__VLS_243.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
const __VLS_244 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
const __VLS_245 = __VLS_asFunctionalComponent(__VLS_244, new __VLS_244({
    ...{ 'onClick': {} },
    icon: "mdi-close",
    variant: "text",
}));
const __VLS_246 = __VLS_245({
    ...{ 'onClick': {} },
    icon: "mdi-close",
    variant: "text",
}, ...__VLS_functionalComponentArgsRest(__VLS_245));
let __VLS_248;
let __VLS_249;
let __VLS_250;
const __VLS_251 = {
    onClick: (...[$event]) => {
        __VLS_ctx.showOrdersModal = false;
    }
};
var __VLS_247;
var __VLS_243;
const __VLS_252 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
const __VLS_253 = __VLS_asFunctionalComponent(__VLS_252, new __VLS_252({}));
const __VLS_254 = __VLS_253({}, ...__VLS_functionalComponentArgsRest(__VLS_253));
__VLS_255.slots.default;
if (__VLS_ctx.ordersList.length > 0) {
    const __VLS_256 = {}.VList;
    /** @type {[typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ]} */ ;
    // @ts-ignore
    const __VLS_257 = __VLS_asFunctionalComponent(__VLS_256, new __VLS_256({}));
    const __VLS_258 = __VLS_257({}, ...__VLS_functionalComponentArgsRest(__VLS_257));
    __VLS_259.slots.default;
    for (const [order] of __VLS_getVForSourceType((__VLS_ctx.ordersList))) {
        const __VLS_260 = {}.VListItem;
        /** @type {[typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ]} */ ;
        // @ts-ignore
        const __VLS_261 = __VLS_asFunctionalComponent(__VLS_260, new __VLS_260({
            key: (order._id),
            ...{ class: "border rounded mb-2 pa-3" },
        }));
        const __VLS_262 = __VLS_261({
            key: (order._id),
            ...{ class: "border rounded mb-2 pa-3" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_261));
        __VLS_263.slots.default;
        const __VLS_264 = {}.VListItemTitle;
        /** @type {[typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ]} */ ;
        // @ts-ignore
        const __VLS_265 = __VLS_asFunctionalComponent(__VLS_264, new __VLS_264({
            ...{ class: "calligraphy-title text-h6 font-weight-bold text-primary" },
        }));
        const __VLS_266 = __VLS_265({
            ...{ class: "calligraphy-title text-h6 font-weight-bold text-primary" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_265));
        __VLS_267.slots.default;
        (order.orderNo);
        (order.productTitle);
        var __VLS_267;
        const __VLS_268 = {}.VListItemSubtitle;
        /** @type {[typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, typeof __VLS_components.VListItemSubtitle, typeof __VLS_components.vListItemSubtitle, ]} */ ;
        // @ts-ignore
        const __VLS_269 = __VLS_asFunctionalComponent(__VLS_268, new __VLS_268({
            ...{ class: "text-body-2 text-grey-darken-3 mt-1" },
        }));
        const __VLS_270 = __VLS_269({
            ...{ class: "text-body-2 text-grey-darken-3 mt-1" },
        }, ...__VLS_functionalComponentArgsRest(__VLS_269));
        __VLS_271.slots.default;
        (order.buyerEmail);
        (order.shippingOption);
        (order.totalPrice.toLocaleString());
        var __VLS_271;
        {
            const { append: __VLS_thisSlot } = __VLS_263.slots;
            const __VLS_272 = {}.VChip;
            /** @type {[typeof __VLS_components.VChip, typeof __VLS_components.vChip, typeof __VLS_components.VChip, typeof __VLS_components.vChip, ]} */ ;
            // @ts-ignore
            const __VLS_273 = __VLS_asFunctionalComponent(__VLS_272, new __VLS_272({
                color: "success",
                size: "medium",
                ...{ class: "font-weight-bold" },
            }));
            const __VLS_274 = __VLS_273({
                color: "success",
                size: "medium",
                ...{ class: "font-weight-bold" },
            }, ...__VLS_functionalComponentArgsRest(__VLS_273));
            __VLS_275.slots.default;
            const __VLS_276 = {}.VIcon;
            /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
            // @ts-ignore
            const __VLS_277 = __VLS_asFunctionalComponent(__VLS_276, new __VLS_276({
                start: true,
                size: "x-small",
            }));
            const __VLS_278 = __VLS_277({
                start: true,
                size: "x-small",
            }, ...__VLS_functionalComponentArgsRest(__VLS_277));
            __VLS_279.slots.default;
            var __VLS_279;
            var __VLS_275;
        }
        var __VLS_263;
    }
    var __VLS_259;
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-center py-6 text-grey-darken-1" },
    });
}
var __VLS_255;
var __VLS_239;
var __VLS_235;
/** @type {[typeof AuthModal, ]} */ ;
// @ts-ignore
const __VLS_280 = __VLS_asFunctionalComponent(AuthModal, new AuthModal({
    modelValue: (__VLS_ctx.showAuthModal),
}));
const __VLS_281 = __VLS_280({
    modelValue: (__VLS_ctx.showAuthModal),
}, ...__VLS_functionalComponentArgsRest(__VLS_280));
var __VLS_100;
var __VLS_96;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-4']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-wood']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-amber-lighten-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-10']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-wood']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-amber-darken-3']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-grow-1']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-5']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-wood']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-1']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-neutral']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-3']} */ ;
/** @type {__VLS_StyleScopedClasses['calligraphy-title']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['text-body-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-darken-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-grey-darken-1']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ProductGallery: ProductGallery,
            CheckoutModal: CheckoutModal,
            ProductFilterBar: ProductFilterBar,
            AuthModal: AuthModal,
            ReviewSection: ReviewSection,
            DisputeCenterModal: DisputeCenterModal,
            authStore: authStore,
            searchKeyword: searchKeyword,
            productsList: productsList,
            artisansList: artisansList,
            ordersList: ordersList,
            loadingProducts: loadingProducts,
            showCheckoutModal: showCheckoutModal,
            showAuthModal: showAuthModal,
            showOrdersModal: showOrdersModal,
            showDisputeModal: showDisputeModal,
            selectedProduct: selectedProduct,
            fetchProducts: fetchProducts,
            handleFilterChange: handleFilterChange,
            openCheckoutModal: openCheckoutModal,
            onOrderSuccess: onOrderSuccess,
            scrollToSection: scrollToSection,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
