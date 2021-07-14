<template>
  <header>
    <div class="w header-box">
      <div class="nav-logo">
        <h1>
          <router-link to="/" title="Poseidon"></router-link>
        </h1>
      </div>
      <div class="right-box">
        <div class="nav-list">
          <router-link to="/home" title="首页">首页</router-link>
          <router-link to="/college" title="海神学院">海神学院</router-link>
          <router-link to="/service" title="海神服务">海神服务</router-link>
          <router-link to="/lecture" title="活动讲座">活动讲座</router-link>
          <router-link to="/answer" title="回答">回答</router-link>
          <router-link to="/user" title="会员" style="width: 40px"
            >会员</router-link
          >
        </div>
        <div class="nav-aside">
          <i class="el-icon-user-solid"></i>
          <router-link to="/login" title="登录">登录</router-link>
          |
          <router-link to="/login" title="注册">注册</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script></script>

<style lang="scss" coped>
@import "@/assets/style/theme.scss";
.router-link-active {
  color: $orange;
}
header {
  width: 100%;
  height: 80px;
}

.header-box {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin-left: 60px;
    > a {
      background: url(@/assets/logo.png);
      background-size: cover;
      display: block;
      width: 160px;
      height: 50px;
    }
  }
  .right-box {
    display: flex;
  }
  .nav-list {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      width: 70px;
      text-align: center;
      display: block;
      font-size: 12px;
    }
  }
  .nav-aside {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    i {
      margin-top: 2px;
      font-size: 12px;
      color: $orange;
    }
    a {
      text-align: center;
      width: 30px;
      display: block;
      font-weight: bold;
      font-size: 12px;
    }
  }
}
</style>
