<template>
  <div
    class="wrapper flex justify-between text-lg text-red-600 font-bold p-2 bg-slate-400 bg-opacity-75 rounded"
  >
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <nav>
      <router-link to="/restaurateurs/create">Inscription</router-link> |
      <router-link to="/restaurateurs/connexion">Connexion</router-link> |
      <router-link to="/restaurateurs/profil">Profil</router-link> |
      <router-link to="/restaurateurs/dashboard">Dashboard</router-link>
    </nav>
  </div>
  <router-view />
</template>

<script>
import "./assets/tailwind.css";

export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");
body {
  font-family: "Nunito", sans-serif;
}
</style>
