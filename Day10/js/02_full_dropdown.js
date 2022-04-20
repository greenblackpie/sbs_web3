


//문서 준비 이벤트

$(function () {
    
    // 메인메뉴 - 마우스 올렸을 때
    $('.mainmenu').on('mouseover', function (){
        // 선택한 메인메뉴의 번호
        let index = $(this).index()
        let no = index + 1
        // $('.submenu:nth-of-type ( ' + no + ')').eq(index).stop().slideDown()
        //eq(index) : 여러 요소 중에서 index 번째의 요소를 선택
        // $('.submenu').eq(index).stop().slideDown()
        
    })

    // 메인메뉴 - 마우스 벗어날 때
    $('.mainmenu').on('mouseleave', function (){
        let index = $(this).index()
        let no = index + 1
        // $('.submenu:nth-of-type ( ' + no + ')').eq(index).stop().slideUp()
        // $('.submenu').eq(index).stop().slideUp()
    })

    // 메인메뉴 - 클릭 했을때
    $('.mainmenu').on('click', function (){
        let index = $(this).index()
        let no = index + 1
        $('.submenu').stop().hide()
        $('.submenu').eq(index).stop().slideToggle()

    })

    // 메인메뉴 - 클릭할 때
    $('.mainmenu').on('click', function (){
      
    })
})