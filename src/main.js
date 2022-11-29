import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import { components } from "./components";

const pinia = createPinia();

const app = createApp(App);

components.forEach((component) => {
  app.component(component.__name, component);
});

app.use(pinia);
app.use(router);

app.mount("#app");
