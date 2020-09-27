<template>
  <div class="account">
    <div class="check-btn" @click="changeAllChecked">
      <img v-show="!isAllChecked" src="~assets/images/shopcart/checked.png" />
      <img
        v-show="isAllChecked"
        src="~assets/images/shopcart/checked-active.png"
      />
      <div class="txt">全选</div>
    </div>
    <div class="total">
      <div>
        总计：<span>￥{{ totalPrice }}</span>
      </div>
    </div>
    <div class="btn">
      <div>去计算({{ total }})</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Account",
  methods: {
    // 全选
    changeAllChecked() {
      this.$store.dispatch("changeAllChecked", this.isAllChecked);
    }
  },
  computed: {
    ...mapGetters(["isAllChecked", "total", "totalPrice"])
  }
};
</script>

<style scoped lang="less">
.account {
  position: fixed;
  z-index: 9;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 6px;
  height: 48px;
  background-color: #eee;
  .check-btn {
    display: flex;
    img {
      width: 27px;
      height: 27px;
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
