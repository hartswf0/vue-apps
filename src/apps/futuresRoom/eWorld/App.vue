<template>
  <div id="room" class="darkwall">
      <img alt="vrWorld5" src="../../../assets/images/futuresRoom/vrWorld5.png" />
      <SomeText v-bind:msg="mesg" />
      <!-- <SomeText msg="Networked Vue Component with Shared Button Count" /> -->
  </div>
</template>

<script setup>
import { inject } from 'vue'
import SomeText from '../../../components/NetworkedButtonBank.vue'
import "../../../assets/top.css"
import "../../../assets/room.css"

let params = inject("params")
var mesg = params && params.mesg ? params.mesg : "There are many futures. Which do you prefer?"
</script>

<style scoped>
</style>
