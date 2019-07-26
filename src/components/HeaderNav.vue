<template>
  <nav class="l_nav">
    <div class="l_header">
      <div class="c_header">
        <div class="c_left__nav">
          <h2 class="c_logo">CaseCompany</h2>
          <cart ></cart>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import Cart from '@/components/Cart.vue'
export default {
  name: 'HeaderNav',
  components: {
    Cart
  },
  cart: 0,
  data () {
    return {
      
    }
  }
}
</script>
<style scoped>
.l_header {
  margin-left: 50px;
  margin-right: 50px;
}
.l_nav {
  box-shadow: 0 2px 3px hsla(0,0%,4%,.1);
  background-color: #ffffff;
}
.c_header {
  width: 100%;
  height: 70px;
  background-color: #ffffff;
}
.c_left__nav {
  float: left;
}
.c_logo {
  font-weight: bold;
  font-size: 20px;
  align-items: center;
  padding: 6px;
}

</style>


