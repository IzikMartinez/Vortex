<template>
  <p class="rvw-text">{{ reviewText }}</p>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "Review",
  props: {
    reviewText: String,
    reviewer: String
  },
  setup() {
    function removeReview(index) {
      axios
        .delete("http://localhost:8000/review/" + index)
        .catch(err => console.log(err.message));
    }
    return {
      removeReview
    };
  }
});
</script>

<style scoped lang="scss">
.rvw-text {
  font-size: large;
  font-family: "Merriweather", Serif;
}
</style>
