<template>
  <section class="sectionAbout text-center text-white" id="about">
    <h1 class="heading">Sobre <span>Mim</span>
      <span class="animate scroll" style="--i:1;"></span>
    </h1>

    <div class="image-circle">
      <image-spin-circle />
      <span class="animate scroll" style="--i:2;"></span>
    </div>

    <div class="about-content">
      <h3>Lorem ipsum <span class="animate scroll" style="--i:3;"></span></h3>
      <p>Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Velit suscipit reiciendis delectus rem provident molestiae repellendus

        <span class="animate scroll" style="--i:4;"></span>
      </p>
      <div class="btn-about">
        <one-btn  :title="'Download'" :path="'download'"  />
        <span class="animate scroll" style="--i:5;"></span>
      </div>
    </div>

  </section>
</template>

<script setup>
import oneBtn from '@/components/sectionsPerseg/oneBtn.vue';
import ImageSpinCircle from './imageSpinCircle.vue'

</script>

<style scoped>
section{
  min-height: 100vh;
  padding: 1rem 9% 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sectionAbout{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: var(--second-bg-color);
  padding-bottom: 6rem;
}
.sectionAbout h1 {
  position: relative;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 3rem;
}
.heading span{
  color: var(--main-color);
}
.image-circle{
  position: relative;
}
.about-content h3{
  position: relative;
  font-size: 2.6rem;
}
.about-content p{
  position: relative;
  font-size: 1.6rem;
  margin: 2rem  0 3rem;
}
.btn-about{
  position: relative;
}
.sectionAbout.show-animate .animate.scroll {
  transition-delay: calc(.3s * var(--i));
  width: 0;
}
@media (max-width: 686px){
  .sectionAbout h1 {
    margin-top: 2rem;
    font-size: 4rem;
  }
}

</style>
