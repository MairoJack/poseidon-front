<template>
  <div class="banner">
    <img src="bg4.png" style="height: 400px" />
  </div>
  <div class="c service-box">
    <el-row :gutter="32">
      <el-col :span="8">
        <div class="service-item">
          <div class="top">
            <img src="icon/znsj.png" />
            <h3>智能数据</h3>
          </div>
          <div class="middle">
            <h3>·数据分析选品</h3>
            <h3>·ERP管理平台</h3>
            <h3>·站外推广平台</h3>
            <h3>·华为云服务器</h3>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div
          class="service-item"
          style="background-color: #e3f5fd; color: #7fcef1"
        >
          <div class="top">
            <img src="icon/tp.png" />
            <h3>法务税务</h3>
          </div>
          <div class="middle">
            <h3>·数据分析选品</h3>
            <h3>·ERP管理平台</h3>
            <h3>·站外推广平台</h3>
            <h3>·华为云服务器</h3>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div
          class="service-item"
          style="background-color: #fce6d7; color: #ec6321"
        >
          <div class="top">
            <img src="icon/ck.png" />
            <h3>海外仓库</h3>
          </div>
          <div class="middle">
            <h3>·数据分析选品</h3>
            <h3>·ERP管理平台</h3>
            <h3>·站外推广平台</h3>
            <h3>·华为云服务器</h3>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.service-box {
  width: 680px;
  margin-top: 30px;
  .service-item {
    margin-top: 20px;
    text-align: center;
    background-color: #cdd4db;
    padding: 40px 0 60px 0;
    color: #475778;
    border-radius: 10px;
    .top {
      h3 {
        font-size: 14px;
      }
    }
    .middle {
      padding: 20px 15px;
      h3 {
        font-weight: normal;
        margin-top: 20px;
        font-size: 16px;
      }
    }
  }
}
</style>
