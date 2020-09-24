<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物吧</div>
    </nav-bar>
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
        <div class="activity-list" v-for="(item,index) in recommendtList" :key="index">
          <img :src="item.image" />
          <div>
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>

      <!-- 本周流行 -->
      <div class="popular">
        <div class="popular-list">
          <span>本周流行</span>
        </div>
        <div class="activity-list" v-for="(item,index) in keywordsList" :key="index">
          <img src />
          <div>
            <span>{{item.words}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部分类 -->
    <div class="type">
      <div class="navTitle" @click="changeIndex">
        <div>
          <span class="active">流行</span>
        </div>
        <div>
          <span>新款</span>
        </div>
        <div>
          <span>精选</span>
        </div>
      </div>
      <div class="typeContext">
        <div class="goods-item">
          <img src="../../assets/images/2.png" alt />
          <div>
            <span>2018年韩流百搭格式</span>
          </div>
          <div>
            <span>￥59.00</span>
          </div>
        </div>
        <div class="goods-item">
          <img src="../../assets/images/2.png" alt />
          <div>
            <span>2018年韩流百搭格式</span>
          </div>
          <div>
            <span>￥59.00</span>
          </div>
        </div>
        <div class="goods-item">
          <img src="../../assets/images/2.png" alt />
          <div>
            <span>2018年韩流百搭格式</span>
          </div>
          <div>
            <span>￥59.00</span>
          </div>
        </div>
        <div class="goods-item">
          <img src="../../assets/images/2.png" alt />
          <div>
            <span>2018年韩流百搭格式</span>
          </div>
          <div>
            <span>￥59.00</span>
          </div>
        </div>

        <!-- <div>right</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Banner from '../../components/banner'
import Scroll from "../../components/common/Scroll/Scroll"
export default {
  name: 'Home',
  data() {
    return {
      bannerList: [],
      recommendtList: [],
      keywordsList: [],
    }
  },
  components: {
    NavBar,
    Banner,
    Scroll
  },
  async mounted() {
    const result = await this.$API.home.getMultidata()
    this.bannerList = result.data.banner.list
    this.recommendtList = result.data.recommend.list
    this.keywordsList = result.data.keywords.list

    // http://localhost:3000/multidata
  },
  methods: {
    changeIndex(e){
      console.log(e)
    }
  },
}
</script>

<style scoped lang="less">
#home {
  background-color: #eee;
  height: 100%;
  .home-nav {
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
          color: rgb(31, 1, 1);
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
    height: 1000px;
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
          color: #eee;
        }
        span.active {
          color: brown;
          padding-bottom: 8px;
          border-bottom:3px solid red ;
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
      }
    }
  }
}
</style>
