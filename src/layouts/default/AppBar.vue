<template>
    <div class="d-flex justify-center align-center headerDiv">
      <a @click="scroll('home')" class="mr-5 logo">JHJ.</a>
      <nav class="d-none d-sm-flex">
        <a @click="scroll('home')" class="active">Início</a>
        <a @click="scroll('about')">Sobre</a>
        <a @click="scroll('services')">Serviços</a>
        <a @click="scroll('downloads')">Downloads</a>
        <a @click="scroll('contact')">Contato</a>
      </nav>
      <v-spacer class="d-flex d-sm-none"></v-spacer>
      <v-btn class="d-flex d-sm-none" variant="flat" color="transparent"><v-icon size="3.5rem" color="white">mdi-menu</v-icon></v-btn>
    </div>
</template>

<script>
  export default{
    methods:{
      scroll(refName){
        const element = document.getElementById(refName)
        element.scrollIntoView({behavior: "smooth"})
      }
    }
  }
</script>

<style scoped>
.headerDiv{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: transparent;
  z-index: 100;
}
.logo{
  position: relative;
  font-size: 2.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: .5s;
}
.logo::before{
  content:'';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #081b29;
  animation: showRight 1s ease forwards;
  animation-delay: .4s;
}

@keyframes showRight {
  100%{
    width: 0;
  }
}
nav a{
  font-size: 1.7rem;
  color: #fff;
  font-weight: 500;
  margin-left: 3.5rem;
  text-decoration: none;
  transition: .5s;
}

nav a:hover,
.logo:hover {
  color: #0ef;
  text-shadow: 0 5px 20px #0ef;
}


</style>
