import { createSlice } from "@reduxjs/toolkit";

let initialState = {formIsValid : false}

const formIsValidSlice = createSlice({
    name : 'form',
    initialState,
    reducers:{
        setFormIsValid(state,action){
            state.formIsValid = action.payload
        }
    }
})

export const formActions = formIsValidSlice.actions

export default formIsValidSlice