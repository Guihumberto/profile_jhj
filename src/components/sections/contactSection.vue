<template>
  <section id="contact">
    <div class="sectionHome">
      <h1 class="text-white">
        Fale <span class="text-blue">Comigo!</span>
        <span class="animate" style="--i:1"></span>
      </h1>
      <div class="formulario my-16 text-light-blue-lighten-1" style="max-width: 800px;">
        <v-form>
          <v-row>
            <v-col cols="12" sm="6" class="my-0 py-0">
              <v-text-field
                label="Nome Completo"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="my-0 py-0">
              <v-text-field
                label="E-mail"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="my-0 py-0">
              <v-text-field
                label="Celular"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="my-0 py-0">
              <v-text-field
                label="Assunto"
                variant="outlined"
                color="white"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="my-0 py-0">
              <v-textarea
                label="Sua Mensagem"
                variant="outlined"
              ></v-textarea>
            </v-col>
          <v-col cols="12" class="text-center my-0 py-0" >
            <one-btn />
          </v-col>
          <span class="animate" style="--i:2"></span>
          </v-row>
        </v-form>
      </div>
    </div>
  </section>
</template>

<script>
import oneBtn from '../oneBtn.vue'
  export default {
  components: { oneBtn },

  }
</script>

<style scoped>
section{
  min-height: 100vh;
  padding: 10rem 9% 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sectionHome{
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.formulario{
  position: relative;
}
v-col{
  position: relative;
}
#contact .animate{
  animation: showRight 1s ease forwards;
  animation-delay: calc(.3s * var(--i));
}



</style>
