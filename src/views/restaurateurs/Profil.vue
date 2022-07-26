<template>
  <h1>Profil</h1>

  <div>
    <p>{{ id }}</p>
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
import { getProfil } from "@/lib/profil";
export default {
  data() {
    return {
      id: "",
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
    const profil = await getProfil({ id: 1 });

    this.lastname = profil.lastname;
    this.firstname = profil.firstname;
    this.siret = profil.siret;
    this.email = profil.email;
    this.phone = profil.phone;
    this.password = profil.password;
  },
  methods: {
    async editProfil() {
      await editProfil({
        id: 1,
        lastname: this.lastname,
        firstname: this.firstname,
        siret: this.siret,
        email: this.email,
        phone: this.phone,
        password: this.password,
      });
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
