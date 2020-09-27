<template>
  <div>
    <nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>
    <!-- <div class="category-content"> -->
    <div class="category-left">
      <Scroll ref="scrollLeft">
        <ul class="category-content-left" @click="handleActive">
          <li
            v-for="(nav, index) in categoryNav"
            :key="index"
            :data-maitkey="nav.maitKey"
            :data-miniwallkey="nav.miniWallkey"
            :class="maitKey === nav.maitKey ? 'active' : ''"
          >
            {{ nav.title }}
          </li>
        </ul>
      </Scroll>
    </div>
    <div class="category-right">
      <Scroll ref="scrollRight">
        <div class="category-content-right">
          <ul class="right-imgs">
            <li v-for="(goodsItem, index) in categoryGoodsItem" :key="index">
              <img :src="goodsItem.image" />
              <span>{{ goodsItem.title }}</span>
            </li>
          </ul>
          <GoodsInfo @iamgeLoad="imageLoad" :goodsInfo="goodsInfo"></GoodsInfo>
        </div>
      </Scroll>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import GoodsInfo from "components/goodsInfo/GoodsInfo";
import Scroll from "components/common/Scroll/Scroll";

export default {
  name: "Category",
  components: {
    NavBar,
    GoodsInfo,
    Scroll
  },
  data() {
    return {
      categoryNav: [],
      categoryGoodsItem: [],
      goodsInfo: [],
      maitKey: "",
      miniWallkey: ""
    };
  },
  mounted() {
    this.getCategory().then(() => {
      this.$nextTick(() => {
        this.$refs.scrollLeft.refresh();
        this.$refs.scrollRight.refresh();
      });
    });
  },
  methods: {
    async getCategory() {
      // 请求左侧商品导航
      const result = await this.$API.category.getCategoryNav();
      this.categoryNav = result.data.category.list;
      this.maitKey = this.categoryNav[0].maitKey;
      this.miniWallkey = this.categoryNav[0].miniWallkey;
      console.log(this.maitKey);
      return this.getCategoryGoods();
    },
    async getCategoryGoods() {
      // 请求商品条目
      // console.log(this.maitKey);
      const result1 = await this.$API.category.getCategoryGoodsItem(
        this.maitKey
      );
      this.categoryGoodsItem = result1.data.list;
      // 请求商品信息
      const result2 = await this.$API.category.getCategoryGoodsInfo(
        this.miniWallkey
      );
      this.goodsInfo = result2;
    },
    // 左侧导航选中高亮
    handleActive(event) {
      const { maitkey, miniwallkey } = event.target.dataset;
      this.maitKey = maitkey;
      this.miniWallkey = miniwallkey;
      this.getCategoryGoods();
    },
    // 数据防抖
    debounce(func, wait) {
      let timeout;
      if (timeout) clearTimeout(timeout);
      return function(...args) {
        let context = this;
        timeout = setTimeout(() => {
          func.apply(context, args);
        }, wait);
      };
    },
    // 监听图片加载
    imageLoad() {
      let refresh = this.$refs.scrollRight.refresh;
      this.debounce(refresh, 34);
    }
  }
};
</script>

<style lang="less" scoped>
.category-left {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 30%;
}
.category-right {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 70%;
}
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.category-content {
  display: flex;
  height: calc(100vh - 49px - 44px);
}
.category-content-left {
  color: #777;
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
