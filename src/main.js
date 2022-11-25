import { createApp } from "vue";
import App from "./App.vue";
import plugin from "../dist/vue3-spinner.mjs";

import "./assets/main.css";

createApp(App).use(plugin).mount("#app");
