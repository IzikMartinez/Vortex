<template>
  <div class="body">
    <h1>Vortex Media</h1>
    <p>Welcome to Vortex, where inner peace is a click away</p>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

export default {
  name: "Home",
  components: {
  }
};
</script>

<style>
.body {
  padding-top: 15vh;
}
.bubbles {
  padding-top: 15vh;
  padding-bottom: 5vh;
  display: grid;
  grid-template-columns: auto auto auto;
}

.bubble {
  position: relative;
  margin-bottom: 15px;
}
</style>
