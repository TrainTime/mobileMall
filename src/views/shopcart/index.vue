<template>
  <div>
    <nav-bar class="shopcart-nav"><div slot="center">购物车(0)</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "ShopCart",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .shopcart-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
