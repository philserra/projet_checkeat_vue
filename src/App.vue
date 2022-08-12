<template>
  <div class="h-screen">
    <NavBar />
  </div>
</template>

<script>
import HomeView from "@/views/HomeView.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: { HomeView, NavBar },
};
</script>
