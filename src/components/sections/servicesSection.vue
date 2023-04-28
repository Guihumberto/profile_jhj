<template>
  <section class="text-white" id="services">
    <div class="sectionServices">
      <h2 class="heading">
        Minha <span class="text-blue">Jornada</span>
        <span class="animate scroll" style="--i:1"></span>
      </h2>
      <v-row class="services-row">
        <v-col cols="12" sm="6" class="education-column">
          <h3 class="title">
            Formação
            <span class="animate scroll" style="--i:2"></span>
          </h3>
          <div class="services-box">
            <span class="animate scroll" style="--i:3"></span>
            <div class="service-content" v-for="item, i in 3" :key="i">
              <div class="content">
                <div class="year"> <v-icon size="small" class="mr-2">mdi-calendar</v-icon>2005-2010</div>
                <h3>Iniciativa Privada</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt quam architecto
                  unde eligendi neque necessitatibus beatae consequatur sit nisi aspernatur molestiae explicabo,
                  aut consectetur magnam in reprehenderit iste ad!
                </p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="education-column">
          <h3 class="title">
            Experiência
            <span class="animate scroll" style="--i:4"></span>
          </h3>
          <div class="services-box">
            <span class="animate scroll" style="--i:5"></span>
            <div class="service-content" v-for="item, i in 3" :key="i">
              <div class="content">
                <div class="year"> <v-icon size="small" class="mr-2">mdi-calendar</v-icon>2005-2010</div>
                <h3>Iniciativa Privada</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt quam architecto
                  unde eligendi neque necessitatibus beatae consequatur sit nisi aspernatur molestiae explicabo,
                  aut consectetur magnam in reprehenderit iste ad!
                </p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
  export default {

  }
</script>

<style scoped>

#services{
  min-height: 100vh;
  padding: 10rem 9% 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sectionServices{
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  max-width: 100rem;
}

.heading{
  position: relative;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 3rem;
}
.title{
  position: relative;
  font-size: 2.5rem;
  margin: 0 0 1.5rem 2rem;
}

.services-box{
  position: relative;
  border-left: .2rem solid #00abf0;
}

.service-content{
  position: relative;
  padding-left: 2rem;
}

.service-content::before{
  content: '';
  position: absolute;
  top: 0;
  left: -1.1rem;
  width: 2rem;
  height: 2rem;
  background: #00abf0;
  border-radius: 50%;
}
.content{
  position: relative;
  padding: 1.5rem;
  border: .2rem solid #00abf0;
  border-radius: .6rem;
  margin-bottom: 2rem;
  overflow: hidden;
  z-index: 1;
}

.content::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--second-bg-color);
  z-index: -1;
  transition: .5s;
}
.content:hover::before{
  width: 100%;
}
.year{
  font-size: 1.5rem;
  color: #00abf0;
  padding-bottom: .5rem;
}
.content h3{
  font-size: 2rem;
}
.content p{
  font-size: 1.6rem;
  padding-top: .5rem;
}
#services .services-box .animate.scroll {
  width: 105%;
}

#services.show-animate .animate.scroll{
  animation: showRight 1s ease forwards;
  animation-delay: calc(.3s * var(--i));
}
</style>
