import { createStore } from "vuex";

export default createStore({
  state: {
    pizzas: null,
    categories: {
      id: 0,
      text: 'Все'
    },
    cart: [],
    categoriesArray: [
      {
        id: 0,
        text: "Все",
        isActive: true,
      },
      {
        id: 1,
        text: "Мясные",
        isActive: false,
      },
      {
        id: 2,
        text: "Вегетарианская",
        isActive: false,
      },
      {
        id: 3,
        text: "Гриль",
        isActive: false,
      },
      {
        id: 4,
        text: "Острые",
        isActive: false,
      },
      {
        id: 5,
        text: "Закрытые",
        isActive: false,
      },
    ],
  },
  mutations: {
    getPizzas(state, getPizzas) {
      state.pizzas = getPizzas;
    },
    activeCategoris(state, categorie) {
      state.categories.id = categorie.id
      state.categories.text = categorie.text  
    },
    addCart(state, pizza) {
      state.cart.push(pizza)
    }
  },
  actions: {
    async getPizzas(context) {
      let response = await fetch(
        "https://64de99a3825d19d9bfb2bcac.mockapi.io/vue-pizza"
      );
      let result = await response.json();
      context.commit("getPizzas", result);
    },
  },
  getters: {
    getCategories(state) {
      if (state.categories.id != 0) {
        return state.pizzas.filter(
          (pizza) => pizza.category == state.categories.id
        );
      } else {
        return state.pizzas;
      }
    },
  },
});
