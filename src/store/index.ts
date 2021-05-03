import { createStore } from "vuex";
import customers from "./modules/customer";

function initialState() {
  return {};
}

export default createStore({
  state: {
    cartItems: [{ name: null, price: null }],
    showCart: false,
    contactInfo: [
      {
        firstName: String,
        lastName: String,
        email: String
      }
    ]
  },
  getters: {
    getCartStatus(state) {
      return state.showCart;
    },
    getPrices(state) {
      return state.cartItems.entries();
    },
    getCartSize(state) {
      return state.cartItems.length - 1;
    }
  },
  mutations: {
    addToCartItems(state, payload) {
      state.cartItems.push(payload);
    },
    removeFromCart(state, payload) {
      state.cartItems.splice(payload, 1);
    },
    clearCart(state) {
      const s = initialState();
      Object.keys(state.cartItems).forEach(key => state.cartItems.pop());
    },
    addContact(state, payload) {
      state.contactInfo.push(payload);
    },
    getContact(state) {
      return state.contactInfo;
    },
    addCustomer(state, payload) {
      state.contactInfo.push(payload);
    }
  },
  actions: {
    addToCart(context, payload) {
      context.commit("addToCartItems", payload);
    }
  },
  modules: {
    customers
  }
});
