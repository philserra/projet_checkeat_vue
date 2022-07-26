<template>
  <h1>Profil</h1>

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

  <button @click="editProfil">Modifier</button>
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

  async mounted() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    const response = await fetch(
      "http://127.0.0.1:8000/api/restaurateurs/profile",
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

  methods: {
    async deleteProfil() {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };

      const response = await fetch(
        "http://127.0.0.1:8000/api/restaurateurs/delete",
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
