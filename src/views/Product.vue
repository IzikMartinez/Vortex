<template>
  <h1>hi</h1>
    <div class="bubbles">
      <Bubble class="bubble" title="Lorem Ipsum"></Bubble>
      <Bubble class="bubble" title="Dolor Sit Amet"></Bubble>
      <Bubble class="bubble" title="Consectectur"></Bubble>
      <Bubble class="bubble" title="Adipisicing "></Bubble>
      <Bubble class="bubble" title="Facere, Iusto"></Bubble>
      <Bubble class="bubble" title="Mario Facto"></Bubble>
    </div>
</template>

<script lang="ts">
// @ is an alias to /src
import ProductBubble from "@/components/fragments/ProductBubble.vue";

export default {
  name: "Product",
  components: {
    ProductBubble
  }
}
</script>

<style>
  .bubbles {
    padding-top: 15vh;
    padding-bottom: 5vh;
    display: grid;
    grid-template-columns: auto auto auto;
  }

  .bubble {
    position: relative;
    margin-bottom: 15px;
  }
</style>