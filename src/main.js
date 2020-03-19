//整个项目的入口文件
// 导入vue
import Vue from "vue";
// 导入Vue 根组件
import App from "./App.vue";
// 导入router
import router from "./router";
// 导入elementui
import Element from 'element-ui'
// 导入 elementui样式(可以官网复制粘贴)
import 'element-ui/lib/theme-chalk/index.css';

// 使用element
Vue.use(Element)
Vue.config.productionTip = false;
// 创建了一个新的vue实例
new Vue({
  router: router, //将路由对象挂载到Vue实例中
  render: h => h(App) //将根组件内容渲染到APP.vue中
}).$mount("#app");
