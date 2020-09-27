<template>
  <div>
    <div class="cart-item" v-for="(goods, index) in shopCartList" :key="index">
      <div class="check-icon" @click="changeIsChecked(goods.iid)">
        <img
          v-show="!goods.isChecked"
          src="~assets/images/shopcart/checked.png"
        />
        <img
          v-show="goods.isChecked"
          src="~assets/images/shopcart/checked-active.png"
        />
      </div>
      <div class="img">
        <img :src="goods.imageURL" alt="" />
      </div>
      <div class="content">
        <h3 class="title">
          {{ goods.title }}
        </h3>
        <p class="desc">
          {{ goods.desc }}
        </p>
        <div class="price-wrap">
          <div class="price">￥{{ goods.price }}</div>
          <div class="count">
            <i @click="changeCount(goods.iid, 1)">+</i>
            <span>{{ goods.count }}</span>
            <i @click="changeCount(goods.iid, -1)">-</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["shopCartList"],
  methods: {
    // 单选
    changeIsChecked(iid) {
      this.$store.dispatch("updateIsChecked", iid);
    },
    // 数量增减
    changeCount(iid, flag) {
      this.$store.dispatch("updateCount", { iid, flag });
    }
  }
};
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
      width: 27px;
      height: 27px;
    }
  }
  .img {
    img {
      padding-right: 6px;
      width: 99px;
      height: 132px;
      border-radius: 10px;
      vertical-align: bottom;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    /*padding-right: 8px;*/
    justify-content: space-between;
    width: calc(100vw - 154px);
    height: 100%;
    .title {
      font-size: 18px;
      font-weight: bold;
      color: #000;
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
        span {
          margin: 0 5px;
        }
        i {
          border: 1px solid #ccc;
          padding: 3px;
        }
      }
    }
  }
}
</style>
