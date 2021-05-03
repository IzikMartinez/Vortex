<template>
  <div class="BubbleBody">
    <div class="column">
      <img class="bigImage" :src="require('../assets/' + imagePath)" :alt="imagePath" /><br />
      <div class="price">${{ price }}</div>
    </div>
    <div class="column">
      <h1 class="heading">{{ title }}</h1>
      <h3 class="description">{{ bigDesc }}</h3>

      <p class="ButtonHeading">SELECT LED</p>
      <div class="buttons">
        <button class="btn-option">Red</button>
        <button class="btn-option">Blue</button>
        <button class="btn-option">Green</button>
        <button class="btn-option">Purple</button>
        <button class="btn-option">RGB</button>
      </div>

      <p class="ButtonHeading">SELECT SIZE</p>
      <div class="buttons">
        <button class="btn-option">Small</button>
        <button class="btn-option">Medium</button>
        <button class="btn-option">Large</button>
      </div>
    </div>
    <button class="shy-btn-Cart" @click="addBtn">Add to cart</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "BigBubble",
  props: {
    title: String,
    bigDesc: String,
    price: String,
    imagePath: String
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
template {
}
.BubbleBody {
  background-color: var(--navbar-color);
  color: white;
  padding-top: 12vh;
  padding-bottom: 20vh;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 100%;
}

.BubbleBody .column {
  float: left;
  width: 50%;
}

.bigImage {
  width: 70%;
  height: 60%;
  border-radius: 20px;
}

.ButtonHeading {
  padding-top: 4vh;
  font-family: "Merriweather", Serif;
  font-variant: small-caps;
}

.btn-option {
  outline: none;
  border: none;
  padding: 15px;
  margin-left: 20px;
  border-radius: 10px;
  background-color: var(--bg-color);

  font-family: "Antonio", sans-serif;
  font-size: 1.2em;
}

.btn-option:active {
  background-color: #aa20ff;
  color: white;
}

.heading {
  font-family: "Merriweather", serif;
}

.description {
  font-family: "Garamond", serif;
}

.price {
  font-family: "IBM Plex Serif SemiBold", monospace;
  font-size: xx-large;
}

.shy-btn-Cart {
  outline: none;
  border: none;
  padding: 15px;
  margin-top: 10vh;
  margin-right: 19vw;
  border-radius: 10px;
  background-color: var(--bg-color);

  font-family: "Antonio", sans-serif;
  font-size: 1.2em;
}
</style>
