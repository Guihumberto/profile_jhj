<template>
  <section id="juntese" class="juntese">
    <div class="juntese-content">
      <p>
        Em breve será postado todos os documentos da denúncia e os
        relacionados ao processo (ações judiciais, denúncias ao MPE, TCE, recursos hierarquico impróprio e outros.) <br>
        Cadastra-se para ser avisado assim que disponível.
      </p>
      <h3 class="text-h4 mb-3 titlejuntese pa-2">CADASTRE-SE</h3>
      <v-form v-if="!send" class="formulario" @submit.prevent="cadMail()">
          <v-text-field
            label="E-mail"
            prepend-inner-icon="mdi-at"
            v-model="email"
            density="compact"
            variant="outlined"
            style="width: 80%;"
            focused
            clearable
            :rules="[
              (val) => isValidEmail(val) || 'Digite um endereço de e-mail válido',
            ]"
          ></v-text-field>
          <v-btn
            color="white"
            class="mb-5 ml-2"
            type="submit"
            :disabled="!isValidEmail(email)"
          >ok</v-btn>
      </v-form>
      <v-alert v-else class="alert-msg text-amber-darken-4 text-h6" icon="mdi-email">
        <span>E-mail cadastrado com sucesso!</span>
      </v-alert>
    </div>
  </section>
</template>

<script>
import { useCountStore } from '@/store/CountStore'
const countStore = useCountStore()

  export default {
    data(){
      return{
        email: '',
        send: false
      }
    },
    methods: {
      isValidEmail(email) {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
      },
      cadMail(){
        if(this.isValidEmail(this.email)){
          countStore.cadMail(this.email)
          this.email = ''
          this.send = true
        }
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
  padding: 20px 10px;
  background: var(--main-color);
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
  font-size: 1.7rem;
  max-width: 1080px;
  text-align: center;
}
.titlejuntese{
  background: white;
  font-weight: 600;
  color: var(--main-color);
  border-radius: 10px;
  pointer-events: none;
}
.formulario{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 3%;
  width: 50%;
}
.alert-msg{
  opacity: 0;
  animation: slideRightt  2.4s ease forwards;
}
@media (max-width: 886px){
  .formulario{
    width: 80%;
  }
}
@media (max-width: 472px){
  .formulario{
    width: 100%;
  }
  .juntese-content p{
    font-size: 1.5rem;
  }
}
</style>
