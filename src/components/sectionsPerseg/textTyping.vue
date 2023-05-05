<template>
  <div class="wrapper">
    <span class="first-text">Eu fui vítima de</span>
    <ul class="sec-texts">
      <li><span>Assédio</span></li>
      <li><span>Ilegalidade</span></li>
      <li><span>Coação</span></li>
      <li><span>Ameaça</span></li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

div{
  background: transparent;
}

.wrapper{
  display: flex;
  justify-content: left;
  align-items: center;
}

.wrapper .first-text{
  font-size: 30px;
  color: #fff;
}

.wrapper .sec-texts{
  height: 90px;
  line-height: 90px;
  overflow: hidden;
}

.sec-texts li{
  position: relative;
  top: 0;
  font-size: 40px;
  color: #FF1744;
  list-style: none;
  padding: 0 20px;
  text-shadow: 0 0 10px #FF1744;
  animation: slide 12s steps(4) infinite, 6s infinite;
}

@keyframes slide {
  100%{
    top: -360px;
  }
}

@keyframes colorful {
  100%{
    filter: hue-rotate(360deg);
  }
}

.sec-texts li span {
  position: relative;
}

.sec-texts li span::before{
  content: '';
  position: absolute;
  left: 0;
  width: 400px;
  height: 90px;
  background-image: linear-gradient(to right, #000 , rgb(46, 45, 45));
  border-left: 2px solid #FF1744;
  animation: typing 1.5s steps(14) infinite alternate;
}

@keyframes typing {
  100%{
    left: 100%;
    margin: 0 -35px 0 35px
  }
}

@media(max-width: 600px){
  .wrapper{
    flex-direction: column;
  }
}
</style>
