<template>
  <div>
    <div class="cartItem-text">{{ passed }} ${{ price }}</div>
    <svg
      class="btn-remove"
      @click="removeFromCart(index)"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"
      />
    </svg>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CartItem",
  props: {
    passed: String,
    price: Number,
    index: Number
  },
  methods: {
    ...mapMutations(["removeFromCart"])
  }
};
</script>

<style scoped>
.cartItem-text {
  display: inline;
  padding-left: 15px;
  font-family: "Antonio", sans-serif;
  font-weight: bold;
  font-size: 2em;
}

.btn-remove {
  margin-left: 20px;
  background-color: var(--bg-color);
  color: var(--navbar-color);
  width: 30px;
  height: 30px;
}

.btn-remove:hover {
  background-color: var(--bg-color);
  color: var(--red);
}
</style>
