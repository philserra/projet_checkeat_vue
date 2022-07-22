<template>
  <!-- Formulaire Modification Restaurateur -->
  <div class="register">
    <h2 class="titleRegister">Modification de votre profil</h2>

    <div class="wrapper">
      <div id="mainContainer" class="mainContainer">
        <form @submit.prevent="editProfil">
          <div class="input-container">
            <label for="lastname"></label>
            <input
              type="text"
              class="lastnameRegister"
              id="lastname"
              v-model="lastname"
              placeholder="Nom"
              required
            />
          </div>

          <div class="input-container">
            <label for="firstname"></label>
            <input
              type="text"
              class="firstnameRegister"
              id="firstname"
              v-model="firstname"
              placeholder="Prénom"
              required
            />
          </div>

          <div class="input-container">
            <label for="siret"></label>
            <input
              type="number"
              class="siretRegister"
              id="siret"
              v-model="siret"
              placeholder="Numéro Siret"
              required
            />
          </div>

          <div class="input-container">
            <label for="email"></label>
            <input
              type="email"
              class="emailRegister"
              id="email"
              v-model="email"
              placeholder="Votre email"
              required
            />
          </div>

          <div class="input-container">
            <label for="phone"></label>
            <input
              type="text"
              class="phoneRegister"
              id="phone"
              v-model="phone"
              placeholder="Téléphone"
              required
            />
          </div>

          <div class="input-container">
            <label for="password"></label>
            <input
              type="password"
              class="passwordRegister"
              id="password"
              v-model="password"
              placeholder="Mot de passe"
              required
            />
          </div>

          <div class="boxButton">
            <input type="submit" value="Modifier" />
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- <p>{{ message }}</p> -->
</template>

<script>
import { getProfil, editProfil } from "@/lib/profil";
export default {
  data() {
    return {
      lastname: "",
      firstname: "",
      siret: "",
      email: "",
      phone: "",
      password: "",
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
  },
};
</script>

<style></style>
