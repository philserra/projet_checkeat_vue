<template>
  <div
    class="min-h-screen flex justify-center bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div class="list max-w-7xl bg-opacity-75 h-full p-10">
      <div
        class="bg-black flex justify-center overflow-hidden shadow-sm sm:rounded-lg"
      >
        <div class="p-4 bg-black">
          <h1 class="text-red-600 text-3xl p-4">Restaurants :</h1>

          <div class="list">
            <ul>
              <li v-for="elem in liste" :key="elem.id">
                <div
                  class="max-w-sm rounded-lg bg-red-900 bg-opacity-50 shadow-md shadow-red-600 p-4 m-6"
                >
                  <div class="px-6 py-4">
                    <p
                      class="mb-3 text-xl font-blackt racking-tight text-gray-200"
                    >
                      Nom du restaurant : {{ elem.name }}
                    </p>
                    <p
                      class="mb-3 text-l font-blackt racking-tight text-gray-200"
                    >
                      Adresse : {{ elem.adress }}
                    </p>
                    <p
                      class="mb-3 text-l font-blackt racking-tight text-gray-200"
                    >
                      Ville : {{ elem.city }}
                    </p>

                    <p
                      class="mb-3 text-l font-blackt racking-tight text-gray-200"
                    >
                      Tel : {{ elem.tel }}
                    </p>
                    <p
                      class="mb-3 text-l font-blackt racking-tight text-gray-200"
                    >
                      Email : {{ elem.email }}
                    </p>
                    <button
                      class="inline-block p-2 m-2 text-white bg-transparent hover:bg-red-500 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                    >
                      Voir le menu
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liste: [],
    };
  },
  async mounted() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const response = await fetch("http://127.0.0.1:8000/api/guests", options);

    const data = await response.json();

    this.liste = data.restaurants;
  },
};
</script>

<style></style>
