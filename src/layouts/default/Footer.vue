<template>
  <div class="footerBar">
    <v-container>
      <div class="d-flex justify-space-between align-center">
        <p class="text-white">João Humberto Silva Ribeiro Júnior</p>
        <v-btn  @click="scroll('home')" class="active" variant="outlined" color="blue"><v-icon size="30">mdi-arrow-up-bold</v-icon></v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default{
    methods:{
      scroll(refName){
        const element = document.getElementById(refName)
        element.scrollIntoView({behavior: "smooth"})
      }
    }
  }
</script>

<style scoped>
.footerBar{
  background: #114455;
  padding: 2rem 9%;
}
.footerBar p{
  font-size: 1.6rem;
}
</style>
