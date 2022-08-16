<template>
  <div
    class="min-h-screen bg-black bg-no-repeat bg-center bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
    "
  >
    <div class="p-6">
      <!-- <h1
      class="text-center text-2xl text-red-600 font-black border-4 border-red-600 shadow-lg rounded p-6"
    >
      Liste des restaurants
    </h1> -->
      <h1 class="text-red-600 text-3xl p-4 text-center font-black shadow-lg">
        Choisissez votre menu
      </h1>
    </div>
    <ul>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full p-4"
      >
        <li v-for="elem in menu" :key="elem.id">
          <div class="relative mx-auto w-full">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
            ></div>

            <div
              class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
            >
              <div class="shadow-md p-4 rounded-lg bg-black">
                <div
                  class="flex justify-center relative rounded-lg overflow-hidden h-52"
                >
                  <div
                    class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full"
                  >
                    <div class="absolute inset-0 bg-gray-100">
                      <img
                        class="w-auto rounded-lg"
                        src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt=""
                      />
                    </div>
                  </div>

                  <span
                    class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-green-300 text-sm font-medium text-white select-none"
                  >
                    Recommandé
                  </span>
                </div>
                <div class="mt-4">
                  <p
                    class="text-lg font-black md:text-lg text-gray-100 line-clamp-1"
                  >
                    <span class="text-red-600 font-bold">Restaurant:</span>
                    {{ elem.name }}
                  </p>
                  <p
                    class="text-lg font-black md:text-lg text-gray-100 line-clamp-1"
                  >
                    {{ elem.category }}
                  </p>
                  <p
                    class="text-lg font-black md:text-lg text-gray-100 line-clamp-1"
                  >
                    {{ elem.priceTtc }}
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
const idRestaurantMenu = localStorage.getItem("id_restaurant_menu");

export default {
  data() {
    return {
      menu: [],
      id_restaurant: idRestaurantMenu,
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

    const response = await fetch(
      "http://127.0.0.1:8000/api/guestmenu/" + this.id_restaurant,
      options
    );

    const data = await response.json();

    this.menu = data.menu;
  },
};
</script>
