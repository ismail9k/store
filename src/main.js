import Vue from 'vue';
import App from './App.vue';
import store from './store';

import './stylus/index.styl';
import 'intersection-observer';

Vue.config.productionTip = false;

// Import components that prefixed with App globally
const requireComponent = require.context('./components', false, /App[\w-]+\.(?:vue|js)$/);
requireComponent.keys().forEach(fileName => {
  const config = requireComponent(fileName);
  const name = config.default ? config.default.name : config.name;

  Vue.component(name, config.default || config);
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
