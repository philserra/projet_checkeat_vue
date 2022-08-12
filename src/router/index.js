import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Connexion from "../views/restaurateurs/Connexion.vue";
import Dashboard from "../views/restaurateurs/Dashboard.vue";
import Create from "../views/restaurateurs/Create.vue";
import Success from "../views/restaurateurs/Success.vue";
import Edit from "../views/restaurateurs/Edit.vue";
import EditSuccess from "../views/restaurateurs/EditSuccess.vue";
import Delete from "../views/restaurateurs/Delete.vue";
import Profil from "../views/restaurateurs/Profil.vue";
import CreateResto from "../views/restaurants/CreateResto.vue";
import Success_resto from "../views/restaurants/Success_resto.vue";
import Edit_resto from "../views/restaurants/Edit_resto.vue";
import DeleteResto from "../views/restaurants/DeleteResto.vue";
import CreateMenu from "../views/menu/CreateMenu.vue";
import MenuSuccess from "../views/menu/MenuSuccess.vue";
import MenuDelete from "../views/menu/MenuDelete.vue";
import ListeResto from "../views/guests/ListeResto.vue";
import App from "@/App.vue";

const routes = [
  {
    path: "/",
    name: "homeview",
    component: HomeView,
  },

  // Login et Dashboard

  {
    path: "/restaurateurs/connexion",
    name: "connexion",
    component: Connexion,
  },

  {
    path: "/restaurateurs/dashboard",
    name: "dashboard",
    component: Dashboard,
  },

  // Restaurateurs

  {
    path: "/restaurateurs/create",
    name: "create",
    component: Create,
  },

  {
    path: "/restaurateurs/success",
    name: "success",
    component: Success,
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
    path: "/restaurateurs/delete",
    name: "delete",
    component: Delete,
  },

  {
    path: "/restaurateurs/profil",
    name: "profil",
    component: Profil,
  },

  // Restaurants

  {
    path: "/restaurants/create",
    name: "createResto",
    component: CreateResto,
  },

  {
    path: "/restaurants/success",
    name: "createSuccess",
    component: Success_resto,
  },

  {
    path: "/restaurants/edit/:id",
    name: "editResto",
    component: Edit_resto,
  },

  {
    path: "/restaurants/delete",
    name: "deleteResto",
    component: DeleteResto,
  },

  // Menu

  {
    path: "/menu/create",
    name: "createMenu",
    component: CreateMenu,
  },

  {
    path: "/menu/menusuccess",
    name: "menuSuccess",
    component: MenuSuccess,
  },

  {
    path: "/menu/delete",
    name: "menuDelete",
    component: MenuDelete,
  },

  // Guests

  {
    path: "/guests",
    name: "listeResto",
    component: ListeResto,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
