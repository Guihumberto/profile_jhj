<template>
  <section class="dowloadSection" id="downloads">
    <btn-up />
    <h2 class="heading">
      Download
      <span class="animate scroll" style="--i:1"></span>
    </h2>
    <div class="dowloadContent">
      <text-effect />
      <span class="animate scroll" style="--i:2"></span>
    </div>
  </section>
</template>

<script setup>
import textEffect from '../textEffect.vue'
import btnUp from '@/components/btns/btnUp.vue'
</script>

<style scoped>
section{
  min-height: 100vh;
  background: var(--second-bg-color);
  color: #fff;
}
.dowloadSection{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading{
  position: relative;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 3rem;
}
.dowloadContent{
  position: relative;
}
.dowloadSection .animate{
  animation: showRight 1s ease forwards;
  animation-delay: calc(.3s * var(--i));
}

.dowloadSection.show-animate .animate.scroll {
  animation-delay: calc(.3s * var(--i));
  width: 0;
}


</style>
