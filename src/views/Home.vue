<template>
  <div class="home">
    <header-nav></header-nav>
    <slider></slider>
    <main class="l_main">
    <div class="c_main">
      <div class="l_main__inner">
        <filter-search></filter-search>
        
      </div>
      <case-card @update-cart="updateCart"></case-card>
    </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from '@/components/HeaderNav.vue'
import Slider from '@/components/Slider.vue'
import FilterSearch from '@/components/FilterSearch.vue'
import CaseCard from '@/components/CaseCard.vue'

export default {
  name: 'home',
  components: {
    HeaderNav,
    Slider,
    FilterSearch,
    CaseCard
  },
  methods: {
    updateCart (e) {
      this.cart.push(e)
    }
  }
}
</script>
<style scoped>
.l_main {
  padding: 50px;
}

.c_main {
  display: flex;
}
</style>

