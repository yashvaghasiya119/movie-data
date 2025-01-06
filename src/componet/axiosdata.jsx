import axios from "axios";

export let da = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_API_KEY 
    }
  });

  
