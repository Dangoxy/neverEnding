import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from "./views/Homepage.vue";
import Project1 from "./views/Project1.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: "home", path: "/", component: Homepage },
    { name: "p1", path: "/01-Whac-a-mole", component: Project1 },
  ],
});
export default router;
