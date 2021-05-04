<template>
  <div class="bubbles" v-for="product in products" :key="product.index">
    <Bubble
      class="bubble"
      :title="product.name"
      :price="product.price"
      :prodDesc="product.description"
      :path="product.thumbnail_path"
      :passPath="product.image_path"
    />
  </div>
</template>


<script>
// @ is an alias to /src
import { defineComponent } from "vue";
import { useLoadProducts } from "../firebase";
import Bubble from "@/components/fragments/Bubble.vue";

export default defineComponent({
  name: "Product",
  components: {
    Bubble
  },
  setup() {
    const products = useLoadProducts();
    return {
      products
    };
  }
});
</script>

<style>
.bubbles {
  display: inline-grid;
  padding-top: 18vh;
  padding-bottom: 5vh;
  margin: 15px;
}

.bubble {
}
</style>
