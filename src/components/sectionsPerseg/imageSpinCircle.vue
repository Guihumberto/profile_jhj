<template>
 <div class="about-img">
    <img src="photo-circle.png" />
    <span class="circle-spin"></span>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.about-img{
  position: relative;
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  display: flex;
  align-content: center;
  align-items: center;
}
.about-img img{
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border: .2rem solid var(--main-color);
  margin: auto;
  background: linear-gradient(45deg, blue, red );
}
.about-img .circle-spin{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-top: .2rem solid var(--second-bg-color);
  border-bottom: .2rem solid var(--second-bg-color);
  border-left: .2rem solid var(--main-color);
  border-right: .2rem solid var(--main-color);
  animation: aboutSpinner 8s linear infinite;
}
@keyframes aboutSpinner {
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

</style>
