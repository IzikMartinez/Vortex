<template>
  <div class="items">
    <p v-for="(cartItem, index) in cartItems" :key="cartItem.index">
      <Dataframe :passed="cartItem.name" :price="cartItem.price"></Dataframe>
      <button @click="removeFromCart(index)">Remove item</button>
    </p>
    <button class="clear" @click="clearCart">Clear cart</button>
    <button class="checkout" @click="$router.push('checkout')">Check out</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Dataframe from "@/components/fragments/Dataframe.vue";

export default {
  name: "Cart",
  components: { Dataframe },
  computed: {
    ...mapState(["cartItems"])
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
</style>
