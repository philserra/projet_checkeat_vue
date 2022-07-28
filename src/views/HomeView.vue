<template>
  <div
    wrapper
    class="min-h-screen bg-gray-500 flex-col flex items-center justify-around bg-fixed bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80');
    "
  >
    <h1 class="font-extrabold text-8xl text-red-600">Check'EAT</h1>
    <div
      class="title text-gray-200 font-black text-5xl p-2 drop-shadow-lg shadow-black"
    >
      Bienvenue sur la plateforme de vos restaurants préférés
    </div>
    <h3 class="text-red-600 font-black text-2xl underline mt-10 pt-10">
      Cherchez votre restaurant
    </h3>
    <button
      @click="getRestaurants()"
      class="mb-32 font-black text-xl animate-bounce w-60 text-gray-200 bg-gradient-to-r from-red-700 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg px-5 py-2.5 text-center mr-2"
    >
      Restaurants
    </button>
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
