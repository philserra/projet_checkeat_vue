<template>
  <h1>Votre restaurant a bien été ajouté</h1>
  <button @click="getDashboard()">Tableau de bord</button>
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
