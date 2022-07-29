<template>
  <div
    class="min-h-screen flex justify-center align-center bg-black bg-no-repeat bg-center bg-cover pt-32"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div class="list max-w-7xl bg-opacity-75 h-full p-10">
      <div class="bg-black overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-4 bg-black">
          <div
            class="list max-w-7xl bg-opacity-75 mx-auto h-full sm:px-6 lg:px-8 p-10"
          >
            <div
              class="relative flex flex-col flex-wrap items-center p-8 bg-opacity-75 rounded"
              style="cursor: auto"
            >
              <span
                class="absolute px-3 py-2 text-lg font-medium text-white rounded border-2 border-gray-200 bg-red-900 -top-0"
                >Profil</span
              >
              <div
                class="bg-red-900 border-2 border-gray-200 text-gray-200 p-6 rounded-lg"
              >
                <p>Nom: {{ lastname }}</p>
                <p>Prénom: {{ firstname }}</p>
                <p>SIRET: {{ siret }}</p>
                <p>Email: {{ email }}</p>
                <p>Tel: {{ phone }}</p>
                <p>Password: {{ password }}</p>

                <div class="flex justify-between pt-4">
                  <button
                    class="inline-block text-gray-200 bg-transparent font-semibold hover:bg-red-500 hover:text-white py-2 px-4 border border-gray-200 hover:border-transparent rounded"
                    @click="editProfil"
                  >
                    Modifier
                  </button>
                  <button
                    class="inline-block text-gray-200 bg-transparent font-semibold hover:bg-red-500 hover:text-white py-2 px-4 border border-gray-200 hover:border-transparent rounded"
                    @click="deleteProfil"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
              <p>{{ message }}</p>
            </div>
          </div>
        </div>
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
      "http://127.0.0.1:8000/api/restaurateurs",
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
    async deleteProfil() {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/restaurateurs",
        options
      );

      const data = await response.json();

      if (data.message == true) {
        this.$router.push("/restaurateurs/delete");
      }
    },
    editProfil() {
      this.$router.push("/restaurateurs/edit");
    },
  },
};
</script>
<style></style>
