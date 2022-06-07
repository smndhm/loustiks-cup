import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/main.scss";

const app = createApp(App);

// Global variables
app.config.globalProperties.$categories = ["U11", "U13"];
app.config.globalProperties.$competitions = {
  u11: ["Ligue des Champions", "Ligue Europa"],
  u13: ["Ligue des Champions", "Ligue Europa", "Conférence"],
};

app.use(router);

app.mount("#app");
