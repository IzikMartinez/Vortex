<template>
  <div class="product-form">
    <h3>Edit Product</h3>
    <form action="">
      <div class="product-input">
        <label>Name</label>
        <input v-model="form.name" class="userinfo" />
      </div>

      <div class="product-input">
        <label>Comment</label>
        <input v-model="form.comment" class="userinfo" />
      </div>
    </form>
  </div>
</template>

<script>
import {computed, onMounted, reactive} from "vue";
import {getReview, updateReview} from "../firebase";
import {useRoute, useRouter} from "vue-router";

export default {
  name: "EditReview",
  setup() {
    const form = reactive({ name: "", comment: ""})

    const router = useRouter();
    const route = useRoute();
    const reviewId = computed(() => route.params.id);
    onMounted(async () => {
      const review = await getReview(reviewId.value)
      form.name = review.name;
      form.comment = review.comment;
    })

    const update = async () => {
      await updateReview(reviewId.value, { ...form });
      await router.push("/admin");
      form.name = "";
      form.email = "";
    };

    return {
      form,
      update
    };
  }
}
</script>

<style scoped>

</style>