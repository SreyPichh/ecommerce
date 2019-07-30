<template>
  <div class="l_content">
    <div class="c_content">
      <div class="c_card__container" v-for="(item, index) in items" :key="index">
        <div class="c_card">
          <h4 class="c_card__title">{{ item.caseName }}</h4>

          <div class="c_card__img" @click="viewProduct(item)">
            <img :src="item.img" alt="img" class="image_item">
            <detail-modal v-show="showModal" @close="hideModal"></detail-modal>
          </div>
          <div class="l_add_cart">
            <button class="c_add__cart" @click="addToCart(item)">${{ item.price }} - Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DetailModal from '@/components/DetailModal.vue'

export default {
  name: 'Product',
  components: {
    DetailModal
  },
  props: ['cart'],
  data () {
    return {
      showModal: false,
      modalData: {},
      modalAmount: 1,
      items: [
        {
          id: 1,
          caseName: "Aquamarine",
          price: 40,
          img: 'https://d2mxuefqeaa7sj.cloudfront.net/s_ACF2B3FED5F7644A8E27E3FE8A9142BB95ECC3C792EA9166BF492FA2116B5277_1517608797389_Screen+Shot+2018-02-02+at+4.59.43+PM.png'
        },
        {
          id: 2,
          caseName: "Gold Glitter",
          price: 33,
          img: 'https://d2mxuefqeaa7sj.cloudfront.net/s_ACF2B3FED5F7644A8E27E3FE8A9142BB95ECC3C792EA9166BF492FA2116B5277_1517608730821_Screen+Shot+2018-02-02+at+4.58.29+PM.png'
        },
        {
          id: 3,
          caseName: "Pink Painted",
          price: 23,
          img: 'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/vue/products/195796/shirt-1490420513-abd7b25b157f3450ce8c2a09ee51c36e.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyNzAuNTcxNDI4NTcxNDI4NCwgMTI3MC41NzE0Mjg1NzE0Mjg0XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs4NThdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvY2F0ZWdvcmllcy9tZW5zL3NpemVzLyovc3R5bGVzL3RyaWJsZW5kLXRlZS9jb2xvcnMvKi9mcm9udC5wbmciXSwgeyJ5IjogNDcwLCAieCI6IDU1OSwgImJhY2tncm91bmQiOiAiZjBmMGYyIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19'
        },
        {
          id: 4,
          caseName: "Cool Blue",
          price: 24,
          img: 'https://vangogh.teespring.com/v3/image/8if73uOooSVA2dqCdLpRCpVVXqE/480/560.jpg'
        },
        {
          id: 5,
          caseName: "Pink Patterned",
          price: 17,
          img: 'https://cdn-images.threadless.com/threadless-media/artist_shops/shops/vue/products/195796/shirt-1490420513-abd7b25b157f3450ce8c2a09ee51c36e.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltc2NyaXB0IiwgWzEyNzAuNTcxNDI4NTcxNDI4NCwgMTI3MC41NzE0Mjg1NzE0Mjg0XSwge31dLCBbImVuY29kZSIsIFsiLnBuZyJdLCB7ImRwaSI6IDMwMH1dLCBbInJlc2l6ZSIsIFs4MjZdLCB7fV0sIFsib3ZlcmxheSIsIFsidGhyZWFkbGVzcy1tZWRpYS9hcnRpc3Rfc2hvcHMvb3ZlcmxheXMvY2F0ZWdvcmllcy9tZW5zL3NpemVzLyovc3R5bGVzL3RlZS9jb2xvcnMvKi9mcm9udC0xNDU0OTY3NDUwLTExYTFhZDAyYTZmYWVlYTMzNjAxZjFmNmY3ZjIwNWQyLnBuZyJdLCB7InkiOiA0NTcsICJ4IjogNTkyLCAiYmFja2dyb3VuZCI6ICI1ZTVlNWUifV0sIFsicmVzaXplIiwgWzgwMF0sIHt9XSwgWyJjYW52YXNfY2VudGVyZWQiLCBbODAwLCA4MDAsICIjZmZmZmZmIl0sIHt9XSwgWyJlbmNvZGUiLCBbImpwZyIsIDg1XSwge31dXX0='
        },
        {
          id: 6,
          caseName: "Purple Blue",
          price: 9,
          img: 'https://vangogh.teespring.com/v3/image/aok3O93kJflOPCsJbAx7ZpP_0Y4/480/560.jpg'
        },
        {
          id: 7,
          caseName: "Pretty Patterned",
          price: 12,
          img: 'https://ctl.s6img.com/society6/img/2_3sfr-s6deHfGetzwL2GTfl_S4/w_1500/cases/galaxys8/slim/back/~artwork,fw_1300,fh_2000,fx_158,fy_802,iw_976,ih_843/s6-original-art-uploads/society6/uploads/misc/9a13523f3d3b456da6a3f39f14d6be33/~~/vue-vuejs-cases.jpg'
        },
        {
          id: 8,
          caseName: "Black and White grunge",
          price: 29,
          img: 'https://d2mxuefqeaa7sj.cloudfront.net/s_ACF2B3FED5F7644A8E27E3FE8A9142BB95ECC3C792EA9166BF492FA2116B5277_1517608730821_Screen+Shot+2018-02-02+at+4.58.29+PM.png'
        },
        {
          id: 9,
          caseName: "Cute Fruit",
          price: 23,
          img: 'https://res.cloudinary.com/teepublic/image/private/s--JEXQPvTP--/c_crop,x_10,y_10/c_fit,w_443/c_crop,g_north_west,h_1100,w_554,x_-55,y_-387/l_upload:v1452885561:production:blanks:gawvl5gka1pqwssxidw5/fl_layer_apply,g_north_west,x_-416,y_-464/b_rgb:0f7b47/c_limit,f_jpg,h_630,q_90,w_630/v1539288734/production/designs/3303227_0.jpg'
        }
      ]
    }
  },
  methods: {
    addToCart(item) {
      var isAdd = false
      console.log('I am here')
      console.log(this.cart.length)
      for (var i = 0; i < this.cart.length; i++) {
        console.log(cart.length)
        if (this.cart[i].id === item.id) {
          var newItem = this.cart[i]
          newItem.quantity = newItem.quantity + 1
          this.cart.$set(i, newItem)
          isAdd = true
          break
        }
      }
      if (!isAdd) {
        console.log('Now I am here with if condition')
        item.quantity = 1
        this.cart.push(item)
      }
      this.cartSubtotal = this.cartSubtotal + item.price
      this.cartTotal = this.cartSubtotal + this.cartSubtotal
      this.checkoutBool = true
    },
    viewProduct(item) {
      this.modalData = JSON.parse(JSON.stringify(item))
      this.showModal = true
    },
    hideModal(showModal) {
      console.log(close)
      this.modalData = {}
      this.showModal = false
      console.log(showModal)
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
  height: 280px;
  margin-top: 20px;
}
.c_card__container {
  width: 25%;
  height: 450px;
  float: left;
  padding: 0px 40px 40px 40px;
}

.l_add_cart {
  margin: 20px 25px 0 25px;
}

.image_item {
  width: 100%;
  height: 100%
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

@media screen and (max-width: 1259px) { 
  .c_card__container {
    width: 38%;
    height: 450px;
  }
}

@media screen and (max-width: 966px) { 
  .c_card__container {
    width: 90%;

  }
}

</style>


