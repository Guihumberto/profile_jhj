<template>
  <div class="home-sci my-16">
    <a href=""><v-icon>mdi-whatsapp</v-icon></a>
    <a href=""><v-icon>mdi-instagram</v-icon></a>
    <a href=""><v-icon>mdi-youtube</v-icon></a>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

.home-sci{
  position: relative;
  width: 190px;
  display: flex;
  justify-content: space-between;
}
.home-sci a{
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border: 2px solid #00abf0;
  border-radius: 50%;
  font-size: 20px;
  color: #00abf0;
  text-decoration: none;
  z-index: 1;
  overflow: hidden;
  transition: .5s;
}
.home-sci a:hover{
  color: #081b29;
}
.home-sci a::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #00abf0;
  z-index: -1;
  transition: .5s;
}
.home-sci a:hover::before{
  width: 100%;
}
</style>
