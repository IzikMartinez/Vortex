<template>
  <div class="product-form">
    <h3>Edit Product</h3>
    <form action="">
      <div class="product-input">
        <label>Name</label>
        <input v-model="form.name" class="userinfo"/>
      </div>

      <div class="product-input">
        <label>Description</label>
        <input v-model="form.description" class="userinfo"/>
      </div>

      <div class="product-input">
        <label>Price</label>
        <input v-model="form.price" type="number" class="userinfo"/>
      </div>
    </form>
  </div>
</template>

<script>
import {computed, reactive} from "vue";
import {updateProduct} from "../firebase";
import {useRoute, useRouter} from "vue-router";

export default {
  name: "EditProduct",
  setup() {
    const form = reactive({ description: "", name: "", price: Number})

    const router = useRouter();
    const route = useRoute();
    const productId = computed(() => route.params.id);

    const update = async () => {
      await updateProduct(productId.value, {...form})
    }

    return {
      form,
      update
    }
  }
}
</script>

<style scoped>

</style>