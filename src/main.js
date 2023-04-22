import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";
import Button from "primevue/button"
import Checkbox from 'primevue/checkbox';
import Password from 'primevue/password';
import Sidebar from 'primevue/sidebar';
import Calendar from 'primevue/calendar';
import TieredMenu from 'primevue/tieredmenu';


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

app.use(PrimeVue);
app.component('Button', Button);
app.component('Checkbox', Checkbox);
app.component('Password', Password);
app.component('Sidebar', Sidebar)
app.component('Calendar', Calendar)
app.component('TieredMenu', TieredMenu)
