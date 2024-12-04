import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.ts';
import Toast, {type PluginOptions, useToast} from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

const options: PluginOptions = {
};
app.use(router);
app.use(Toast,options);

app.mount('#app');