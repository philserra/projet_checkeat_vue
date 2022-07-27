<template>
  <div
    class="wrapper flex justify-between text-lg text-red-600 font-bold p-2 bg-slate-400 bg-opacity-75 rounded"
  >
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/menu/create">Menu</router-link>
    </nav>
    <nav>
      <router-link to="/restaurateurs/create">Inscription</router-link> |
      <router-link to="/restaurateurs/connexion">Connexion</router-link> |
      <router-link to="/restaurateurs/profil">Profil</router-link> |
      <router-link to="/restaurateurs/dashboard">Dashboard</router-link>
      <button type="button" @click="logout">Logout</button>
    </nav>
  </div>
  <router-view />
</template>

<script>
import "./assets/tailwind.css";

export default {
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
      this.$router.push("/restaurateurs/connexion");
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
