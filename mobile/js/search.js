$(function(){

   $.ajax({
       url: './js/data_bread.json',
       dataType: 'json',
       success: function(data){
           var useData = data.bread;  //모든 객체배열 정보 == useData
           
           function dataPrint(arr){ //빵 사진, 이름 넣기
               
                   var txt = '<ul>';
                   
                   for(var i in arr){
                       
                        var $Image = arr[i].Image;   
                        var $Name = arr[i].Name;

                       txt+='<li>';
                       txt+='<img src="'+ $Image +'" alt="">';
                       txt+='<p>'+$Name+'</p>'; 
                       txt +='</li>';
                   }

                   txt += '</ul>';

                   $('.product_list').html(txt);
              
           };
           

           //초기실행, 함수호출
           dataPrint(useData);

           $('#btn').click(function(){ //검색버튼을 클릭하면
                 /*
                    var 객체배열 = 객체배열이름.filter(function(element){
                          return 조건절;  //조건에 만족하면 리턴
                        
                    });
                 */
                
                var newArray = useData.filter(function(element){
                
                //console.log($('#title').val());
                //return element.Name == $('#title').val();
                 return element.Name.includes($('#title').val());
                });
                //console.log(newArray);
                dataPrint(newArray);  //검색된 배열로 리스트 출력

           });

           $('.btn_all').click(function(){  //모두보기
               dataPrint(useData);
           });
       } 
   });
    
});