import request from "@/network/request";

export default {
  // 商品详情页数据
  getDetailInfo(iid) {
    return request({
      url: "/detail",
      method: "GET",
      params: {
        iid
      }
    });
  },
  // 商品推荐列表
  getRecommend() {
    return request({
      url: "/recommend",
      method: "GET"
    });
  }
};
