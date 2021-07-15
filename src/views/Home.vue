<template>
  <div class="banner">
    <el-carousel arrow="always" height="500px">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="bg2.jpeg" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="c">
    <div class="circle-box">
      <h2 class="title">圈子</h2>
      <el-row :gutter="24">
        <el-col :span="4" v-for="o in 6" :key="o">
          <router-link to="/">
            <div class="item">
              <i class="el-icon-lollipop"></i>
              <small>运营交流群</small>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <div class="article-box">
      <el-row>
        <el-col :span="8"><h2 class="title">最新文章</h2></el-col>
        <el-col :span="4" :offset="12" class="input-box"
          ><el-input placeholder="搜索" v-model="input" clearable> </el-input>
        </el-col>
      </el-row>

      <el-row :gutter="24">
        <el-col :span="8" v-for="o in 8" :key="o" style="margin-top: 40px">
          <el-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            />
            <div class="article-item">
              <div class="top">
                <h3>文章标题</h3>
                <el-button type="warning" size="small" round plain
                  >阅读</el-button
                >
              </div>
              <div class="middle ellipsis">
                文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容
              </div>
              <div class="bottom">
                <small>作者</small>
                <small>2021-07-15</small>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.circle-box {
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid $gray;
    border-radius: 10px;
    width: 132px;
    height: 132px;
    i {
      color: $orange;
      font-size: 48px;
    }
    small {
      margin-top: 5px;
      color: $title;
    }
  }
}
.article-box {
  margin-top: 60px;
  .input-box {
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
    height: 240px;
  }
  .article-item {
    padding: 10px 10px 15px 25px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h3 {
        color: $title;
      }
    }
    .middle {
      margin-top: 30px;
      font-size: 12px;
      color: $content;
    }
    .bottom {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      small {
        color: $content;
      }
    }
  }
  .pagination {
    margin-top: 40px;
    text-align: center;
  }
}
</style>
<style>
.article-box .el-input__inner {
  border-radius: 20px;
}
</style>
