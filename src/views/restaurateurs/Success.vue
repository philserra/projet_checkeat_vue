<template>
  <h1>Bravo, votre profil a été crée !</h1>
  <h3>Bienvenue dans notre équipe</h3>
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
