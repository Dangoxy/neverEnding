import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from "./views/Homepage.vue";
import P01WhacAMole from "./views/P01WhacAMole.vue";
import P02LoginForm from "./views/P02LoginForm.vue";
import P03MouseEffect from "./views/P03MouseEffect.vue";
import P00Template from "./views/P00Template.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: "home", path: "/", component: Homepage },
    { name: "p0", path: "/00-Template", component: P00Template },
    { name: "p1", path: "/01-Whac-a-mole", component: P01WhacAMole },
    { name: "p2", path: "/02-Login-form", component: P02LoginForm },
    { name: "p3", path: "/03-Mouse-effect", component: P03MouseEffect },
  ],
});
export default router;
