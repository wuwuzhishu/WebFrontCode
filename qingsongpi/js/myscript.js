$(//网页的加载
    function () {
        fixedTop();//调用函数，调用了固定导航这个函数
        backTop();//调用函数，调用了回到顶部这个函数
    }
)

//函数定义：此函数实现固定顶部导航的功能并且把部分元素隐藏
function fixedTop() {
    $(window).scroll(function () { //滚动事件
        var top = $(this).scrollTop();//得到上下滚动的顶部位置
        if(top>80){
            /*hide方法有两个参数:
                第一个参数是时间，
                第二个参数是回调函数
                回调函数就是说hide方法执行完毕之后需要执行的代码
            */
            // $("#top_left").hide(10000,function () {
            //     $("#banner").hide();
            // });
            $("#top_left").hide(); //隐藏左边元素
            $("#top_right").hide(); //隐藏右边元素
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
//函数定义：此函数实现回到顶部的功能
function backTop() {
    //1.初始状态，隐藏get_top这个元素
    $("#get_top").hide();
    //2.随着滚动，淡入淡出get_top这个元素
    $(window).scroll(function () { 
        var top = $(this).scrollTop();
        if(top > 300){
            $("#get_top").fadeIn(1000);
        }else{
            $("#get_top").fadeOut(1000);
        }
    });
    //3.单击元素时回到顶部
    $("#get_top").click(function(e) {
        $("body,html").animate({scrollTop:0},100);
    });   
}