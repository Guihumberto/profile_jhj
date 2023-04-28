<template>
  <section class="footerBar" id="footer">
    <v-container>
      <div class="footerContainer">
        <p class="text-white">João Humberto Silva Ribeiro Júnior</p>
        <div class="btn-up">
          <v-btn  @click="scroll('home')" class="active" variant="outlined" color="blue"><v-icon size="30">mdi-arrow-up-bold</v-icon></v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup>
      const scroll = (refName) => {
        const element = document.getElementById(refName)
        element.scrollIntoView({behavior: "smooth"})
  }
</script>

<style scoped>
.footerBar{
  background: var(--second-bg-color);
  padding: 1rem 9%;
}
.footerBar p{
  position: relative;
  font-size: 1.6rem;
}
.btn-up{
  position: relative;
}
.footerContainer{
  display: flex;
  justify-content: space-between;
  align-items: center;
}


@media (max-width: 462px){
  .footerContainer{
    flex-direction: column-reverse;
  }
  .footerContainer p{
    padding-top: 1rem;
  }
}
</style>
