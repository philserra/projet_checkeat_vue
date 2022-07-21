import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Show from "../views/restaurateurs/Show.vue";
import Edit from "../views/restaurateurs/Edit.vue";
import Delete from "../views/restaurateurs/Delete.vue";
import EditSuccess from "../views/restaurateurs/EditSuccess.vue";
import Create from "../views/restaurateurs/Create.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/restaurateurs/show",
    name: "show",
    component: Show,
  },
  {
    path: "/restaurateurs/delete",
    name: "delete",
    component: Delete,
  },
  {
    path: "/restaurateurs/edit",
    name: "edit",
    component: Edit,
  },

  {
    path: "/restaurateurs/editsuccess",
    name: "editsuccess",
    component: EditSuccess,
  },
  {
    path: "/restaurateurs/create",
    name: "create",
    component: Create,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
