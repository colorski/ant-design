## Technology stack
```
"antd": "^3.12.4",
"echarts": "^4.2.0-rc.2",
"echarts-for-react": "^2.0.15-beta.0",

"react": "^16.5.2",
"react-dom": "^16.5.2",
"react-redux": "^5.0.7",
"react-router-dom": "^4.3.1",
"redux": "^4.0.1",
"redux-thunk": "^2.3.0",

"underscore": "^1.9.1",
"moment": "^2.22.2",
"autoprefixer": "^9.5.0",
"classnames": "^2.2.6",

```

## Update log
```
{
  "version": "1.0.9",
  "time": "2019-04-06",
  "updates": [
    "修改路由，BrowserHistory暂时改为HashHistory，解决上线后页面的刷新问题；因BrowserHistory需要server端支持",
    "修复修改密码后跳转到登陆页的问题，区分线下和线上"
  ]
},
{
  "version": "1.0.8",
  "time": "2018-01-18",
  "updates": [
    "客户管理模块新增'联系'、'保留'、'删除'功能",
    "列表中点击客户类型可同时进行筛选"
  ]
},
{
  "version": "1.0.7",
  "time": "2018-01-17",
  "updates": [
    "优化客户管理模块的列表展示，当前登录用户点击过后置灰并本地存储当天（用户名和日期）"
  ]
},
{
  "version": "1.0.6",
  "time": "2018-01-12",
  "updates": [
    "新增客户管理模块，包括筛选和列表数据",
    "新增版本展示模块"
  ]
},
{
  "version": "1.0.5",
  "time": "2018-12-15",
  "updates": [
    "首页添加汇总模块及展示各城市数据的ECharts图表组件"
  ]
},
{
  "version": "1.0.4",
  "time": "2018-12-08",
  "updates": [
    "添加个人中心模块，包括 基本信息、联系方式、头像信息",
    "添加修改密码模块，优化登陆模块"
  ]
},
{
  "version": "1.0.3",
  "time": "2018-11-25",
  "updates": [
    "首页添加ECharts图表模块",
    "解决升级redux至v4.0.1版本后，页面报错的问题；（Redux DevTools v2.16.0 -> v2.15.5）"
  ]
},
{
  "version": "1.0.2",
  "time": "2018-11-18",
  "updates": [
    "添加工作日志模块，包括写日志和当日工作汇总数据",
    "添加剩余时间倒计时组件",
    "优化首页-简报-工作日志列表数据，获取到最新写的日志内容"
  ]
},
{
  "version": "1.0.1",
  "time": "2018-11-17",
  "updates": [
    "添加登录页",
    "添加全局的toast和confirm",
  ]
},
{
  "version": "1.0.0",
  "time": "2018-11-11",
  "updates": [
    "项目构建",
    "目录结构及页面整体结构的搭建",
    "添加首页简报和指标模块，及两个模块的数据填充",
  ]
}

```
