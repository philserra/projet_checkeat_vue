<template>
  <div
    wrapper
    class="min-h-screen bg-gray-500 flex-col flex items-center justify-around bg-fixed bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80');
    "
  >
    <h1 class="font-extrabold text-3xl text-red-600">
      Votre menu a bien été ajouté
    </h1>
    <button
      class="p-2 mb-64 m-2 text-gray-200 text-lg bg-transparent font-black hover:bg-red-500 hover:text-white py-2 px-4 border-2 border-red-500 hover:border-transparent rounded"
      @click="getDashboard()"
    >
      Tableau de bord
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    getDashboard() {
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>

<style></style>
