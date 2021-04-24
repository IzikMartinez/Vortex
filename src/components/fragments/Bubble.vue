<template>
  <div class="BubbleBody">
    <h3 class="titleClass">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <p class="description">${{ price }}</p>
    <img src="@/assets/placeholder.png" alt="placeholder" />
    <button class="cartBtn" @click="addBtn">
      Add to cart
    </button>
  </div>
</template>

<script>
import { mapActions} from "vuex";
export default {
  name: "Bubble",
  props: {
    title: String,
    description: String,
    price: Number
  },
  methods: {
    ...mapActions(["addToCart"]),

    addBtn() {
      const newItem = {
        name: this.title,
        price: this.price
      };
      this.addToCart(newItem);
    }
  }
};
</script>

<style scoped>
.BubbleBody {
  background-color: var(--navbar-color);
  margin-right: auto;
  margin-left: auto;
  width: 20vw;
  height: 28vh;
  border-radius: 10px;
}

.titleClass {
  font-family: var(--title-font);
  font-variant-caps: small-caps;
  color: var(--light-text);
  background-color: var(--navbar-color);
}

.description {
  font-family: var(--body-font);
  color: var(--light-text);
  background-color: var(--navbar-color);
}

img {
  width: 65%;
  height: 55%;
  border-radius: 20px;
}
</style>
