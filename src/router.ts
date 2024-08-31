import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from "./views/Homepage.vue";
import P01WhacAMole from "./views/P01WhacAMole.vue";
import P02LoginForm from "./views/P02LoginForm.vue";
import P03MouseEffect from "./views/P03MouseEffect.vue";
import P00Template from "./views/P00Template.vue";
import P04TicTacToe from "./views/P04TicTacToe.vue";
import P05HamburgerMenu from "./views/P05HamburgerMenu.vue";
import P06HectagonalTube from "./views/P06HectagonalTube.vue";
import P07DropdownMenu from "./views/P07DropdownMenu.vue";
import P08AnimatingClock from "./views/P08AnimatingClock.vue";
import P09HeadsOrTails from "./views/P09HeadsOrTails.vue";
import P10FoldingBannners from "./views/P10FoldingBannners.vue";
import P11CollapsingText from "./views/P11collapsingText.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: "home", path: "/", component: Homepage },
    { name: "p0", path: "/00-Template", component: P00Template },
    { name: "p1", path: "/01-Whac-a-mole", component: P01WhacAMole },
    { name: "p2", path: "/02-Login-form", component: P02LoginForm },
    { name: "p3", path: "/03-Mouse-effect", component: P03MouseEffect },
    { name: "p4", path: "/04-Tic-Tac-Toe", component: P04TicTacToe },
    { name: "p5", path: "/05-Hamburger-menu", component: P05HamburgerMenu },
    { name: "p6", path: "/06-Hectagonal-tube", component: P06HectagonalTube },
    { name: "p7", path: "/07-Dropdown-menu", component: P07DropdownMenu },
    { name: "p8", path: "/08-Animating-clock", component: P08AnimatingClock },
    { name: "p9", path: "/09-Heads-or-Tails", component: P09HeadsOrTails },
    { name: "p10", path: "/10-Folding-banners", component: P10FoldingBannners },
    { name: "p11", path: "/11-Folding-text", component: P11CollapsingText },
  ],
});
export default router;
