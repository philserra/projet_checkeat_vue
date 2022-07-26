<template>
  <!-- Formulaire Inscription Restaurateur -->
  <div class="register">
    <h2 class="titleRegister">Menu</h2>

    <div class="wrapper">
      <div id="mainContainer" class="mainContainer">
        <!-- <button @click="accueil()">Page principale</button> -->
        <form @submit.prevent="register">
          <div class="input-container">
            <label for="category">Catégorie</label>
            <select
              name="category"
              v-model="category"
              id="category"
              class="categoryRegister"
            >
              <option value="entree">Entrée</option>
              <option value="plat">Plat</option>
              <option value="dessert">Dessert</option>
              <option value="boisson">Boisson</option>
            </select>
          </div>

          <div class="input-container">
            <label for="name"></label>
            <input
              type="text"
              class="nameRegister"
              id="name"
              v-model="name"
              placeholder="Nom du plat"
              required
            />
          </div>

          <div class="input-container">
            <label for="priceHt"></label>
            <input
              type="number"
              class="priceHtRegister"
              id="priceHt"
              v-model="priceHt"
              placeholder="Prix HT"
              required
            />
          </div>

          <div class="input-container">
            <label for="tva">Taux de TVA :</label>
            <select name="tva" v-model="tva" id="tva" class="tvaRegister">
              <option value="0">0%</option>
              <option value="5.5">5.5%</option>
              <option value="10">10%</option>
              <option value="20">20%</option>
            </select>
          </div>

          <div class="boxButton">
            <input type="submit" value="Valider" />
          </div>
        </form>
      </div>
    </div>
  </div>
  <h2>Afficher</h2>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.name }}
      {{ task.category }}
      {{ task.priceHt }}
      {{ task.tva }}
      {{ task.priceTtc }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Create",
  components: {},

  // Déclaration de la DATA qui sera envoyée en requête sur la BDD

  data() {
    return {
      tasks: [],

      name: "",
      category: "",
      priceHt: "",
      tva: "",
      priceTtc: "",
    };
  },

  async mounted() {
    const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      response = await fetch("http://127.0.0.1:8000/api/menu", options);

    const data = await response.json();

    this.tasks = data.liste;

    console.log(data);
  },

  methods: {
    async register() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          category: this.category,
          priceHt: this.priceHt,
          tva: this.tva,
          priceTtc: this.priceTtc,
        }),
      };
      // FETCH pour envoyé la requête sur l'API
      const response = await fetch("http://127.0.0.1:8000/api/menu", options);
      const data = await response.json();
      //   console.log(data.message);
      if (data.message == true) {
        location = "http://localhost:8080/menu/menusuccess";
      }
    },
  },
};
</script>
