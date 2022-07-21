<template>
  <h1>Profil</h1>
  <button @click="getProfil">Afficher</button>
  <div>
    <p>{{ lastname }}</p>
    <p>{{ firstname }}</p>
    <p>{{ siret }}</p>
    <p>{{ email }}</p>
    <p>{{ phone }}</p>
    <p>{{ password }}</p>
    <button @click="deleteProfil">Supprimer</button>
  </div>
  <p>{{ message }}</p>

  <button @click="editProfil()">Modifier</button>
</template>

<script>
export default {
  data() {
    return {
      lastname: "",
      firstname: "",
      siret: "",
      email: "",
      phone: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async getProfil() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "http://127.0.0.1:8000/api/restaurateurs/1",
        options
      );
      const data = await response.json();

      const profil = data.restaurateur;

      this.lastname = profil.lastname;
      this.firstname = profil.firstname;
      this.siret = profil.siret;
      this.email = profil.email;
      this.phone = profil.phone;
      this.password = profil.password;
    },
    async deleteProfil() {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "http://127.0.0.1:8000/api/restaurateurs/1",
        options
      );
      const data = await response.json();

      if (data.message == true) {
        location = "http://localhost:8080/restaurateurs/delete";
      }
    },
    editProfil() {
      location = "http://localhost:8080/restaurateurs/edit";
    },
  },
};
</script>
<style></style>
