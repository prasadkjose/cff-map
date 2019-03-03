import 'whatwg-fetch'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import 'normalize.css'

import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_KEY
  },
  installComponents: false
})

Vue.component('GoogleMap', VueGoogleMaps.Map)
Vue.component('GoogleMarker', VueGoogleMaps.Marker)
Vue.component('GoogleInfoWindow', VueGoogleMaps.InfoWindow)

new Vue({ store, render: h => h(App) }).$mount('#app')
