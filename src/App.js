import './App.css';
import React, { useRef, useState } from 'react';

function App() {


  const [todos,setTodos]=useState([]);
  const inpref =useRef();
  
  const todohandler =() => {
  const text =  inpref.current.value;
  setTodos([...todos,text]);
  inpref.current.value="";
};

  return (
    <div className="App">
      
       <h1>TO DO LIST</h1>
       <ul>
          {todos.map((item) => {
            return <li>{item}</li> ;
          })}
       </ul>
       <div className="inputadd">
       <input ref={inpref} type="text" placeholder='write here' />
       <button onClick={todohandler}>Add</button>
       </div>
    </div>
  );
}

export default App;
