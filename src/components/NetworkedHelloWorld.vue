<template>
  <h1 xr-layer class="fade">{{ msg }}</h1>
  <p>
    This is some text so that this information is not blank.<!--This is where information is displayed above the button in the Vue App-->
  </p>

  <button xr-layer @click="shared.increment">count is: {{ shared.state.count }}</button><!--this is where the button for networked button is named-->
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  msg: String
})

const shared = inject('shared')
</script>

<style scoped>
a {
  color: #b542b9;
}

button {
  width: 150px;
}

.fade {
  color: #9803a5;
  /* transition: color 1s; */
}

.fade:hover {
  color: #a78e06;
}
</style>
