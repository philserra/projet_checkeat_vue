<template>
  <!-- Formulaire Inscription Restaurateur -->
  <div
    class="h-screen w-screen flex justify-center align-center pt-1 bg-black bg-no-repeat bg-center bg-cover"
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
                Ajouter votre restaurant
              </h2>

              <div class="wrapper">
                <div id="mainContainer" class="mainContainer">
                  <form
                    class="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    @submit.prevent="register"
                  >
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
                        placeholder="Nom du restaurant"
                        required
                      />
                    </div>

                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="adress"
                      ></label>
                      <input
                        type="text"
                        class="adressRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="adress"
                        v-model="adress"
                        placeholder="Adresse"
                        required
                      />
                    </div>

                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="zip"
                      ></label>
                      <input
                        type="number"
                        class="zipRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="zip"
                        v-model="zip"
                        placeholder="Code postale"
                        required
                      />
                    </div>

                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="city"
                      ></label>
                      <input
                        type="text"
                        class="cityRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="city"
                        v-model="city"
                        placeholder="Ville"
                        required
                      />
                    </div>

                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="phone"
                      ></label>
                      <input
                        type="text"
                        class="phoneRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="tel"
                        v-model="tel"
                        placeholder="Téléphone"
                        required
                      />
                    </div>

                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="email"
                      ></label>
                      <input
                        type="email"
                        class="emailRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        v-model="email"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="open"
                      ></label>
                      <input
                        type="time"
                        class="timetableRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="open"
                        v-model="open"
                        placeholder="Heure d'ouverture"
                        required
                      />
                    </div>

                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="closed"
                      ></label>
                      <input
                        type="time"
                        class="timetableRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="closed"
                        v-model="closed"
                        placeholder="Heure de fermeture"
                        required
                      />
                    </div>

                    <div class="input-container mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="capacity"
                      ></label>
                      <input
                        type="number"
                        class="capacityRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="capacity"
                        v-model="capacity"
                        placeholder="Nombre de tables"
                        required
                      />
                    </div>

                    <div class="input-container"></div>

                    <div class="boxButton">
                      <input
                        class="inline-block align-baseline font-black p-2 text-sm border-2 border-red-500 rounded text-red-500 hover:text-red-800"
                        type="submit"
                        value="Ajouter"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div v-if="message === true">{{ message }}</div>
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

  // Déclaration de la DATA qui sera envoyée en requête sur la BDD

  data() {
    return {
      name: "",
      adress: "",
      zip: "",
      city: "",
      tel: "",
      email: "",
      open: "",
      closed: "",
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
          open: this.open,
          closed: this.closed,
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
