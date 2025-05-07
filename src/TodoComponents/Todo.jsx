import { useEffect, useState } from "react";
import "./Todo.css";
import { MdCheckCircle, MdDelete } from "react-icons/md";


export const Todo = () =>{
   // todo useState
   const [inputValue,setInputValue] = useState('');
   const [task,setTask] = useState([]);
   const [dateTime,setDateTime] = useState("")

   // todo time and date 
   useEffect(()=>{
      const interval = setInterval(()=>{
         const now = new Date();
         const formattedDate = now.toLocaleDateString();
         const formattedTime = now.toLocaleTimeString();
         setDateTime(`${formattedDate} - ${formattedTime}`)
      },1000)
      return ()=> clearInterval(interval);
   },[])

   // todo input field 
   const handleInputChange = (value) =>{
      setInputValue(value);
   }

   // todo form submit 
   const handleInputSubmit = (e) =>{
      e.preventDefault();

      if(!inputValue) return;

      if(task.includes(inputValue)) {
         setInputValue('');
         return;
      }

      setTask((prevTask)=>[...prevTask,inputValue]);

      setInputValue('');
   }

   // todo task delete 
   const newTask = {
      id: Date.now(), 
      text: inputValue
    };
    
   const handleDeleteTask = (id) =>{
      setTask(Prev => Prev.filter(task=>task.id !== id));
   }



    return (
        <section className="main_section">
           <div className="todo_container">

               <header>
                  <h1>TODO APPLICATION</h1>
                  <h2>{dateTime}</h2>
               </header>

              <div className="form_field">
                 <form className="form" onClick={handleInputSubmit}>
                    <div className="input_add_task">
                        <input type="text" name="name" value={inputValue} onChange={(e)=>handleInputChange(e.target.value)} />
                        <button className="Add_task">Add Task</button>
                    </div>
                 </form>
              </div>
              <div className="list_items">
               <ul>
                  {
                     task.map((currTask,index)=>{
                        return (
                           <li key={index}>
                               <span>{currTask}</span>
                               <div className="btn">
                                  <button className="check"><MdCheckCircle /></button>
                                  <button className="delete" onClick={()=>handleDeleteTask(currTask.id)}><MdDelete /></button>
                               </div>
                           </li>
                        )
                     })
                  }
               </ul>
              </div>
              <button className="clear_all">
                 Clear All
              </button>
           </div>
        </section>
    )
}