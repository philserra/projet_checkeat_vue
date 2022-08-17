<template>
    <div
        class="min-h-screen bg-black bg-no-repeat bg-center bg-cover"
        style="
            background-image: url('https://images.unsplash.com/photo-1543007631-283050bb3e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80');
        "
    >
        <div class="flex items-center justify-center py-2 px-1">
            <div class="w-full sm:px-6">
                <div
                    class="px-1 md:px-10 py-1 md:py-3 bg-black bg-opacity-75 rounded-tl-lg rounded-tr-lg"
                >
                    <div class="p-2">
                        <h1
                            class="text-red-600 text-3xl p-4 text-center font-black shadow-lg"
                        >
                            Choisissez votre menu
                        </h1>
                    </div>
                    <ul>
                        <section class="text-gray-600 text-sm">
                            <div class="container px-5 py-24 mx-auto">
                                <div class="flex flex-wrap -m-1">
                                    <div class="p-2 lg:w-1/4">
                                        <div
                                            class="h-full bg-gray-100 bg-opacity-75 px-6 pt-6 pb-24 rounded-lg overflow-hidden text-center relative"
                                        >
                                            <p
                                                class="text-sm font-black md:text-lg text-gray-100 line-clamp-1"
                                            >
                                                Entrées
                                            </p>
                                            <li
                                                v-for="elem in menu"
                                                :key="elem.id"
                                            >
                                                <div
                                                    v-if="
                                                        elem.category ===
                                                        'entree'
                                                    "
                                                >
                                                    <button
                                                        @click="
                                                            addEntree(
                                                                elem.name,
                                                                elem.priceTtc,
                                                                elem.id
                                                            )
                                                        "
                                                        class="inline-block p-1 rounded border-2 border-red-600 text-sm font-black md:text-lg text-gray-100 line-clamp-1"
                                                    >
                                                        {{ elem.name }}
                                                    </button>
                                                    <span
                                                        class="inline-block text-lg font-black md:text-lg text-gray-100 line-clamp-1"
                                                    >
                                                        {{ elem.priceTtc }}€
                                                    </span>
                                                </div>
                                            </li>
                                        </div>
                                    </div>

                                    <div class="p-2 lg:w-1/4">
                                        <div
                                            class="h-full text-sm bg-gray-100 bg-opacity-75 px-16 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                                        >
                                            <p
                                                class="text-sm font-black md:text-lg text-gray-100 line-clamp-1"
                                            >
                                                Plats
                                            </p>
                                            <li
                                                v-for="elem in menu"
                                                :key="elem.id"
                                            >
                                                <div
                                                    v-if="
                                                        elem.category === 'plat'
                                                    "
                                                >
                                                    <button
                                                        class="inline-block p-1 rounded border-2 border-red-600 text-sm font-black md:text-lg text-gray-100 line-clamp-1"
                                                        @click="
                                                            addPlat(
                                                                elem.name,
                                                                elem.priceTtc,
                                                                elem.id
                                                            )
                                                        "
                                                    >
                                                        <span
                                                            class="inline-block text-red-600 font-bold"
                                                            >{{
                                                                elem.category
                                                            }}:
                                                        </span>
                                                        {{ elem.name }} -
                                                        <span
                                                            class="inline-block text-sm font-black md:text-lg text-gray-100 line-clamp-1"
                                                            >Prix:
                                                        </span>
                                                        {{ elem.priceTtc }} €
                                                    </button>
                                                </div>
                                            </li>
                                        </div>
                                    </div>

                                    <div class="p-2 lg:w-1/4">
                                        <div
                                            class="h-full bg-gray-100 bg-opacity-75 px-16 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                                        >
                                            <p
                                                class="text-sm font-black md:text-lg text-gray-100 line-clamp-1"
                                            >
                                                Desserts
                                            </p>
                                            <li
                                                v-for="elem in menu"
                                                :key="elem.id"
                                            >
                                                <p
                                                    class="inline-block text-lg font-black md:text-lg text-gray-100 line-clamp-1"
                                                >
                                                    <span
                                                        class="inline-block text-red-600 font-bold"
                                                        >{{ elem.category }}:
                                                    </span>
                                                    {{ elem.name }} -
                                                    <span
                                                        class="inline-block text-lg font-black md:text-lg text-gray-100 line-clamp-1"
                                                        >Prix:
                                                    </span>
                                                    {{ elem.priceTtc }} €
                                                </p>
                                            </li>
                                        </div>
                                    </div>

                                    <div class="p-2 lg:w-1/4">
                                        <div
                                            class="h-full bg-gray-100 bg-opacity-75 px-16 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
                                        >
                                            <p
                                                class="text-sm font-black md:text-lg text-gray-100 line-clamp-1"
                                            >
                                                Boissons
                                            </p>
                                            <li
                                                v-for="elem in menu"
                                                :key="elem.id"
                                            >
                                                <p
                                                    class="inline-block text-lg font-black md:text-lg text-gray-100 line-clamp-1"
                                                >
                                                    <span
                                                        class="inline-block text-red-600 font-bold"
                                                        >{{ elem.category }}:
                                                    </span>
                                                    {{ elem.name }} -
                                                    <span
                                                        class="inline-block text-lg font-black md:text-lg text-gray-100 line-clamp-1"
                                                        >Prix:
                                                    </span>
                                                    {{ elem.priceTtc }} €
                                                </p>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ul>
                    <div class="command border-2 border-red-600 text-gray-100">
                        <p class="">Votre commande</p>
                        <div v-for="(elem, index) in command" :key="elem.id">
                            <p class="inline-block">
                                {{ elem.name }} , {{ elem.price }}
                            </p>
                            <button
                                @click="deleteAddition(index)"
                                class="inline-block text-red-600 border border-red-600"
                            >
                                -
                            </button>
                        </div>

                        <p v-bind="addition">total: {{ total }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const idRestaurantMenu = localStorage.getItem("id_restaurant_menu");

export default {
    data() {
        return {
            menu: [],
            id_restaurant: idRestaurantMenu,
            command: [],
            price: [],
            total: "",
            id: 0,
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
        // console.log(this.menu);
    },
    computed: {
        addition() {
            if (this.price != 0) {
                const sum = this.price.reduce((a, b) => a + b);

                this.total = sum;
            }
        },
    },
    methods: {
        addEntree(entree, value, id) {
            const starter = { name: entree, price: value, id: this.id++ };
            // console.log(starter);
            this.command.push(starter);
            this.price.push(value);

            // console.log(this.price);

            // console.log(this.command);
        },

        addPlat(plat, value) {
            const course = plat + " " + value;
            this.command.push(course);
            this.price.push(value);
            // console.log(this.command);
        },

        deleteAddition(index) {
            // je splice grâce a l'index car index pour la commande et le price possède le même
            this.command.splice(index, 1);
            this.price.splice(index, 1);
        },
    },
};
</script>
