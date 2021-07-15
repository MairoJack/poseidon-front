<template>
  <div class="banner">
    <img src="bg3.png" style="height: 400px" />
  </div>
  <div class="c colleg-box">
    <h2 class="title">推荐课程</h2>
    <el-row :gutter="16">
      <el-col :span="6" v-for="o in 4" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <div class="colleg-item">
            <div class="top">
              <h3>亚马逊基础课程</h3>
              <p>
                <span>
                  波塞冬将系统性的提供关于亚马逊的所有课程，包括基础课程，进阶课程，以及精品化的课程。帮助客户打造好跨境出海的结实基础
                </span>
              </p>
              <div></div>
            </div>
            <div class="middle">
              <h3>学习目标</h3>
              <p>
                波塞冬将系统性的提供关于亚马逊的所有课程，包括基础课程，进阶课程，以及精品化的课程。帮助客户打造好跨境出海的结实基础
              </p>
              <h3>学习形式</h3>
              <p>
                波塞冬将系统性的提供关于亚马逊的所有课程，包括基础课程，进阶课程，以及精品化的课程。帮助客户打造好跨境出海的结实基础
              </p>
              <h3>课程内容</h3>
              <p>
                波塞冬将系统性的提供关于亚马逊的所有课程，包括基础课程，进阶课程，以及精品化的课程。帮助客户打造好跨境出海的结实基础
              </p>
              <h3>课程服务</h3>
              <p>
                波塞冬将系统性的提供关于亚马逊的所有课程，包括基础课程，进阶课程，以及精品化的课程。帮助客户打造好跨境出海的结实基础
              </p>
            </div>
            <div class="bottom">
              <el-button type="warning" round plain>了解课程</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.colleg-box {
  margin-top: 30px;
  h2 {
    font-size: 30px;
  }
  .colleg-item {
    .top {
      height: 180px;
      background-color: #01173b;
      padding: 15px;
      position: relative;
      h3 {
        position: absolute;
        top: 60px;
        font-size: 14px;
        color: #edeef2;
      }
      p {
        position: absolute;
        bottom: 15px;
        padding-right: 15px;
        color: #6b778d;
      }
      div {
        position: absolute;
        top: 20px;
        right: 20px;
        border-radius: 56px;
        width: 56px;
        height: 56px;
        background-color: $dark-blue;
        border: 10px solid #627086;
      }
    }
    .middle {
      padding: 15px;
      h3 {
        margin-top: 20px;
        font-size: 14px;
        color: #475774;
      }
      p {
        margin-top: 10px;
        color: #999a9b;
      }
    }
    .bottom {
      margin: 15px 0 30px 0;
      text-align: center;
    }
  }
}
</style>
