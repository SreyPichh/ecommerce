<template>
  <div class="l_content">
    <div class="c_content">
      <div class="c_card__container" v-for="(item, index) in items" :key="index">
        <div class="c_card" @click="toggleModal = true">
          <detail-modal v-if="toggleModal" @close="toggleModal = false"></detail-modal>
          <h4 class="c_card__title">{{ item.caseName }}</h4>

          <div class="c_card__img"></div>
          <div class="l_add_cart">
            <button class="c_add__cart">${{ item.price }} - Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import DetailModal from '@/components/DetailModal.vue'

export default {
  name: "CaseCard",
  components: {
    DetailModal
  },
  data() {
    return {
      items: [
        {
          caseName: "Aquamarine",
          price: 40
        },
        {
          caseName: "Gold Glitter",
          price: 33
        },
        {
          caseName: "Pink Painted",
          price: 23
        },
        {
          caseName: "Cool Blue",
          price: 24
        },
        {
          caseName: "Pink Patterned",
          price: 17
        },
        {
          caseName: "Purple Blue",
          price: 9
        },
        {
          caseName: "Pretty Patterned",
          price: 12
        },
        {
          caseName: "Black and White grunge",
          price: 29
        },
        {
          caseName: "Cute Fruit",
          price: 23
        }
      ],
      toggleModal: false
    }
  }
}
</script>
<style scoped>
.l_content {
  margin-left: 20px;
}
.c_content {
  margin: 0 auto;
}

.c_content:after {
  content: "";
  display: table;
  clear: both;
}

.c_card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 6px;
}

.c_card__title {
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
}
.c_card__img {
  height: 220px;
  background-color: wheat;
  margin-top: 20px;
}
.c_card__container {
  width: 25%;
  height: 350px;
  float: left;
  padding: 0px 40px 40px 40px;
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
</style>


