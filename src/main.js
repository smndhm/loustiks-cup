import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/main.scss";

const app = createApp(App);

// Global variables
app.config.globalProperties.$categories = ["U11", "U13"];

app.use(router);

app.mount("#app");
