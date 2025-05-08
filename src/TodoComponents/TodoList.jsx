import { MdCheckCircle, MdDelete } from "react-icons/md"

export const TodoList = ({key,data,onDeleteTodo}) =>{
    return(
        <li key={key}>
            <span>{data}</span>
            <div className="btn">
            <button className="check"><MdCheckCircle /></button>
            <button className="delete" onClick={()=>onDeleteTodo(data)}><MdDelete /></button>
            </div>
        </li>
    )
}