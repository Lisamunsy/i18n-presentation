import { createI18n } from "vue-i18n";
import enMessages from "./en";
import frMessages from "./fr";


const shortDatetimeFormat = {
    year: 'numeric', month: '2-digit', day: '2-digit'
}
const longDatetimeFormat = {
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

const numberFormats = {
    'en': {
        currency: {
            style: 'currency', currency: 'USD', notation: 'standard'
        }
    },
    'fr':{
        currency: {
            style: 'currency', currency: 'EUR', notation: 'standard'
        }
    }
}

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: enMessages,
        fr: frMessages,
    },
    datetimeFormats,
    numberFormats
})

export default i18n