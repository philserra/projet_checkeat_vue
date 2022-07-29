<template>
  <!-- Formulaire Inscription Restaurateur -->
  <div
    class="min-h-screen w-screen flex justify-center align-center pt-1 bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div
      class="list max-w-7xl bg-opacity-75 mx-auto h-full sm:px-6 lg:px-8 p-10"
    >
      <div class="bg-black overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-black">
          <div class="w-full max-w-xs">
            <div class="register">
              <h2 class="titleRegister text-red-600 text-lg p-2 font-black">
                Creer votre Menu
              </h2>

              <div class="wrapper">
                <div id="mainContainer" class="mainContainer">
                  <!-- <button @click="accueil()">Page principale</button> -->
                  <form
                    class="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    @submit.prevent="register"
                  >
                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="category"
                        >Catégorie</label
                      >
                      <select
                        name="category"
                        v-model="category"
                        id="category"
                        class="categoryRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="entree">Entrée</option>
                        <option value="plat">Plat</option>
                        <option value="dessert">Dessert</option>
                        <option value="boisson">Boisson</option>
                      </select>
                    </div>

                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="name"
                      ></label>
                      <input
                        type="text"
                        class="nameRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        v-model="name"
                        placeholder="Nom du plat"
                        required
                      />
                    </div>

                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="priceHt"
                      ></label>
                      <input
                        type="number"
                        class="priceHtRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="priceHt"
                        v-model="priceHt"
                        placeholder="Prix HT"
                        required
                      />
                    </div>

                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="tva"
                        >Taux de TVA :</label
                      >
                      <select
                        name="tva"
                        v-model="tva"
                        id="tva"
                        class="tvaRegister shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="0">0%</option>
                        <option value="5.5">5.5%</option>
                        <option value="10">10%</option>
                        <option value="20">20%</option>
                      </select>
                    </div>

                    <div class="boxButton">
                      <input
                        class="inline-block align-baseline font-black p-2 text-sm border-2 border-red-500 rounded text-red-500 hover:text-red-800"
                        type="submit"
                        value="Valider"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="list">
              <h2 class="text-red-600 text-3xl p-4">Liste des plats</h2>
              <ul>
                <li v-for="task in tasks" :key="task.id">
                  <div
                    class="max-w-sm rounded-lg bg-red-900 bg-opacity-50 shadow-md shadow-red-600 p-4 m-6"
                  >
                    <div class="px-6 py-4">
                      <p
                        class="mb-3 text-xl font-blackt racking-tight text-gray-200"
                      >
                        Nom du plat : {{ task.name }}
                      </p>
                      <p
                        class="mb-3 text-xl font-blackt racking-tight text-gray-200"
                      >
                        Catégorie : {{ task.category }}
                      </p>
                      <p
                        class="mb-3 text-xl font-blackt racking-tight text-gray-200"
                      >
                        Prix HT : {{ task.priceHt }} Euros
                      </p>
                      <p
                        class="mb-3 text-xl font-blackt racking-tight text-gray-200"
                      >
                        TVA : {{ task.tva }} %
                      </p>
                      <p
                        class="mb-3 text-xl font-blackt racking-tight text-gray-200"
                      >
                        Prix TTC : {{ task.priceTtc }} Euros
                      </p>
                      <button
                        class="inline-block p-2 m-2 text-white bg-transparent hover:bg-red-500 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                        @click="deleteMenu(task.id)"
                      >
                        Supprimer
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  components: {},

  data() {
    return {
      tasks: [],
      id: "",
      name: "",
      category: "",
      priceHt: "",
      tva: "",
      priceTtc: "",
      id_restaurant: "",
    };
  },

  async mounted() {
    const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      },
      response = await fetch("http://127.0.0.1:8000/api/menu", options);

    const data = await response.json();

    this.tasks = data.liste;
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
          category: this.category,
          priceHt: this.priceHt,
          tva: this.tva,
          priceTtc: this.priceTtc,
          id_restaurant: this.id_restaurant,
        }),
      };
      // FETCH pour envoyé la requête sur l'API
      const response = await fetch("http://127.0.0.1:8000/api/menu", options);
      const data = await response.json();

      // if (data.message == true) {
      //   this.$router.push("/menu/menudelete");
      // }
      window.location.reload();
    },

    async deleteMenu(id) {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await fetch(
        "http://127.0.0.1:8000/api/menu/" + id,
        options
      );
      const data = await response.json();

      if (data.message == true) {
        this.$router.push("/menu/delete");
      }
    },
  },
};
</script>

<style></style>
