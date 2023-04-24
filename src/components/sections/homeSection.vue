<template>
  <div class="sectionHome" id="home">
    <v-row>
      <v-col cols="12" sm="6">
        <h2>Olá, Eu sou</h2>
        <h1>João Humberto</h1>
        <h3>>Lorem ipsum</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe hic sint assumenda.
          Voluptas optio error, aliquid blanditiis necessitatibus aperiam. Maxime corrupti delectus accus
          antium id expedita modi qui impedit, facere perferendis!
        </p>
        <div class="d-flex justify-start">
          <btnNew />
        </div>
        <socialmidia-2 />
      </v-col>
      <v-col cols="12" sm="6"  class="text-center pa-0 imgHoverContiner">
        <div class="imgHover"></div>
        <div >
          <v-img
           max-height="580"
           max-width="565"
           src="../../../public/pngwing.com.png">
          </v-img>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import btnNew from "@/components/bottom.vue"
import Socialmidia2 from '../socialmidia2.vue'

  export default {
  components: { btnNew, Socialmidia2 },

  }
</script>

<style scoped>
.sectionHome{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

.sectionHome h3 {
  position: relative;
  font-size: 32px;
  font-weight: 700;
  color: #00abf0;
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
  font-size: 16px;
  margin: 20px 0 40px ;
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
