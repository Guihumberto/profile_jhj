<template>
  <section class="dowloadSection" id="downloads">

    <h2 class="heading">
      Download
      <span class="animate" style="--i:1"></span>
    </h2>
    <div class="dowloadContent">
      <text-effect />
      <span class="animate" style="--i:2"></span>
    </div>
  </section>
</template>

<script>
import textEffect from '../textEffect.vue'
  export default {
  components: { textEffect },

  }
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


</style>
