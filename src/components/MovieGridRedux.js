  /*import React, { useEffect } from "react";
  import { useSelector, useDispatch } from "react-redux";
  import { 
    fetchMovies, 
    addMovie,
    removeMovie, 
    updateMovie, 
    clearMovies, 
  } from "../redux/movieActions";
  import "./MovieGrid.css";

  const MovieGridRedux = () => 
    {
      const dispatch = useDispatch();
      const movies = useSelector((state) => state.movies.movies);
    
      useEffect(() => {
        dispatch(fetchMovies());
      }, [dispatch]);
    
      const handleAddMovie = () => {
        const newMovie = {
          id: new Date().getTime(), // Unique ID for testing
          title: "New Movie",
          release_date: "2024-01-01",
          poster_path: "/path_to_new_movie_poster.jpg",
        };
        dispatch(addMovie(newMovie));
      };
    
      const handleRemoveMovie = (movieId) => {
        dispatch(removeMovie(movieId));
      };
    
      const handleUpdateMovie = (movieId) => {
        const updatedMovie = {
          id: movieId,
          title: "Updated Movie Title",
          release_date: "2025-01-01",
          poster_path: "/path_to_updated_movie_poster.jpg",
        };
        dispatch(updateMovie(updatedMovie));
      };
    
      const handleClearMovies = () => {
        dispatch(clearMovies());
      };
      return (
        <div>
          <button onClick={handleAddMovie}>Add Movie</button>
          <button onClick={() => handleRemoveMovie(movies[0]?.id)}>
            Remove First Movie
          </button>
          <button onClick={() => handleUpdateMovie(movies[0]?.id)}>
            Update First Movie
          </button>
          <button onClick={handleClearMovies}>Clear Movies</button>
    
          <div className="movie-grid">
            {movies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };
    

  export default MovieGridRedux;*/



  //2

  // Simplified version without buttons
/*import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movieActions";
import "./MovieGrid.css";

const MovieGridRedux = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieGridRedux;*/


//3

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, clearMovies } from "../redux/movieActions";
import "./MovieGrid.css";

const MovieGridRedux = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const uniqueMovies = Array.from(new Set(movies.map(movie => movie.id)))
    .map(id => movies.find(movie => movie.id === id));

  return (
    <div className="movie-grid">
      {uniqueMovies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
         <clearMovies/>
        </div>
      ))}
    
    </div>
  );
  
};

export default MovieGridRedux;

