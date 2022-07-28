<template>
  <!-- Formulaire Inscription Restaurateur -->
  <div
    class="h-screen w-screen flex justify-center align-center pt-28 bg-black bg-no-repeat bg-center bg-cover"
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
                Veuillez-vous inscrire sur cette page
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
                        for="lastname"
                      ></label>
                      <input
                        type="text"
                        class="lastnameRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastname"
                        v-model="lastname"
                        placeholder="Nom"
                        required
                      />
                    </div>

                    <div class="input-container mb-6">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="firstname"
                      ></label>
                      <input
                        type="text"
                        class="firstnameRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstname"
                        v-model="firstname"
                        placeholder="Prénom"
                        required
                      />
                    </div>

                    <div class="input-container mb-6">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="siret"
                      ></label>
                      <input
                        type="number"
                        class="siretRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="siret"
                        v-model="siret"
                        placeholder="Numéro Siret"
                        required
                      />
                    </div>

                    <div class="input-container mb-6">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="email"
                      ></label>
                      <input
                        type="email"
                        class="emailRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        v-model="email"
                        placeholder="Votre email"
                        required
                      />
                    </div>

                    <div class="input-container mb-6">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="phone"
                      ></label>
                      <input
                        type="text"
                        class="phoneRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        v-model="phone"
                        placeholder="Téléphone"
                        required
                      />
                    </div>

                    <div class="input-container mb-6">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                      ></label>
                      <input
                        type="password"
                        class="passwordRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        v-model="password"
                        placeholder="Mot de passe"
                        required
                      />
                    </div>

                    <div class="boxButton">
                      <input
                        class="inline-block align-baseline font-black p-2 text-sm border-2 border-red-500 rounded text-red-500 hover:text-red-800"
                        type="submit"
                        value="Valider Inscription"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
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
