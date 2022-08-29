const API_KEY = " ";    //본인 API key값 입력
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoSuccess(position){
    const lat = position.coords.latitude;  //latitude
    const lon = position.coords.longitude;;  //longitude
    console.log(lat+">"+lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then(response => response.json()).then(data => { 
        console.log(`왜 안됨? ${data.name}`);       
        city.innerText =  data.name;
        weather.innerText = data.weather[0].main;
    }); 
}
/*fetch를 통해 url을 불러올 수 있다. 
fetch는 promise로, 당장 무언가가 일어나는 것이 아니라, 시간이 좀 걸린 후 에 일어난다.
서버의 응답을 기다리고 난 후 ~를 해라 -> .then()을 사용한다.
response.json -> url을 입력했을 때 나오는 정보들 전부를 의미한다.
*/
function onGeoError(){
    alert("Cant find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
//user의 위치를 받아올 수 있다. (받아오는데 성공하면 onGeoSuccess함수를,
// 실패하면 onGeoError을 받아온다.)