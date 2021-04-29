<template>
  <p>{{ passed }}</p>
  <p>{{ price }}</p>
</template>

<script>
export default {
  name: "Dataframe",
  props: {
    passed: String,
    price: Number
  }
};
</script>

<style scoped></style>
