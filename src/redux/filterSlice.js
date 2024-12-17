import {createSlice} from "@reduxjs/toolkit";

const filterSlice= createSlice({
    name:'filter',
    initialState: '',
    reducers: {
        filterToDo(state,action){
            return action.payload
        }
    }
})

export const {filterToDo} = filterSlice.actions
export const toDoFilter = filterSlice.reducer