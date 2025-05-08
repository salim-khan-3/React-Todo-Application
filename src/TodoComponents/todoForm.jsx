import { useState } from "react";

export const TodoForm = ({onAddTask}) =>{
    //todo input useState
       const [inputValue,setInputValue] = useState('');

    // todo input field 
    const handleInputChange = (value) =>{
        setInputValue(value);
        }

   // todo form submit 
   const handleInputSubmit = (event) =>{
    event.preventDefault();
    onAddTask(inputValue)
    setInputValue('');
   }

   return (
    <div className="form_field">
        <form className="form" onSubmit={handleInputSubmit}>
            <div className="input_add_task">
                <input type="text" name="name" value={inputValue} onChange={(e)=>handleInputChange(e.target.value)} />
                <button className="Add_task">Add Task</button>
            </div>
        </form>
    </div> 
   )
}