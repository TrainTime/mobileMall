// import {  } from "@/api";

const state = {
  shopCartList: []
};

const mutations = {
  ADDTOSHOPCART(state, shopCartList) {
    state.shopCartList = shopCartList;
  }
};

const actions = {
  // 加入购物车
  addToShopCart({ commit, state }, goods) {
    let shopCartList = [...state.shopCartList];
    let oldGoods = shopCartList.find(item => item.iid === goods.iid);
    if (oldGoods) {
      oldGoods.count += 1;
    } else {
      goods.count = 1;
      goods.isChecked = true;
      shopCartList.push(goods);
    }
    commit("ADDTOSHOPCART", shopCartList);
  },
  // 单选状态更新
  updateIsChecked({ commit, state }, iid) {
    let shopCartList = [...state.shopCartList];
    shopCartList.forEach(item => {
      if (item.iid === iid) {
        item.isChecked = !item.isChecked;
      }
    });
    commit("ADDTOSHOPCART", shopCartList);
  },
  // 商品数量更新
  updateCount({ commit, state }, { iid, flag }) {
    let shopCartList = [...state.shopCartList];
    // console.log(iid, flag);
    shopCartList.forEach(item => {
      if (item.iid === iid) {
        item.count += flag;
      }
      if (item.count < 1) {
        item.count = 1;
      }
    });
    commit("ADDTOSHOPCART", shopCartList);
  },
  // 全选状态更新
  changeAllChecked({ commit, state }, isAllChecked) {
    let shopCartList = [...state.shopCartList];
    shopCartList.forEach(item => (item.isChecked = !isAllChecked));
    commit("ADDTOSHOPCART", shopCartList);
  }
};

const getters = {
  // 全选状态
  isAllChecked(state) {
    if (state.shopCartList.length) {
      return state.shopCartList.every(item => item.isChecked === true);
    } else {
      return false;
    }
  },
  // 总数
  total(state) {
    let totalList = state.shopCartList.filter(item => item.isChecked === true);
    return totalList.length;
  },
  // 总价
  totalPrice() {
    let totalList = state.shopCartList.filter(item => item.isChecked === true);
    let totalPrice = 0;
    totalList.forEach(item => {
      totalPrice += item.price * item.count;
    });
    return totalPrice;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
