<template>
  <div class="h-screen">
    <NavBar />
    <Footer />
  </div>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: { HomeView, NavBar, Footer },
};
</script>
