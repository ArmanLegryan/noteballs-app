import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router";
import { components } from "./components";
import { directives } from "./directives";

const pinia = createPinia();

const app = createApp(App);

components.forEach((component) => {
  app.component(component.__name, component);
});

for (let item in directives) {
  app.directive(directives[item].name, directives[item].directive);
}

app.use(pinia);
app.use(router);

app.mount("#app");
