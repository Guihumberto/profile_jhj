<template>
  <div class="wrapper">
    <div class="btn-box">
      <a href="#">Entrar</a>
      <a href="#">Contato</a>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

.wrapper .btn-box{
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 345px;
  height: 50px;
}
.btn-box a{
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100%;
  background: #00abf0;
  border: 2px solid #00abf0;
  border-radius: 8px;
  font-size: 19px;
  color: #081b29;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  z-index: 1;
  overflow: hidden;
  transition: .5s;
}

.btn-box a:hover{
  color: #00abf0;
}

.btn-box a:nth-child(2){
  background: transparent;
  color: #00abf0
}

.btn-box a:nth-child(2):hover{
  color:#081b29
}

.btn-box a:nth-child(2)::before{
  background: #00abf0;
}

.btn-box a::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #081b29;
  z-index: -1;
  transition: .5s;
}
.btn-box a:hover::before{
  width: 100%;
}
</style>
