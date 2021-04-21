<template>
  <p v-for="item in">
    <Dataframe></Dataframe>
    <button>Remove item</button>
  </p>
</template>

<script lang="ts">
import { computed, reactive } from "vue";
import Dataframe from "@/components/fragments/Dataframe.vue";

export default {
  name: "Cart",
  components: { Dataframe },
  setup() {
    const cartList = computed(() => {
    });
  }
}
</script>

<style scoped>

</style>