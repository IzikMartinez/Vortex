<template>
  <div class="body">
    <input type="text" id="nameF" placeholder="First Name" />
    <input type="text" id="nameL" placeholder="Last Name" />
    <input type="text" id="email" placeholder="Email" />
    <input type="text" id="email_con" placeholder="Confirm Email" />
  </div>
  
  <button class="back" @click="$router.push('products')">
    Back to shopping
  </button>
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
</style>
