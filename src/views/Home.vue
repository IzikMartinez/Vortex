<template>
  <div class="body">
    <h1>Vortex Media</h1>
    <p>Welcome to Vortex, where inner peace is a click away</p>
  </div>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {}
});
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
)

.bubble {
  position: relative;
  margin-bottom: 15px;
}
</style>
