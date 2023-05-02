<template>
  <header class="d-flex justify-center align-center" :class="menuShow ? 'bg-transparent':'headerDivsticky'">
    <a class="logo" @click="scroll('home')">
      <v-icon size="small" color="white">mdi-close-octagon</v-icon> Perseguição
      <span class="animate" style="--i:1"></span>
    </a>
    <nav class="navBar d-none d-sm-flex">
      <a
        :class="idNameActiveSelect == item.path ? 'active':''"
        @click="scroll(item.path)" v-for="item, i in menuList"
        :key="i">
        {{ item.name }}
      </a>
      <span class="animate" style="--i:2"></span>
    </nav>
    <v-spacer class="d-flex d-sm-none"></v-spacer>
      <v-btn
        @click="showMenuSuspense = !showMenuSuspense" id="menuBar"
        class="d-flex d-sm-none" variant="flat" color="transparent">
        <v-icon size="3.5rem" color="white">{{ showMenuSuspense ? 'mdi-close' : 'mdi-menu' }}</v-icon>
        <span class="animate" style="--i:2"></span>
      </v-btn>
  </header>
  <v-expand-transition>
      <div v-if="showMenuSuspense" class="menuSuspense d-flex d-sm-none">
        <v-list class="bg-transparent text-white w-100" nav>
          <v-list-item :prepend-icon="item.icon" v-for="item, i in menuList" :key="i" @click="scroll(item.path)" :class="idNameActiveSelect == item.path ? 'active':''">
            {{ item.name }}
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>
</template>

<script setup>
import { ref , onMounted} from "vue"
  const menuList = [
    {name: 'Início', path:'home', icon:'mdi-home'},
    {name: 'Sobre', path:'about', icon:'mdi-information'},
    {name: 'Download', path:'download', icon:'mdi-download'}
  ]

  let showMenuSuspense = ref(false)
  let idNameActiveSelect = ref('home')
  let menuShow = ref(true)

  const scroll = (refName) => {
    const element = document.getElementById(refName)
    element.scrollIntoView({behavior: "smooth"})

    idNameActiveSelect.value = refName
    showMenuSuspense.value = false
  }

  onMounted(() => {
      let sections = document.querySelectorAll('section')

      window.onscroll = () => {

        //tranparencia da barra de menu
        if(window.scrollY > 100) {
          menuShow.value = false
        } else {
          menuShow.value = true
        }

        // incluir classe para animação
           sections.forEach(sec => {
            let id = sec.getAttribute('id')
            let top = window.scrollY
            let offset = sec.offsetTop - 100
            let heigth = sec.offsetHeight

            if(top >= offset && top < offset + heigth) {
              sec.classList.add('show-animate')
              switchActiveId(id)
            } else {
              sec.classList.remove('show-animate')
            }
           })

          //  animation footer on scroll
          let footer = document.querySelector('footer')
          if(footer) {
            footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
            console.log(footer);
          }
      }
    })

  const switchActiveId = (value) => {
    switch(value) {
      case 'home':
        idNameActiveSelect.value = 'home'
        break;

      case 'about':
        idNameActiveSelect.value = 'about'
        break;

      case 'download':
        idNameActiveSelect.value = 'download'
        break;

      case 'contact':
      idNameActiveSelect.value = 'contact'
        break;

      default:
        idNameActiveSelect.value = 'home'
    }
  }

</script>

<style scoped>
header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  z-index: 100;
  color:#fff;
  transition: .3s;
}
header .logo {
  position: relative;
  font-size: 2.5rem;
  font-weight: 700;
  transition: .3s;
  color: #fff;
}
.headerDivsticky{
  background: var(--bg-color);
}
.navBar{
  position: relative;
  margin-left: 7rem;
  font-size: 5.6rem;
  font-size: 5.6rem;
  color: #fff;
}
.navBar a{
  margin-left: 2rem;
  font-size: 1.7rem;
  font-weight: 500;
}
.active{
  color: var(--main-color);
}
a:hover {
  color: var(--main-color);
  text-shadow: 0 5px 20px var(--main-color);
}
.menuSuspense{
  position: fixed;
  top: 7rem;
  left: 0;
  width: 100%;
  padding: 1rem 4%;
  background: var(--bg-color);
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
  font-size: 1.7rem;
  color: #fff;
  font-weight: 500;
  z-index: 100;
}
.logo .animate,
nav .animate,
#menuBar .animate {
  animation: showRight 1s ease forwards;
  animation-delay: calc(.3s * var(--i));
}
@media (max-width: 570px){
  header{
    padding-right: 1%;
    padding-left: 4%;
  }
}

</style>
