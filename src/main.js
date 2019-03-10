import Vue from 'vue';
import {
  Button
} from 'element-ui';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router/router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
	routes
});
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
