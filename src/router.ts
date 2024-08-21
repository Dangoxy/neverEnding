import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from "./views/Homepage.vue";
import P01WhacAMole from "./views/P01WhacAMole.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: "home", path: "/", component: Homepage },
    { name: "p1", path: "/01-Whac-a-mole", component: P01WhacAMole },
  ],
});
export default router;
