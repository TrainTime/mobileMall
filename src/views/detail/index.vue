<template>
  <div>
    <nav-bar class="detail-nav">
      <div slot="left" class="back" @click="backPre">
        <img src="~assets/images/common/back.png" alt="" />
      </div>
      <div slot="center">商品详情</div></nav-bar
    >
    <Scroll ref="scroll" :pattern="{ bottom: '60px' }">
      <div class="detail-content">
        <Banner :bannerList="bannerList"></Banner>
        <div class="goods-info" v-if="this.detailInfo.itemInfo">
          <span class="title">{{ this.detailInfo.itemInfo.title }}</span>
          <div class="price">
            <span class="new-price"
              >¥{{ this.detailInfo.itemInfo.highNowPrice }}</span
            >
            <del class="old-price"
              >¥{{ this.detailInfo.itemInfo.highPrice }}</del
            >
            <span class="discount">{{
              this.detailInfo.itemInfo.discountDesc
            }}</span>
          </div>
          <div class="sell">
            <span v-for="(column, index) in detailInfo.columns" :key="index">{{
              column
            }}</span>
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
        <div class="content" v-if="detailImg.list">
          <img :src="detailImg.list[1]" />
          <img :src="detailImg.list[2]" />
          <img :src="detailImg.list[3]" />
        </div>
        <div class="recommend">
          <div class="title">商品推荐</div>
          <GoodsInfo :goodsInfo="goodsInfo"></GoodsInfo>
        </div>
      </div>
    </Scroll>
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
        <div class="add-cart" @click="addToShopCart">加入购物车</div>
        <div class="shop">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Banner from "../../components/banner";
import GoodsInfo from "components/goodsInfo/GoodsInfo";
import Scroll from "components/common/Scroll/Scroll";

export default {
  name: "Detail",
  components: {
    NavBar,
    Banner,
    GoodsInfo,
    Scroll,
  },
  data() {
    return {
      detail: {},
      detailInfo: {},
      detailImg: {},
      goodsInfo: [],
      bannerList: [],
    };
  },
  mounted() {
    this.getDetailInfo();
    this.getRecommend().then(() => {
      this.$nextTick(() => {
        this.$refs.scroll.refresh();
      });
    });
  },
  methods: {
    async getDetailInfo() {
      let { iid } = this.$route.query;
      const result = await this.$API.detail.getDetailInfo(iid);
      this.detail = result;
      this.detailInfo = result.result;
      this.detailImg = this.detailInfo.detailInfo.detailImage[0];
      this.bannerList = this.detailInfo.itemInfo.topImages;
    },
    async getRecommend() {
      const result = await this.$API.detail.getRecommend();
      this.goodsInfo = result.data.list;
    },
    backPre() {
      this.$router.push("/category");
    },
    addToShopCart() {
      let goods = {
        iid: this.detail.iid,
        imageURL: this.bannerList[0],
        title: this.detailInfo.itemInfo.title,
        desc: this.detailInfo.itemInfo.desc,
        price: this.detailInfo.itemInfo.highNowPrice,
      };
      this.$store.dispatch("addToShopCart", goods);
    },
  },
};
</script>

<style lang="less" scoped>
.detail-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.back {
  position: absolute;
  top: 5px;
  left: 10px;
  img {
    width: 20px;
    height: 20px;
  }
}
.detail-content {
  // height: calc(100vh - 60px - 44px);
  background: #777;
  // overflow: auto;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
}
.swiper-container {
  width: 100%;
  height: 400px;
  --swiper-pagination-color: #f55777;
}
.goods-info {
  padding: 8px;
  color: #777;
  background: #fff;
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
.content {
  img {
    width: 100%;
  }
}
.recommend {
  background: #fff;
  .title {
    font-size: 20px;
    padding: 10px;
  }
}
.detail-bar {
  position: absolute;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
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
