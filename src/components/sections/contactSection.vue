<template>
  <div class="sectionHome" id="contact">
    <h1 class="text-white">Fale <span class="text-blue">Comigo!</span> </h1>
    <div class="formulario my-16 text-light-blue-lighten-1" style="max-width: 800px;">
      <v-form>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Nome Completo"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="E-mail"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Celular"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Assunto"
              variant="outlined"
              color="white"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              label="Sua Mensagem"
              variant="outlined"
            ></v-textarea>
          </v-col>
        <v-col cols="12" class="text-center">
          <v-btn size="x-large" color="blue">Enviar</v-btn>
        </v-col>
        </v-row>
      </v-form>
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
.formulario::before{
  content:'';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #081b29;
  animation: showRight 1s ease forwards;
  animation-delay: 5s;
}

@keyframes showRight {
  100%{
    width: 0;
  }
}


</style>
