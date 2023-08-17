<template>
  <div>
    <div v-if="activeCart" class="cart cart-cont">
      <div class="cart__top">
        <h2 class="content__title">
          <img src="@/assets/images/shopingCart.svg" alt="" />
          Корзина
        </h2>
        <div class="cart__clear">
          <img src="@/assets/images/trash.svg" alt="" />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div class="cart__items">
        <div class="cart__item" v-for="item in cart" :key="item.id">
          <div class="cart__item-img">
            <img class="pizza-block__image" :src="item.imageUrl" alt="Pizza" />
          </div>
          <div class="cart__item-info">
            <h3>{{ item.title }}</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div class="cart__item-count">
            <div class="button button--outline button--circle cart__item-count-minus">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#EB5A1E" />
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#EB5A1E" />
              </svg>
            </div>
            <b>2</b>
            <div class="button button--outline button--circle cart__item-count-plus">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#EB5A1E" />
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#EB5A1E" />
              </svg>
            </div>
          </div>
          <div class="cart__item-price">
            <b>{{ item.price }} ₽</b>
          </div>
          <div class="cart__item-remove">
            <div class="button button--outline button--circle">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#EB5A1E" />
                <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#EB5A1E" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="cart__bottom">
        <div class="cart__bottom-details">
          <span> Всего пицц: <b>{{ getLength }} шт.</b> </span>
          <span> Сумма заказа: <b>900 ₽</b> </span>
        </div>
        <div class="cart__bottom-buttons">
          <router-link to="/" class="button button--outline button--add go-back-btn">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>

            <span>Вернуться назад</span>
          </router-link>
          <div class="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="content">
      <div class="container container--cart">
        <div class="cart cart--empty">
          <h2>Корзина пустая</h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.<br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src="@/assets/images/empty-cart.png" alt="Empty cart" />
          <router-link to="/" class="button button--black">
            <span>Вернуться назад</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeCart: false,
    };
  },
  methods: {
    // cartActive(){
    //   if(this.getCartInfo == 0){
    //     console.log('false');
    //     this.activeCart = false
    //   } else{
    //     console.log('true');
    //     this.activeCart = true
    //   }
    // }
  },
  computed: {
    ...mapState(["cart"]),
    getCartInfo() {
      if(this.cart.length == 0){
        console.log('false');
        return this.activeCart = false
      } else{
        console.log('true');
        return this.activeCart = true
      }
    },
    getLength() {
      return this.cart.length
    },
    // getPrice(){
    //   return this.cart.forEach(el => {
    //     console.log(el.price += el.price);
    //   })
    // }
  },
  created() {
    this.$store.state.cart
    this.getCartInfo
    console.log(this.getPrice);
  },
  mounted(){
  }
};
</script>