<template>
  <!-- Formulaire Modification Restaurateur -->
  <div
    class="min-h-screen flex justify-center bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    ">
    <div
      class="list max-w-7xl flex justify-center bg-opacity-75 mx-auto h-full sm:px-6 lg:px-8 p-10">
      <div class="bg-black overflow-hidden p-10 shadow-sm sm:rounded-lg">
        <h2 class="titleRegister text-2xl text-red-600 p-2">
          Modification de votre profil
        </h2>

        <section id="mainContainer" class="mainContainer r">
          <div class="container px-5 py-16 mx-auto">
            <div class="flex flex-wrap">
              <form
                @submit.prevent="editProfil"
                class="bg-red-900 border-2 border-gray-200 p-6 rounded-lg">
                <div
                  class="input-container block text-gray-700 text-sm font-bold mb-2">
                  <label for="lastname"></label>
                  <input
                    type="text"
                    class="lastnameRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastname"
                    v-model="lastname"
                    placeholder="Nom"
                    required />
                </div>

                <div
                  class="input-container block text-gray-700 text-sm font-bold mb-2">
                  <label for="firstname"></label>
                  <input
                    type="text"
                    class="firstnameRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    v-model="firstname"
                    placeholder="Prénom"
                    required />
                </div>

                <div
                  class="input-container block text-gray-700 text-sm font-bold mb-2">
                  <label for="siret"></label>
                  <input
                    type="number"
                    class="siretRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="siret"
                    v-model="siret"
                    placeholder="Numéro Siret"
                    required />
                </div>

                <div
                  class="input-container block text-gray-700 text-sm font-bold mb-2">
                  <label for="email"></label>
                  <input
                    type="email"
                    class="emailRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    v-model="email"
                    placeholder="Votre email"
                    required />
                </div>

                <div
                  class="input-container block text-gray-700 text-sm font-bold mb-2">
                  <label for="phone"></label>
                  <input
                    type="text"
                    class="phoneRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    v-model="phone"
                    placeholder="Téléphone"
                    required />
                </div>

                <div
                  class="input-container block text-gray-700 text-sm font-bold mb-2">
                  <label for="password"></label>
                  <input
                    type="password"
                    class="passwordRegister shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    v-model="password"
                    placeholder="Mot de passe"
                    required />
                </div>

                <div
                  class="boxButton p-2 mt-6 m-2 text-gray-200 bg-transparent font-semibold hover:bg-red-500 hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                  <input type="submit" value="Valider les modifications" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastname: "",
      firstname: "",
      siret: "",
      email: "",
      phone: "",
      password: "",
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
      "https://checkeat-api.osc-fr1.scalingo.io//api/restaurateurs",
      options
    );

    const data = await response.json();

    const profil = data.restaurateur;

    this.lastname = profil.lastname;
    this.firstname = profil.firstname;
    this.siret = profil.siret;
    this.email = profil.email;
    this.phone = profil.phone;
    this.password = profil.password;
  },

  methods: {
    async editProfil() {
      const options = {
        method: "PUT",
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

      const response = await fetch(
        "https://checkeat-api.osc-fr1.scalingo.io/api/restaurateurs",
        options
      );

      const data = await response.json();

      this.$router.push("/restaurateurs/editsuccess");
    },
  },
};
</script>

<style></style>
