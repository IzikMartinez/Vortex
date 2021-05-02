import { createStore } from "vuex";
import customers from "./modules/customer";

function initialState() {
  return {};
}

export default createStore({
  state: {
    cartItems: [{ name: "", price: 0}],
    showCart: false,
    contactInfo: [
      {
        firstName: String,
        lastName: String,
        email: String
      }
    ],
    customerList: [
      {
        firstName: String,
        lastName: String,
        email: String,
        address: String,
        address2: String,
        city: String,
        state: String,
        zip: String
      }
    ]
  },
  getters: {
    getCartStatus(state) {
      return state.showCart;
    },
    getPrices(state) {
      return state.cartItems.entries();
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
      state.customerList.push(payload);
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
