<template>
  <header class="w header-box">
    <h1>
      <router-link to="/" title="Poseidon"></router-link>
    </h1>
    <p>登录</p>
  </header>
  <main class="main">
    <div class="left-box">
      <img src="icon/cm.png" />
      <h1>Poseidon</h1>
      <p>Guard your cross-border journey. 守护你的跨境之旅</p>
    </div>
    <el-form
      v-if="isLogin"
      class="right-box"
      :model="loginForm"
      :rules="rules"
      ref="validateForm"
      label-width="0px"
      style="height: 400px"
    >
      <p>登录</p>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名">
          <template #prepend>
            <el-button icon="el-icon-user"></el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
          show-password
          @keyup.enter="submitForm()"
        >
          <template #prepend>
            <el-button icon="el-icon-lock"></el-button>
          </template>
        </el-input>
      </el-form-item>
      <div class="login-btn">
        <el-button :loading="loading" type="primary" @click="submitForm()"
          >登录</el-button
        >
        <a>忘记密码</a>
      </div>
      <el-divider><span class="or">或</span></el-divider>
      <p class="register">
        还没注册？
        <a @click="changeLogin">注册</a>
      </p>
    </el-form>
    <el-form
      v-else
      class="right-box"
      :model="loginForm"
      :rules="rules"
      ref="validateForm"
      label-width="0px"
    >
      <p>注册</p>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名">
          <template #prepend>
            <el-button icon="el-icon-user"></el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
          show-password
        >
          <template #prepend>
            <el-button icon="el-icon-lock"></el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          placeholder="请输入确认密码"
          v-model="loginForm.password"
          show-password
        >
          <template #prepend>
            <el-button icon="el-icon-lock"></el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="aggre">
        <el-checkbox v-model="isAggre"
          >我已阅读并同意遵守 法律声明 和 隐私条款</el-checkbox
        >
      </el-form-item>
      <div class="login-btn">
        <el-button :loading="loading" type="primary" @click="submitForm()"
          >注册</el-button
        >
      </div>
      <el-divider><span class="or">或</span></el-divider>
      <p class="register">
        已有账户?
        <a @click="changeLogin">登录</a>
      </p>
    </el-form>
  </main>
</template>

<script>
import { reactive, toRefs, ref } from "vue";

export default {
  setup() {
    const validateForm = ref(null);
    const state = reactive({
      loading: false,
      loginForm: {
        username: "",
        password: "",
      },
      isAggre: false,
      isLogin: true,
    });
    const rules = {
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
      ],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };

    const changeLogin = () => {
      state.loginForm.username = "";
      state.loginForm.password = "";
      state.isLogin = !state.isLogin;
    };
    return {
      ...toRefs(state),
      rules,
      changeLogin,
    };
  },
};
</script>

<style lang="scss" scoped>
.header-box {
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
  h1 {
    margin-left: 60px;
    > a {
      background: url(@/assets/logo.png);
      background-size: cover;
      display: block;
      width: 140px;
      height: 50px;
    }
  }
  p {
    color: $dark-blue;
    font-size: 24px;
  }
}
.main {
  height: calc(100vh - 80px);
  background-color: $dark-blue;
  display: flex;
  justify-content: space-around;
  .left-box {
    margin-top: 80px;
    text-align: center;
    color: white;
    h1 {
      font-size: 56px;
    }
    p {
      margin-top: 50px;
      font-size: 18px;
    }
  }
  .right-box {
    padding: 30px;
    margin-top: 60px;
    border-radius: 5px;
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
    background-color: white;
    width: 400px;
    height: 500px;
    > p {
      color: $content;
      font-size: 24px;
      margin-bottom: 25px;
    }
    .login-btn {
      margin-top: 40px;
      button {
        margin-bottom: 5px;
        width: 100%;
      }
    }
    .or {
      color: #ccc;
    }
    .register {
      text-align: center;
      color: #ccc;
      font-size: 14px;
      a {
        font-size: 16px;
      }
    }
  }
}
</style>
