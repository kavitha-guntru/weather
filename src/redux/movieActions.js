/*import axios from "axios";

const API_KEY = "9320f923d506550f84b0e5a4d4e6c97b"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

// Action Types


// Fetch Movies Action
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({ type: SET_MOVIES, payload: response.data.results });
  } catch (error) {
    console.error("Error fetching movies:", error);
    // You can dispatch an error action here if needed, e.g.,
    // dispatch({ type: "FETCH_MOVIES_ERROR", payload: error.message });
  }
};

// Add Movie Action
export const addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    payload: movie,
  };
};

// Remove Movie Action
export const removeMovie = (movieId) => {
  return {
    type: 'REMOVE_MOVIE',
    payload: movieId,
  };
};

// Update Movie Action
export const updateMovie = (movie) => {
  return {
    type: 'UPDATE_MOVIE',
    payload: movie,
  };
};

// Clear Movies Action
export const clearMovies = () => {
  return {
    type: 'CLEAR_MOVIES',
  };
};*/




import axios from "axios";

const API_KEY = "9320f923d506550f84b0e5a4d4e6c97b"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";
//const API_BASE_URL = "http://localhost:8080";

// Action Types
export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';


// Fetch Movies Action
export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    dispatch({ type: SET_MOVIES, payload: response.data.results });
  } catch (error) {
    console.error("Error fetching movies:", error);
    // You can dispatch an error action here if needed, e.g.,
    // dispatch({ type: "FETCH_MOVIES_ERROR", payload: error.message });
  }
};

// Add Movie Action
export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
};

// Remove Movie Action
export const removeMovie = (movieId) => {
  return {
    type: REMOVE_MOVIE,
    payload: movieId,
  };
};

// Update Movie Action
export const updateMovie = (movie) => {
  return {
    type: UPDATE_MOVIE,
    payload: movie,
  };
};

// Clear Movies Action
export const clearMovies = () => {
  return {
    type: CLEAR_MOVIES,
  };
  // actions.js



};
