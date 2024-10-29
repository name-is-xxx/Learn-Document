import { createApp } from "vue";
import ElementPlus from "element-plus";
// 导入 Element Plus 的 js包
// import "element-plus/dist/index.full";
// 导入 Element Plus 的 CSS 样式
import "element-plus/dist/index.css";
import App from "./App.vue";

createApp(App).use(ElementPlus).mount("#app");
