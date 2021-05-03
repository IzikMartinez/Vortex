<template>
  <div class="BubbleBody" @click="$router.push({ name: 'BigBubble', params: {title: title, price: price, bigDesc: prodDesc, imagePath: passPath}})" >
    <h3 class="titleClass">{{ title }}</h3>
    <p class="description">${{ price }}</p>
    <img class="trub" :src="require('../../assets/' + path)" alt="imagePath" /><br />
    <button class="cartBtn" @click="addBtn">
      Add to cart
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "Bubble",
  props: {
    title: String,
    prodDesc: String,
    price: Number,
    path: String,
    passPath: String
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
});
</script>

<style scoped>
.BubbleBody {
  background-color: var(--navbar-color);
  margin-right: auto;
  margin-left: auto;
  width: 20vw;
  height: 35vh;
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
.trub {
  width: 50%;
  height: 50%;
  border-radius: 15px;
}

.svgClass {
  background-color: var(--navbar-color);
}

.cartBtn {
  border: none;
  outline: none;
  text-decoration: none;

  width: 10vw;
  height: 5vh;
  margin-left: 5px;
  margin-right: 5px;
  padding: 2px;
  background-color: var(--navbar-color);

  border-radius: 10px;

  color: white;
  font-family: "Coda Caption", san-serif;
  font-variant: all-small-caps;
  font-weight: bold;
  text-align: center;
  font-size: 1.0em;

}

.cartBtn:hover {
  background-color: #b1129b;
}


</style>
