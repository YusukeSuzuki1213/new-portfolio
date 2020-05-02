// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vuetify from 'vuetify'

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify({
    
  });
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
