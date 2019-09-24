$(window).load(function(){
    $(".menu_box li:nth-child(2)").hover(
        function(){
            $(this).children(".hover_menu").toggleClass('showmenu')
        }
    )
    $(".menu_box li:nth-child(3)").hover(
        function(){
            $(this).children(".hover_menu").toggleClass('showmenu')
        }
    )
    $('.menu_box li').mouseenter(function(){
        $(this).children(".blue_border").css('width','100%')
    }).mouseleave(function(){
        $(this).children(".blue_border").css('width','0%')
    })
    $('.hover_menu>li').hover(function(){
        $(this).toggleClass("show")
    })
    // ============================
    $(".neiyuan div:not(.neiyuan div:last-child)").mouseenter(function(){
        $(this).css({transform:"scale(1.1)",zIndex:3})
    }).mouseleave(function(){
        $(this).css({transform:"scale(1)",zIndex:1})
    })
})