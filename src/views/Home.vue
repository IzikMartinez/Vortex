<template>
  <Slider></Slider>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Slider from "@/components/Slider.vue";

@Options({
  name: "Home",
  components: {
    HelloWorld,
    Slider
  }
})

export default class Home extends Vue{}
</script>
