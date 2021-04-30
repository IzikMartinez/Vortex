<template>
  <div class="body">
    <h1>Shipping Info</h1>
    <input class="userinfo" type="text" placeholder="Address" /><br />
    <input
      class="userinfo"
      type="text"
      placeholder="Address 2 (optional)"
    /><br />
    <input class="userinfo" type="text" placeholder="City" /><br />
    <input class="userinfo" type="text" placeholder="State" /><br />
    <input class="userinfo" type="text" placeholder="Zip" /><br />

    <div class="buttons">
      <button class="back" @click="$router.push('products')">Back</button>
      <button class="back" @click="postCustomer">Next</button>
    </div>
  </div>
  <p>{{ contactInfo }}</p>
</template>

<script>
import axios from "axios";
import {mapMutations} from "vuex";

export default {
  name: "Shipping.vue",
  computed: {
    contactInfo() {
      return this.getContact();
    }
  },
  methods: {
    ...mapMutations(["getContact"]),
    postCustomer() {
      axios
        .post("http://localhost:8000/api/customer/store", {
          Customer: {
            fname: this.contactInfo.firstName,
            lname: this.contactInfo.lastName,
            email: this.contactInfo.email
          }
        })
        .then(response => {
          if (response.status === 201) {
            console.log(response);
          }
        })
        .catch(error => console.log(error.message));
    }
  }
};
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
