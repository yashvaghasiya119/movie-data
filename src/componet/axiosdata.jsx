import axios from "axios";

export let da = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmQ5M2QwMWQ2NTRmMDlhMDExZDdiMmM0NjY4ZGI1ZSIsIm5iZiI6MTczNDI2OTM1My4xNDYsInN1YiI6IjY3NWVkOWE5NzViZDJmM2UxOTI3ODEzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QfJSEZLLR6IuuZE3vYAb_BcrgM3LwrADG_FGCFCb3gA'
    }
  });

