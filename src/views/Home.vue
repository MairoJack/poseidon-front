<template>
  <div class="banner">
    <el-carousel arrow="always" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="bg1.png" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="circle"></div>
  <div class="article"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
