

//문서 준비 이벤트

$(function () {
    
    // 메인메뉴 - 마우스 올렸을 때
    $('.mainmenu').on('mouseover', function (){
        // 메인메뉴의 자식 세브메뉴만
        // $(this).children('.submenu').stop().slideDown(500)
        // 모든 서브메뉴
        // $('.submenu').stop().slideDown(500)
    })

    // 메인메뉴 - 마우스 벗어날 때
    $('.mainmenu').on('mouseleave', function (){
        // 메인메뉴의 자식 세브메뉴만
        // $(this).children('.submenu').stop().slideUp(500)
        // 모든 서브메뉴
        // $('.submenu').stop().slideUp(500)
    })

    // 메인메뉴 - 클릭 했을때
    $('.mainmenu').on('click', function (){
        // 메인메뉴의 자식 서브메뉴만
        // $('.submenu').stop().slideUp(500)
        // $(this).children('.submenu').stop().slideToggle(500)

    })

    // 메인메뉴 - 클릭할 때
    $('.mainmenu').on('click', function (){
        // 메인메뉴의 자식 서브메뉴만
        // $('.submenu').stop().slideUp(500)
        // $(this).children('.submenu').stop().slideToggle(500)
        $('.submenu').stop().slideToggle(500)

    })
})