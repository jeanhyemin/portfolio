//헤더 스크롤 처리
var screenHeight = $(window).height();

$(window).on('scroll',function(){//스크롤의 거리가 발생하면

var scroll = $(window).scrollTop();  

//스크롤의 거리를 리턴하는 함수
//console.log(scroll);


if(scroll>screenHeight-120){//스크롤이 비주얼의 높이-header높이 까지 내리면

    $('#headerArea').css('background','#111');
    // .css('border-bottom','1px solid #ccc');

}else{//스크롤 내리기 전 디폴트(마우스올리지않음)

    $('#headerArea').css('background','none').css('border-bottom','none');  

}; 

if(scroll>800){
    $('.top_move').fadeIn('slow');
}else{
    $('.top_move').fadeOut('fast');
}

});

 //top 상단이동

$('.top_move').click(function(e){
e.preventDefault();
//상단 이동
$("html,body").stop().animate({"scrollTop":0},800); 
//해당위치고 스크롤 탑값을 부드럽게 이동시키는 코드

});

//반응형 네비 처리
var onoff = false; //false(메뉴열림) true(메뉴닫힘)
$(".menuOpen").click(function(e){
e.preventDefault();
if(onoff == false){
    $("#gnb").slideDown('slow');
    $('#headerArea').addClass('mn_open');//메뉴모양변경
    onoff = true;
}else{
    $("#gnb").slideUp('fast');
    $('#headerArea').removeClass('mn_open');
    onoff = false;
}
});

//  네비높이 맞추기(페이지 로딩시 1회)
var screenSize = $(window).width();
var winh =  $(document).height();

if( screenSize > 768){
$("#gnb").height('auto');
}else{
$("#gnb").height(winh);
}

var current2=0; // 0(해상도가 모바일), 1(소형테블릿이상)

$(window).resize(function(){ 
var screenSize = $(window).width();  //가로 해상도
if( screenSize > 768){  //소형테블릿 이상이면
    $("#gnb").show();
    $("#gnb").height('auto');
    current2=1; //소형테블릿이상
}
if(current2==1 && screenSize <= 768){
    $("#gnb").hide();
    $("#gnb").height(winh);
    current2=0; //모바일
    onoff = false;
}
}); 

