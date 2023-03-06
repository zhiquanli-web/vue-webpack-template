import { createPinia } from 'pinia';
import router from './permission';

import 'normalize.css';
import './styles/index.scss';

import App from './App.vue';
const pinia = createPinia();

(() => {
  const app = createApp(App);
  app.use(pinia);
  app.use(router);
  app.mount('#app');
})();
