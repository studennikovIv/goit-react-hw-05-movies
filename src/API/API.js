import axios from 'axios';
const default_API = 'https://api.themoviedb.org/3';
const KEY = '901cdc5b7d6a651cf0c912734ec57eee';
const searchFilm = 'search/movie?query';
export const API_TOP_FILM = async (option) =>{
    const response = await axios.get(`${default_API}/trending/movie/day?api_key=${KEY}`)
   return response
}
export const API_SEARCH_FILM = async (query) =>{
    const response = await axios.get(`${default_API}/search/movie?query=${query}&api_key=${KEY}`)
    return response
};


export const API_GET_FILM_BY_ID = async (id) =>{
    const response = await axios.get(`${default_API}/movie/${id}?api_key=${KEY}`)
    return response
}


export const API_GET_CAST = async (id) =>{
    const response = await axios.get(`${default_API}/movie/${id}/credits?api_key=${KEY}`)
    return response;
}


export const API_GET_REVIEWS = async (id)=>{
    const response = await axios.get(`${default_API}/movie/${id}/reviews?api_key=${KEY}`)
    return response
}