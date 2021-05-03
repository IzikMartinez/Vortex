<template>
  <div class="BubbleBody">
    <h3 class="titleClass">{{ title }}</h3>
    <p class="description">${{ price }}</p>
    <img class="trub" :src="require('../../assets/' + path)" :alt="imagePath" /><br />
    <button class="cartBtn" @click="addBtn">
      Add to cart
    </button>
    <div class="svgClass">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="#FFFFFF"
        class="svgClass"
        viewBox="0 0 16 16"
        @click="$router.push({ name: 'BigBubble', params: {title: title, price: price, bigDesc: prodDesc, imagePath: passPath}})"
      >
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </svg>
    </div>
  </div>
</template>

<script>

import { mapActions } from "vuex";

export default {
  name: "Bubble",
  props: {
    title: String,
    prodDesc: String,
    price: Number,
    path: String,
    passPath: String
  },
  data() {
    return {
      imagePath: "cylinder.jpg"
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    addBtn() {
      const newItem = {
        name: this.title,
        price: this.price
      };
      this.addToCart(newItem);
    },

    plusBtn() {
      console.log("it worked!");
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
