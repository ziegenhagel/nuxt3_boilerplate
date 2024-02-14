// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            // und icons für ios app screen
            link: [{rel: 'apple-touch-icon', href: '/img/icon.jpeg'}],
            title: 'TITLE',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'},
                {name: 'apple-mobile-web-app-capable', content: 'yes'},

                // und icons für ios app screen
                {name: 'apple-touch-icon', content: '/img/icon.jpeg'},
            ],
        },
    },

    imports: {
        presets: [{
            // run yarn add sweetalert2
            from: 'sweetalert2',
            imports: [{name: 'default', as: 'Swal'}],
        }]
    },

    modules: ["@nuxtjs/tailwindcss"]
})