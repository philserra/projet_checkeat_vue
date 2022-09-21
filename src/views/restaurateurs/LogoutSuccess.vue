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
      const response = await fetch(
        "https://checkeat-api.osc-fr1.scalingo.io/api/logout",
        options
      );

      const data = await response.json();

      localStorage.removeItem("token", data.access_token);
      location = "https://checkeat.osc-fr1.scalingo.io/";
      // this.$router.replace({ path: "/" });
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
