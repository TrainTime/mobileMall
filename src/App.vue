<template>
  <div id="app">
    <keep-alive include="Category">
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
<<<<<<< HEAD
@import "./assets/css/base.css";
=======
  @import "./assets/css/base.css";
  #app{
    height: 100%;
  }
>>>>>>> dcd03e0c177b98183e6e22faf2f6fc511004a2f7
</style>
