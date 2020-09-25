<template>
  <div class="profile">
    <nav-bar class="profile-nav"><div slot="center">个人中心</div></nav-bar>
    <!--头部-->
    <div class="header">
      <div class="avatar">
        <img src="~assets/images/profile/avatar.png" alt="" />
      </div>
      <div class="login">
        <div class="title">登录 / 注册</div>
        <div class="desc">
          <img src="~assets/images/profile/phone.png" alt="" />
          <span class="txt">暂无绑定手机号</span>
        </div>
      </div>
      <div class="right-arrow">
        <img src="~assets/images/common/arrow-right.png" alt="" />
      </div>
    </div>
    <!--content主体内容-->
    <div class="content">
      <div class="info-wrap">
        <div class="info-item">
          <img src="~assets/images/profile/order.png" alt="" />
          <div class="txt">全部订单</div>
        </div>
        <div class="info-item">
          <img src="~assets/images/profile/card.png" alt="" />
          <div class="txt">待付款</div>
        </div>
        <div class="info-item">
          <img src="~assets/images/profile/car.png" alt="" />
          <div class="txt">待收货</div>
        </div>
        <div class="info-item">
          <img src="~assets/images/profile/evaluate.png" alt="" />
          <div class="txt">待评价</div>
        </div>
        <div class="info-item">
          <img src="~assets/images/profile/after-sale.png" alt="" />
          <div class="txt">售后服务</div>
        </div>
      </div>
      <ul class="like-wrap">
        <li>
          <img src="~assets/images/profile/message.png" alt="" />
          <span>我的消息</span>
        </li>
        <li>
          <img src="~assets/images/profile/pointer.png" alt="" />
          <span>积分商城</span>
        </li>
        <li>
          <img src="~assets/images/profile/vip.png" alt="" />
          <span>会员卡</span>
        </li>
      </ul>
      <ul class="like-wrap">
        <li>
          <img src="~assets/images/profile/cart.png" alt="" />
          <span>我的购物车</span>
        </li>
        <li>
          <img src="~assets/images/profile/app.png" alt="" />
          <span>下载购物APP</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Profiles",
  components: {
    NavBar,
  },
};
</script>

<style scoped lang="less">
.profile {
  height: 100%;
  background-color: #eee;
  .profile-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .header {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 97px;
    background-color: var(--color-high-text);
    .avatar {
      margin-left: 16px;
      width: 70px;
      height: 70px;
      background-color: #eee;
      border-radius: 50%;
      img {
        width: 70px;
        height: 70px;
      }
    }
    .login {
      padding-left: 20px;
      color: var(--color-background);
      .title {
        padding-bottom: 12px;
        font-size: 20px;
      }
      .desc {
        text-indent: -4px;
        img {
          width: 18px;
          height: 18px;
          vertical-align: bottom;
        }
        .txt {
          vertical-align: center;
        }
      }
    }
    .right-arrow {
      position: absolute;
      right: 10px;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .content {
    .info-wrap {
      margin-bottom: 20px;
      display: flex;
      background-color: var(--color-background);
      .info-item {
        flex: 1;
        padding-bottom: 14px;
        padding-top: 20px;
        text-align: center;
        border-right: 1px solid #eee;
        img {
          width: 25px;
          height: 25px;
        }
        .txt {
          font-size: 14px;
        }
      }
    }
    .like-wrap {
      background-color: var(--color-background);
      li {
        padding: 10px;
        border-bottom: 1px solid #eee;
        img {
          width: 20px;
          height: 20px;
          vertical-align: bottom;
        }
        span {
          margin-left: 10px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
