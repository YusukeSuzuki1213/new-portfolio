// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "~/assets/styles.css"

config.autoAddCss = false;
library.add(fab, fas)

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify({
    icons: {
      iconfont: 'fa',
      values: {
        iconGoogleColab: {
          component: () => import('~/components/molecules/icons/IconGoogleColab')
        },
        iconQiita: {
          component: () => import('~/components/molecules/icons/IconQiita')
        }
      }
    }
  });

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
}
