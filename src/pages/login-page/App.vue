<template>
  <div>
    <div class="login-container">
      <p class="title">不忘笔记</p>
      <p class="desc">大脑用来思考，记忆交给这儿</p>
      <input
        type="email"
        v-model="email"
        placeholder="邮箱"
        class="email-input"
      />
      <input
        type="password"
        v-model="password"
        placeholder="密码"
        class="password-input"
      />
      <input
        type="password"
        v-if="state === 'register'"
        v-model="rePassword"
        placeholder="确认密码"
        class="password-input"
      />

      <div
        class="btn"
        :class="[btnActive ? 'active-btn' : 'inactive-btn']"
        v-if="state === 'login'"
        @click="loginClick"
      >
        登录
      </div>
      <div
        class="btn"
        :class="[btnActive ? 'active-btn' : 'inactive-btn']"
        v-if="state === 'register'"
        @click="registerClick"
      >
        注册
      </div>

      <div
        class="change-btn"
        v-show="state === 'login'"
        @click="changeState('register')"
      >
        我没有账号，去注册
      </div>
      <div
        class="change-btn"
        v-if="state === 'register'"
        @click="changeState('login')"
      >
        我已经有账号，去登录
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

import ajax from "../../utils/ajax.js";

export default {
  data() {
    return {
      state: "login",
      email: "",
      password: "",
      rePassword: ""
    };
  },
  computed: {
    btnActive() {
      let result = false;
      if (
        this.email &&
        String(this.email).length > 0 &&
        this.password &&
        String(this.password).length > 0
      ) {
        result = true;
      }
      return result;
    }
  },
  props: {},
  methods: {
    // 点击了【登录接口】
    async loginClick() {
      if (this.btnActive === false) {
        return false;
      }

      let passwordOk = this.checkPassword();
      let emailOk = this.checkEmail();

      if (!passwordOk || !emailOk) {
        return false;
      }

      let params = {
        email: this.email,
        password: this.password
      };
      ajax("POST", "login", params).then(({ data: result }) => {
        // 错误1：用户还没有注册
        if (!result.success && Number(result.err_code) === 1) {
          Toast("您的账号还没有注册，请注册哦");

          this.state = "register";
          this.password = "";
          this.rePassword = "";
          return false;
        }

        // 错误2：其他报错
        if (!result.success) {
          Toast(result.message || '请求失败了');
          return false;
        }

        Toast(result.message || "登录成功咯");

        window.location.href = "/buwang_h5/index.html";
      });
    },
    // 点击了【注册按钮】
    async registerClick() {
      if (this.btnActive === false) {
        return false;
      }
      let passwordOk = this.checkPassword();
      let emailOk = this.checkEmail();

      if (!passwordOk || !emailOk) {
        return false;
      }

      let params = {
        email: this.email,
        password: this.password
      };

      await ajax("POST", "register", params).then(result => {
        // 错误2：其他报错
        if (!result.success) {
          Toast(result.message);
          return false;
        }

        Toast("注册成功咯~");

        window.location.href = "/buwang_h5/index.html";
      });
    },
    changeState(text) {
      this.state = text;
    },
    // 校验邮箱
    checkEmail() {
      // 是否输入了密码
      if (!this.email) {
        Toast("请输入邮箱哦~");
        return false;
      }

      let re = /^\w+@[a-z0-9]+\.[a-z]+$/i;

      if (!re.test(this.email)) {
        Toast("邮箱格式不正确，请检查哦~");
        return false;
      } else {
        return true;
      }
    },
    /**
     * 校验密码
     * @returns {boolean}
     */
    checkPassword() {
      // 是否输入了密码
      if (!this.password) {
        Toast("请输入密码哦~");
        return false;
      }

      // 密码长度
      if (
        String(this.password).length < 6 ||
        String(this.password).length > 32
      ) {
        Toast("密码长度应该在6~32位之间~");
        return false;
      }

      // 密码格式
      var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
      if (!reg.test(this.password)) {
        Toast("密码必须包含至少一位数字和一位字母哦");
        return false;
      }

      // 对比两次输入密码
      if (this.state === "register" && this.password !== this.rePassword) {
        Toast("两次密码不一样");
        return false;
      }

      return true;
    }
  }
};
</script>

<style scoped lang="less">
.login-container {
  width: 319px;
  height: 421px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  .logo {
    width: 107px;
    height: 90px;
    display: block;
    margin: 0 auto;
  }
  .title {
    font-family: PingFangSC-Medium;
    font-size: 32px;
    color: #161616;
    letter-spacing: 0;
    margin-top: 8px;
    width: 100%;
    text-align: center;
  }
  .desc {
    font-family: PingFangSC-Light;
    font-size: 17px;
    color: #a7a7a7;
    letter-spacing: 0;
    margin-top: 2px;
    width: 100%;
    text-align: center;
  }
  .email-input {
    display: block;
    width: 319px;
    height: 44px;
    margin: 22px auto;
    margin-bottom: 0;
    padding: 14px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #f0f1f1;
    line-height: 44px;
  }
  .password-input {
    display: block;
    width: 319px;
    height: 44px;
    margin: 16px auto;
    margin-bottom: 0;
    padding: 14px;
    box-sizing: border-box;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #f0f1f1;
    line-height: 44px;
  }
  .email-input:focus {
    border: 1px solid #4d93fc;
  }
  .password-input:focus {
    border: 1px solid #4d93fc;
  }
  .btn {
    display: block;
    width: 319px;
    height: 44px;
    margin: 18px auto;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bolder;
  }
  .active-btn {
    background-color: #257cff;
  }
  .inactive-btn {
    background-color: #a1a7af;
  }
  .change-btn {
    font-family: PingFangSC-Light;
    font-size: 13px;
    color: #257cff;
    letter-spacing: 0;
    margin: 15px auto;
    margin-bottom: 0;
    text-align: center;
    width: 100%;
  }
}
</style>
