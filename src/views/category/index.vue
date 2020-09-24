<template>
  <div>
    <nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>
    <div class="category-content">
      <ul class="category-content-left">
        <li
          v-for="(nav, index) in categoryNav"
          :key="index"
          @click="handleActive(nav.maitKey, nav.miniWallkey)"
          :class="maitKey === nav.maitKey ? 'active' : ''"
        >
          {{ nav.title }}
        </li>
      </ul>
      <div class="category-content-right">
        <ul class="right-imgs">
          <li v-for="(goodsItem, index) in categoryGoodsItem" :key="index">
            <img :src="goodsItem.image" />
            <span>{{ goodsItem.title }}</span>
          </li>
        </ul>
        <GoodsInfo :goodsInfo="goodsInfo"></GoodsInfo>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import GoodsInfo from "components/goodsInfo/GoodsInfo";

export default {
  name: "Category",
  components: {
    NavBar,
    GoodsInfo,
  },
  data() {
    return {
      categoryNav: [],
      categoryGoodsItem: [],
      goodsInfo: [],
      maitKey: "",
      miniWallkey: "",
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    async getCategory() {
      // 请求左侧商品导航
      const result = await this.$API.category.getCategoryNav();
      this.categoryNav = result.data.category.list;
      this.maitKey = this.categoryNav[0].maitKey;
      this.miniWallkey = this.categoryNav[0].miniWallkey;
      console.log(this.maitKey);

      this.getCategoryGoods();
    },
    getCategoryGoods() {
      // 请求商品条目
      // console.log(this.maitKey);
      this.$API.category.getCategoryGoodsItem(this.maitKey).then((result) => {
        this.categoryGoodsItem = result.data.list;
      });
      // 请求商品信息
      this.$API.category
        .getCategoryGoodsInfo(this.miniWallkey)
        .then((result) => {
          this.goodsInfo = result;
        });
    },
    // 左侧导航选中高亮
    handleActive(maitKey, miniWallkey) {
      this.maitKey = maitKey;
      this.miniWallkey = miniWallkey;
      this.getCategoryGoods();
    },
  },
};
</script>

<style lang="less" scoped>
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.category-content {
  display: flex;
  height: calc(100vh - 49px - 44px);
}
.category-content-left {
  width: 30%;
  color: #777;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  li {
    height: 50px;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
    background: #f6f6f6;
  }
  li.active {
    background: #fff;
    color: var(--color-tint);
    font-weight: bold;
    box-sizing: border-box;
    border-left: 3px solid #f55777;
  }
}
.category-content-right {
  width: 70%;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .right-imgs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    li {
      width: 33.33%;
      display: flex;
      flex-direction: column;
      img {
        height: 65px;
        width: 65px;
        margin: 0 auto;
      }
      span {
        text-align: center;
        font-size: 14px;
        margin: 20px 0;
      }
    }
  }
}
</style>
