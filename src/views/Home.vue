<template>
  <div class="banner">
    <el-carousel arrow="always" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="bg2.jpeg" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="circle"></div>
  <div class="article"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
