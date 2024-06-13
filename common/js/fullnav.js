var min_height = 158;
var max_height = 323;

   //2depth 열기/닫기
   $('ul.dropdownmenu').hover(
      function() { 
         $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
         $('#headerArea').animate({height : max_height},'fast').clearQueue();
      },function() {
         $('ul.dropdownmenu li.menu ul').fadeOut('fast'); //모든 서브를 다 닫아라
         $('#headerArea').animate({height : min_height},'normal').clearQueue();
   });

   //1depth 효과
   $('ul.dropdownmenu li.menu').hover(
      function() { 
         $('.depth1',this).css('color','orange');
      },function() {
         $('.depth1',this).css('color','#fff');
   });

   //tab 처리
   $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
      $('ul.dropdownmenu li.menu ul').slideDown('normal');
      $('#headerArea').animate({height : max_height},'fast').clearQueue();
   });

   $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
      $('ul.dropdownmenu li.menu ul').slideUp('fast');
      $('#headerArea').animate({height : min_height},'normal').clearQueue();
   });

