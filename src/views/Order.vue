<template>
  <div class="body">
    <input class="userinfo" type="text" id="nameF" placeholder="First Name" /><br />
    <input class="userinfo" type="text" id="nameL" placeholder="Last Name" /><br />
    <input class="userinfo" type="text" id="email" placeholder="Email" /><br />
    <input class="userinfo" type="text" id="email_con" placeholder="Confirm Email" /><br />
  </div>

  <button class="back" @click="$router.push('products')">
    Back to shopping
  </button>
  <button class="back" @click="$router.push('payment')">Continue</button>
</template>

<script>
export default {
  name: "Order"
};
</script>

<style scoped>

.body {
  padding-top: 15vh;
}

.userinfo {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border-radius: 3px 0 3px 0;
}
</style>
