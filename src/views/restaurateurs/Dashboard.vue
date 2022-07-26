<template>
  <h1>Tableau de bord</h1>
  <div>
    <h3>Restaurants :</h3>

    <p>{{ id }}</p>
    <p>{{ name }}</p>
    <p>{{ adress }}</p>
    <p>{{ zip }}</p>
    <p>{{ city }}</p>
    <p>{{ phone }}</p>
    <p>{{ email }}</p>
    <p>{{ timetable }}</p>
    <p>{{ capacity }}</p>

    <!-- <button @click="deleteProfil">Supprimer</button> -->

    <div></div>

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
      id: "",
      name: "",
      adress: "",
      zip: "",
      city: "",
      phone: "",
      email: "",
      timetable: "",
      capacity: "",
    };
  },
  async getResto() {
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

    console.log(data);

    const restaurant = data.restaurant;

    this.name = restaurant.name;
    this.adress = restaurant.adress;
    this.zip = restaurant.zip;
    this.city = restaurant.city;
    this.phone = restaurant.phone;
    this.email = restaurant.email;
    this.timetable = restaurant.timetable;
    this.capacity = restaurant.capacity;
  },
};
</script>

<style></style>
