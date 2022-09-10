const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];   //localStorage에 저장할 내용
//local Storage에 배열은 저장X, Text만 저장이 가능하다.

function saveToDos(){   //local Storage에 저장해주는 함수
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify()는 JS object나 array 또는 어떤 JS 코드든 String으로 바꿔준다.
    // a, b, c 를 ["a","b","c"] 와 같은 모양으로 local Storage에 저장해준다.
}

function deleteToDo(event){ //ToDo List에서 삭제하는 함수
    const li = event.target.parentElement;  //부모 Element, 즉 버튼의 부모인 li를 받아올 수 있다.
    li.remove();
    //li.id는 string이고 toDo.id는 number이므로 자료형을 맞춰서 조건에 넣기.
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));    //우리가 클릭한 ID(li.id)와 다른 toDo는 남기는 것
    saveToDos();    //지운 toDO를 제외한 나머지 toDo들을 다시 저장해줘야한다.(=업데이트)
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text+" ";
    const button = document.createElement("button");
    button.innerText = "✔️";
    button.addEventListener("click", deleteToDo);   
    li.appendChild(span);   //li의 자식으로 span을 넣는다.
    li.appendChild(button); //li 자식으로 button 추가   
    toDoList.appendChild(li);   //id가 toDoList인 태그에 li를 자식으로 넣는다.
    
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";   //엔터를 누르면 입력칸이 비워진다.
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),  //랜덤한 숫자를 주는 것과 같은 효과
    };
    toDos.push(newTodoObj); //localStorage에 text뿐 아니라 id도 저장
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    // JSON.parse() 를 사용하면 array로 바꿀 수 있다.
    toDos = parsedToDos;    //local 저장소에 ToDos가 있으면 기존의 내용을 불러온다.
    parsedToDos.forEach(paintToDo);     //JS는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해준다.
}

/* filter함수 
function sexyFilter(item){ 
    return item !== 3
 }
const newArr = [1, 2, 3, 4].filter(sexyFilter);
or
const newArr = [1, 2, 3, 4].filter(item=> item!==3)

    sexyFilter 함수는 반드시 true/false값을 리턴해야한다.
    해당 item을 new array(newArr)에 포함하고 싶으면 true, 아니면 false
*/