# vue-api-webpack

> 基于webpack4.x多页面打包，apicloud调用原生api。

# -介绍
>1、采用多页vue应用结合apicloud调用原生的能力,完成hybrid混合APP.<br/>
2、将一些原生与网页端的方法封装(传参数,页面转场),使得应用可以在浏览器中方便的调试.<br/>
3、hot reload使得开发更迅速、更高效.<br/>
4、组件化开发，海量模块呼之即来。

## -多页应用

>1、页面切换采用原生转场,如丝般的顺滑,但切换效果受框架限制,vue-router路由是不能用了;<br/>
2、页面传递数据通过原生api来实现,非父子页面数据传递则通过广播来实现,相对于状态机而言会繁琐的多;<br/>
3、在中大型项目中,不会出现因页面数据加载过多而影响渲染效率、造成页面卡顿的情况出现.尤其是在低端安卓机上尤为明显;


### 目录结构说明
``` bash
├─build //webpack编译配置
├─config //vue项目打包配置
├─widget //项目打包输出目录,也是上传至apicloud进行云编译的目录
├─src //源码目录
│  ├─assets //资源文件
│  ├─common //存放公用vue组建
|  |  ├─core //apicloud封装核心代码
|  |  ├─extends //扩展库
│  ├─components //存放公用vue组建
│  ├─pages //各个页面
└─public //模板文件及其他文件
```
多页配置主要是在build/webpack.base.js文件里,自动扫描/src/pages/下的文件所有入口文件（包括子目录的）.<br/>
注意：这里的入口文件与vue文件名字必须一致。


### Build Setup

``` bash
# 安装依赖
npm install

# 构建dll文件，加快编译速度
npm run build:dll

# 开发模式，热更新
npm run dev

# 应用打包
npm run build

```