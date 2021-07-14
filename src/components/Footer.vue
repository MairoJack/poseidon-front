<template>
  <footer>
    <div class="w footer-box">
      <div class="site-info">
        <ul>
          <h3>波塞冬核心功能</h3>
          <ul>
            <li><a>Create Account</a></li>
            <li><a>Go to Premium</a></li>
            <li><a>Prefer A Friend</a></li>
            <li><a>Get Coupon Code</a></li>
          </ul>
        </ul>
        <ul>
          <h3>服务与支持</h3>
          <ul>
            <li><a>Terms Condition</a></li>
            <li><a>Privacy & Policy</a></li>
            <li><a>Copyright Issue</a></li>
            <li><a>Get Help</a></li>
          </ul>
        </ul>
        <ul>
          <h3>联系我们</h3>
          <ul>
            <li><a>Become Teacher</a></li>
            <li><a>Become Student</a></li>
            <li><a>Become Both</a></li>
            <li><a>Partnership</a></li>
          </ul>
        </ul>
      </div>
      <div class="copyright"></div>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" coped>
@import "@/assets/style/theme.scss";
.router-link-active {
  color: $orange;
}
footer {
  width: 100%;
  height: 350px;
  background-color: $dark-blue;
}

.footer-box {
  width: 920px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
}
</style>
