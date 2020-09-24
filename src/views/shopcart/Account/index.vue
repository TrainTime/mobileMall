<template>
  <div class="account">
    <div class="check-btn">
      <img v-show="!isAllChecked" src="~assets/images/shopcart/checked.png">
      <img v-show="isAllChecked" src="~assets/images/shopcart/checked-active.png">
      <div class="txt">全选</div>
    </div>
    <div class="total">
      <div>总计：<span>￥59</span></div>
    </div>
    <div class="btn">
      <div>去计算(1)</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Account",
    data() {
      return {
        isAllChecked: false
      }
    }
  }
</script>

<style scoped lang="less">
  .account {
    position: fixed;
    z-index: 9;
    bottom: 49px;
    left: 0; right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 6px;
    height: 48px;
    background-color: #eee;
  .check-btn {
    display: flex;
  img {
    width: 27px; height: 27px;
  }
  .txt {
    padding-top: 5px;
    padding-left: 5px;
  }
  }
  .btn {
    height: 100%;
    line-height: 48px;
    padding: 0 16px;
    color: var(--color-background);
    background-color: #ff4500;
  }
  }
</style>
