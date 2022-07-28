<template>
  <!-- <router-link to="'/'">Acceuille</router-link> -->
  <div
    class="h-screen w-screen flex justify-center align-center pt-28 bg-black"
  >
    <div class="w-full max-w-xs">
      <h1>Login</h1>
      <form
        @submit.prevent="login"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email"
            >Email</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            v-model="email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
            name
            >Mot de passe</label
          >
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            v-model="password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="inline-block align-baseline font-bold text-sm border border-red-500 rounded text-red-500 hover:text-red-800"
            type="submit"
            name="login"
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Connexion",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      token: "",
    };
  },
  methods: {
    async login() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };
      const response = await fetch("http://127.0.0.1:8000/api/login", options);

      const data = await response.json();
      if (data.message == true) {
        this.token = data.access_token;
        localStorage.setItem("token", data.access_token);
        location = "http://localhost:8080/restaurateurs/dashboard/";
        // this.$router.push("/restaurateurs/dashboard");
      }
    },
  },
};
</script>
