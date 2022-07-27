<template>
  <!-- Formulaire Inscription Restaurateur -->
  <div class="register">
    <h2 class="titleRegister">Veuillez-vous inscrire sur cette page</h2>

    <div class="wrapper">
      <div id="mainContainer" class="mainContainer">
        <!-- <button @click="accueil()">Page principale</button> -->
        <form @submit.prevent="register">
          <div class="input-container">
            <label for="lastname"></label>
            <input
              type="text"
              class="lastnameRegister"
              id="lastname"
              v-model="lastname"
              placeholder="Nom"
              required
            />
          </div>

          <div class="input-container">
            <label for="firstname"></label>
            <input
              type="text"
              class="firstnameRegister"
              id="firstname"
              v-model="firstname"
              placeholder="Prénom"
              required
            />
          </div>

          <div class="input-container">
            <label for="siret"></label>
            <input
              type="number"
              class="siretRegister"
              id="siret"
              v-model="siret"
              placeholder="Numéro Siret"
              required
            />
          </div>

          <div class="input-container">
            <label for="email"></label>
            <input
              type="email"
              class="emailRegister"
              id="email"
              v-model="email"
              placeholder="Votre email"
              required
            />
          </div>

          <div class="input-container">
            <label for="phone"></label>
            <input
              type="text"
              class="phoneRegister"
              id="phone"
              v-model="phone"
              placeholder="Téléphone"
              required
            />
          </div>

          <div class="input-container">
            <label for="password"></label>
            <input
              type="password"
              class="passwordRegister"
              id="password"
              v-model="password"
              placeholder="Mot de passe"
              required
            />
          </div>

          <div class="boxButton">
            <input type="submit" value="Valider Inscription" />
          </div>
        </form>
      </div>
    </div>
  </div>
  <p>{{ message }}</p>
</template>

<script>
export default {
  name: "Create",
  components: {},

  // Déclaration de la DATA qui sera envoyée en requête sur la BDD

  data() {
    return {
      lastname: "",
      firstname: "",
      siret: "",
      email: "",
      phone: "",
      password: "",
      message: "",
      token: "",
    };
  },

  methods: {
    async register() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          lastname: this.lastname,
          firstname: this.firstname,
          siret: this.siret,
          email: this.email,
          phone: this.phone,
          password: this.password,
        }),
      };

      // FETCH pour envoyé la requête sur l'API

      const response = await fetch(
        "http://127.0.0.1:8000/api/restaurateurs",
        options
      );

      const data = await response.json();

      if (data.message == true) {
        this.token = data.access_token;
        localStorage.setItem("token", data.access_token);
        location = "http://localhost:8080/restaurateurs/success";
        // this.$router.push("/restaurateurs/success");
      }
    },
  },
};
</script>
