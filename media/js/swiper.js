var swiper = new Swiper('.swiper-container', {
    autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 'auto',  //단수, 안쓰면 기본값 1 =>한 장씩 보임
    spaceBetween: 400,  //단사이 여백
    initialSlide: 0,   //처음 왼쪽 끝에 보여지는 초기값, 번호 0부터 시작, 즉 이건 3번째 슬라이드부터 보여점
    loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    navigation: {    //이전/다음 버튼
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {   //페이지 네이션
      el: '.swiper-pagination',
      ynamicBullets: true, // 아래 페이지 수 모양이 좀더 동적
      clickable: true,
    //   type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    }
    // ,
    // autoplay: {  //자동
    //   delay: 2500,
    //   disableOnInteraction: false
    // }
    // scrollbar: {  //하단 스크롤바
    //   el: '.swiper-scrollbar',
    //   hide: true //스와이퍼 살짝 할때만 밑에 스크롤바 보이는 것
    // }
});