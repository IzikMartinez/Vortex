<template>
  <h1>hi</h1>
  <div class="bubbles" v-for="product in state.products" :key="product.index">
    <Bubble
      class="bubble"
      :title="product.name"
      :price="product.price"
      :path="product.image_path"
    />
  </div>
</template>


<script>
// @ is an alias to /src
import axios from "axios";
import {defineComponent, onBeforeMount, reactive, defineAsyncComponent} from "vue";
import Bubble from "@/components/fragments/Bubble.vue";


export default defineComponent({
  name: "Product",
  components: {
    Bubble
  },
  setup() {
    const state = reactive({
      products: []
    });

    function getProducts() {
      axios.get("http://localhost:8000/api/products").then(res => {
        state.products = res.data;
      });
    }

    onBeforeMount(() => {
      getProducts();
    });

    return {
      state
    };
  }
});
</script>

<style>
.bubbles {
  display: inline-grid;
  padding-top: 12vh;
  padding-bottom: 5vh;
  margin: 15px;
}

.bubble {
}
</style>
