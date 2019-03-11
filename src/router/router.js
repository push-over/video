import App from '../App';

const home = r => require.ensure([], () => r(require('../pages/home/home.vue')), 'home');

export default [{
  path: '/',
  component: App,
  children: [{
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    }
  ]
}]