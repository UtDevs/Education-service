import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
,
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
        integrity:
          'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
        crossorigin: "anonymous"
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.datatables.net/buttons/1.5.6/css/buttons.dataTables.min.css'
      }
    ],
    script: [
      {
        src: "//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
      },
      {
        src: "https://code.jquery.com/jquery-3.3.1.js"
      },
      {
        src: "https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"
      },
      {
        src: "https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"
      },
      {
        src: "https://cdn.datatables.net/buttons/1.5.6/js/dataTables.buttons.min.js"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"
      },
      {
        src: "https://cdn.datatables.net/buttons/1.5.6/js/buttons.html5.min.js"
      },
      {
        src: "https://cdn.datatables.net/buttons/1.5.6/js/buttons.print.min.js"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
