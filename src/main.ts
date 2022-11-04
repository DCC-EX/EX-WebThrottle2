/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue';

// Imports
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import router from './router';

// Plugins
import {registerPlugins} from '@/plugins';
import vuetify from './plugins/vuetify';

const pinia = createPinia();
const app = createApp(App);

registerPlugins();

app
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app');
