<template>
  <div>
    <home />
    <about />
    <service />
    <download />
    <contact />
    <footer-app />
  </div>
</template>

<script setup>
  import home from '@/components/sections/homeSection.vue'
  import about from '@/components/sections/aboutSection.vue'
  import service from '@/components/sections/servicesSection.vue'
  import download from '@/components/sections/dowloadsSection.vue'
  import contact from '@/components/sections/contactSection.vue'
  import footerApp from '@/components/sections/Footer.vue'


  // insere uma class de css no componente html, no exemplo insere a classe stick no elemento html header
  // window.onscroll = () => {
  //   // let header = document.querySelectorAll('div')
  //   // header.classList.toggle('stick', window.scrollY > 100)
  //   console.log('seletor:');
  // }


</script>

<style>


</style>

