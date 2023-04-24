<template>
  <v-app class="bg-transparent">
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultView from './View2.vue'
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  background: linear-gradient(45deg, #ff0000, #fffb00, #5eff00, #ff5100, #00f7ff, #fffb00e2);
  background-size: 900% 200%;
  height: 90vh;
  animation: animate 20s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

@keyframes animate {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>

