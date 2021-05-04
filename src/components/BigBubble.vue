<template>
  <div class="BubbleBody">
    <div class="column">
      <img
        class="bigImage"
        :src="require('../assets/' + imagePath)"
        :alt="imagePath"
      /><br />
      <div class="price">${{ price }}</div>
      <button class="shy-btn-Cart" @click="addBtn">Add to cart</button>
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
    <div class="reviews-body">
      <h3 class="review-heading">Reviews</h3>
      <template v-for="review in reviews" :key="review.index">
        <p class="review-name">Name: {{ review.name }}</p>
        <p class="review-comment">{{ review.comment }}</p>
      </template>

      <button class="btn-rvw" @click="rvwFlag = !rvwFlag">
        Leave a review
      </button>
      <template v-if="rvwFlag">
        <Review></Review>
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { defineComponent, ref } from "vue";
import Review from "./Review";
import { useLoadReviews } from "../firebase";

export default defineComponent({
  name: "BigBubble",
  components: {
    Review
  },
  props: {
    title: String,
    bigDesc: String,
    price: String,
    imagePath: String
  },
  setup() {
    const reviews = useLoadReviews();
    const rvwFlag = ref(false);

    return { reviews, rvwFlag };
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
template {
}
.BubbleBody {
  background-color: var(--navbar-color);
  color: white;
  padding-top: 20vh;
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

.shy-btn-Cart {
  outline: none;
  border: none;
  padding: 15px;
  border-radius: 10px;
  background-color: var(--bg-color);

  font-family: "Antonio", sans-serif;
  font-size: 1.2em;
}

.shy-btn-Cart:active {
  background-color: #aa20ff;
}

.btn-rvw {
  outline: none;
  border: none;
  padding: 15px;
  margin-top: 2rem;
  border-radius: 10px;
  background-color: #4d03b5;
  color: white;
  font-family: "Coda Caption", san-serif;
}

.reviews-body {
  width: 100%;
  padding-top: 40rem;
}

.review-heading {
  color: white;
  font-family: "Merriweather", Serif;
  font-size: 1.8em;
}

.review-name {
  margin: auto;
  color: white;
  font-family: "Antonio", sans-serif;
  font-variant: all-small-caps;
  border: thick white;
}

.review-comment {
  margin: auto;
  color: white;
  font-family: "Antonio", sans-serif;
  font-variant: all-small-caps;
  font-size: 1.4em;
  width: 70%;
  background-color: #7b00ca;
}
</style>
