const loginForm = document.querySelector("#login-form");
//const loginForm = document.getElementById("login-form"); 
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
/*
function handleLoginBtnClick(){
    const username = loginInput.value;
    if(username===''){
        alert("please write your name");
    }else if(username.length > 15){
        alert("Your name is too long");
    }else{
        alert("Hello"+username);
    }
}
loginButton.addEventListener("click",handleLoginBtnClick);

    JS로 유효성 검사 -> html의 input 태그에서 해결
*/
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    // username을 localStorage에 저장한다.
    paintGreetings(username);
    console.log(username);
}
//loginForm.addEventListener("submit", onLoginSubmit);  -> 58로 이동
/*
JS는 브라우저 내에서 방금 전에 발생한 event로부터 
정보를 잡아내서 함수를 실행할 때 object 형태로 같이 전송해준다..
->(우리가 필요할 지도 모르는 정보를)

addEventListener 내의 함수는 우리가 실행하는 것이 아니라
event가 호출됐을 때, JS가 실행하는 것이다. 이 때, 실행만
하는 것이 아닌 정보도 담아서 실행시켜준다.

submit event가 발생할 때, JS는 onLoginSubmit 함수를 호출하고
이 때, event object를 argument로 주고 preventDefault()를 통해
기본 동작이 실행되는 것을 막아준다.
*/
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    /*greeting.innerText = "Hello " + username; 아래의 방식 더 선호
     ${변수명} , `<- 기호로 시작해야함(물결 위치 점) 
     '' 나 "" 는 X 무조건 `` 백틱으로 해야 가능하다. */
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    // show the greetings
    paintGreetings(savedUsername);
}