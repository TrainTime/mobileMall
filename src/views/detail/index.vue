<template>
  <div>
    <nav-bar class="detail-nav"><div slot="center">商品详情</div></nav-bar>
    <div class="detail-content">
      <div class="swiper">
        <img
          src="//s11.mogucdn.com/mlcdn/c45406/180806_05ed3a9ag44hadj1jcl7g4jf844g5_640x960.jpg"
          alt=""
        />
      </div>
      <div class="info">
        <span class="title"
          >外套男春秋季韩版潮流学生修身夹克上衣男士青少年大码帅气棒球服</span
        >
        <div class="price">
          <span class="new-price">¥128.00</span>
          <del class="old-price">¥214.00</del>
          <span class="discount">新品促销</span>
        </div>
        <div class="sell">
          <span>销量 1561</span>
          <span>收藏37人</span>
          <span>默认快递</span>
        </div>
        <div class="service">
          <span>
            <img
              src="//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"
            />
            退货补运费</span
          >
          <span
            ><img
              src="//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"
            />全国包邮</span
          >
          <span
            ><img
              src="//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"
            />7天无理由退货</span
          >
          <span
            ><img
              src="//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"
            />72小时发货</span
          >
        </div>
      </div>
    </div>
    <div class="detail-bar">
      <div class="detail-bar-left">
        <div>
          <img src="~assets/images/detail/service.png" alt="" />
          <div>客服</div>
        </div>
        <div>
          <img src="~assets/images/detail/shop.png" alt="" />
          <div>店铺</div>
        </div>
        <div>
          <img src="~assets/images/detail/collect.png" alt="" />
          <div>收藏</div>
        </div>
      </div>
      <div class="detail-bar-right">
        <div class="add-cart">加入购物车</div>
        <div class="shop">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Detail",
  components: {
    NavBar,
  },
};
</script>

<style lang="less" scoped>
.detail-content {
  height: calc(100vh - 60px - 44px);
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
}
.detail-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.swiper {
  width: 100%;
  height: 400px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.info {
  padding: 8px;
  margin-top: 5px;
  color: #777;
  .title {
    font-size: 16px;
    line-height: 20px;
  }
  .price {
    margin: 5px;
    .new-price {
      color: var(--color-tint);
      font-size: 20px;
    }
    .old-price {
      margin: 0 10px;
    }
    .discount {
      background: var(--color-tint);
      color: #fff;
      font-size: 12px;
      padding: 5px;
      border-radius: 10px;
    }
  }
  .sell {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-top: 15px;
    padding-bottom: 8px;
    border-bottom: 1px solid #ccc;
  }
  .service {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 15px 0;
    img {
      width: 12px;
      height: 12px;
    }
  }
}
.detail-bar {
  position: relative;
  z-index: 999;
  height: 60px;
  background: #fff;
  display: flex;
  &-left {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 50%;
    font-size: 14px;
    align-content: center;
  }
  &-right {
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    text-align: center;
    line-height: 60px;
    .add-cart {
      flex-grow: 1;
      background: #ffe817;
    }
    .shop {
      flex-grow: 2;
      color: #fff;
      background: #ff5777;
    }
  }
  img {
    width: 22px;
    height: 22px;
    margin: 0 auto;
  }
}
</style>
