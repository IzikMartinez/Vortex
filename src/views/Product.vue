<template>
  <h1>hi</h1>
  <div class="bubbles">
    <Bubble class="bubble" title="Lorem Ipsum" description="Ipso facto" price="700"></Bubble>
    <Bubble class="bubble" title="Facere, Iusto" description="This is a fountain" price="1800"></Bubble>
    <Bubble class="bubble" title="Mario Facto" description="This costs 1000" price="200"></Bubble>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Bubble from "@/components/fragments/Bubble.vue";

export default {
  name: "Product",
  components: {
    Bubble
  }
};
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
