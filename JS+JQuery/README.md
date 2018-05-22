# JavaScript内容

>此部分为JavaScript上课示例，主要用于语法的讲解

## 2018.4.20

1. 插入JS的方式：内部和外部
2. DOM（Document Object Model 文档对象模型），DOM把整个HTML文档看成是由节点构成的集合，有3种节点：元素、文本和属性，掌握获取元素结点的3种方法：getElementByID，getElementsByClassName，getElementsByTagName；
3. JS语法（P10）
> * 语句
> * 注释：单行和多行注释
> * 变量：命名规则，变量的声明
> * 数据类型（字符串、数值、数组）
> * 运算符（算术运算符包括自增自减运算符、逻辑运算符、关系运算符）
> * 事件监听（事件源、事件类型、监听代码）

## 2018.4.27

> 通过本次课程主要讲解分支结构
四个例子：

1. [水仙花数](https://github.com/wuwuzhishu/WebFrontCode/blob/master/JS%2BJQuery/2.JS%E5%88%86%E6%94%AF-%E6%B0%B4%E4%BB%99%E8%8A%B1%E6%95%B0.html)判断一个数是不是水仙花数
2. [成绩等级](https://github.com/wuwuzhishu/WebFrontCode/blob/master/JS%2BJQuery/2.JS%E5%88%86%E6%94%AF-%E6%88%90%E7%BB%A9%E7%AD%89%E7%BA%A7.html)分别有if和switch的写法
3. [switch语句嵌套](https://github.com/wuwuzhishu/WebFrontCode/blob/master/JS%2BJQuery/2.JS%E5%88%86%E6%94%AF-switch%E5%B5%8C%E5%A5%97.html)switch语句嵌套以及break语句的用法
4. [年月日](https://github.com/wuwuzhishu/WebFrontCode/blob/master/JS%2BJQuery/2.JS%E5%88%86%E6%94%AF-%E5%B9%B4%E6%9C%88%E6%97%A5.html)根据年月日求是当年的第多少天，主要是练习break语句的应用

## 2018.5.4

> 通过本次课程主要讲解循环结构

1. [求和](https://github.com/wuwuzhishu/WebFrontCode/blob/master/JS%2BJQuery/3.JS%E5%BE%AA%E7%8E%AF-%E6%B1%82%E5%92%8C.html)通过求和来练习while、do-while和for语句的应用
2. [continue和break](https://github.com/wuwuzhishu/WebFrontCode/blob/master/JS%2BJQuery/3.JS%E5%BE%AA%E7%8E%AF-continue.html)学习continue和break语句的应用
3. [阶乘以及阶乘和](https://github.com/wuwuzhishu/WebFrontCode/blob/master/JS%2BJQuery/3.JS%E5%BE%AA%E7%8E%AF-%E9%98%B6%E4%B9%98.html)学习双重循环的应用
4. [九九乘法表](https://github.com/wuwuzhishu/WebFrontCode/blob/master/JS%2BJQuery/3.JS%E5%BE%AA%E7%8E%AF-%E4%B9%9D%E4%B9%9D%E4%B9%98%E6%B3%95%E8%A1%A8.html)

## 2018.5.11

> 通过本次课程主要概述一下JQuery的语法及选择符和DOM的操作

* [JQuery入门演示](https://github.com/wuwuzhishu/WebFrontCode/blob/master/JS%2BJQuery/JQuery%E5%85%A5%E9%97%A8%E6%BC%94%E7%A4%BA/index.html) 学习JQuery框架的语法以及选择符和DOM的操作

## 2018.5.22

> 添加轻松批网页中用到的轮播图效果，一个是用JQuery来完成，另一个用JQuery unslider来完成（这个更简练）

[Unslider — 一个超小的 jQuery轮播(slider)插件](http://www.bootcss.com/p/unslider/)

```JavaScript
$('.banner').unslider({
    speed: 500,               //  The speed to animate each slide (in milliseconds)
    delay: 3000,              //  The delay between slide animations (in milliseconds)
    complete: function() {},  //  A function that gets called after every slide animation
    keys: true,               //  Enable keyboard (left, right) arrow shortcuts
    dots: true,               //  Display dot navigation
    fluid: false              //  Support responsive design. May break non-responsive designs
});
```