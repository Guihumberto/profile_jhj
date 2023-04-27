<template>
  <div>
    <home />
    <about />
    <service />
    <download />
    <contact />
  </div>
</template>

<script setup>
  import home from '@/components/sections/homeSection.vue'
  import about from '@/components/sections/aboutSection.vue'
  import service from '@/components/sections/servicesSection.vue'
  import download from '@/components/sections/dowloadsSection.vue'
  import contact from '@/components/sections/contactSection.vue'


  // insere uma class de css no componente html, no exemplo insere a classe stick no elemento html header
  // window.onscroll = () => {
  //   let header = document.querySelector('header')
  //   header.classList.toggle('stick', window.scrollY > 100)
  // }


</script>

<style scoped>

</style>>

