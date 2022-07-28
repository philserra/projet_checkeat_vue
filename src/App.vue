<template>
  <div
    class="wrapper flex justify-between align-center text-lg text-red-600 font-bold p-2 bg-black"
  >
    <nav>
      <router-link
        to="/"
        class="border-2 border-red-700 rounded hover:bg-red-500 hover:text-white p-1 m-2 px-5 py-2.5 flex align-center"
        >Home</router-link
      >
    </nav>

    <nav v-if="!token" class="mt-1 flex align-center">
      <p class="inline-block mt-5 text-lg font-black text-red-600">
        Devenez un de nos partenaires restaurateurs ->
      </p>
      <router-link
        to="/restaurateurs/connexion"
        class="inline-block border-2 border-red-700 rounded hover:bg-red-500 hover:text-white m-2 px-5 py-2.5"
        >Connexion</router-link
      >

      <router-link
        to="/restaurateurs/create"
        class="inline-block border-2 border-red-700 rounded hover:bg-red-500 hover:text-white m-2 px-5 py-2.5"
        >Inscription</router-link
      >
    </nav>

    <nav v-if="token">
      <p class="inline-block underline m-2">
        Bonjour {{ firstname }} {{ lastname }}
      </p>
      <router-link
        to="/restaurateurs/profil"
        class="inline-block border-2 border-red-700 rounded hover:bg-red-500 hover:text-white m-2 px-5 py-2.5"
        >Profil</router-link
      >

      <router-link
        to="/restaurateurs/dashboard"
        class="inline-block border-2 border-red-700 rounded hover:bg-red-500 hover:text-white m-2 px-5 py-2.5"
        >Tableau de bord</router-link
      >

      <button
        type="button"
        @click="logout"
        class="inline-block border-2 border-red-700 rounded hover:bg-red-500 hover:text-white m-2 px-5 py-2.5"
      >
        Logout
      </button>
    </nav>
  </div>
  <router-view />
</template>

<script>
import "./assets/tailwind.css";
import Connexion from "./views/restaurateurs/Connexion.vue";
const token = localStorage.getItem("token");

export default {
  data() {
    return {
      token: token,
      lastname: "",
      firstname: "",
    };
  },

  async mounted() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    const response = await fetch(
      "http://127.0.0.1:8000/api/restaurateurs",
      options
    );

    const data = await response.json();

    const profil = data.restaurateur;

    this.lastname = profil.lastname;
    this.firstname = profil.firstname;
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
      // location = "http://localhost:8080/";
      // this.$router.push("/");
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
