<template>
  <!-- 轮播图 -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(item, index) in bannerList"
        :key="index"
      >
        <img :src="item.image ? item.image : item" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import Vue from "vue";
export default {
  name: "",
  props: ["bannerList"],
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      Vue.nextTick(() => {
        new Swiper(".swiper-container", {
          autoplay: true,
          loop: true, // 循环模式选项
          pagination: {
            el: ".swiper-pagination",
          },
          observer: true, //修改swiper自己或子元素时，自动初始化swiper
          observeParents: true, //修改swiper的父元素时，自动初始化swiper
        });
      });
    },
  },
};
</script>

<style scoped lang="less">
img {
  width: 100%;
}
</style>
