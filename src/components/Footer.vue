<template>
  <footer>
    <div class="w footer-box">
      <div class="site-info"></div>
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
  justify-content: space-between;
  align-items: center;
  background-color: green;
}
</style>
