<template>
  <ul class="goodsInfo">
    <li
      v-for="(good, index) in goodsInfo"
      :key="index"
      @click="toDetail(good.iid)"
    >
      <img
        :src="good.img ? good.img : good.image"
        :class="good.img ? 'category' : 'detail'"
        @load="imgLoad"
      />
      <span>{{ good.title }}</span>
      <div class="info">
        <span class="price">¥{{ good.price }}</span>
        <img class="icon" src="../../assets/images/common/favor.png" />
        <span>{{ good.cfav }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "GoodsInfo",
  props: ["goodsInfo"],
  methods: {
    // 跳转详情页
    toDetail(iid) {
      this.$router.push("/detail?iid=" + iid);
    },
    imgLoad() {
      this.$emit("iamgeLoad");
    }
  }
};
</script>

<style lang="less" scoped>
.goodsInfo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px;
  li {
    font-size: 14px;
    width: 49%;
    display: flex;
    flex-direction: column;
    .category {
      height: 183px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    .detail {
      height: 264px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .info {
    text-align: center;
    margin-bottom: 10px;
    .price {
      color: var(--color-tint);
    }
    .icon {
      width: 15px;
      height: 15px;
      margin: 0 5px;
      vertical-align: bottom;
    }
  }
}
</style>
