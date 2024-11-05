import './assets/main.scss';
import './assets/helpers.scss';
import 'highlight.js/styles/default.css';

import highlightDirective from './plugins/highlight.js';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.directive('highlight', highlightDirective);

app.mount('#app');
