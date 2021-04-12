<template>
  <h1>hi</h1>
    <div class="bubbles">
      <ProductBubble class="bubble" title="Blue Fountain"></ProductBubble>
      <ProductBubble class="bubble" title="Green Tower Fountain"></ProductBubble>
      <ProductBubble class="bubble" title="Green Sphere Fountain"></ProductBubble>
      <ProductBubble class="bubble" title="Adipisicing "></ProductBubble>
      <ProductBubble class="bubble" title="Facere, Iusto"></ProductBubble>
      <ProductBubble class="bubble" title="Mario Facto"></ProductBubble>
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