<template>
  <section class="home show-animate" id="home">
    <div class="sectionHome">
        <h1>
          João<span class="text-blue"> Humberto</span>
          <span class="animate scroll" style="--i:3"></span>
        </h1>
        <div class="text-animate">
          <text-effect />
          <span class="animate scroll" style="--i:4"></span>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe hic sint assumenda.
          Voluptas optio error, aliquid blanditiis necessitatibus aperiam. Maxime corrupti delectus accus
          antium id expedita modi qui impedit, facere perferendis!
          <span class="animate scroll" style="--i:5"></span>
        </p>
        <div class="btns-entrar d-flex justify-start">
          <btnNew />
          <span class="animate scroll" style="--i:6"></span>
        </div>
        <div class="socialmidia w-100">
          <socialmidia-2 class="alingSociaMidia" />
          <span class="animate scroll" style="--i:7"></span>
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
import TextEffect from '../textEffect.vue'

  export default {
    components: { btnNew, Socialmidia2, TextEffect },
    data(){
      return{
        showAnimate: true
      }
    }

  }
</script>

<style scoped>
.home{
  position: relative;
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

.sectionHome h1 {
  position: relative;
  display: inline-block;
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1.3;
}
.text-animate{
  position: relative;
}
.sectionHome p {
  position: relative;
  font-size: 1.6rem;
  margin: 2rem 0 4rem ;
}
.btns-entrar{
  position: relative;
}
.socialmidia{
  position: relative;
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
.home .animate,
.text-animate .animate,
.home.show-animate .animate.scroll{
  animation: showRight 1s ease forwards;
  animation-delay: calc(.3s * var(--i));
}

@media (max-width: 680px){
  .alingSociaMidia{
    margin: auto;
  }
}
@media (max-width: 371px) {
  .home{
    justify-content: center;
  }
  .sectionHome{
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .socialmidia{
    top: 50rem;
    display: flex;
    justify-content: center;
  }
}
</style>
