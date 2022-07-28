<template>
  <h1>Vous etes bien deconnecté</h1>
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
      //   location = "http://localhost:8080/";
      this.$router.push({ name: "home" });
      //   window.location.reload();
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
