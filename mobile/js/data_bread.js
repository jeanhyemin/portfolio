var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체배열로 변환한다.

    var newContent1 = ''; //bread데이터

        for(var i = 0; i < responseObject.bread.length; i++){
            newContent1 += '<div class="menu">';
                newContent1 += '<img src="' + responseObject.bread[i].Image + ' alt="' + responseObject.bread[i].Name + '이미지">'
                newContent1 += '<p>' + responseObject.bread[i].Name + '</p>';
                newContent1 += '<dl>';
                    newContent1 += '<dt>제품설명</dt>';
                    newContent1 += responseObject.bread[i].Info;
                newContent1 += '</dl>';
            newContent1 += '</div>';
            newContent1 += '<table class="nutrient">';
                newContent1 += '<tbody>';
                    for(var j = 3; j <responseObject.bread[i].length; j++){
                        newContent1 += '<tr>';
                            newContent1 += '<td class="col">중량(g)</td>';
                            newContent1 += responseObject.bread[i].Gram;
                        newContent1 += '</tr>';
                    }



                
            </tbody>
        }
        document.getElementsByClassName('popup').innerHTML = newContent1;

        // JSON 데이터의 키를 배열로 가져오기
const keys = Object.keys(jsonData);

// 세 번째 키부터 반복하여 값 출력
for (let i = 2; i < keys.length; i++) {
    const key = keys[i];
    const value = jsonData[key];
    console.log(`${key}: ${value}`);
}



        // HTML 코드를 생성할 템플릿 문자열
let html = `<table class="nutrient">
<tbody>`;

// nutrientData의 각 항목을 반복하여 HTML 코드에 추가
for (let key in nutrientData) {
html += `<tr>
<td class="col">${key}</td>
<td>${nutrientData[key]}</td>
</tr>`;
}

// HTML 코드 완성
html += `   </tbody>
</table>`;


    

    newContent3 += '<ul>';
    for (var i = 0; i < responseObject.point.length; i++) { 
        newContent3 += '<li>';
        newContent3 += '<img src="'+ responseObject.point[i].cardImg +'" alt="'+ responseObject.point[i].cardName +'">';
        newContent3 += '<div>';
            newContent3 += '<dl>';
            newContent3 += '<dt>'+ responseObject.point[i].cardName +'</dt>';
            newContent3 += '<dd>'+ responseObject.point[i].benefit1 +'</dd>';
            newContent3 += '<dd>'+ responseObject.point[i].benefit2 +'</dd>';
            newContent3 += '</dl>';
            newContent3 += '<ul>';
                var keys = Object.keys(responseObject.point[i]); // 객체의 속성을 배열로 반환
                for (var j = 0; j < keys.length; j++) {
                    if (keys[j].startsWith('info')) { // 'info'로 시작하는 속성을 확인
                    newContent3 += '<li>' + responseObject.point[i][keys[j]] + '</li>'; // 해당 속성값 출력
                    }
                }
            newContent3 += '</ul>';
        newContent3 += '</div>';
        newContent3 += '</li>';
    }
    newContent3 += '</ul>';
    document.getElementById('tab3').innerHTML = newContent3;

    
    for (var i = 0; i < responseObject.paper.length; i++) { 
        newContent4 += '<div>';
        newContent4 += '<img src="'+ responseObject.paper[i].paperImg +'" alt="'+ responseObject.paper[i].paperName +'">';
        newContent4 += '<p>'+ responseObject.paper[i].paperName +'</p>';
        newContent4 += '</div>';
    }
    document.getElementById('tab4').innerHTML = newContent4;

    }
};
xhr.open('GET', 'js/data_bread.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다.