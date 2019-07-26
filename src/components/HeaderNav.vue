<template>
  <nav class="l_nav">
    <div class="l_header">
      <div class="c_header">
        <div class="c_left__nav">
          <h2 class="c_logo">CaseCompany</h2>
        </div>
        <div class="c_right__nav">
          <h4 :cart="this.cart">Cart (0)</h4>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'HeaderNav'
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
.c_right__nav {
  float: right;
}
.c_right__nav h4 {
  color: cornflowerblue;
  text-decoration: underline;
  padding: 4px;
}
</style>


