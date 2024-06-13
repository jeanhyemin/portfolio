
$(document).ready(function () {
	var article = $('.faq .article');
	article.find('.a').slideUp(100);
    article.find('.q i').html('<i class="fa-solid fa-angle-down"></i>');

	$('.faq .article').click(function(e){  // 각각의 질문을 클릭하면
	    e.preventDefault();  //<a href="#"> 태그 링크 처리
        var myArticle = $(this);
        // .parents('.faq');
	
        if(myArticle.hasClass('hide')){ 

            myArticle.removeClass('hide').addClass('show');  // show로 바꾼다 
            myArticle.find('.a').slideDown(300);
            myArticle.find('.q i').html('<i class="fa-solid fa-angle-up"></i>');
        } else { 
            myArticle.removeClass('show').addClass('hide');
            myArticle.find('.a').slideUp(200);
            myArticle.find('.q i').html('<i class="fa-solid fa-angle-down"></i>');
        }  
    });
});