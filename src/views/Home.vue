<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Play with me (line 4 of Home.vue)"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

@Options({
  name: 'Home',
  components: {
    HelloWorld
  }
})

export default class Home extends Vue{}
</script>
