var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.

xhr.onload = function() {                       // When readystate changes
 
  if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체배열로 변환한다.

    var newContent1 = '';  //telecom데이터 담을 곳
    var newContent2 = ''; //credit데이터 담을 곳
    var newContent3 = ''; //point데이터 담을 곳
    var newContent4 = ''; //paper데이터 담을 곳

    newContent1 += '<ul>';
    for (var i = 0; i < responseObject.telecom.length; i++) { 
        newContent1 += '<li>';
        newContent1 += '<img src="'+ responseObject.telecom[i].cardImg +'" alt="'+ responseObject.telecom[i].cardName +'">';
        newContent1 += '<div>';
            newContent1 += '<dl>';
            newContent1 += '<dt>'+ responseObject.telecom[i].cardName +'</dt>';
            newContent1 += '<dd>'+ responseObject.telecom[i].benefit1 +'</dd>';
            newContent1 += '<dd>'+ responseObject.telecom[i].benefit2 +'</dd>';
            newContent1 += '</dl>';
            newContent1 += '<ul>';
                var keys = Object.keys(responseObject.telecom[i]); // 객체의 속성을 배열로 반환
                for (var j = 0; j < keys.length; j++) {
                    if (keys[j].startsWith('info')) { // 'info'로 시작하는 속성을 확인
                        newContent1 += '<li>' + responseObject.telecom[i][keys[j]] + '</li>'; // 해당 속성값 출력
                    }
                }
            newContent1 += '</ul>';
        newContent1 += '</div>';
        newContent1 += '</li>';
    }
    newContent1 += '</ul>';
    document.getElementById('tab1').innerHTML = newContent1;


    newContent2 += '<ul>';
    for (var i = 0; i < responseObject.credit.length; i++) { 
        newContent2 += '<li>';
        newContent2 += '<img src="'+ responseObject.credit[i].cardImg +'" alt="'+ responseObject.credit[i].cardName +'">';
        newContent2 += '<div>';
            newContent2 += '<dl>';
            newContent2 += '<dt>'+ responseObject.credit[i].cardName +'</dt>';
            newContent2 += '<dd>'+ responseObject.credit[i].benefit1 +'</dd>';
            newContent2 += '<dd>'+ responseObject.credit[i].benefit2 +'</dd>';
            newContent2 += '</dl>';
            newContent2 += '<ul>';
                var keys = Object.keys(responseObject.credit[i]); // 객체의 속성을 배열로 반환
                for (var j = 0; j < keys.length; j++) {
                    if (keys[j].startsWith('info')) { // 'info'로 시작하는 속성을 확인
                    newContent2 += '<li>' + responseObject.credit[i][keys[j]] + '</li>'; // 해당 속성값 출력
                    }
                }
            newContent2 += '</ul>';
        newContent2 += '</div>';
        newContent2 += '</li>';
    }
    newContent2 += '</ul>';
    document.getElementById('tab2').innerHTML = newContent2;

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
xhr.open('GET', 'js/data.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다.