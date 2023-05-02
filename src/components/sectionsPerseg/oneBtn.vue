<template>
    <div class="btn-box">
      <a @click="scroll(path)">{{ title }}</a>
    </div>
</template>

<script>
export default{
  props: {
    title: {
      type: String,
      default: "Exemplo"
    },
    path: {
      type: String,
      default: "home"
    }
  },
  methods:{
    scroll(refName){
      const element = document.getElementById(refName)
      element.scrollIntoView({behavior: "smooth"})
    }
  }
}
</script>

<style scoped>

.btn-box{
  display: flex;
  justify-content: center;
  height: 50px;
}
.btn-box a{
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 100%;
  background: var(--main-color);
  border: 2px solid var(--main-color);
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
  color: var(--main-color);
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
@media (max-width: 420px){
  .btn-box a{
    width: 120px;
    height: 80%;
    font-size: 15px;
  }
}
</style>
