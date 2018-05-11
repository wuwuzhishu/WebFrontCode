$(
    function () {
        fixHeader();
    
})
//此函数实现的功能就是固定导航
function fixHeader(){
    var top = 0;
    $(window).scroll(function () { 
        top = $(this).scrollTop();
        if(top > 50){
            $("nav").addClass(".fixed");

        }
    });
}