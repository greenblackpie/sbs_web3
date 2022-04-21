
let slideOn = 'off'

//문서 준비 이벤트

$(function () {
    
    // 메인메뉴 - 마우스 올렸을 때
    $('.mainmenu').on('mouseover', function (){
      
        $('header').addClass('active')
        $('.submenu').removeClass('active')
        $(this).children('.submenu').addClass('active')
    })

    // 메인메뉴 - 마우스 벗어날 때
    $('.mainmenu').on('mouseleave', function (){
        $('header').removeClass('active')
        $('.submenu').removeClass('active')
    })

    $('.slide-open').on('click', function(){
        if( slideOn == 'off') {
            slideBarOpen()
        }

        else{
            slideBarClose()
        }
    })

    $('.bg .cancel').on('click', function(){
        slideBarClose()
    })

})


function slideBarOpen() {
    $('.slide').animate({left: '0'}, 1000)

    $('.slide-open').addClass('on')

    $('.bg').fadeIn(1000)

    slideOn = 'on'
}

function slideBarClose() {
    $('.slide').animate({left: '-400px'}, 1000)

    $('.slide-open').removeClass('on')

    $('.bg').fadeOut(1000)

    slideOn = 'off'
}