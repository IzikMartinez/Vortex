<template>
  <div class="items">
    <p v-for="cartItem in cartItems" :key="cartItem.id">
      <Dataframe :passed="cartItem.name" :price="cartItem.price"></Dataframe>
      <button @click="removeFromCart">Remove item</button>
    </p>
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
    ...mapMutations(["removeFromCart"])
  }
};
</script>

<style scoped>
.items {
  padding-top: 15vh;
}
</style>
