import { createSlice } from "@reduxjs/toolkit";

let movieslice = createSlice({
    name:'movie',
    initialState:{
        info:null
    },
    reducers:{
        loadmovie:(state,action)=>{
            state.info  = action.payload
        },
        removemovie:(state,action)=>{
            state.info  = null
        }
    }
})

export default movieslice.reducer

export let {loadmovie,removemovie} = movieslice.actions

