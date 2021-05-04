<template>
  <div class="body">
    <h1>Shipping Info</h1>
    <form @submit.prevent="onSubmit">
      <input
        class="userinfo"
        type="text"
        placeholder="Address"
        v-model="form.address"
      /><br />
      <input
        class="userinfo"
        type="text"
        placeholder="Address 2 (optional)"
        v-model="form.address2"
      /><br />
      <input
        class="userinfo"
        type="text"
        placeholder="City"
        v-model="form.city"
      /><br />
      <input
        class="userinfo"
        type="text"
        placeholder="State"
        v-model="form.state"
      /><br />
      <input
        class="userinfo"
        type="text"
        placeholder="Zip"
        v-model="form.zip"
      /><br />

      <div class="buttons">
        <button class="back" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { createCustomer } from "../firebase";

export default defineComponent({
  name: "Shipping.vue",
  props: {
    firstName: String,
    lastName: String,
    email: String
  },
  setup(props) {
    const form = reactive({
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: ""
    });

    const onSubmit = async () => {
      await createCustomer({ ...form });
      form.firstName = "";
      form.lastName = "";
      form.email = "";
      form.address = "";
      form.address2 = "";
      form.city = "";
      form.state = "";
      form.zip = "";
    };

    return { form, onSubmit };
  }
});
</script>

<style scoped>
.body {
  padding-top: 15vh;
}

h1 {
  font-family: "Merriweather", serif;
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
