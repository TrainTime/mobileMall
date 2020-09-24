<template>
  <div class="cart-item">
    <div class="check-icon">
      <img v-show="!imgIsActive" src="~assets/images/shopcart/checked.png">
      <img v-show="imgIsActive" src="~assets/images/shopcart/checked-active.png">
    </div>
    <div class="img">
      <img src="~assets/images/bg.jpg" alt="">
    </div>
    <div class="content">
      <h3 class="title">2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装</h3>
      <p class="desc">2018秋季新款韩版百搭格子长袖衬衫+前短后长针织气质开衫外套+高腰直筒九分牛仔裤三件套装</p>
      <div class="price-wrap">
        <div class="price">￥59.<span>00</span></div>
        <div class="count">X<span>1</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartItem",
    data() {
      return {
        imgIsActive: false
      }
    },
  }
</script>

<style scoped lang="less">
  .cart-item {
    display: flex;
    align-items: center;
    padding: 10px 8px;
    border-bottom: 1px solid #eee;
    .check-icon {
      padding-right: 6px;
      img {
        width: 27px; height: 27px;
      }
    }
    .img {
      img {
        padding-right: 6px;
        width: 99px; height: 132px;
        border-radius: 10px;
        vertical-align: bottom;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      /*padding-right: 8px;*/
      justify-content: space-between;
      width: calc(100vw - 154px); height: 100%;
      .title {
        margin-bottom: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .desc {
        margin-bottom: 30px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
      }
      .price-wrap {
        display: flex;
        justify-content: space-between;
        .price {
          color: var(--color-high-text);
          font-size: 22px;
        }
        .price span {
          font-size: var(--font-size);
        }
        .count {
          font-size: 16px;
        }
      }
    }
  }
</style>
