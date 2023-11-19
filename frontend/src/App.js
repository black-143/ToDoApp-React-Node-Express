import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';
import { useEffect, useState } from 'react';
import { addToDo, getAllToDo,updateToDo,deleteToDo } from './utils/HandleApi';

function App() {

  const [toDo,setToDo] = useState([])
  const [text,setText] = useState("");
  const [isUpdating,setIsUpdating]=useState(false);
  const [toDoId,setToDoId]=useState()

  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode=(_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id);
  }
  return (
    <div className="App">
      
      <div classNaame="container">
        <h1>ToDo app</h1>
        <div classNaame="top">
          <input 
          type="text" 
          value={text}
          onChange={(e)=>setText(e.target.value)}
          placeholder="Add ToDos...."/>
          
          <div 
          classNaame="add" 
          onClick={ isUpdating ?
           ()=>updateToDo(toDoId,text,setText,setIsUpdating) : 
           ()=>addToDo(text,setText,setToDo)}>
            {isUpdating ? "Update":"Add"
          }          
          </div>
        </div>
        <div classNaame="list">

          {
            toDo.map((item)=>{
              <ToDo 
              key={item._id} text={item.text}
              updateMode={()=>updateMode(item._id,item.text)}
              deleteToDo={()=>deleteToDo(item._id,setToDo)}/>
            })
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
