<template>
  <!-- 添加一个对话框 -->
  <el-dialog class="reg_dialog" title="用户注册" :visible.sync="dialogFormVisible">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item prop="nikeName" label="昵称" :label-width="formLabelWidth">
        <el-input v-model="form.nikeName" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item prop="email" label="邮箱" :label-width="formLabelWidth">
        <el-input v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item prop="phone" label="手机" :label-width="formLabelWidth">
        <el-input v-model="form.phone" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item prop="password" label="密码" :label-width="formLabelWidth">
        <el-input v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item prop="code" label="图形码" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="17">
            <el-input v-model="form.code" autocomplete="off"></el-input>
          </el-col>
          <el-col class="imgBox" :span="7">
            <img class="codeImg" src="../../../assets/login_captcha.png" alt />
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item prop="loginCode" label="验证码" :label-width="formLabelWidth">
        <el-row>
          <el-col :span="17">
            <el-input v-model="form.loginCode" autocomplete="off"></el-input>
          </el-col>
          <el-col class="btnBox" :span="7">
            <el-button class="reg_btn">获取用户验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="onsubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      // 控制对话框的显示与隐藏
      dialogFormVisible: false,
      // 说明文本的宽度
      formLabelWidth: "67px",
      // form 的数据源
      form: {
        nikeName: "",
        email: "",
        phone: "",
        password: "",
        code: "",
        loginCode: ""
      },
      rules: {
        nikeName: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],

        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "长度在 11个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "长度4个字符", trigger: "blur" }
        ],
        loginCode: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 6, max: 6, message: "长度6个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onsubmit() {
      //  验证参数的合法性
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
.reg_dialog {
  .el-dialog__header {
    text-align: center;
    padding: 0;
    height: 53px;
    line-height: 53px;
    // 设置背景渐变色
    background: linear-gradient(to right, #01c5fb, #1198f7);
    .el-dialog__title {
      color: #fff;
    }
  }
  .imgBox {
    //   width: 143px;
    height: 41px;
    text-align: right;
    .codeImg {
      width: 143px;
      height: 41px;
    }
  }
  .btnBox {
    height: 41px;
    text-align: right;
  }
  .dialog-footer {
    text-align: center;
  }
}
</style>