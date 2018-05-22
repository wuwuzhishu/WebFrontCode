# 轻松批

>此项目为教学案例，通过此项目让学生学习HTML和CSS的使用
>通过首页的教学做一体，学生完成服务、定价和关于等三个页面

## 更新记录

### 2018.3.16

本次更新完成了项目的目录结构，并完成首页的顶部导航菜单
>在完成此部分内容之前，首先需要对盒子模型有个基本的了解
>
>* 盒子模型（margin、padding、border、width）
>* CSS基本属性
>* 浮动（float），清除浮动
>* 标准文档流

#### 知识点1

* 列表标记以及列表导航
* 垂直居中、水平居中
* 伪类选择符

### 2018.3.23

本次更新完成了首页中的四个部分，分别涉及到两列布局、三列布局、四列布局
>每次课完成两个部分（一节课一部分）

#### 知识点2

* 两列布局（HTML标记：h1、p、input，CSS属性：伪类选择符、border-radius）
* 四列布局（通过ul->li来实现多列布局的方式）
* 三列布局（不用ul-li形式，用div设置float形式）
* 选项卡（此部分内容选项卡的功能需要后序学了javascript才能完成时限，目前只实现布局）

### 2018.4.10

本次更新完成了首页中剩余的四个部分
>每次课完成两个部分

#### 知识点3

* 分割线
* 表单
* 四列布局和两列布局

### 2018.5.16

本次课程完成固定顶部导航以及回到顶部的内容

#### 固定顶部导航

* 添加JS代码

```javascript
//此函数实现的功能就是固定导航
function fixHeader () {
    $(window).scroll(function  () {//滚动事件
        var top = $(this).scrollTop();//得到上下滚动的顶部位置
        if(top > 50){
            $("#top_left").hide();//隐藏左边元素
            $("#top_right").hide();//隐藏右边元素
            $("#top_mid").css("float", "right"); //设置中间元素右浮动
            $("#top").addClass("fixed"); //固定顶部导航
            //设置top为固定定位之后，top的下一个元素要设置上边距（值为top的高度）
            $("#top").next().css("marginTop", $("#top").height());
        }else{
            $("#top_left,#top_right").show();
            $("#top_mid").css("float", "left");
            $("#top").removeClass("fixed");
            $("#top").next().css("marginTop", "0px");
        }
    });
}
```

* 用到的知识点（hide和show方法）

> [jQuery 效果 - hide() 方法](http://www.w3school.com.cn/jquery/effect_hide.asp)
>
> [jQuery 效果 - show() 方法](http://www.w3school.com.cn/jquery/effect_show.asp)

#### 回到顶部

* 首先添加CSS样式

```css
.get_top p{
    color: #000000;
}
.get_top{
    position: fixed;
    right: 30px;
    bottom: 50px;
    width: 50px;
    height: 50px;
    background-color: red;
    font-size:12px ;
    line-height: 50px;
    border-radius: 25px;
    cursor: pointer;
}
```

* 添加JS代码

```javascript
//此函数实现的功能就是回到顶部
function backTop () {
    //1.把回到顶部这个盒子进行隐藏
    $(".get_top").hide();
    //2.当滚动条滚动到某种程度的话显示回到顶部这个盒子
    $(window).scroll(function  () {
        var top = $(this).scrollTop();
        if(top > 300){
//          $(".get_top").fadeIn(3000,function  () {
//              $(".get_top").css("background","#00ff00");
//          });
            $("#get_top").fadeIn(3000);
        }else{
            $("#get_top").fadeOut(1000);
        }
    });
    //3.单击盒子时回到顶部
    $("#get_top").click(function  () {
        $("body,html").animate({scrollTop:0},100);
    });
}
```

* 用到的知识点

> [jQuery 效果 - fadeIn() 方法](http://www.w3school.com.cn/jquery/effect_fadein.asp)
>
> [jQuery 效果 - fadeOut() 方法](http://www.w3school.com.cn/jquery/effect_fadeout.asp)
>
>[jQuery 效果 - animate() 方法](http://www.w3school.com.cn/jquery/effect_animate.asp)

### 2018.5.22
