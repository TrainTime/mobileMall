import request from "@/network/request";

export default {
  getCategoryNav() {
    return request({
      url: "/category",
      method: "GET"
    });
  },
  getCategoryGoodsItem(maitKey) {
    return request({
      url: `/subcategory`,
      method: "GET",
      params: {
        maitKey
      }
    });
  },
  getCategoryGoodsInfo(miniWallkey) {
    return request({
      url: `/subcategory/detail`,
      method: "GET",
      params: {
        miniWallkey,
        type: "pop"
      }
    });
  }
};
