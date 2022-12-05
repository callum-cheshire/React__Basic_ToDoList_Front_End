import ToDo from "../ToDo/toDo.js";

const ToDoList = ({ toDoList, handleToggle, handleDelete }) => {
    return ( 
        <ul className="todo-list">
          {toDoList.map((todo) => {
            return (
                <ToDo todo={todo} key={todo.id} handleToggle={handleToggle}/>
            )
          })}
        <div className="delete-button-container">
          <button className="delete-button" onClick={() => handleDelete()}>Delete completed tasks</button>
        </div>
        </ul>
     );
}
 
export default ToDoList;