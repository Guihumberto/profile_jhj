<template>
  <div class="home-sci">
    <a href="mailto:juninho.joao@hotmail.com"><v-icon>mdi-email</v-icon></a>
    <a target="_blank" href="https://www.instagram.com/humbertojhj/"><v-icon>mdi-instagram</v-icon></a>
    <a target="_blank" href="https://www.linkedin.com/in/joao-humberto-6a4713232/"><v-icon>mdi-linkedin</v-icon></a>
  </div>
</template>

<script>
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
  border: 2px solid var(--main-color);
  border-radius: 50%;
  font-size: 20px;
  color: var(--main-color);
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
  background: var(--main-color);
  z-index: -1;
  transition: .5s;
}
.home-sci a:hover::before{
  width: 100%;
}
</style>
