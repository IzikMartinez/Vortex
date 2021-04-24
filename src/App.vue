<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/instructions">Instructions</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/cart">View Cart</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
:root {
  --bg-color: #f1e2cd;
  --navbar-color: #ab1097;
  --navbar-contrast: #1097ab;
  --bubble-color: #fdcfb0;
  --light-text: #ffebc8;
  --dark-text: #484848;
  --title-font: Garamond, serif;
  --body-font: Montserrat, sans-serif;
}

* {
  background-color: var(--bg-color);
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
  height: 7vh;
  position: absolute;
  width: 100%;
}

.nav a {
  top: 0;
  left: 0;
  right: 0;
  font-weight: bold;
  font-size: 1.3em;
  text-decoration: none;
  margin-right: 2vw;
  background-color: var(--navbar-color);
  color: var(--light-text);
}

.nav a.router-link-exact-active {
  background-color: var(--navbar-contrast);
  color: var(--light-text);
  padding: 1.1em;
  border-radius: 10px;
}
</style>
