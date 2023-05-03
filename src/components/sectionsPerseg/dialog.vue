<template>
  <div class="text-center">
    <v-btn
      color="amber-darken-4"
      size="x-large"
      append-icon="mdi-arrow-down-bold"
    >
      Download

      <v-dialog
        v-model="dialog"
        activator="parent"
        width="400"
      >
        <v-card>
          <v-card-title class="text-center py-5 bg-orange-darken-4">
            <h1>PAD nº 4783/2020</h1>
          </v-card-title>
          <v-card-text class="border mx-5 mt-5">
            <div class="processos">
              <h3>Volume I</h3>
              <div><one-btn :title="'Download'" :path="'pack1'" @click="countDownload('pack1')"/></div>
            </div>
            <div class="processos">
              <h3>Volume II</h3>
              <div><one-btn :title="'Download'" :path="'pack2'" @click="countDownload('pack2')"/></div>
            </div>
            <div class="processos">
              <h3>Volume III</h3>
              <div><one-btn :title="'Download'" :path="'pack3'" @click="countDownload('pack3')"/></div>
            </div>
            <div>
              <!-- Total de Dowloads: {{ totalDownloads }} -->
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn size="x-large" color="primary" block @click="dialog = false">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
</template>

<script>
import oneBtn from '@/components/sectionsPerseg/oneBtn.vue';

import { useCountStore } from '@/store/CountStore'
const countStore = useCountStore()

  export default {
    data () {
      return {
        dialog: false,
      }
    },
    components:{
      oneBtn
    },
    computed:{
      totalDownloads(){
        return countStore.readCount
      }
    },
    methods:{
      countDownload(pack){
        countStore.addCount(pack)
      }
    }
  }
</script>

<style scoped>
.processos{
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 12px 0px;
}

</style>
