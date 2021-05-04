<template>
  <div class="body">
    <h1>Welcome to Vortex, where inner peace is a click away</h1>
    <p>
      We offer unique colorful fountains designed for helping individuals
      maintain relaxation.
      <br />
    </p>
    <video src="../assets/IntroVideo.mp4" width="900" height="500" autoplay/>
    <p>
      Are you in the market for a well made, and colorful fountain? One designed to help people like you achieve and maintain relaxation?  Shop our store.
      <br />
      <br />
      We have the perfect fountains to help add ambiance, warmth, and relaxation
      to your indoor living area!
    </p>
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
  padding-top: var(--height);
}

h1 {
  font-family: "Merriweather", serif;
}
p {
  font-family: "Merriweather", serif;
  font-size: large;
}

</style>
