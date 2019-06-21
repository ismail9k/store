import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './stylus/index.styl';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
