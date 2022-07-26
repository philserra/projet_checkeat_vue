<template>
  <!-- Formulaire Inscription Restaurateur -->
  <div class="register">
    <h2 class="titleRegister">Ajouter votre restaurant</h2>

    <div class="wrapper">
      <div id="mainContainer" class="mainContainer">
        <!-- <button @click="accueil()">Page principale</button> -->
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

          <div class="input-container">
            <!-- <label for="id_restaurateur"></label>
            <div v-for="elem in liste" :key="elem">
              <input type="number" :value="elem.id_restaurateur[1]" />
            </div> -->

            <!-- <select
              v-model="selected"
              name="id_restaurateur"
              id="id_restaurateur"
            >
              <option value="">Aucun</option>
              <option>1</option>
              <option>
                {{ id_restaurateur }}
              </option>
            </select> -->
          </div>

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
const token = localStorage.getItem("token");
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
      liste: [],
    };
  },

  async mounted() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const response = await fetch(
      "http://127.0.0.1:8000/api/restaurants/",
      options
    );

    const data = await response.json();

    this.liste = data.restaurants;

    data.restaurants.forEach((element) => {
      this.id_restaurateur = element.id_restaurateur;
    });

    // this.id_restaurateur = profil.id_restaurateur;
  },

  methods: {
    async register() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
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
      //   console.log(data.message);
      if (data.message == true) {
        location = "http://localhost:8080/restaurants/success";
      }
    },
  },
};
</script>
