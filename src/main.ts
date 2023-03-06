import { createPinia } from 'pinia';
import router from './router';

import 'normalize.css';
import './styles/index.scss';

import directives from './directives';
import filters from './filters';

import App from './App.vue';
const pinia = createPinia();

(() => {
  const app = createApp(App);
  app.use(pinia);
  app.use(router);
  app.use(directives);
  app.use(filters);
  app.mount('#app');
})();
