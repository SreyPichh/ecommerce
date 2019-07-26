<template>
  <div class="c_right__nav" @click="showCart = !showCart">
    <h4>Cart ({{ cart.length }})</h4>
  </div>
</template>
<script>
export default {
  props: ['cart', 'cartTotal'],
  data() {
    return {
      showCart: false
    }
  },
  cart: []
}
</script>


<style scoped>
.c_right__nav {
  float: right;
  height: 70px;
  width: 100px;
  background-color: #ffffff;
  
}
.c_right__nav h4 {
  color: cornflowerblue;
  text-decoration: underline;
  padding: 4px;
}
</style>
