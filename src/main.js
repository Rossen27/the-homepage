import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Carousel from "v3-carousel";
import './assets/tailwind.css'


createApp(App).use(store).use(router).use(Carousel).mount('#app')

