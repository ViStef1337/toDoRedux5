import {useDispatch} from "react-redux";
import {filterToDo} from "../../redux/filterSlice.js";

export const Filter =()=>{
    const dispatch = useDispatch()
    const hendleChange = e =>{
        dispatch(filterToDo(e.target.value))
        console.log(e.target.value)
    }
    return <input onChange={hendleChange} type="text"/>
}