<template>
  <div class="body">
    <div class="heading">
      <h2>Enter contact information</h2>
    </div>
    <div class="inputs">
      <input
        v-model="firstName"
        class="userinfo"
        type="text"
        id="nameF"
        placeholder="First Name"
      /><br />
      <input
        v-model="lastName"
        class="userinfo"
        type="text"
        id="nameL"
        placeholder="Last Name"
      /><br />
      <input
        v-model="email"
        class="userinfo"
        type="text"
        id="email"
        placeholder="Email"
      /><br />
      <input
        class="userinfo"
        type="text"
        id="email_con"
        placeholder="Confirm Email"
      /><br />
    </div>
  </div>

  <div class="buttons">
    <button class="back" @click="$router.push('products')">Back</button>
    <button class="back" @click="$router.push('payment')">Next</button>
  </div>
</template>

<script>
import {defineComponent, reactive, ref} from "vue";
import axios from "axios";

export default defineComponent({
  name: "Order",
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");

    function postCustomer() {
      axios
        .post("http://localhost:8000/api/customer/store", {
          Customer: {
            fname: firstName.value,
            lname: lastName.value,
            email: email.value
          }
        })
        .then(response => {
          if (response.status === 201) {
            firstName.value = "";
          }
        })
        .catch(error => console.log(error.message));
    }

    return {
      firstName,
      lastName,
      email,
      postCustomer
    };
  }
});
</script>

<style scoped>

.body {
  padding-top: 12vh;
}

h2 {
  font-family: "Merriweather", Serif;
  font-variant: small-caps;
  font-size: 1.5em;
}

.inputs {
  padding-top: 5vh;
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

.buttons {
  margin: auto;
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
