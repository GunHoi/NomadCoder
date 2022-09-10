const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    //clock.innerText=`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    const month = date.getMonth()+1;
    const day = date.getDate();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${month}/${day} ${hours}:${minutes}:${seconds}`;
    //date.getHours는 number를 반환하는데, padStart는 String형의
    //길이를 가져오므로, String()을 통해 형변환을 해야한다.
}

getClock(); //실행되자마자 보여줄 수 있도록 추가
setInterval(getClock, 1000);

/*setInterval(사용하고자하는 함수, 몇ms간격으로 할지)
Interval은 일정 간격마다 반복해서 실행 O
5000ms -> 5초

setTimeout(사용하고자하는 함수, 몇ms간격으로 할지)
Interval과 다르게 일정 간격 후에 1번만 실행된다.*/

/*
Date Object
new Date() ->기본적으로 오늘 날짜를 가져온다.
Day에서 0 = 일요일, 1 = 월요일 ...
*/

/*
padStart() 함수는 "1"을 "01" 과 같이 만들 고 싶을 때 사용
"1".padStart(2,"0"); 의 의미는 
만약 "1"이 2글자의 string이 아니라면 "0"을 앞에 붙여서 출력해라
즉 padding을 넣는다는 말이다.
padEnd() 함수는 padStart와는 반대로 맨 뒤에 붙여서 출력
*/