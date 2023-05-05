<template>
  <section class="home show-animate" id="home">
    <div class="home-content">
      <div class="d-flex justify-center align-center title">
        <v-icon class="ml-n3 mr-3 icon-out" color="white">mdi-close-octagon</v-icon>
        <div class="text-content">
          <v-icon class="mr-5 mb-5 w-100 d-flex d-sm-none" color="orange-darken-2">mdi-close-octagon</v-icon>
          <h1>Perseguição a</h1>
          <h1><span>Servidor Público</span></h1>
        </div>
      </div>
      <div class="text-animate">
        <text-typing />
      </div>
      <p>
       O objetivo deste site é disponiblizar os arquivos para download do
       processo administrativo disciplinar (PAD) 4783/2020 do qual fui alvo por
       denunciar ilegalidades e irregularidades da gestão do IPREV/MA em 2019.
      </p>
      <div class="botoes">
        <one-btn class="mr-5" :title="'Sobre'" :path="'about'"/>
        <one-btn :title="'Download'" :path="'download'" />
      </div>
      <div class="social-midia">
        <div class="social-midia-content">
          <socialmidia />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import oneBtn from '@/components/sectionsPerseg/oneBtn.vue';
import socialmidia from '@/components/sectionsPerseg/socialmidia.vue';
import textTyping from '@/components/sectionsPerseg/textTyping.vue';
</script>

<style scoped>
section{
  position: relative;
  min-height: 100vh;
  padding: 10rem 9% 2rem;
}
.home{
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 9%;
  background: url('/servidor.png') no-repeat;
  background-size: cover;
  background-position: center;
}
.home-content{
  position: relative;
  max-width: 60rem;
  color: #fff;
  min-height: 50rem;
}
.text-content{
  position: relative;
}
.title{
  opacity: 0;
  animation: slideRightt  1.2s ease forwards;
}
.mdi-close-octagon{
  position: relative;
  font-size: 10rem;
  transition: .3s;
  animation: zoomIn 1s ease forwards;
  animation-delay: 2.1s;
}
h1 {
  position: relative;
  display: inline-block;
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1.3;
}
.home-content span{
  position: relative;
  color: var(--main-color);
  font-size: 5.0rem;
}
.text-animate{
  position: relative;
  font-size: 2.6rem;
  margin-top: 0.6rem;
  opacity: 0;
  animation: slideRightt  1.5s ease forwards;
}
.home-content p {
  position: relative;
  font-size: 1.8rem;
  margin: 2rem 0 4rem ;
  opacity: 0;
  animation: slideRightt  1.8s ease forwards;
}
.botoes{
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: 0;
  animation: slideRightt  2.1s ease forwards;
}
.social-midia{
  width: 100%;
  position: absolute;
  bottom: -40px;
  opacity: 0;
  animation: slideRightt  2.4s ease forwards;
}
.social-midia-content{
  position: relative;
  display: flex;
  justify-content: left;
}
@media (max-width: 700px){
  .home{
    justify-content: center;
  }
  h1 {
    font-size: 4rem;
  }
  .mdi-close-octagon{
    font-size: 8rem;
  }
  .social-midia{
    bottom: -12rem;
  }
  .social-midia-content{
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 700px){
  .home-content .title .icon-out{
   display: none;
  }
  .home-content span{
    font-size: 3.5rem;
  }
  .botoes{
    justify-content: center;
  }
}
@media (max-width: 391px){
  .social-midia{
    bottom: -8rem;
  }
}
@media (max-width: 420px){
  .home{
    justify-content: center;
  }
  .sectionHome{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .text-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text-content h1{
    font-size: 3.5rem;
  }
  .mdi-close-octagon{
    font-size: 8rem;
  }
  .home-content p{
    text-align: center;
    text-shadow: 1px 1px 2px black;
    font-size: 1.5rem;
  }
}
@keyframes zoomIn {
  0%{
    opacity: 0;
    transform: scale(0);
  }
  100%{
    opacity: 1;
    transform: scale(1);
  }
}
</style>
