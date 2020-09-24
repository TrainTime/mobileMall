<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="~assets/images/tabbar/home.png" slot="item-icon" />
      <img
        src="~assets/images/tabbar/home-active.png"
        slot="item-icon-active"
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/images/tabbar/category.png" slot="item-icon" />
      <img
        src="~assets/images/tabbar/category-active.png"
        slot="item-icon-active"
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img src="~assets/images/tabbar/shopcart.png" slot="item-icon" />
      <img
        src="~assets/images/tabbar/shopcart-active.png"
        slot="item-icon-active"
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/images/tabbar/profiles.png" slot="item-icon" />
      <img
        src="~assets/images/tabbar/profiles-active.png"
        slot="item-icon-active"
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>
