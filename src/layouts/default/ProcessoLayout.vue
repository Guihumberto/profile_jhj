<template>
  <v-app>
    <app-bar />
    <default-view />
  </v-app>
</template>

<script setup>
  import AppBar from './ProcessoAppBar.vue';
  import DefaultView from './View.vue'

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: none;
  outline: none;
  scroll-behavior: smooth;
  font-family: 'Poppins', sans-serif;
}
:root{
  --bg-color:#000;
  --second-bg-color: #444444;
  --text-color: #ededed;
  --main-color: #FA6D0F;
}
html{
  font-size: 62.5%;
  overflow-x: hidden;
}
body{
  background: var(--bg-color);
  color: var(--text-color);
}
section:nth-child(2) .animate.scroll{
  background: var(--second-bg-color);
}
.animate{
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-color);
  z-index: 98;
}
@keyframes showRight {
  100%{
    width: 0;
  }
}
.animate.scroll{
  transition: 1s ease;
  transition-delay: calc(.3s / var(--i));
  animation: none;
}
</style>
