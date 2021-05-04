<template>
  <div class="body">
    <h1>Shipping Info</h1>
    <form @submit.prevent="">
      <input
        v-model="form.CardNum"
        class="userinfo"
        type="text"
        placeholder="Card Number"
        required
      /><br />
      <input
        v-model="form.CardHolder"
        class="userinfo"
        type="text"
        placeholder="Cardholder's Name"
        required
      />
      <input
        v-model="form.ExpDate"
        class="userinfo"
        type="text"
        placeholder="Expiration Date"
        required
      /><br />
      <input
        v-model="form.SecurityCode"
        class="userinfo"
        type="text"
        placeholder="Security Code"
        required
      /><br />
    </form>
    <div class="buttons">
      <button class="btn-submit" type="submit" @click="$router.push('products')">Back</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Payment.vue",
  setup() {
    const form = reactive({
      CardNum: Number,
      CardHolder: String,
      ExpDate: String,
      SecurityCode: String
    });

    return {
      form
    };
  }
});
</script>

<style scoped>
.body {
  padding-top: 15vh;
}

h1 {
  font-family: "Merriweather", Serif;
  font-variant: small-caps;
  font-size: 1.7em;
}

.userinfo {
  margin-bottom: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  appearance: none;
  outline: none;
  border-radius: 12px 0 12px 0;
  background-color: rgba(255, 255, 255, 0.5);
  width: 20vw;
  /* FONT */
  font-size: 1.5em;
}

.userinfo:focus {
  background-color: white;
  border-radius: 0px 12px 0px 12px;
}

.back {
  border: none;
  outline: none;
  text-decoration: none;

  width: 10vw;
  height: 5vh;
  margin-left: 5px;
  margin-right: 5px;
  background-color: var(--navbar-color);

  border-radius: 10px;

  color: white;
  font-family: "Coda Caption", san-serif;
  font-variant: all-small-caps;
  font-weight: bold;
  text-align: center;
  font-size: 1.7em;
}

.back:hover {
  background-color: #b1129b;
}
</style>
