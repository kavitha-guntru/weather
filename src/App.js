/*import React from 'react';
import ButtonAppBar from './components/head'; 
import PersistentDrawerLeft from './components/sidebar';
import MovieGrid from './components/MovieGrid';
import MovieGridRedux from "./components/MovieGridRedux";
function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <PersistentDrawerLeft/>
      <main style={{ marginLeft: "240px", marginTop: "64px" }}>
        <MovieGrid />
      </main>
      <MovieGridRedux/>
    </div>
  );
}

export default App;*/




///789
/*import React, { useState } from 'react';
import ButtonAppBar from './components/head';
import PersistentDrawerLeft from './components/sidebar';
import MovieGrid from './components/MovieGrid';
import MovieGridRedux from "./components/MovieGridRedux";
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie, updateMovie, clearMovies } from './redux/movieActions';
import { Box, Button, Toolbar } from '@mui/material';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddMovie = () => {
    const newMovie = {
      id: new Date().getTime(), // Unique ID for testing
      title: "New Movie",
      release_date: "2024-01-01",
      poster_path: "/path_to_new_movie_poster.jpg",
    };
    dispatch(addMovie(newMovie));
  };

  const handleRemoveMovie = () => {
    dispatch(removeMovie(movies[0]?.id));
  };

  const handleUpdateMovie = () => {
    const updatedMovie = {
      id: movies[0]?.id,
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
    <div className="App">
      <ButtonAppBar />
      <PersistentDrawerLeft onCategorySelect={handleCategorySelect} />
      <Toolbar sx={{ justifyContent: 'center', marginTop: '64px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAddMovie}>
            Add Movie
          </Button>
          <Button variant="contained" color="secondary" onClick={handleRemoveMovie}>
            Remove First Movie
          </Button>
          <Button variant="contained" color="warning" onClick={handleUpdateMovie}>
            Update First Movie
          </Button>
          <Button variant="contained" color="error" onClick={handleClearMovies}>
            Clear Movies
          </Button>
        </Box>
      </Toolbar>
      <main style={{ marginLeft: "240px", marginTop: "32px" }}>
        <MovieGrid selectedCategory={selectedCategory} />
        <MovieGridRedux />
      </main>
    </div>
  );
}

export default App;*/

//kk
import React, { useState } from 'react';
import ButtonAppBar from './components/head';
import PersistentDrawerLeft from './components/sidebar';
import MovieGrid from './components/MovieGrid';
import MovieGridRedux from "./components/MovieGridRedux";
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, removeMovie, updateMovie, clearMovies } from './redux/movieActions';
import { Box, Button, Toolbar } from '@mui/material';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddMovie = () => {
    const newMovie = {
      id: new Date().getTime(), // Unique ID for testing
      title: "New Movie",
      release_date: "2024-01-01",
      poster_path: "/path_to_new_movie_poster.jpg",
    };
    dispatch(addMovie(newMovie));
  };

  const handleRemoveMovie = () => {
    dispatch(removeMovie(movies[0]?.id));
  };

  const handleUpdateMovie = () => {
    const updatedMovie = {
      id: movies[0]?.id,
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
    <div className="App">
      <ButtonAppBar onSearch={handleSearch} />
      <PersistentDrawerLeft onCategorySelect={handleCategorySelect} />
      <Toolbar sx={{ justifyContent: 'center', marginTop: '64px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAddMovie}>
            Add Movie
          </Button>
          <Button variant="contained" color="secondary" onClick={handleRemoveMovie}>
            Remove First Movie
          </Button>
          <Button variant="contained" color="warning" onClick={handleUpdateMovie}>
            Update First Movie
          </Button>
          <Button variant="contained" color="error" onClick={handleClearMovies}>
            Clear Movies
          </Button>
        </Box>
      </Toolbar>
      <main style={{ marginLeft: "240px", marginTop: "32px" }}>
        <MovieGrid selectedCategory={selectedCategory} searchQuery={searchQuery} />
        <MovieGridRedux />
      </main>
    </div>
  );
}

export default App;
