//비주얼
 var swiper1 = new Swiper('.swiper1', {
    autoHeight: true, 
    slidesPerView: 1,
    loop: true,
    // navigation: {    //이전/다음 버튼
    //     nextEl: '.next1',
    //     prevEl: '.prev1',
    // },
    pagination: {   //페이지 네이션
        el: '.pagination1',
        //dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
});

//제품소개
var swiper2 = new Swiper('.swiper2', {
    autoHeight: true, 
    slidesPerView:3,
    spaceBetween:10,
    loop: true,
    // navigation: {    //이전/다음 버튼
    //     nextEl: '.next1',
    //     prevEl: '.prev1',
    // },
    pagination: {   //페이지 네이션
        el: '.pagination2',
        //dynamicBullets: true,
        clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
});

//제휴혜택
var swiper3 = new Swiper('.swiper3', {
    autoHeight: true, 
    slidesPerView:2,
    spaceBetween:10,
    centeredSlides: true,
    initialSlide: 1, 
    navigation: {    //이전/다음 버튼
        nextEl: '.next3',
        prevEl: '.prev3',
    },
    // pagination: {   //페이지 네이션
    //     el: '.pagination2',
    //     //dynamicBullets: true,
    //     clickable: true,
    //     //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    // },
});