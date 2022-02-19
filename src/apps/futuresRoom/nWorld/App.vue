<template>
  <div id="room" class="darkwall">
      <img alt="Vue logo" src="../../../assets/images/futuresRoom/vrWorld6.png" width="600" />
      <SomeText v-bind:msg="mesg" />
      <!-- <SomeText msg="Networked Vue Component with Shared Button Count" /> -->
  </div>
</template>

<script setup>
import { inject } from 'vue'
import SomeText from '../../../components/NetworkedButtonBank.vue'//text from ButtonBank Vue Component
import "../../../assets/top.css"
import "../../../assets/room.css"

let params = inject("params")
var mesg = params && params.mesg ? params.mesg : "What do you think of this reality?"
</script>

<style scoped>
</style>
