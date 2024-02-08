import './App.css';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  
  const [todos,setTodos]=useState( JSON.parse(localStorage.pro));
  const inpref =useRef();
  
  useEffect(() =>{
    localStorage.setItem('pro', JSON.stringify(todos));

  },[todos]);
  
  
    
  const todohandler =() => {
  const text =  inpref.current.value;
  const newItmes= { complted:false , text}
  setTodos([...todos,newItmes]);
  inpref.current.value="";  
};
const  donehandler =(index) => {
  const newtodos=[...todos];
  newtodos[index].complted=!newtodos[index].complted;
  setTodos(newtodos);

};
const delatehandler=(index) => {
  const supptodos=[...todos];
  supptodos.splice(index, 1);
  setTodos(supptodos);
}

  return (
    <div className="App">
        
       <h1>TO DO LIST</h1>
       <ul>
        <table>
          {
          todos.map((item , index) => {
            return <tr>
            <td> <li   className={item.complted? "done" : ""}
             key={index}
              onClick={()=> donehandler(index)}>{item.text}</li></td>
              <td><span onClick={()=> delatehandler(index)} >❌</span></td>
              </tr> ;
          })}
          </table>
       </ul>
       <div className="inputadd">
       <input ref={inpref} type="text" placeholder='write here' />
       <button onClick={todohandler}>Add</button>
       </div>
    </div>
  );
}

export default App;
