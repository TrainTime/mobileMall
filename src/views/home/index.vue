<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物吧</div>
    </nav-bar>
    <Scroll>
      <div class="other-warp">
        <!-- 轮播图 -->
        <!-- <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
            <img :src="item.image" />
          </div>
        </div>
      </div>-->
        <Banner :bannerList="bannerList"></Banner>
        <!-- 活动 -->
        <div class="activity">
          <div
            class="activity-list"
            v-for="(item, index) in recommendtList"
            :key="index"
          >
            <img :src="item.image" />
            <div>
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>

        <!-- 本周流行 -->
        <div class="popular">
          <div class="popular-list">
            <span>本周流行</span>
          </div>
          <div
            class="activity-list"
            v-for="(item, index) in keywordsList"
            :key="index"
          >
            <img src />
            <div>
              <span>{{ item.words }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部分类 -->
      <div class="type">
        <div class="navTitle">
          <!--   -->
          <div
            v-for="(item, index) in navList"
            :key="index"
            @click="changeIndex(index)"
          >
            <span :class="index === currentIndex ? 'active' : ''">{{
              item.title
            }}</span>
          </div>
        </div>
        <div class="typeContext">
          <div
            class="goods-item"
            v-for="(item, index) in goodsList"
            :key="index"
          >
            <img :src="item.show.img" alt />
            <div>
              <a>{{ item.title }}</a>
            </div>
            <div>
              <span style="color: #333">￥{{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Banner from '../../components/banner'
import Scroll from '../../components/common/Scroll/Scroll'
export default {
  name: 'Home',
  data() {
    return {
      bannerList: [],
      recommendtList: [],
      keywordsList: [],
      goodsList: [],
      navList: [],
      type: 'pop',
      page: 1,
      currentIndex: 0,
    }
  },
  components: {
    NavBar,
    Banner,
    Scroll,
  },
  async mounted() {
    const result = await this.$API.home.getMultidata()
    this.bannerList = result.data.banner.list
    this.recommendtList = result.data.recommend.list
    this.keywordsList = result.data.keywords.list
    this.getRecommend()
    // http://localhost:3000/multidata
  },
  methods: {
    //点击切换底部数据
    changeIndex(index) {
      this.currentIndex = index
      if (index === 0) {
        this.goodsList = []
        this.type = 'pop'
        this.getRecommend()
      } else if (index === 1) {
        this.goodsList = []
        this.type = 'sell'
        this.getRecommend()
      } else if (index === 2) {
        this.goodsList = []
        this.type = 'new'
        this.getRecommend()
      }
    },
    //获取第一页数据当默认值
    async getRecommend() {
      let { type, page } = this
      let data = { type, page }
      const res = await this.$API.home.getRecommendData(data)

      this.goodsList = res.data.list
      this.navList = res.data.filter.list
    },
  },
}
</script>

<style scoped lang="less">
#home {
  background-color: #eee;
  height: 100%;
  .home-nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: var(--color-tint);
    // height: 100%;
    color: #fff;
  }
  .other-warp {
    height: 100%;
    .swiper-container {
      width: 100%;
      height: 160px;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .activity {
      background-color: var(--color-background);
      width: 100%;
      height: 140px;
      margin-bottom: 10px;
      .activity-list {
        display: inline-block;
        margin: 20px 0;
        width: 25%;
        height: 80px;
        text-align: center;
        // background-color: aqua;
        img {
          margin: 0 auto;
          display: block;
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
      }
    }

    .popular {
      // border: 1px solid red;
      width: 100%;
      background-color: var(--color-background);
      // height: 2400px;
      .popular-list {
        width: 100%;
        height: 50px;
        text-align: center;
        span {
          font-size: 18px;
          line-height: 50px;
          color: #333;
        }
      }
      .activity-list {
        display: inline-block;
        width: 25%;
        height: 100px;

        text-align: center;
        // background-color: aqua;
        img {
          margin: 0 auto;

          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        div {
          margin: 0 auto;
          width: 100%;
          height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

          span {
            line-height: 20px;
            font-size: 14px;
          }
        }
      }
    }
  }
  .type {
    width: 100%;
    // height: 1000px;
    background-color: #fff;
    .navTitle {
      display: flex;
      div {
        width: 33.33333%;
        height: 50px;
        text-align: center;

        span {
          line-height: 50px;
          font-size: 18px;
          color: #333;
        }
        span.active {
          color: brown;
          padding-bottom: 8px;
          border-bottom: 3px solid red;
        }
      }
    }
    .typeContext {
      width: 100%;
      .goods-item {
        width: 48%;
        display: inline-block;
        text-align: center;
        padding-left: 3px;

        img {
          width: 100%;
          height: 264px;
          border-radius: 10rpx;
        }
        a {
          display: block;
          margin: 0 auto;
          font-size: 14px;
          width: 90%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #333;
        }
      }
    }
  }
}
</style>
