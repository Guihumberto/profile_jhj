<template>
  <section class="sectionAbout text-center text-white" id="about">
    <h1 class="heading">Sobre <span class="text-blue">Mim</span>
      <span class="animate scroll" style="--i:1;"></span>
    </h1>

    <div class="image-circle">
      <image-spin-circle />
      <span class="animate" style="--i:2;"></span>
    </div>

    <div class="about-content">
      <h3>Lorem ipsum <span class="animate" style="--i:3;"></span></h3>
      <p>Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Velit suscipit reiciendis delectus rem provident molestiae repellendus
        commodi necessitatibus fugiat quisquam quia, architecto dolorem aspernatur! Ducimus hic
        repudiandae laudantium minus necessitatibus.
        Lorem ipsum dolor sit, amet consectetur
        repudiandae laudantium minus necessitatibus.
        <span class="animate" style="--i:4;"></span>
      </p>
      <div class="btn-about">
        <one-btn />
        <span class="animate" style="--i:5;"></span>
      </div>
    </div>

  </section>
</template>

<script setup>
import oneBtn from '../oneBtn.vue'
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
.sectionAbout .animate {
  animation: showRight 1s ease forwards;
  animation-delay: calc(.3s * var(--i));
}

</style>
