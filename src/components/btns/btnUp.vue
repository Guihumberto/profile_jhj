<template>
  <div class="btn-icon">
    <a href="#">
      Dowload
      <v-icon class="ml-2" size="2.4rem">mdi-arrow-down-thick</v-icon>
    </a>
  </div>
</template>

<script setup>
</script>

<style scoped>
.btn-icon a{
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: .8rem;
  background: var(--main-color);
  border: .2rem solid var(--main-color);
  border-radius: .6rem;
  font-size: 1.8rem;
}
.btn-icon a::before {
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 0;
   height: 100%;
   background: var(--second-bg-color);
   transition: .5s;
}
.btn-icon a:hover::before {
  width: 100%;
}S
.mdi-arrow-down-thick{
  color: var(--bg-color) !important;
  transition: .5s;
}
.btn-icon:hover{
  color: var(--main-color) !important;
}
</style>
