<template>
  <div class="text-animate">
      <h3>Frontend Developer</h3>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.text-animate{
  position: relative;
  width: 32.8rem;
}
.text-animate h3{
  position: relative;
  font-size: 3.2rem;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: .7px var(--main-color);
  background-image: linear-gradient(var(--main-color), var(--main-color));
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -33rem 0;
  animation: homeBgText 6s linear infinite;
  animation-delay: 2s;
}
.text-animate h3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-right: 2px solid var(--main-color);
  z-index: 1;
  animation: homeCursorText 6s linear infinite;
  animation-delay: 2s;
}

@keyframes homeBgText {
  0%,
  10%,
  100% {
    background-position: -33rem 0;
  }
  65%, 85%{
    background-position: 0 0;
  }
}
@keyframes homeCursorText {
  0%,
  10%,
  100% {
   width: 0;
  }

  65%,
  78%,
  85% {
    width: 100%;
    opacity: 1;
  }

  75%,
  81% {
    opacity: 0;
  }
}
</style>
