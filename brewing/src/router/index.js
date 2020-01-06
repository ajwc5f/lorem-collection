import Vue from "vue";
import store from "../store";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/products",
    name: "products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Products.vue")
  },
  {
    path: "/story",
    name: "Story",
    component: () => import("../views/Story.vue")
  },
  {
    path: "/storelocator",
    name: "StoreLocator",
    component: () => import("../views/StoreLocator.vue")
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import("../views/Faq.vue")
  },
  {
    path: "/shop",
    name: "Shop",
    component: () => import("../views/Shop.vue")
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404.vue")
  }
];

const router = new VueRouter({
  routes,
  beforeEach(to, from, next) {
    store.state.navDrawerIsActive = false;
    next();
  }
});

export default router;
