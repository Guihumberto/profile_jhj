<template>
  <div class="sectionHome" id="about">
    <h1 class="text-white">Sobre <span class="text-blue">Mim</span> </h1>
    <div class="my-16 text-center text-white">
      <v-avatar variant="outlined" color="blue" size="300"><v-icon size="300" color="white">mdi-account</v-icon></v-avatar>
      <h2 class="my-10">Lorem ipsum</h2>
      <p class="px-16">Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Velit suscipit reiciendis delectus rem provident molestiae repellendus
        commodi necessitatibus fugiat quisquam quia, architecto dolorem aspernatur! Ducimus hic
        repudiandae laudantium minus necessitatibus.
        Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Velit suscipit reiciendis delectus rem provident molestiae repellendus
        commodi necessitatibus fugiat quisquam quia, architecto dolorem aspernatur! Ducimus hic
        repudiandae laudantium minus necessitatibus.
      </p>
      <v-btn size="x-large" class="mt-10" color="blue">Saiba Mais</v-btn>
    </div>

  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.sectionHome{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #323946;
}

.sectionHome h1 {
  position: relative;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
}

.sectionHome h1::before{
  content:'';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #081b29;
  animation: showRight 1s ease forwards;
  animation-delay: 1s;
}

@keyframes showRight {
  100%{
    width: 0;
  }
}

</style>
