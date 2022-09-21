import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
export const api = "https://checkeat-api.osc-fr1.scalingo.io/";

createApp(App).use(router).mount("#app");
