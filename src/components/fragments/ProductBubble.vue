<template>
  <div class="BubbleBody">
    <h3 class="titleClass">{{ title }}</h3>
    <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, iusto?</p>
    <img
      src="@/assets/placeholder.png"
      alt="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "ProductBubble",
  props: {
    title: String
  },
  setup() {
    console.log("setup complete");
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
