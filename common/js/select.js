
$(document).ready(function() {
	//상단이동 소스
	$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
		var scroll = $(window).scrollTop(); //스크롤의 거리

		if(scroll>300){ //300이상의 거리가 발생되면
			  $('.move_top').fadeIn('slow');  //top보여라~~~~
		}else{
			  $('.move_top').fadeOut('fast');//top안보여라~~~~
		}
  });

	$('.move_top').click(function(e){
		e.preventDefault();
		 //상단으로 스르륵 이동합니다.
		$("html,body").stop().animate({"scrollTop":0},1000);
		//해당 위치로 스크롤탑 값을 부드럽게 이동시킴
	 });

    //패밀리 사이트 처리

	$('.select .arrow').toggle(function(){
		$('.select .aList').fadeIn('slow');	
		$(this).children('span').html('<i class="fa-solid fa-plus"></i>');	
	},function(){
        $('.select .aList').fadeOut('fast');	
		$(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
	});

	//tab키 처리
	  $('.select .arrow').on('focus', function () {        
              $('.select .aList').fadeIn('slow');	
       });
       $('.select .aList li:last a').on('blur', function () {        
              $('.select .aList').fadeOut('fast');
       });
 
});

