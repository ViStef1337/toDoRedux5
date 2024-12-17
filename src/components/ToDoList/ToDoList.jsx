import {useDispatch, useSelector} from "react-redux";
import {deleteToDo} from "../../redux/toDoSlice.js";

export const ToDoList=()=>{
    const toDoList = useSelector(state => state.toDos.items)
    const toDoFilter = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const hendleDelete =id=>{
        dispatch(deleteToDo(id))
    }
    const filteredToDos = toDoList.filter(item=>item.text.toLowerCase().includes(toDoFilter.toLowerCase()))
    return <ul>
        {filteredToDos.map(item=><li key={item.id}>{item.text} <button onClick={()=>hendleDelete(item.id)}>Delete</button></li>)}
    </ul>
}