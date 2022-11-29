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
import vuetify from './plugins/vuetify';

const pinia = createPinia();
const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(pinia);
app.mount('#app');
