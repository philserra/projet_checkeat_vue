<template>
  <div
    class="screen min-h-screen flex-col flex items-center justify-center bg-gray-500"
  >
    <h1 class="font-bold text-red-600 text-6xl">Check'EAT</h1>
    <button @click="getRestaurants()">Restaurants</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  methods: {
    getRestaurants() {
      this.$router.push({ name: "listeResto" });
    },
  },
};
</script>
