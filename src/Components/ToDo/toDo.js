const ToDo = ({ todo, handleToggle }) => {
    return ( 
        <li className={todo.complete ? "complete" : "incomplete"}>
          {todo.task}
          <input className="checkbox" value={todo.complete} type="checkbox"  onClick={() => handleToggle(todo.id)}/>
        </li>
     );
}
 
export default ToDo;