[![Build Status](https://travis-ci.org/VisualCrew/d3js.org.cn.svg?branch=hueidou)](https://travis-ci.org/VisualCrew/d3js.org.cn)
[![Dependencies Status](https://david-dm.org/VisualCrew/d3js.org.cn.svg)](https://david-dm.org/VisualCrew/d3js.org.cn)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/VisualCrew/d3js.org.cn?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# d3js.org.cn(D3中文网)

## 主题

> 以D3为主的数据可视化社区

## 功能

* 核心资料

>
1. D3 API中文版
2. D3 教程
3. D3 Demo示例

* 学习分享

>
1. D3的相关笔记信息
2. 在数据可视化方面的经验之谈
3. 作品展示

* 话题讨论

>
1. D3话题讨论区（开放给大家的一个答疑区，让更多的人参与讨论即类似stackoverflow跟话题讨论结合）

* 行业新闻

>
1. D3数据可视化的发展趋势可视化呈现
2. 数据新闻区域（类似于36氪、36大数据方面的简单新闻区域。介绍一些大数据动向方面的东西，开放投稿功能等）
3. D3做的一些应用统计信息模块。例如做一些报告分析区域（友盟指数），或做一些简单的类似talkingdata的分析功能，做这些一部分是为了宣传我们这边，另一方面是调动大家的积极性，去做一些创新



## 域名/空间

* 域名 

>
1. d3cn.org
2. www.d3chart.com
3. d3china.org
4. d3studio.cn, d3visio.com

* 空间

>
1. 建议linode，因为有些d3 demo程序需要后端支持，还是vps或云主机比较好，不过国内云主机感觉麻烦事太多，国外的又各种速度慢
2. aws

## 产品设计

*  建议定几个主要设计规划人员，每天建立个讨论组，讨论一下idea，然后用axure 画出原型后等大家评审通过后再去细化出高保真原型
 
## 前端

* bootstrap框架（如果是自己写套ui的话规范还是很重要的，如果是自己写，建议换分核心模块跟业务模块，比如核心模块用ui开头，业务模块定制的以业务模块开头）
* 模块化的js建议requirejs
* 至于js框架如果是要短时间内建站的话，可以用 jquery做暂时性的，如果有必要的话，建议angularjs或react这两个
* React、flux/reflux、nodejs
* 构建工具grunt/gulp/webpack

## 后端

* 语言：

>
1. 语言Java 11
2. PHP 8
3. Nodejs 5
4. Python 2
5. C#/.net 2
6. wordpress
7. Typescript

* 方案：

>
1. spring +　spring mvc+mybatis　+　ehcache
2. nodejs + express + angularjs +　mongodb
3. django
4. jfinal或者play
5. wordpress


## API测试

* [mocha](https://mochajs.org/)
* should, supertest等
* [tape](https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4) 供参考


## 协作方式

* github开源协作

* 代码的目录组织结构

* 代码规范：[bootstrap前端代码规范](http://codeguide.bootcss.com/) [百度前端代码规范](https://github.com/ecomfe/spec) [Airbnb JavaScript Style Guide](https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md)

* 分工，这个是重点


## 运营维护

* @雨竹 @Colin

## 参考网站

* 建站

>+ Node.js专业中文社区

>>- 站点：https://cnodejs.org/
>>- 源码：https://github.com/cnodejs/nodeclub/


>+ AngularJS中文社区

>>+ 站点：http://angularjs.cn/
>>+ 源码：https://github.com/zensh/jsgen

>+ NodeBB

>>+ 源码：https://github.com/NodeBB/NodeBB

* 产品


>+ [v2ex](http://www.v2ex.com/)
>+ [F2E](http://f2e.im/)
* [百度舆情](http://yuqing.baidu.com/zhengwu/home/Intro/index?castk=LTE%3D)
* [诸葛数据](http://zhugeio.com/)
* [微画盘](http://www.weihuapan.com/)
* [talkingdata](https://www.talkingdata.com/)
* [友盟应用统计](http://www.umeng.com/apps/4100008dd65107258db11ef4/reports/installation)
* [百度云观测](http://ce.baidu.com/index/monitor)
* [腾讯数据](http://data.qq.com/)
* [友盟指数](http://umindex.com/)
* [guavus](http://www.guavus.com/products/)
* [数说](http://shushuo.baidu.com/web/)
* [datavlab](http://datavlab.org/)
* [36大数据网](http://www.36dsj.com/)
* [知微官网](http://www.zhiweidata.com/)
* [数据堂官网](http://crowd.datatang.com/)
* [Highcharts中文网](http://www.hcharts.cn/)
* [Highcharts社区](http://highcharts.me)
* [Highcharts在线演示](http://www.hcharts.cn/demo/index.php)
* [Highcharts中文API](http://www.hcharts.cn/api/index.php)
* [Webgl中文网](http://www.hewebgl.com/)
* [HTML5中国](http://www.html5cn.org/)
* [七月算法](http://www.julyedu.com/)
* [七月问答](http://ask.julyedu.com/)
* [大数据魔镜官网](http://www.moojnn.com/?ref=sogou1)

* 数据可视化

>
+ [数据可视化的类型](http://www.datavizcatalogue.com/) 
+ [文本可视化案例集](http://textvis.lnu.se/) 
+ [时间型数据可视化案例集](http://survey.timeviz.net/) 
+ [树的可视化案例集](http://vcg.informatik.uni-rostock.de/~hs162/treeposter/poster.html) 
+ [弦的可视化案例集](http://www.datavizcatalogue.com/) 
