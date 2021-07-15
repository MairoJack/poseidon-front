<template>
  <footer>
    <div class="w footer-box">
      <div class="site-info">
        <div>
          <img src="logo1.png" />
        </div>
        <div>
          <h5>波塞冬核心功能</h5>
          <ul>
            <li><a>Create Account</a></li>
            <li><a>Go to Premium</a></li>
            <li><a>Prefer A Friend</a></li>
            <li><a>Get Coupon Code</a></li>
          </ul>
        </div>
        <div>
          <h5>服务与支持</h5>
          <ul>
            <li><a>Terms Condition</a></li>
            <li><a>Privacy & Policy</a></li>
            <li><a>Copyright Issue</a></li>
            <li><a>Get Help</a></li>
          </ul>
        </div>
        <div>
          <h5>联系我们</h5>
          <ul>
            <li><a>Become Teacher</a></li>
            <li><a>Become Student</a></li>
            <li><a>Become Both</a></li>
            <li><a>Partnership</a></li>
          </ul>
        </div>
        <div>
          <h5>扫码关注，了解更多</h5>
          <img class="qrcode" src="qrcode.png" />
        </div>
      </div>
      <div class="copyright">
        <small>Copyright© 2021 Poseidon</small>
        <a>Go to To</a>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
.router-link-active {
  color: $orange;
}
footer {
  width: 100%;
  height: 270px;
  background-color: $dark-blue;
}

.footer-box {
  width: 820px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .site-info {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    img {
      width: 160px;
      height: 70px;
    }
    h5 {
      color: $light-blue;
    }
    ul {
      margin-top: 15px;
      li {
        line-height: 25px;
      }
      a {
        color: #7e8596;
      }
    }
    .qrcode {
      margin-top: 20px;
      width: 64px;
      height: 64px;
    }
  }
  .copyright {
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    small {
      color: #e1e3e6;
      font-weight: normal;
    }
    a {
      color: #7e8596;
    }
  }
}
</style>
