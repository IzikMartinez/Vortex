<template>
  <div class="app">
    <div class="nav">
      <div class="logo-div">
        <a href=""><img class="nav-logo" src="./assets/StoreLogo.png" alt="Store Logo" /></a>
      </div>
      <div class="link-div">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/instructions">Instructions</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/cart">View Cart ({{ getCartSize }})</router-link>
      </div>
    </div>
    <router-view />
    <p v-if="getCartStatus">
      <Cart />
    </p>
  </div>
</template>

<script>
import Cart from "@/views/Cart.vue";
import { mapGetters, mapState } from "vuex";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Cart
  },
  setup() {
    function cartItems() {
      return mapState(["cartItems"]);
    }
  },
  computed: {
    ...mapGetters(["getCartStatus", "getCartSize"])
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Antonio:wght@300&family=Coda+Caption:wght@800&family=Merriweather:ital,wght@0,400;0,700;1,300&display=swap");

:root {
  /* --bg-color: #f1e2cd; */
  --bg-color: #ffeee6;
  --navbar-color: #3c0833;
  --navbar-contrast: #6fccff;
  --bubble-color: #fdcfb0;
  --light-text: #fff4eb;
  --dark-text: #484848;
  --red: #ba0000;
  --height: 20vh;
  --title-font: Garamond, serif;
  --body-font: Montserrat, sans-serif;
}

.app {
  background-color: var(--bg-color);
  /*background-image: linear-gradient(*/
  /*  to bottom,*/
  /*  rgba(0, 0, 0, 0.0),*/
  /*  rgba(0, 0, 0, 1.0)*/
  /*);*/
  padding-bottom: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding-top: 3vh;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--navbar-color);
  height: 15vh;
  position: absolute;
  width: 100%;
}

.nav a {
  top: 0;
  left: 0;
  right: 0;
  font-family: "Antonio", sans-serif;
  font-weight: bold;
  font-size: 1.5em;
  text-decoration: none;
  color: var(--light-text);
  margin-right: 2vw;
  background-color: var(--navbar-color);
}

.nav a.router-link-exact-active {
  //background-color: var(--navbar-contrast);
  color: var(--navbar-contrast);
  border-radius: 10px;
}

.nav-logo {
  position: center;
  padding-bottom: 2rem;
  width: 8rem;
  height: 5rem;
}
</style>
