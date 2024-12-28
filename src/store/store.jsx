import { configureStore } from "@reduxjs/toolkit";
import moviedata from './redusers/movieslice'
import tvdata from './redusers/tvslice'
import persondata from './redusers/personslice'

export let store = configureStore({
    reducer:{
        movie:moviedata,
        tv:tvdata,
        person:persondata
    }
})