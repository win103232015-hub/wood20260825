import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
const woodworkTheme = {
    dark: false,
    colors: {
        primary: '#8B4513', // 溫暖木褐
        secondary: '#FDFBF7', // 大地米白
        accent: '#D4AF37', // 黃銅金
        neutral: '#2B2B2B', // 深焦炭灰
        surface: '#FFFFFF',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
};
export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'woodworkTheme',
        themes: {
            woodworkTheme,
        },
    },
});
