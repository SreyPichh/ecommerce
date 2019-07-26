<template>
<div class="modal_body">
  <div class="l_modal">
    <div class="c_button">
      <button class="c_close__icon c_icon__close" @click="this.$emit('close')"></button>
    </div>
    <dv class="c_modal">
      <div class="c_case__img">
        <div class="c_img"></div>
      </div>
      <div class="l_detail__info">
        <div class="c_detail">
          <h4 class="c_title">Aquamarine</h4>
          <div class="c_sub__detail">
            <p>A beautiful white, blue and green painted case that stands out</p>
          </div>
          <div class="l_add_cart">
              <button class="c_add__cart">$40 - Add to cart</button>
            </div>
        </div>
      </div>
    </dv>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailModal',
  methods: {
    closeModal () {
      this.toggleModal = true
    }
  }
}
</script>

<style scoped>
body {
  background-color: rgba(0, 0, 0, .5);
  font-family: 'Roboto', sans-serif;
}

button:focus {
  outline: none;
}

.modal_body {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .1);
  display: table;
  transition: opacity .3s ease;
}

.l_modal {
  width: 600px;
  height: 324px;
  background-color: #eeeeee;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, .1);
}

.c_icon__close {
  border: 0px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='gray' viewBox='0 0 16 16'><path class='icon_close' d='M9.3,8l6.7,6.7L14.7,16L8,9.3L1.3,16L0,14.7L6.7,8L0,1.3L1.3,0L8,6.7L14.7,0L16,1.3L9.3,8z' /></svg>") no-repeat;
  cursor: pointer;
}

.c_button {
  float: right;
}

.c_close__icon {
  width: 16px;
  height: 16px;
}

.c_modal {
  display: flex;
}

.c_case__img {
  width: 30%;
  float: left;
  padding: 20px;
}

.c_img {
  height: 220px;
  background-color: wheat;
}

.l_detail__info {
  padding: 20px;
}

.c_detail {
  border: 1px solid rgba(50,115,220,.2);
  border-radius: 6px;
  width: 264px;
  height: 214px;
}

.c_title {
  padding-top: 20px;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
  color: rgb(74, 74, 74);
}

.c_sub__detail {
  font-size: 14px;
  padding: 20px;
  color: rgb(74, 74, 74);
}


.l_add_cart {
  margin: 20px 25px 0 25px;
}

.c_add__cart {
  width: 100%;
  height: 36px;
  color: #3271dc;
  padding: 5px 16px;
  border-radius: 16px;
  border: 1px solid #3271dc;
  background-color: transparent;
  font-size: 14px;
}

.c_add__cart:hover {
  background-color: #3271dc;
  color: #ffffff;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .l_modal,
.modal-leave-active .l_modal {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>


