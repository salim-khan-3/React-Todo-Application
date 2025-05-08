import "./Todo.css";
import { TodoForm } from "./todoForm";
import { TodoList } from "./TodoList";
import { TodoTimeDate } from "./TodoDateTime";
import { useState } from "react";
import { ClearAllTodoTask } from "./clearAll";


export const Todo = () =>{
   // todo useState
   const [task,setTask] = useState([]);

   // todo form submit 
   const handleInputSubmit = (inputValue) =>{
      if(!inputValue) return;
      if(task.includes(inputValue)) return;
      
      setTask((prevTask)=>[...prevTask,inputValue]);
   }


   //  todo item delete function 
   const handleDeleteTask = (value) =>{
      const updatedTask = task.filter((currTask)=>currTask !== value);
      setTask(updatedTask);  
   }

   // todo items check for complete or not 
   // const handleCheckTodo = () =>{
   //    console.log("hello world");
   // }

   //todo items clear all 
   const handleClearTodoTask = () =>{
      setTask([]);
   }  

    return (
        <section className="main_section">
           <div className="todo_container">

               <header>
                  <h1>TODO APPLICATION</h1>
                  <TodoTimeDate/>
               </header>

               <TodoForm onAddTask = {handleInputSubmit}/>
                  
              <div className="list_items">
               <ul>
                  {
                     task.map((currTask,index)=>{
                        return (
                          <TodoList key={index} data = {currTask} onDeleteTodo = {handleDeleteTask}/>
                        )
                     })
                  }
               </ul>
              </div>
               <ClearAllTodoTask onDeleteAll = {handleClearTodoTask}/>
           </div>
        </section>
    )
}