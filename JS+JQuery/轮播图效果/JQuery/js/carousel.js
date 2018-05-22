/*
轮播图效果函数，有三个参数:
@def_width代表轮播图图片的宽度
@def_height代表轮播图图片的高度
@def_delaytime代表轮播图的轮播时间，毫秒为单位
*/

var def_width=640;
var def_height=480;
var def_delaytime=5000;

$(function () {
  // body...
  var i=0;
  var timer=null;
  for (var j = 0; j < $('.banner_img li').length; j++) { //创建圆点
   $('.banner_circle').append('<li></li>')
  }
  $('.banner_circle li').first().addClass('active'); //给第一个圆点添加样式
  
  var firstimg=$('.banner_img li').first().clone(); //复制第一张图片
  $('.banner_img').append(firstimg).width($('.banner_img li').length*($('.banner_img img').width())); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
  
  
  // 下一个按钮
  $('.banner_next').click(function(){
   i++;
   if (i==$('.banner_img li').length) {
    i=1; //这里不是i=0
    $('.banner_img').css({left:0}); //保证无缝轮播，设置left值
   };
  
   $('.banner_img').stop().animate({left:-i*def_width},def_height);
   if (i==$('.banner_img li').length-1) {  //设置小圆点指示
    $('.banner_circle li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.banner_circle li').eq(i).addClass('active').siblings().removeClass('active');
   }     
  })
  
  // 上一个按钮
  $('.banner_prev').click(function(){
   i--;
   if (i==-1) {
    i=$('.banner_img li').length-2;
    $('.banner_img').css({left:-($('.banner_img li').length-1)*def_width});
   }
   $('.banner_img').stop().animate({left:-i*def_width},def_height);
   $('.banner_circle li').eq(i).addClass('active').siblings().removeClass('active');
  })
  
  //设置按钮的显示和隐藏
  $('.banner').hover(function(){
   $('.banner_btn').show();
  },function(){
   $('.banner_btn').hide();
  })
  
  //鼠标划入圆点
  $('.banner_circle li').mouseover(function(){
   var _index=$(this).index();
   $('.banner_img').stop().animate({left:-_index*def_width},150);
   $('.banner_circle li').eq(_index).addClass('active').siblings().removeClass('active');
  })
  
  //定时器自动播放
  timer=setInterval(function(){
   i++;
   if (i==$('.banner_img li').length) {
    i=1;
    $('.banner_img').css({left:0});
   };
  
   $('.banner_img').stop().animate({left:-i*def_width},def_height);
   if (i==$('.banner_img li').length-1) { 
    $('.banner_circle li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.banner_circle li').eq(i).addClass('active').siblings().removeClass('active');
   }
  },def_delaytime)
  
  //鼠标移入，暂停自动播放，移出，开始自动播放
  $('.banner').hover(function(){ 
   clearInterval(timer);
  },function(){
   timer=setInterval(function(){
   i++;
   if (i==$('.banner_img li').length) {
    i=1;
    $('.banner_img').css({left:0});
   };
  
   $('.banner_img').stop().animate({left:-i*def_width},def_height);
   if (i==$('.banner_img li').length-1) { 
    $('.banner_circle li').eq(0).addClass('active').siblings().removeClass('active');
   }else{
    $('.banner_circle li').eq(i).addClass('active').siblings().removeClass('active');
   }
  },def_delaytime)
  })
})


