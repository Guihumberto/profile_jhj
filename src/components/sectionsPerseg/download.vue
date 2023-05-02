<template>
  <section class="dowloadSection" id="download">

    <h2 class="heading">
      Download <span>do Processo</span>
      <span class="animate scroll" style="--i:1"></span>
    </h2>
    <div class="dowloadContent">
     <div class="text-center">
      <div class="border pa-5 mb-5" cols="12">Processo Administrativo Disciplinar Nº 4783/2019</div>
      <div class="processos">
        <h3>Volume I</h3>
        <div><one-btn :title="'Download'" /></div>
      </div>
      <div class="processos">
        <h3>Volume II</h3>
        <div><one-btn :title="'Download'"  /></div>
      </div>
     </div>
     <span class="animate scroll" style="--i:2;"></span>
    </div>
  </section>
</template>

<script setup>
import oneBtn from '@/components/sectionsPerseg/oneBtn.vue';
</script>

<style scoped>
section{
  min-height: 100vh;
  background: var(--bg-color);
  color: #fff;
}
.dowloadSection{
  position: relative;
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
  font-size: 2rem;
}
.heading span{
color: var(--main-color);
}
.processos{
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 12px 0px;
}
.dowloadSection.show-animate .animate.scroll {
  animation-delay: calc(.3s * var(--i));
  width: 0;
}
@media (max-width: 686px){
  .heading {
    font-size: 3rem;
  }
  .dowloadContent{
    font-size: 1.5rem;
  }
}

</style>
