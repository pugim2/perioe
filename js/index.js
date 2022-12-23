window.addEventListener('DOMContentLoaded',function(){

    $("#nav.main>li").mouseover(function(){
        $(this).children(".sub").stop().slideDown(200);
    });

    $("#nav.main>li").mouseleave(function(){
        $(this).children(".sub").stop().slideUp(200);
    });
});

