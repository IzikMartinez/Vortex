import { createStore } from "vuex";

export default createStore({
  state: {
    cartItems: [
      { name: "vortex1", price: 1700 },
      { name: "vortex2", price: 700 },
      { name: "vortex3", price: 1000 },
      { name: "vortex4", price: 1000 }
    ]
  },
  mutations: {
    addToCartItems(state, payload) {
      state.cartItems.push(payload);
    },
    removeFromCart(state) {
      state.cartItems.pop();
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit("addToCartItems", payload);
    }
  },
  modules: {}
});
