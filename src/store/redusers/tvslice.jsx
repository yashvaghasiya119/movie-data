import { createSlice } from "@reduxjs/toolkit";

let tvslice = createSlice({
    name:'movie',
    initialState:{
        info:null
    },
    reducers:{
        loadtv:(state,action)=>{
            state.info  = action.payload
        },
        removetv:(state,action)=>{
            state.info  = null
        }
    }
})

export default tvslice.reducer

export let {loadtv,removetv} = tvslice.actions