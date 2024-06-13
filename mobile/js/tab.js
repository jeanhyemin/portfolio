$(document).ready(function(){
    $('.content_area .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라

    //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    $('.content_area .tab').each(function (index) {
        $(this).click(function (e) {
            e.preventDefault(); // <a> href="#" 값을 강제로 막는다    

            $('.content_area .tab').removeClass('current');
            $(this).addClass('current');
            $('.content_area .contlist').hide();
            $('.content_area .contlist:eq('+ index +')').show();
        });
    });
});