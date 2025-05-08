export const ClearAllTodoTask = ({onDeleteAll}) =>{
    return(
        <button className="clear_all" onClick={onDeleteAll}>
          Clear All
        </button>
    )
}