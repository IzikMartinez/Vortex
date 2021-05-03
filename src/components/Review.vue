<template>
  <div class="review-body">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label><br />
        <input class="form-control" type="text" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label>Review</label><br />
        <textarea class="form-comment" v-model="form.comment" required />
      </div>

      <button class="btn-submit" type="submit">
        Submit Review
      </button>
    </form>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { createReview } from "../firebase";

export default defineComponent({
  name: "Review",
  props: {
    productId: Number
  },
  setup() {
    const form = reactive({ name: "", comment: "" });

    const onSubmit = async () => {
      await createReview({ ...form });
      form.name = "";
      form.comment = "";
    };

    return { form, onSubmit };
  }
});
</script>

<style scoped>

.review-body {
  padding-top: 8rem;
}

.form-control {
  padding: 0.5rem 0rem 0.4rem 0.5rem;
  color: white;
  font-family: "Merriweather", Serif;
  outline: none;
  border: none;
  background-color: #513a4d;
  border-radius: 10px;
  text-align: left;
}
.form-control:focus {
  background-color: #6700e9;
}
.form-comment {
  padding: 0.5rem 0rem 4rem 0.5rem;
  color: white;
  font-family: "Merriweather", Serif;
  outline: none;
  border: none;
  background-color: #513a4d;
  border-radius: 10px;
  text-align: left;
  word-wrap: break-word;
}

.form-comment:focus {
  background-color: #6700e9;
}
</style>
