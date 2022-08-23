const images = [
    "ocean.jpg",
    "sky.jpg",
    "water.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// <img> 라는 태그가 생성된다.
bgImage.src = `img/${chosenImage}`;
// <img src="img/sky.jpg"> 가 생성된다.
// html에 <img src="img/sky.jpg"> 를 쓰는 것과 같은 효과이지만
// 사실상 body부분(html)에 추가를 아직 하지 않았기 때문에 그저 문자열일 뿐이다.

document.body.appendChild(bgImage);
//appenChild는 body에 html을 추가하는 역할을 한다.