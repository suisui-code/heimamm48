// 导入vue
import Vue from "vue";
// 导入vue-router
import VueRouter from "vue-router";
// 导入login组件
import Login from "../views/login/index.vue";
// 导入useElement 组件
import UseElement from '../views/useElement/index.vue'
// 使用vue-router
Vue.use(VueRouter);
// 创建一个新的 vue-router对象
const router = new VueRouter({
  // 添加路由规则
  routes: [
    { path: '/login', component: Login },
    { path: '/useElement', component: UseElement }
]
});
// 将新的对象暴露出去
export default router;
