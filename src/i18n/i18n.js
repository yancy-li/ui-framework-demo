import zh from './zh';
import en from './en';

var i18n = {
    zh: zh,
    en: en,
    setLang: function (value) {
        window.localStorage.setItem('lang', value);
    },
    getLang: function () {
        return window.localStorage.getItem('lang') || 'zh';
    },
    get: function (key) {
        return this[this.getLang()][key];
    }
};

export default i18n;