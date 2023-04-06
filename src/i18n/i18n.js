import { createI18n } from "vue-i18n";


const shortDatetimeFormat = {
    year: 'numeric', month: 'short', day: '2-digit'
}
const longDatetimeFormat ={
    year: 'numeric', month: 'long', day: 'numeric'
}

const datetimeFormats = {
    'en': {
        short: shortDatetimeFormat,
        long: longDatetimeFormat
    },
    'fr': {
        short: shortDatetimeFormat,
        long: longDatetimeFormat
    }
}

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: ()=> import('./en.js'),
        fr: ()=> import('./fr.js'),
    },
    datetimeFormats
})

export default i18n