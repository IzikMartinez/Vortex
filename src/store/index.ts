import { createStore } from "vuex";

function initialState() {
  return {};
}

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
      console.log(payload);
      console.log(state.cartItems);
      state.cartItems.push(payload);
    },
    removeFromCart(state, payload) {
      state.cartItems.splice(payload, 1);
    },
    clearCart(state) {
      const s = initialState();
      Object.keys(state.cartItems).forEach(key => state.cartItems.pop());
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit("addToCartItems", payload);
    }
  },
  modules: {}
});
