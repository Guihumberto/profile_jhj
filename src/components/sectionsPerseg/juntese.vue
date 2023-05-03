<template>
  <section id="juntese">
    <div class="juntese-content">
      <p>
        Em breve será postado todos os documentos da denúncia e todos os documentos
        relacionados ao processo (ações judiciais, denúncias ao MPE, TCE, recursos hierarquico impróprio e outros.) <br>
        Cadastra-se para ser avisado assim que postado os documentos.
      </p>
      <v-form class="formulario">
        <v-text-field
          label="E-mail"
          prepend-inner-icon="mdi-at"
          v-model="email"
          density="compact"
          variant="outlined"
          :rules="[
            (val) => isValidEmail(val) || 'Digite um endereço de e-mail válido',
          ]"
        ></v-text-field>
        <v-btn
          color="amber-darken-4"
          class="mb-5 ml-2"
        >ok</v-btn>
      </v-form>
    </div>
  </section>
</template>

<script>
  export default {
    data(){
      return{
        email: ''
      }
    },
    methods: {
    isValidEmail(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      }
    }
  }
</script>

<style lang="scss" scoped>
.juntese{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: var(--second-bg-color);
  padding: 10px 0;
  border-bottom: 2px black;
}
.juntese-content{
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.juntese-content p{
  padding: 0 3% 2%;
  font-size: 1.8rem;
  max-width: 1080px;
}
.formulario{
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30%;
  padding-bottom: 10px;
}
@media (max-width: 700px){
  .formulario{
    min-width: 90%;
    justify-content: left;
    align-items: left;
  }
}
</style>
