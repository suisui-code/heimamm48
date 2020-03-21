<template>
  <div>
    <!-- 添加一个对话框 -->
    <el-dialog class="reg_dialog" title="用户注册" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="图形码" :label-width="formLabelWidth">
          <el-row>
            <el-col :span="17">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-col>
            <el-col class="imgBox" :span="7">
              <img class="codeImg" src="../../../assets/login_captcha.png" alt />
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item label="验证码" :label-width="formLabelWidth">
          <el-row>
            <el-col :span="17">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-col>
            <el-col class="btnBox" :span="7">
              <el-button class="reg_btn">获取用户验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
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
        name: "",
        region: ""
      }
    };
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
  .btnBox{
        height: 41px;
    text-align: right;
    
  }
 .dialog-footer{
     text-align: center;
 }
}
</style>