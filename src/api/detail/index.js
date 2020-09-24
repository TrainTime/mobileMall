import request from "@/network/request";

export default {
  getDetailInfo(iid) {
    return request({
      url: "/detail",
      method: "GET",
      params: {
        iid
      }
    });
  },
  getRecommend() {
    return request({
      url: "/recommend",
      method: "GET"
    });
  }
};
