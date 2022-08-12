<template>
  <!-- <router-link to="'/'">Acceuille</router-link> -->
  <div
    class="h-screen w-screen flex justify-center align-center bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div
      class="bg-gray-100 text-red-600 border-2 border-red-600 rounded-3xl shadow-xl w-full overflow-hidden"
      style="max-width: 1000px"
    >
      <div class="md:flex w-full">
        <div
          class="hidden md:block w-1/2 bg-red-500 bg-cover bg-no-repeat bg-center"
        >
          <video
            autoplay
            loop
            muted
            class="z-10 w-auto min-h-full object-cover"
          >
            <source
              src="https://st4.depositphotos.com/7417846/22516/v/600/depositphotos_225169862-stock-video-young-cook-dressed-black-uniformed.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="w-full mt-6 md:w-1/2 py-10 px-5 md:px-10">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              class="mx-auto h-12 w-auto"
              src="https://api.iconify.design/ri/login-circle-line.svg?color=red"
              alt="Login"
            />
            <h1 class="mt-6 text-center text-3xl font-extrabold text-red-600">
              Connectez-vous
            </h1>
            <p class="mt-2 text-center text-sm text-gray-100">
              <span class="font-bold text-red-600"> Ou {{ " " }}</span>
              <a
                href="#"
                class="font-bold text-red-600 hover:text-red-500 underline"
              >
                Démarrez vos 14 jours d'essais
              </a>
            </p>
          </div>

          <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-gray-100 py-8 px-4 sm:rounded-lg sm:px-10">
              <form @submit.prevent="login" class="mt-8 space-y-6">
                <div>
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="email"
                    >Email</label
                  >
                  <div class="mt-1">
                    <input
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      type="email"
                      name="email"
                      autocomplete="email"
                      v-model="email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    class="block text-sm font-medium text-gray-700"
                    for="password"
                    name
                    >Mot de passe</label
                  >
                  <div class="mt-1">
                    <input
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      type="password"
                      name="password"
                      autocomplete="current-password"
                      v-model="password"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label
                      for="remember-me"
                      class="ml-2 pr-1 block text-sm text-gray-900"
                    >
                      Se souvenir de moi
                    </label>
                  </div>

                  <div class="text-sm">
                    <a
                      href="#"
                      class="font-medium text-red-600 hover:text-red-500"
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    type="submit"
                    name="login"
                  >
                    Se connecter
                  </button>
                </div>
              </form>

              <div class="mt-12">
                <div class="relative">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300" />
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-gray-100 text-gray-500">
                      Ou continuer avec
                    </span>
                  </div>
                </div>

                <div class="mt-8 grid grid-cols-3 gap-3">
                  <div>
                    <a
                      href="https://fr-fr.facebook.com/"
                      class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span class="sr-only">Sign in with Facebook</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://twitter.com/i/flow/login"
                      class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span class="sr-only">Sign in with Twitter</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
                      class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      <span class="sr-only">Sign in with GitHub</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Connexion",
  data() {
    return {
      email: "",
      password: "",
      message: "",
      token: "",
    };
  },
  methods: {
    async login() {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };
      const response = await fetch("http://127.0.0.1:8000/api/login", options);

      const data = await response.json();
      if (data.message == true) {
        this.token = data.access_token;
        localStorage.setItem("token", data.access_token);
        location = "http://localhost:8080/restaurateurs/dashboard/";
        // this.$router.push("/restaurateurs/dashboard");
      }
    },
  },
};
</script>
