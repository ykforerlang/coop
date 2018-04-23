## Hello World
修改ant-pro 使其兼容ie9 以上浏览器,
使用React （v16）, redux, react-router(v4.0), css-module， mock.js

### Get Start
1. 将左边的menu配置在 /src/appConfig.js
2. npm install
3. npm start 

### 登录
1. 修改/component/login/Login 为应用的登录页
2. 点击 "登录" 按钮的时候 调用 login action。 

3. 下次进入应用的时候， 在 /src/index.js 的App组件 componentWillMount 发一个同步ajax请求获取登录态

### 路由
1. 后台页的路由 配置在 /component/layout/Content.js
2. 几个可选的路由组件
* Route react-route自带的
* MyRoute 扩展Route， 接收title， content属性， 分别渲染为Title和Content部分
* MyLoginRoute 扩展MyRoute， 当用户没有登录的时候， 跳转到登录页
* MyAuthRoute 扩展MyRoute， 当用户没有权限的时候， 跳转403

### 权限
#### 没有权限控制的后台
1. 把 /util/index.js 的menuDataHandleByAuth 方法 改为如下： 
```javascript
export function menuDataHandleByAuth(menuData, auth) {
    return menuData
}
```

2. 在 /componet/layout/Content 中使用 MyRoute或者Route 或者MyLoginRoute 即可

#### 有权限控制的后台
1. 根据应用的权限配置 修改/util/index.js 的menuDataHandleByAuth 方法， 默认提供的函数是处理权限格式如下的
```javascript
const auth = {
    // '/monitor': ['view'],   // 具有 /monitor的所有权限
    '/workplace': ['view'],    // 具有 /workplace 的查看权限
    '/basicform': [],          // 不具有任何 /basicform 的权限
    '/stepform': ['view', 'print'], // 具有 /workplace 的查看, 打印权限
}
```

2. 在  /componet/layout/Content  搭配使用 MyRoute, Route, MyLoginRoute, MyAuthRoute


### 代理
假设 server在  `http://xxx:9797`, 而我们的服务是启在3000的。 所以当我们在页面直接调用`http://xxx:9797` 是跨域的。 
需要在 package.json 加上： 
```javascript
{
    ...
    "proxy": 'http://xxx:9797',
    ...
}
```
这样当发出Api接口（类型为json）的时候， 就可以直接请求 `http://127.0.0.1:3000`了， 

### 设计
margin， padding 以及其他设计， 都参考pro
