import axios from 'axios'


const instances = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDQ5MTc2MDJiM2IzZjQzMjE1MGQyNDE1YTZiMjI1MiIsIm5iZiI6MTcyNDIxNTU1MC40NzkxNzYsInN1YiI6IjY2NWU5ZTRmNjE5YWU1ZDQ5NzIzNGQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tjZmpypuXgp3GRJ9yd5ulQXRMSW-rZ9thLgPVNFDpBY'
      }   
})

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export default instances