
import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from '@mui/material/Rating'; // Import Rating component
import "./MovieGrid.css";

const API_KEY = "9320f923d506550f84b0e5a4d4e6c97b"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

// Mapping of categories to endpoints or genre IDs
const categoryEndpoints = {
  'Popular': `${API_BASE_URL}/movie/popular`,
  'Top Rated': `${API_BASE_URL}/movie/top_rated`,
  'Upcoming': `${API_BASE_URL}/movie/upcoming`,
  'Action': `${API_BASE_URL}/discover/movie?with_genres=28`,
  'Adventure': `${API_BASE_URL}/discover/movie?with_genres=12`,
  'Animation': `${API_BASE_URL}/discover/movie?with_genres=16`,
  'Comedy': `${API_BASE_URL}/discover/movie?with_genres=35`,
  'Horror': `${API_BASE_URL}/discover/movie?with_genres=27`, // Added Horror endpoint
  'Drama': `${API_BASE_URL}/discover/movie?with_genres=18`,  // Added Drama endpoint
};

const MovieGrid = ({ selectedCategory }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const categoryEndpoint = categoryEndpoints[selectedCategory] || categoryEndpoints['Popular'];
        const response = await axios.get(categoryEndpoint, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1
          },
          timeout: 10000 // Set timeout to 10 seconds
        });

        // Filter out duplicate movies based on their ID
        const uniqueMovies = response.data.results.reduce((acc, current) => {
          const duplicate = acc.find(movie => movie.id === current.id);
          if (!duplicate) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);

        setMovies(uniqueMovies);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
        setError(error.message);
      }
    };

    fetchMovies();
  }, [selectedCategory]);

  return (
    <div className="movie-grid">
      {error && <div className="error-message">{error}</div>}
      {movies.length === 0 && !error && <p>Loading movies...</p>}
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
          {/* Displaying the rating */}
          <Rating 
            name={`rating-${movie.id}`} 
            defaultValue={movie.vote_average / 2} 
            precision={0.5} 
            readOnly 
          />
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;


