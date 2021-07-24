<template>
  <div class="w header-box">
    <h1>
      <router-link to="/" title="Poseidon"></router-link>
    </h1>
    <p>{{ isLogin ? "登录" : "注册" }}</p>
  </div>
  <main class="main">
    <div class="left-box">
      <img src="icon/cm.png" />
      <h1>Poseidon</h1>
      <p>Guard your cross-border journey. 守护你的跨境之旅</p>
    </div>
    <el-form
      v-if="isLogin"
      :model="loginForm"
      :rules="rules"
      ref="validateForm"
      label-width="0px"
      class="right-box"
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
        <el-button :loading="loading" type="primary" @click="handleLogin()"
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
      <el-form-item prop="checkPass">
        <el-input
          type="password"
          placeholder="请输入确认密码"
          v-model="loginForm.checkPass"
          show-password
        >
          <template #prepend>
            <el-button icon="el-icon-lock"></el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox
          v-model="loginForm.agree"
          label="我已阅读并同意遵守 法律声明 和 隐私条款"
        ></el-checkbox>
      </el-form-item>
      <div class="login-btn">
        <el-button :loading="loading" type="primary" @click="handleRegister()"
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
import { login, register } from "@/api/index.js";
import { reactive, toRefs, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    const validateForm = ref(null);
    const state = reactive({
      loading: false,
      loginForm: {
        username: "",
        password: "",
        checkPass: "",
        agree: [],
      },

      isLogin: true,
    });

    var validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== state.loginForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const rules = {
      username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      checkPass: [{ validator: validateCheckPass, trigger: "blur" }],
      agree: [
        {
          type: "array",
          required: true,
          message: "请勾选并同意",
          trigger: "change",
        },
      ],
    };

    const changeLogin = () => {
      validateForm.value.resetFields();
      state.isLogin = !state.isLogin;
    };

    const handleLogin = async () => {
      state.loading = true;
      try {
        await validateForm.value.validate();
        const res = await login(state.loginForm);
        store.commit("SET_TOKEN", res);
        router.push(route.query.redirect || "/");
      } finally {
        state.loading = false;
      }
    };
    const handleRegister = async () => {
      state.loading = true;
      try {
        await validateForm.value.validate();
        const res = await register(state.loginForm);
        state.isLogin = true;
      } finally {
        state.loading = false;
      }
    };
    return {
      ...toRefs(state),
      rules,
      validateForm,
      changeLogin,
      handleLogin,
      handleRegister,
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
  min-height: 500px;
  height: calc(100vh - 80px);
  background-color: $dark-blue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left-box {
    margin-top: 80px;
    text-align: center;
    color: white;
    h1 {
      font-size: 56px;
    }
    p {
      margin-top: 20px;
      font-size: 18px;
    }
  }
  .right-box {
    padding: 20px 30px 0 30px;
    margin-top: 30px;
    border-radius: 5px;
    box-shadow: 0 3px 10px 0 rgb(0 0 0 / 14%);
    background-color: white;
    width: 400px;
    > p {
      color: $content;
      font-size: 24px;
      margin-bottom: 15px;
    }
    .login-btn {
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
