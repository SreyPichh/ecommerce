<template>
  <div class="home">
    <header-nav></header-nav>
    <slider></slider>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from '@/components/HeaderNav.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'home',
  components: {
    HeaderNav,
    Slider
  }
}
</script>
