<template>
  <div class="items">
    <p v-for="(cartItem, index) in cartItems" :key="cartItem.index">
      <CartItem :passed="cartItem.name" :price="cartItem.price" :index="index"></CartItem>
    </p>
    <div class="buttons">
      <button class="btn-clear" @click="clearCart">Clear cart</button>
      <button class="btn-checkout" @click="$router.push('checkout')">
        Check out
      </button>
    </div>
  </div>
  <div class="cart-total">{{ totalPrice }}</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import store from "@/store";
import CartItem from "@/components/fragments/CartItem.vue";

export default {
  name: "Cart",
  components: { CartItem },
  computed: {
    ...mapState(["cartItems"]),
    totalPrice() {
      const prices = store.getters.getPrices;
      console.log(prices);
      let total = 0;
      let price;
      for (price in prices) {
        total += price;
      }
      return total;
    }
  },
  methods: {
    ...mapMutations(["removeFromCart", "clearCart"])
  }
};
</script>

<style scoped>
.items {
  padding-top: 15vh;
}


.buttons {
  outline: none;
  border: none;
}

.buttons .btn-clear,
.btn-checkout {
  background-color: #2c3e50;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
}

.buttons .btn-checkout {
  background-color: #6fccff;
}
</style>
