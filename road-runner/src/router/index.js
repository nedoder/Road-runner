import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  mode: "history",
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
  scrollBehavior(to) {
    if (to.hash) {
      return window.scrollTo(0, document.body.scrollHeight);
    }
    return window.scrollTo(0, 0);
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/ltl-shipping",
      name: "ltl-shipping",
      component: () => import("../views/LtlShipping.vue"),
    },
    {
      path: "/full-truckload",
      name: "full-truckload",
      component: () => import("../views/FullTruckload.vue"),
    },
    {
      path: "/drayage-service",
      name: "drayage-service",
      component: () => import("../views/DrayageService.vue"),
    },
    {
      path: "/hazmat-trucking",
      name: "hazmat-trucking",
      component: () => import("../views/HazmatTrucking.vue"),
    },
    {
      path: "/expedited-shipping",
      name: "expedited-shipping",
      component: () => import("../views/ExpeditedShipping.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/carrier",
      name: "carrier",
      component: () => import("../views/CarrierView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
