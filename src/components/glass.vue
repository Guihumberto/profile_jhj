<template>
  <div class="glass">
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.glass{
  position: absolute;
  width: 800px;
  height: 400px;
  background: rgba(255, 255, 255, .1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, .2);
  border-radius: 50px;
  border: 2px solid rgba(255, 255, 255, .5);
  border-right: 2px solid rgba(255, 255, 255, .2);
  border-bottom: 2px solid rgba(255, 255, 255, .2);
  backdrop-filter: blur(10px);
}

</style>
