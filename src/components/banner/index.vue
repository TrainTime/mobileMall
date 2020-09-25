<template>
  <!-- 轮播图 -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
        <img :src="item.image" />
      </div>
    </div>
  </div>
</template>

<script>

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import Vue from 'vue'
export default {
  name: '',
  props: ['bannerList'],
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      Vue.nextTick(() => {
        new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
        })
      })
    },
  },
}
</script>

<style scoped lang="less">
.swiper-container {
  width: 100%;
  height: 160px;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
