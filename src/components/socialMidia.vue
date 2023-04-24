<template>
  <div class="social-midia">
    <div class="d-flex justify-left mt-15 pt-15 ">
      <v-btn color="#00abf0" variant="outlined" icon="mdi-whatsapp" />
      <v-btn color="#00abf0" variant="outlined" class="mx-5" icon="mdi-instagram"/>
      <v-btn color="#00abf0" variant="outlined" icon="mdi-youtube"/>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style  scoped>
.social-midia{
  position: relative;
}
.social-midia::before{
  content:'';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #081b29;
  animation: showRight 1s ease forwards;
  animation-delay: 2.5s;
  z-index: 2;
}

@keyframes showRight {
  100%{
    width: 0;
  }
}


</style>
