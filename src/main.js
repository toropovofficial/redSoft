import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Button from './components/Button.vue';
import Input from './components/Input.vue';
import Preloader from './components/Preloader.vue';
import notify from './lib/plugins/notify';
import validate from './lib/plugins/validate';
import './assets/styles/style.scss';

Vue.config.productionTip = false;

Vue.component('rs-button', Button);
Vue.component('rs-input', Input);
Vue.component('rs-preloader', Preloader);

Vue.use(notify);
Vue.use(validate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
