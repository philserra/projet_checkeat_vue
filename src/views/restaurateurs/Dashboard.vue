```
<template>
  <div
    class="min-h-screen bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div
      class="list max-w-7xl bg-opacity-75 mx-auto h-full sm:px-6 lg:px-8 p-10"
    >
      <div class="bg-black overflow-hidden shadow-sm sm:rounded-lg">
        <div class="flex justify-between">
          <h1 class="inline-block text-red-600 text-3xl p-2">
            Tableau de bord
          </h1>
          <button
            class="inline-block p-2 m-2 text-red-600 bg-transparent hover:bg-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            <a href="http://localhost:8080/restaurants/create"
              >Ajouter un restaurant</a
            >
          </button>
        </div>
        <div class="p-6 bg-black">
          <section class="text-gray-200 body-font">
            <div class="container px-5 py-16 mx-auto">
              <h3 class="p-2">Restaurants :</h3>
              <ul>
                <li v-for="elem in liste" :key="elem.id">
                  <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                      <div
                        class="bg-red-900 border-2 border-gray-200 p-6 rounded-lg"
                      >
                        <p>Nom du restaurant : {{ elem.name }}</p>
                        <p>Adresse : {{ elem.adress }}</p>
                        <p>Code postale : {{ elem.zip }}</p>
                        <p>Ville : {{ elem.city }}</p>
                        <p>Téléphone : {{ elem.tel }}</p>
                        <p>Email : {{ elem.email }}</p>
                        <p>Horaires d'ouverture : {{ elem.timetable }}</p>
                        <p>Capacité : {{ elem.capacity }}</p>
                        <button @click="deleteResto(elem.id)">Supprimer</button>
                        <button
                          class="inline-block p-2 m-2 text-white bg-transparent hover:bg-red-500 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                        >
                          <a href="http://localhost:8080/menu/create"
                            >Ajouter un menu</a
                          >
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      liste: "",
      name: "",
      adress: "",
      zip: "",
      city: "",
      tel: "",
      email: "",
      timetable: "",
      capacity: "",
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
      "http://127.0.0.1:8000/api/restaurants",
      options
    );
    const data = await response.json();
    this.liste = data.restaurants;
  },
  methods: {
    editResto() {
      this.$router.push("/restaurants/edit");
    },
    async deleteResto(id) {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await fetch(
        "http://127.0.0.1:8000/api/restaurants/" + id,
        options
      );
      const data = await response.json();
      if (data.message == true) {
        this.$router.push("/restaurants/delete");
      }
    },
  },
};
</script>
<style></style>
```
