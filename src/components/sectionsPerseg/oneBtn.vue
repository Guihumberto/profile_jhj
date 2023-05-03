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
      if(refName == 'pack1'){
        const url1 = 'https://drive.google.com/file/d/1Y4jeJEP1l44yVW7j8nzw_0M8738Lrm2v/view?usp=sharing'
        var win = window.open(url1, '_blank');
        win.focus();
      } else if (refName == 'pack2') {
        const url2 = 'https://drive.google.com/file/d/1TgeGxBS2dqRwMWk7GtT4_rOFrQuMyVh9/view?usp=sharing'
        var win2 = window.open(url2, '_blank');
        win2.focus();
      } else if (refName == 'pack3') {
        const url3 = 'https://drive.google.com/file/d/1KAF_SFPgnYLkD14BfvpHeHKY53zNX-R3/view?usp=share_link'
        var win3 = window.open(url3, '_blank');
        win3.focus();
      } else {
        const element = document.getElementById(refName)
        element.scrollIntoView({behavior: "smooth"})
      }
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
