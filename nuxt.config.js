export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'waltid-verifier-portal',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link: [
            {rel: 'icon', type: 'image/png', href: '/favicon.png'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/css/bootstrap-icons.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/bootstrap',
        '@/plugins/bootstrap-script'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        //'@nuxtjs/eslint-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        proxy: true
    },

    proxy: {
        // '/verifier-api/': 'https://wallet.waltid.org',
        // '/api/': 'https://wallet.waltid.org'
        '/verifier-api/': 'http://localhost:8080/',
        '/api/': 'http://localhost:8080/'
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build


    ssr: false,
    server: {
        host: '0.0.0.0',
        port: 4000
    }
}
