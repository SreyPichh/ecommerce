<template>
  <div class="l_slider">
    <div class="c_slider">
      <div class="l_slider__inner">
        <h2 class="c_slider__title">Celebrate Uniqueness </h2>
          <h4 class="c_slider__text">Beautiful mobile covers that <br>
            reflects your personality.
        </h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Slider'
}
</script>
<style scoped>
.c_slider {
  background-image: url('../assets/slider.jpg');
  height: 400px; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
}
.c_slider__title {
  font-weight: bold;
  color: #393939;
}

.l_slider__inner {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>


