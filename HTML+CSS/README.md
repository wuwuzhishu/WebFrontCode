# HTML+CSS

>此部分是准备工作以及上课一些例子

## 盒子模型

参考网址：[https://www.cnblogs.com/smyhvae/p/7256371.html](https://www.cnblogs.com/smyhvae/p/7256371.html)

## CSS选择器

参考网址：[http://www.w3school.com.cn/cssref/css\_selectors.asp](http://www.w3school.com.cn/cssref/css_selectors.asp)

## CSS属性

参考网址：[http://www.w3school.com.cn/cssref/index.asp](http://www.w3school.com.cn/cssref/index.asp)

## 标准文档流

参考网址：[https://blog.csdn.net/diligentkong/article/details/54312829](https://blog.csdn.net/diligentkong/article/details/54312829)

## CSS浮动

参考网址：[http://www.w3school.com.cn/css/css\_positioning\_floating.asp](http://www.w3school.com.cn/css/css_positioning_floating.asp)

* 利用浮动来实现多列布局的方法
* 清除浮动的方法（clear:both或width以及overflow相结合）
* CSS overflow属性

## CSS多行文本省略号

```css
.line-limit-length {
    width: 100px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
```