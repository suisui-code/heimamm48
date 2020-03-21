<template>
  <div class="login">
    <div class="leftbox">
      <div class="title">
        <img class="titleimg" src="../../assets/title-logo.png" alt />
        <span class="titlename">黑马面面</span>
        <span class="titleline"></span>
        <span class="titlelogin">用户登录</span>
      </div>
      <!-- 使用表单元素完成结构 -->
      <el-form :rules="rules" class="loginForm" ref="form" :model="form" label-width="0px">
        <el-form-item prop="phone">
          <el-input prefix-icon="el-icon-user" placeholder="请输入手机号" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="form.password"></el-input>
        </el-form-item>
        <!-- 使用栅格系统来添加内容 -->
        <el-form-item  prop="loginCode">
          <el-row>
            <el-col :span="16">
              <el-input prefix-icon="el-icon-key" placeholder="请输入验证码" v-model="form.loginCode"></el-input>
            </el-col>
            <el-col :span="8">
              <!-- 图片太大单独改样式 -->
              <img class="loginCode" src="../../assets/login_captcha.png" alt />
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 多选框 -->
        <el-form-item class="checboxheight" prop="isCheck">
          <el-checkbox v-model="form.isCheck">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <!-- 一个按钮放单独的表单域中 -->
          <el-button class="loginBtn" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
        <el-form-item>
          <!-- 一个按钮放单独的表单域中 -->
          <el-button class="loginBtn" type="primary">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img class="rightimg" src="../../assets/login_banner_ele.png" alt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        // 手机号
        phone: "",
        // 密码
        password: "",
        // 验证码
        loginCode: "",
        // 是否阅读
        isCheck: [],
        // /添加一个验证属性
      },
      rules: {
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          // { min: 5, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        loginCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "长度4个字符", trigger: "blur" }
        ],
        isCheck:[
          { type: 'array', required: true, message: '请勾选', trigger: 'change' }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // alert('验证成功');
          this.$message("验证成功");
        } else {
          // window.console.log('验证失败');
          this.$message("验证失败");
          // return false;
        }
      });
    }
  }
};
</script>

<style lang="less">
.login {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(1, 198, 250, 1),
    rgba(20, 147, 250, 1)
  );
  /* 使用flex 布局 */
  display: flex;
  /* 左右间隔相等 */
  justify-content: space-around;
  /* 上下对齐 */
  align-items: center;
  .leftbox {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding: 48px 42px 86px;
    /* padding 不会计入盒子的宽高中 */
    box-sizing: border-box;
    .title {
      display: flex;
      //  上下对齐
      align-items: center;
      .titleimg {
        width: 22px;
        height: 17px;
      }
      .titlename {
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
        margin-left: 16px;
        margin-right: 14px;
      }
      .titleline {
        width: 1px;
        height: 28px;
        background: rgba(199, 199, 199, 1);
        margin-right: 12px;
      }
      .titlelogin {
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
    .loginForm {
      margin-top: 29px;
    }
    .loginCode {
      width: 100%;
      height: 40px;
    }
    .checboxheigh {
      .el-form-item__content {
        line-height: 20px;
      }
    }
    .loginBtn {
      width: 100%;
    }
  }
  .rightimg {
    width: 633px;
    height: 435px;
  }
}
</style>