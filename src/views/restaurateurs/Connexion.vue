<template>
  <!-- <router-link to="'/'">Acceuille</router-link> -->
  <h1>Login</h1>
  <form @submit.prevent="login">
    <label for="email">Email</label>
    <input type="email" name="email" v-model="email" />
    <label for="password" name>Mot de passe</label>
    <input type="password" name="password" v-model="password" />
    <button type="submit" name="login">Se connecter</button>
  </form>
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
<<<<<<< HEAD
        location = "http://localhost:8080/restaurateurs/dashboard";
        // this.$router.push({ name: "dashboard" });
=======
        this.$router.push("/restaurateurs/dashboard");
>>>>>>> 1c8d2e73bb6375ff9e03c1008752bd305f449171
      }
    },
  },
};
</script>
