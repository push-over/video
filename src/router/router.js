import App from '../App';

const home = r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home');
const detail = r => require.ensure([], () => r(require('../pages/detail/detail.vue')), 'detail');

export default [{
    path: '/movie',
    component: home
  },
  {
    path: '/detail',
    component: detail
  }
]