<template>
  <v-app>
    <app-bar />
    <default-view />
  <footerBar />
  </v-app>
</template>

<script setup>
  import AppBar from './AppBar.vue';
  import DefaultView from './View.vue'
  import footerBar from '@/layouts/default/Footer.vue'

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
  --bg-color:#081b29;
  --second-bg-color: #112e42;
  --text-color: #ededed;
  --main-color: #00abf0;
}
html{
  font-size: 62.5%;
  overflow-x: hidden;
}
body{
  background: var(--bg-color);
  color: var(--text-color);
}

/* BREAKPOINTS */
@media(max-width: 1200px){
  html {
    font-size: 55%;
  }
}
@media(max-width: 991px){
  .headerDiv {
    padding: 2rem 4%;
  }
  section{
    padding: 2rem 4%;
  }
  .home{
    padding: 2rem 4%;
  }
  .footer{
    padding: 2rem 4%;
  }
}
@media (max-width: 768px){
  .headerDiv{
    background: blue;
  }
  .navbar{
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem 4%;
    background: blue;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
  }
}
@media(max-width: 520px){
  html {
    font-size: 50%;
  }
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
.show-animate{

}
.scroll{
  transition: 1s ease;
  transition-delay: calc(.3s / var(--i));
}

/* body{
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
} */
</style>

