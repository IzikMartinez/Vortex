<template>
  <div class="BubbleBody">
    <div class="column">
      <img class="bigImage" src="../assets/enclosed_full.jpg" alt="enclosed sphere" />
      <div class="price">$1400</div>
    </div>
    <div class="column">
      <h1 class="heading">Enclosed Sphere Model</h1>
      <p class="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p class="ButtonHeading">SELECT LED</p>
      <div class="buttons">
        <button class="shyster">Red</button>
        <button class="shyster">Blue</button>
        <button class="shyster">Green</button>
        <button class="butn">Purple</button>
        <button class="shyster">RGB</button>
      </div>

      <p class="ButtonHeading">SELECT SIZE</p>
      <div class="buttons">
        <button class="shyster">Small</button>
        <button class="butn">Medium</button>
        <button class="shyster">Large</button>
      </div>

    </div>
    <button class="shyster">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "BigBubble",
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>
template {
}
.BubbleBody {
  background-color: var(--navbar-color);
  color: white;
  padding-top: 12vh;
  padding-bottom: 60vh;
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

.butn {
  outline: none;
  border: none;
  padding: 15px;
  margin-left: 20px;
  border-radius: 10px;
  background-color: #aa20ff;
  color: white;
  font-family: "Antonio", sans-serif;
  font-size: 1.2em;
}

.shyster {
  outline: none;
  border: none;
  padding: 15px;
  margin-left: 20px;
  border-radius: 10px;
  background-color: var(--bg-color);

  font-family: "Antonio", sans-serif;
  font-size: 1.2em;
}

.shyster:hover {
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
</style>