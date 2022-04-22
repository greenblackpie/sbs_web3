
/**************************************

    무브 슬라이드

    가운데를 중심으로 이동하는 이미지 슬라이드 (센터모드)

    기능
    1. 이전 버튼
    2. 다음 버튼
    3. 네비게이션(닷츠)
    4. 페이드 인/아웃
    5. 자동 재생         (마우스 오버 시 멈춤)

****************************************/ 

// 문서 준비 이벤트
$(function (){

    // 이미지 슬라이드
    let list = $('.slide-list')         // <ul> : 이미지 슬라이드 박스
    let item = $('.slide-item')         // <li> : 각 슬라이드 요소들

    // 현재 슬라이드 위치/인덱스
    let currentNo = 1
    let currentIndex = 0
    let currentPosition = 0             // 왼쪽으로부터 떨어진 위치 (left)

    // <li> 요소들의 가로/세로/개수
    let slideWidth = item.width()       // 슬라이드의 가로크기
    let slideHeight = item.height()     // 슬라이드의 세로크기
    let slideCount = item.length        // 슬라이드 개수

    // 1. 슬라이드 크기 계산
    // - 슬라이드 영역 지정
    // - 슬라이드 크기 : 각 슬라이드의 가로 크기 X 슬라이드 개수 
    let totalSlideWidth = slideWidth * slideCount
    list.css({ width : totalSlideWidth })

    // 2. 이전 이미지 세팅
    // - 슬라이드를 절반으로 나누어서 앞으로 가져올 슬라이드 지정
    // - 앞으로 가져올 슬라이드 개수
    //   : 5 / 2 = 2.5,    parseInt(2.5) --(정수)-->  2
    let initNum = parseInt( slideCount / 2 ) 

    for( let i = 0 ; i < initNum ; i++ ) {
        // A.prependTo(B)   : A를 부모요소(B)의 가장 첫번째 자식요소로 추가
        $('.slide-item').last().prependTo(list)
    }

    // 3. 슬라이드 위치 조정
    // 현재 위치 -= (각 슬라이드 크기) * (앞으로 가져온 슬라이드 개수)
    //          -= ( 400 * 2 )
    // 현재 위치 -= -800px
    currentPosition -= slideWidth * initNum
    list.css( { left : currentPosition })

    // 4. 페이지 네비게이션
    // - 슬라이드 개수만큼 (·) 요소를 생성
    for (let i = 0; i < slideCount; i++) {
        let dot = '<a href="#" class="dot"></a>'
        $('.dots-box').append(dot)
    }

    // 첫 번째 네비게이션을 active
    $('.dot').first().addClass('active')

    // 5. 페이드 인/아웃
    // (모든 슬라이드) - 페이드 아웃
    $('.slide-item img').addClass('bright-10')
    /* (가운데=첫번째 슬라이드 만) - 페이드 인 */
    $('.slide-item:nth-child(' + (initNum+1) + ') img').removeClass('bright-10')
    $('.slide-item:nth-child(' + (initNum+1) + ') img').addClass('bright-100')

    // 6. 이전 버튼(←)
    $('.prev').on('click', function() {

        // 1) 맨 오른쪽 슬라이드가 맨 왼쪽으로 이동한다.
        currentPosition -= slideWidth
        list.css( {left : currentPosition} )
        $('.slide-item').last().prependTo(list)

        // 2) 슬라이드 전체가 오른쪽으로 이동한다.
        currentPosition += slideWidth
        list.stop().animate({ left : currentPosition}, 1000)
        

    })

    // 7. 다음 버튼(→)

    // 8. 페이지 네비게이션 클릭
    // 9. 자동 재생




})

