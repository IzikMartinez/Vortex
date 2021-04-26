<template>
  <div class="body">
    <input class="userinfo" type="text" placeholder="Address" /><br />
    <input class="userinfo" type="text" placeholder="Address 2 (optional)" /><br />
    <input class="userinfo" type="text" placeholder="City" /><br />
    <input class="userinfo" type="text" placeholder="State" /><br />
    <input class="userinfo" type="text" placeholder="Zip" /><br />
  </div>
</template>

<script>
export default {
  name: "Payment.vue"
}
</script>

<style scoped>
.body {
  padding-top: 15vh;
}
</style>