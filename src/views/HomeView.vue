<template>
  <div
    wrapper
    class="h-screen bg-gray-500 flex-col flex items-center justify-around bg-fixed bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80');
    "
  >
    <h1 class="font-extrabold text-8xl text-red-600">
      Check'<span class="text-gray-100 italic">EAT</span>
    </h1>

    <div
      class="title text-gray-200 font-black text-5xl p-2 drop-shadow-lg shadow-black"
    >
      La plateforme de vos restaurants préférés
    </div>
    <!-- <h3 class="text-red-600 font-black text-2xl underline mt-10 pt-10">
      Cherchez votre restaurant
    </h3> -->

    <!-- <button
      @click="getRestaurants()"
      class="mb-24 font-black text-xl animate-bounce w-80 text-gray-200 bg-gradient-to-r from-red-900 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-600 dark:focus:ring-red-800 rounded-lg px-5 py-2.5 text-center mr-2"
    >
      Cherchez votre restaurant
    </button> -->

    <a
      @click="getRestaurants()"
      href="#_"
      class="relative px-5 py-3 overflow-hidden font-black text-2xl text-gray-900 bg-red-600 border border-gray-100 rounded-lg shadow-inner group animate-bounce"
    >
      <span
        class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-200 group-hover:w-full ease"
      ></span>
      <span
        class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-200 group-hover:w-full ease"
      ></span>
      <span
        class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-200 group-hover:h-full ease"
      ></span>
      <span
        class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"
      ></span>
      <span
        class="absolute inset-0 w-full h-full duration-300 delay-300 bg-black opacity-0 group-hover:opacity-100"
      ></span>
      <span
        class="relative transition-colors duration-300 delay-200 group-hover:text-red-600 ease"
        >Cherchez votre restaurant</span
      >
    </a>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  name: "HomeView",
  components: { NavBar },
  methods: {
    getRestaurants() {
      this.$router.push({ name: "listeResto" });
    },
  },
};
</script>
<style></style>
