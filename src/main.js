import Vue from 'vue'
import App from './App.vue'

// Import router
import { router } from './router';

// Import bootstrap-vue
import { BootstrapVue, IconsPlugin, FormPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import @fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faList,
  faAddressCard,
  faHeart,
  faHeartBroken,
  faComment,
  faShareAlt,
  faEllipsisH,
  faPlus,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faList, faAddressCard, faHeart, faHeartBroken, faComment, faShareAlt, faEllipsisH, faPlus, faEnvelope);

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
// Optionally install the BootstrapVue Form plugin
Vue.use(FormPlugin)
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
