import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); //여러개의 toDo List를 받을 수 있는 list
  const onChange = (event)=>setToDo(event.target.value);
  const onSubmit = (event) =>{
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    /*JS 에서 toDo를 추가하기 위해서 toDos.push()를 했을 테지만
    React에서 State를 직접적으로 수정할 수 X
    toDO = "" (X) , setTodo("") (O) 수정하는 함수 이용!!*/
    setToDos(currentArray => [toDo, ...currentArray])  //첫번째 인자에 현재의 state(함수)를 받는다, 2번째 인자에는 이전의 toDos를 받는다.
    setToDo("");  //비워주는 역할
  };
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange = {onChange} value = {toDo} type="text" placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
