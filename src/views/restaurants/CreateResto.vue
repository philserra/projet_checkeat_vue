<template>
  <!-- Formulaire Inscription Restaurateur -->
  <div class="register">
    <h2 class="titleRegister">Ajouter votre restaurant</h2>

    <div class="wrapper">
      <div id="mainContainer" class="mainContainer">
        <form @submit.prevent="register">
          <div class="input-container">
            <label for="name"></label>
            <input
              type="text"
              class="nameRegister"
              id="name"
              v-model="name"
              placeholder="Nom du restaurant"
              required
            />
          </div>

          <div class="input-container">
            <label for="adress"></label>
            <input
              type="text"
              class="adressRegister"
              id="adress"
              v-model="adress"
              placeholder="Adresse"
              required
            />
          </div>

          <div class="input-container">
            <label for="zip"></label>
            <input
              type="number"
              class="zipRegister"
              id="zip"
              v-model="zip"
              placeholder="Code postale"
              required
            />
          </div>

          <div class="input-container">
            <label for="city"></label>
            <input
              type="text"
              class="cityRegister"
              id="city"
              v-model="city"
              placeholder="Ville"
              required
            />
          </div>

          <div class="input-container">
            <label for="phone"></label>
            <input
              type="text"
              class="phoneRegister"
              id="tel"
              v-model="tel"
              placeholder="Téléphone"
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
              placeholder="Email"
              required
            />
          </div>

          <div class="input-container">
            <label for="timetable"></label>
            <input
              type="text"
              class="timetableRegister"
              id="timetable"
              v-model="timetable"
              placeholder="Horaires d'ouverture"
              required
            />
          </div>

          <div class="input-container">
            <label for="capacity"></label>
            <input
              type="number"
              class="capacityRegister"
              id="capacity"
              v-model="capacity"
              placeholder="Capacité"
              required
            />
          </div>

          <div class="input-container"></div>

          <div class="boxButton">
            <input type="submit" value="Ajouter" />
          </div>
        </form>
      </div>
    </div>
  </div>
  <div v-if="message === true">{{ message }}</div>
</template>

<script>
export default {
  name: "Create",
  components: {},

  // Déclaration de la DATA qui sera envoyée en requête sur la BDD

  data() {
    return {
      name: "",
      adress: "",
      zip: "",
      city: "",
      tel: "",
      email: "",
      timetable: "",
      capacity: "",
      id_restaurateur: "",
      message: "",
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
      "http://127.0.0.1:8000/api/restaurateurs/profile",
      options
    );

    const data = await response.json();
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
          name: this.name,
          adress: this.adress,
          zip: this.zip,
          city: this.city,
          tel: this.tel,
          email: this.email,
          timetable: this.timetable,
          capacity: this.capacity,
          id_restaurateur: this.id_restaurateur,
        }),
      };

      // FETCH pour envoyé la requête sur l'API

      const response = await fetch(
        "http://127.0.0.1:8000/api/restaurants",
        options
      );

      const data = await response.json();
      if (data.message == true) {
        this.$router.push("/restaurants/success");
      }
    },
  },
};
</script>
