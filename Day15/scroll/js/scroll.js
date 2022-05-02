
// 문서 준비 이벤트
$(function() {

    /* 
        스크롤 방향 감지
        - 이전 스크롤 위치
        - 현재 스크롤 위치
        - 이동 크기
        - 텍스트 위치 최소 지점 (leftMin)
        - 텍스트 위치 최대 지점 (leftMax)
    */

    let prev = $(this).scrollTop()          // 이전 스크롤 위치
    let move = 100                          // 텍스트 이동 크기
    let leftMin = -2000                     // 텍스트 최소 지점
    let leftMax = 2000                      // 텍스트 최대 지점

    console.log('이전 스크롤 위치 : ' + prev)
    
    // 스크롤 이벤트
    $(window).on('scroll', function(e) {
        let now = $(this).scrollTop()           // 현재 스크롤 위치
        
        console.log('현재 스크롤 위치 : ' + now)

        // 스크롤 아래로 ↓
        if( now > prev ) {
            console.log('↓');
            $('header').slideUp()
        } 
        // 스크롤 위로 ↑
        else {
            console.log('↑');
            $('header').slideDown()
        }

        // scroll-title 인터렉션
        // offset() : 요소의 top, left 속성값을 갖는 객체를 가져온다
        let titleOffset = $('.scroll-title').offset()
        let left = titleOffset.left

        // 스크롤 아래 : 텍스트 오른쪽 이동
        if( now > prev && left < leftMax && now > 0 && now < 1000 ) {
            $('.scroll-title').animate({'left' : left += move}, 5)
        }
        // 스크롤 위 : 텍스트 왼쪽 이동
        else if( now < prev && left > leftMin && now < 1000 ) {
            $('.scroll-title').animate({'left' : left -= move}, 5)
        }

        // 따라 다니는 플로팅 버튼
        $('.floating').stop().animate({'bottom' : -now+15}, 300)


        prev = now

    })


    // 플로팅 버튼 클릭 이벤트
    $('.floating').on('click', function() {
        // 스크롤 맨 위로 이동
        $('html').animate({'scroll-top' : 0}, 1000)
    })

})
