import Vue from 'vue'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import App from './App.vue'
import enUS from '@nutui/nutui/dist/locales/lang/en-US';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './style/style.css';
import './registerServiceWorker';
import router from './router';

Vue.config.productionTip = false;

NutUI.install(Vue);

Vue.use(NutUI, {
  locale: 'en-US',
  lang: enUS
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
