<template>
    <header class="d-flex justify-center align-center headerDiv" :class="menuShow ? 'bg-transparent':'headerDivsticky'">
      <a @click="scroll('home')" class="mr-5 logo">
        JHJ.
        <span class="animate" style="--i:1"></span>
      </a>
      <nav class="d-none d-sm-flex">
        <a @click="scroll('home')" :class="idNameActiveSelect == 'home'?'active':''">Início</a>
        <a @click="scroll('about')" :class="idNameActiveSelect == 'about'?'active':''">Sobre</a>
        <a @click="scroll('services')" :class="idNameActiveSelect == 'services'?'active':''">Serviços</a>
        <a @click="scroll('downloads')" :class="idNameActiveSelect == 'downloads'?'active':''">Downloads</a>
        <a @click="scroll('contact')" :class="idNameActiveSelect == 'contact'?'active':''">Contato</a>

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
          <v-list-item v-for="item, i in listMenu" :key="i" @click="scroll(item.id)" :class="idNameActiveSelect == item.id ? 'active':''">
            {{ item.name }}
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>
</template>

<script setup>
import { ref , onMounted} from "vue"

    const listMenu = [
      {id: 'home', name:"Início"},
      {id: 'about', name:"Sobre"},
      {id: 'services', name:"Serviços"},
      {id: 'downloads', name:"Downloads"},
      {id: 'contact', name:"Contato"},
    ]

    let idNameActiveSelect = ref('home')

    const scroll = (refName) => {
      const element = document.getElementById(refName)
      element.scrollIntoView({behavior: "smooth"})

      idNameActiveSelect.value = refName
      showMenuSuspense.value = false
    }


    let menuShow = ref(true)

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

        case 'services':
        idNameActiveSelect.value = 'services'
          break;

        case 'downloads':
          idNameActiveSelect.value = 'downloads'
          break;

        case 'contact':
        idNameActiveSelect.value = 'contact'
          break;

        default:
          idNameActiveSelect.value = 'home'
      }
    }


    let showMenuSuspense = ref(false)

</script>

<style scoped>
.headerDiv{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  z-index: 100;
  transition: .3s;
}
.headerDivsticky{
  background: #081b29;
}
.logo{
  position: relative;
  font-size: 2.5rem;
  color: var(--text-color);
  text-decoration: none;
  font-weight: 600;
  transition: .5s;
}
nav{
  position: relative;
}
nav a{
  font-size: 1.7rem;
  color: #fff;
  font-weight: 500;
  margin-left: 3.5rem;
  text-decoration: none;
  transition: .5s;
}
nav a:hover,
.active,
.logo:hover {
  color: #0ef;
  text-shadow: 0 5px 20px #0ef;
}
#menuBar{
  position: relative;
}
.menuSuspense{
  position: fixed;
  top: 8rem;
  left: 0;
  width: 100%;
  padding: 1rem 4%;
  background: #081b29;
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
  .headerDiv{
    padding-right: 1%;
    padding-left: 4%;
  }
}


</style>
