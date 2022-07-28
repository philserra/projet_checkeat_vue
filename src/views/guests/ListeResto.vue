<template>
  <h1>Restaurants :</h1>

  <div class="list">
    <ul>
      <li v-for="elem in liste" :key="elem.id">
        <p>Nom du restaurant : {{ elem.name }}</p>
        <button>Voir le menu</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
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

    const response = await fetch("http://127.0.0.1:8000/api/guests", options);

    const data = await response.json();

    this.liste = data.restaurants;
  },
};
</script>

<style></style>
