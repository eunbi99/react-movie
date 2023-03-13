// import Button from "./Button";
// import styles from "./App.module.css";
import { useState } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDo(""); // toDo 초기화
    setToDos(currentArray => [toDo, ...currentArray])  // state에 있는 todo와 이전의 모든 todo를 가져온다.
  }
  return (
    <div>
      <h1> TO DO LIST !</h1>
      <b> 📝 오늘 할 일 : {toDos.length} 개</b>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value = {toDo} 
          type= "text" 
          placeholder="할 일을 적어보세요!"
        />
        <button> 작성 </button> 
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => ( 
            <li key={index}> {item}</li>
          ))}
      </ul>
    </div>
      
  );
}

export default App;
