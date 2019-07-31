# vue-demo01
仿去哪儿移动端网页
==============================================
[原网页地址](http://touch.piao.qunar.com/)

[demo预览地址](https://ninthop.github.io/vue-demo/dist/index.html)

主要完成了城市切换搜索功能、主页、详情页、预订日期（日历组件）

城市数据来自饿了么

主要使用了vue-cli  3.0、vuex、axios、stylus

```
├── public
│   ├── mock                     // 模拟数据  
├── src                          
│   ├── assets                   // 字体、方法及静态资源
│   ├── common                   // 公用组件
│   ├── components               
│   │   ├──City                  // 城市页组件
│   │   ├──Detail                // 详情页组件
│   │   ├──Home                  // 首页组件
│   ├── router                   // 路由
│   ├── store                    // 状态管理
│   ├── views                    
│   |   ├── City                 // 城市页
│   |   ├── Detail               // 详情页
│   │   ├── Home                 // 首页
│   ├── App.vue
│   └── main.js
├── package.json                 // 项目依赖
└── vue.config.js                // vue-cli 3.0配置
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```