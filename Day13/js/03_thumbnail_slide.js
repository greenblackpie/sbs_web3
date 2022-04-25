
// 슬라이드 순서 번호
let slideIndex = 1

// 문서준비 이벤트
$(function() {
    // 이미지 슬라이드 실행
    showSlides( slideIndex )
})

// 슬라이드 함수(n)
// : n 번째 이미지를 보여준다.
function showSlides(n) {
    // 요소 가져오기
    let slides = $('.mySlides')         // 슬라이드들
    let dots = $('.dot')                // 썸네일 닷츠 이미지들
    let captionText = $('#caption')     // 이미지 제목

    // 슬라이드 번호가 마지막에 도달
    // - 슬라이드 번호를 1번으로 세팅
    if( n > slides.length ) {
        slideIndex = 1
    }
    
    // 슬라이드 번호가 맨 앞에 도달
    // - 슬라이드 번호를 마지막으로 세팅
    if( n < 1 ) {
        slideIndex = slides.length
    }

    // 모든 이미지 숨김
    // slides.css({'display' : 'none'})
    slides.hide()

    // 활성화된 썸네일을 비활성화
    dots.removeClass('active')

    // 선택한 번호의 슬라이드만 보여주기
    // $( slides[slideIndex-1] ).css({'display' : 'block'})
    $( slides[slideIndex-1] ).show()

    // 선택 번호의 썸네일만 활성화
    $( dots[slideIndex-1] ).addClass('active')

    // 이미지 제목 세팅
    // attr()          : 속성값을 가져오는 메서드
    let title = $( dots[slideIndex-1] ).attr('alt')
    captionText.text( title )
}


// 화살표 클릭
// n = +1       (다음)
// n = -1       (이전)
function move(n) {
    slideIndex += n         
    showSlides(slideIndex)
}

// 썸네일 클릭
function slide(n) {
    slideIndex = n 
    showSlides(slideIndex)
}