<template>
  <div class="banner">
    <img src="bg5.png" style="height: 400px" />
  </div>
  <el-row class="main-lecture">
    <el-col :span="14">
      <img src="lecture.png" style="height: 400px" />
    </el-col>
    <el-col :span="9" :offset="1">
      <p>活动主题</p>
      <h1>活动名称</h1>
      <p class="address">活动时间，地点</p>
      <ul>
        <li>亮点</li>
        <li>亮点</li>
        <li>亮点</li>
        <li>亮点</li>
        <li>亮点</li>
        <li>亮点</li>
      </ul>
    </el-col>
  </el-row>
  <el-row class="c lecture-nav">
    <el-col :span="2">
      <h3 class="title" @click="handleSearch(-1)">全部</h3>
    </el-col>
    <el-col :span="18">
      <ul>
        <li v-for="(item, index) in sites" :key="index">
          <a
            :class="{ checked: index === selectedSite }"
            @click="handleSearch(index)"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </el-col>
    <el-col :span="4" class="more">
      <i class="el-icon-back left"></i>
      <i class="el-icon-right right"></i>
    </el-col>
  </el-row>
  <div class="c lecture-box" v-loading="loading">
    <div
      class="item"
      v-for="item in list"
      :key="item.id"
      :style="{
        backgroundImage: 'url(' + imagePrefix + item.mainImage + ')',
      }"
    >
      <div class="left">
        <h3>{{ item.name }}</h3>
        <p>{{ item.date }}</p>
      </div>
      <el-button class="right" type="warning" size="mini" round>更多</el-button>
    </div>
  </div>
  <el-empty v-if="list.length <= 0" description="暂无数据"></el-empty>
  <div class="pagination">
    <el-pagination
      background
      layout="prev, pager, next"
      :current-page="pager.current"
      :total="pager.total"
      :page-size="15"
      @current-change="handlePageChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getLecturePage } from "@/api/index.js";
import { reactive, onMounted, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      list: [],
      pager: {
        current: 1,
        total: 0,
      },
      query: {
        name: "",
        site: "",
      },
      loading: false,
      imagePrefix: `${import.meta.env.VITE_APP_IMAGE_PREFIX}`,
      sites: ["amazon", "shopee", "lazada", "wish", "alibaba"],
      selectedSite: -1,
    });

    onMounted(() => {
      fetchData();
    });

    const fetchData = () => {
      state.loading = true;
      getLecturePage(state.query).then((res) => {
        state.list = res.records;
        state.pager.total = res.total;
      });
      state.loading = false;
    };

    const handleSearch = (index) => {
      state.selectedSite = index;
      if (index !== -1) {
        state.query.site = state.sites[index];
      } else {
        state.query.site = "";
      }
      fetchData();
    };

    const handlePageChange = (val) => {
      state.current = val;
      fetchData();
    };

    return {
      ...toRefs(state),
      handleSearch,
      handlePageChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-lecture {
  margin-top: 50px;
  line-height: 55px;
  img {
    width: 100%;
  }
  p {
    color: $title;
    font-size: 30px;
  }
  h1 {
    color: $dark-blue;
    font-size: 40px;
  }
  .address {
    color: $orange;
  }
  ul {
    margin-top: 20px;
    line-height: 35px;
    color: $title;
    padding-left: 15px;
  }
}

.lecture-nav {
  width: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    li {
      margin: 0 10px;
      display: inline;
      a {
        color: $orange;
        font-size: 20px;
        &:hover {
          color: $dark-blue;
        }
      }
      .checked {
        color: $dark-blue;
      }
    }
  }
  .more {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .left {
      font-size: 25px;
      color: $gray;
    }
    .right {
      font-size: 35px;
    }
  }
}

.lecture-box {
  display: grid;
  width: 1110px;
  grid-template-columns: repeat(5, 20%);
  .item {
    background-size: 100% 100%;
    border-radius: 10px;
    height: 280px;
    margin: 0 15px 35px 15px;
    display: flex;
    position: relative;
    .left {
      position: absolute;
      left: 15px;
      bottom: 15px;
      h3 {
        font-weight: normal;
        font-size: 14px;
        color: #fff;
      }
      p {
        color: #bbbcbd;
      }
    }
    .right {
      background-color: $orange;
      border-color: $orange;
      position: absolute;
      bottom: 20px;
      right: 15px;
      font-weight: normal;
    }
  }
}
.pagination {
  text-align: center;
}
</style>
