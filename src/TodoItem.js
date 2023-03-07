export function TodoItem({ todo ,toogleTodo }){
  const {id , task, completed }=todo;
  const handleTodoClick=()=>{
    toogleTodo(id);
  };
  return( 
         <li>
            <input type="checkbox" onChange={handleTodoClick}/>
            {task}
         </li>
)}