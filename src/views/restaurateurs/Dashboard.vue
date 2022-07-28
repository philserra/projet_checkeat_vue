<template>
  <h1>Tableau de bord</h1>
  <div>
    <h3>Restaurants :</h3>

    <div class="list">
      <ul>
        <li v-for="elem in liste" :key="elem.id">
          <p>Nom du restaurant : {{ elem.name }}</p>
          <p>Adresse : {{ elem.adress }}</p>
          <p>Code postale : {{ elem.zip }}</p>
          <p>Ville : {{ elem.city }}</p>
          <p>Téléphone : {{ elem.tel }}</p>
          <p>Email : {{ elem.email }}</p>
          <p>Horaires d'ouverture : {{ elem.timetable }}</p>
          <p>Capacité : {{ elem.capacity }}</p>
          <button @click="editResto">Modifier</button>
          <br />
          <button @click="deleteResto(elem.id)">Supprimer</button>
        </li>
      </ul>
    </div>

    <button>
      <a href="http://localhost:8080/restaurants/create"
        >Ajouter un restaurant</a
      >
    </button>
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
