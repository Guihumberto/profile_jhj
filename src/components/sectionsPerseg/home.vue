<template>
  <section class="home show-animate" id="home">
    <div class="home-content">
      <div class="d-flex justify-center align-center title">
        <v-icon class="ml-n3 mr-3 icon-out" color="white">mdi-close-octagon</v-icon>
        <div class="text-content">
          <v-icon class="mr-5 mb-5 w-100 d-flex d-sm-none" size="10rem" color="orange-darken-2">mdi-close-octagon</v-icon>
          <h1>Perserguição a</h1>
          <h1><span>Servidor Público</span></h1>
          <span class="animate scroll" style="--i:1;"></span>
        </div>
      </div>
      <div class="text-animate">
        <text-typing />
        <span class="animate scroll" style="--i:2;"></span>
      </div>
      <p>
       O objetivo dessa página é disponiblizar arquivo para download o
       processo administrativo disciplinar 4783/2020 (PAD) do qual foi alvo por
       denunciar irregularidades da gestão do IPREV/MA em 2018.
      </p>
      <div class="botoes">
        <one-btn class="mr-5" :title="'Sobre'" :path="'about'"/>
        <one-btn :title="'Download'" :path="'download'" />
        <span class="animate scroll" style="--i:3;"></span>
      </div>
      <div class="social-midia">
        <div class="social-midia-content">
          <socialmidia />
          <span class="animate scroll" style="--i:4;"></span>
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
.mdi-close-octagon{
  position: relative;
  font-size: 12rem;
  transition: .3s;
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
}
.home-content p {
  position: relative;
  font-size: 1.6rem;
  margin: 2rem 0 4rem ;
}
.botoes{
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
}
.social-midia{
  width: 100%;
  position: absolute;
  bottom: 0;
}
.social-midia-content{
  position: relative;
  display: flex;
  justify-content: left;
}
.home .animate,
.text-animate .animate,
.home.show-animate .animate.scroll{
  animation: showRight 1s ease forwards;
  animation-delay: calc(.3s * var(--i));
}
@media (max-width: 700px){
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
@media (max-width: 390px){
  .social-midia{
    bottom: -10rem;
  }
}
</style>
