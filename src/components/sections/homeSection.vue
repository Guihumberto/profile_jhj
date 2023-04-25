<template>
  <section class="home" id="home">
    <div class="sectionHome">
        <h1>Olá, Eu sou<span> Humberto</span></h1>
        <div class="text-animate">
          <h3>Lorem ipsum</h3>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe hic sint assumenda.
          Voluptas optio error, aliquid blanditiis necessitatibus aperiam. Maxime corrupti delectus accus
          antium id expedita modi qui impedit, facere perferendis!
        </p>
        <div class="d-flex justify-start">
          <btnNew />
        </div>
        <div class="socialmidia">
          <socialmidia-2 />
        </div>
      <!-- <v-col cols="12" sm="6"  class="text-center pa-0 imgHoverContiner">
        <div class="imgHover"></div>
        <div >
          <v-img
           max-height="580"
           max-width="565"
           src="../../../public/pngwing.com.png">
          </v-img>
        </div>
      </v-col> -->
    </div>
  </section>
</template>

<script>
import btnNew from "@/components/bottom.vue"
import Socialmidia2 from '../socialmidia2.vue'

  export default {
  components: { btnNew, Socialmidia2 },

  }
</script>

<style scoped>
.home{
  min-height: 100vh;
  padding: 10rem 9% 2rem;
  display: flex;
  align-items: center;
  padding: 0 9%;
}
.sectionHome{
  position: relative;
  max-width: 60rem;
  color: #fff;
}
.sectionHome h2 {
  position: relative;
}
.sectionHome h2::before{
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
.sectionHome h1 {
  position: relative;
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1.3;
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

.sectionHome .text-animate{
  position: relative;
  width: 32.8rem;
}


.sectionHome .text-animate h3{
  position: relative;
  font-size: 3.2rem;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: .7px #00abf0;
}
.sectionHome h3::before{
  content:'';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #081b29;
  animation: showRight 1s ease forwards;
  animation-delay: 1.3s;
}

.sectionHome p {
  position: relative;
  font-size: 1.6rem;
  margin: 2rem 0 4rem ;
}

.sectionHome p::before{
  content:'';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #081b29;
  animation: showRight 1s ease forwards;
  animation-delay: 1.6s;
}
.socialmidia{
  position: absolute;
  bottom: 10;
  left: 0;
}
.imgHoverContiner{
  position: relative;
}
.imgHover{
  top: 0;
  width: 100%;
  height: 100%;
  right: 30px;
  position: absolute;
  background: transparent;
  transition: 3s;
  z-index: 1;
}
.imgHover:hover{
  background: #081b29;
  transition: 3s;
  z-index: 2;
  opacity: 0.8;
}

.imgHover::before{
  content:'';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #081b29;
  animation: showRight 1s ease forwards;
  animation-delay: 3s;
}

</style>
