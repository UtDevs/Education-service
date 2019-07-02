import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/vuetify/dist/vuetify.css'

import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"titleTemplate":"%s - education-service","title":"education-service","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Education DCB Service"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:300,400,500,700|Material+Icons"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.5.0\u002Fcss\u002Fall.css","integrity":"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU","crossorigin":"anonymous"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ftwitter-bootstrap\u002F4.1.3\u002Fcss\u002Fbootstrap.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdn.datatables.net\u002F1.10.19\u002Fcss\u002FdataTables.bootstrap4.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdn.datatables.net\u002Fbuttons\u002F1.5.6\u002Fcss\u002Fbuttons.dataTables.min.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:300,400,500,700|Material+Icons"}],"script":[{"src":"\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjquery\u002F3.2.1\u002Fjquery.min.js"},{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.3.1.js"},{"src":"https:\u002F\u002Fcdn.datatables.net\u002F1.10.19\u002Fjs\u002Fjquery.dataTables.min.js"},{"src":"https:\u002F\u002Fcdn.datatables.net\u002F1.10.19\u002Fjs\u002FdataTables.bootstrap4.min.js"},{"src":"https:\u002F\u002Fcdn.datatables.net\u002Fbuttons\u002F1.5.6\u002Fjs\u002FdataTables.buttons.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjszip\u002F3.1.3\u002Fjszip.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpdfmake\u002F0.1.53\u002Fpdfmake.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fpdfmake\u002F0.1.53\u002Fvfs_fonts.js"},{"src":"https:\u002F\u002Fcdn.datatables.net\u002Fbuttons\u002F1.5.6\u002Fjs\u002Fbuttons.html5.min.js"},{"src":"https:\u002F\u002Fcdn.datatables.net\u002Fbuttons\u002F1.5.6\u002Fjs\u002Fbuttons.print.min.js"}],"style":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
