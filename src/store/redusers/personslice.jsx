import { createSlice } from "@reduxjs/toolkit";

let personslice = createSlice({
    name:'movie',
    initialState:{
        info:null
    },
    reducers:{
        loadperson:(state,action)=>{
            state.info  = action.payload
        },
        removeperson:(state,action)=>{
            state.info  = null
        }
    }
})

export default personslice.reducer

export let {loadperson,removeperson} = personslice.actions