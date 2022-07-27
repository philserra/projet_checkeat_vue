<template>
  <div
    class="wrapper flex justify-between text-lg text-red-600 font-bold p-2 bg-slate-400 bg-opacity-75 rounded"
  >
    <nav><router-link to="/">Home</router-link> |</nav>

    <nav v-if="!token">
      <router-link to="/restaurateurs/connexion">Connexion</router-link> |
      <router-link to="/restaurateurs/create">Inscription</router-link> |
    </nav>

    <nav v-if="token">
      <router-link to="/menu/create">Menu</router-link> |
      <router-link to="/restaurateurs/profil">Profil</router-link> |
<<<<<<< HEAD
      <router-link to="/restaurateurs/dashboard">Dashboard</router-link>
      |
=======
      <router-link to="/restaurateurs/dashboard">Dashboard</router-link> |
>>>>>>> 1c8d2e73bb6375ff9e03c1008752bd305f449171
      <button type="button" @click="logout">Logout</button>
    </nav>
  </div>
  <router-view />
</template>

<script>
import "./assets/tailwind.css";
import Connexion from "./views/restaurateurs/Connexion.vue";
const token = localStorage.getItem("token");
console.log(token);

export default {
  data() {
    return {
      token: token,
    };
  },
  methods: {
    async logout() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await fetch("http://127.0.0.1:8000/api/logout", options);

      const data = await response.json();

      localStorage.removeItem("token", data.access_token);
      location = "http://localhost:8080/";
      // this.$router.push({ name: "home" });
      window.location.reload();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");
body {
  font-family: "Nunito", sans-serif;
}
</style>
