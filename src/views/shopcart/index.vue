<template>
  <div class="shop-cart">
    <nav-bar class="shopcart-nav"><div slot="center">购物车(0)</div></nav-bar>
    <div class="cart-wrap">
      <Scroll :pattern="{ bottom: '97px' }">
        <CartItem :shopCartList="shopCartList" />
      </Scroll>
      <Account />
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/Scroll/Scroll";
import CartItem from "./CartItem";
import Account from "./Account";

import { mapState } from "vuex";

export default {
  name: "ShopCart",
  components: {
    NavBar,
    Scroll,
    CartItem,
    Account,
  },
  computed: {
    ...mapState({
      shopCartList: (state) => state.shopcart.shopCartList,
    }),
  },
};
</script>

<style scoped lang="less">
.shop-cart {
  height: 100%;
  .shopcart-nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .cart-wrap {
    /*height: calc(100vh - 44px - 49px - 48px);*/
    overflow: hidden;
  }
}
</style>
