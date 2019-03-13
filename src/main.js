import Vue from 'vue';
import {
  Button,
  ButtonGroup,
  Icon,
  Card,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';

import App from './App.vue';
import VueRouter from 'vue-router'; 
import routes from './router/router';
import store from './store';
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import 'vue-video-player/src/custom-theme.css';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueVideoPlayer);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
	routes
});

Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Icon);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
