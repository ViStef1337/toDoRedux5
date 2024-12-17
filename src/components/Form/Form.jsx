import {useDispatch} from "react-redux";
import {addToDo} from "../../redux/toDoSlice.js";
import {nanoid} from "@reduxjs/toolkit";

export const Form =()=>{
    const dispatch = useDispatch()
    const hendleSubmit =e=>{
        e.preventDefault()
        dispatch(addToDo({text: e.target.elements.text.value,id:nanoid()}))
        e.target.reset()
    }
    return <form onSubmit={hendleSubmit}>
        <input name='text' type="text"/>
        <button type='submit'>Submit</button>
    </form>
}