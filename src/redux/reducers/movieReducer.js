// reducers/movieReducer.js
/*const initialState = {
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };

    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };

    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id
            ? { ...movie, ...action.payload }
            : movie
        ),
      };

    case "CLEAR_MOVIES":
      return {
        ...state,
        movies: [],
      };

    default:
      return state;

  }
};
export default movieReducer;*/

//2

// reducers/movieReducer.js
/*const initialState = {
  movies: [],
  searchResults: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      // Remove duplicates when setting movies
      const uniqueMovies = Array.from(new Set(action.payload.map(movie => movie.id)))
        .map(id => action.payload.find(movie => movie.id === id));

      return {
        ...state,
        movies: uniqueMovies,
      };

    case "ADD_MOVIE":
      // Only add the movie if it's not already in the state
      if (state.movies.some(movie => movie.id === action.payload.id)) {
        return state;
      }

      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };

    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id
            ? { ...movie, ...action.payload }
            : movie
        ),
      };

    case "CLEAR_MOVIES":
      return {
        ...state,
        movies: [],
      };

    default:
      return state;
  }
  case "SET_SEARCH_RESULTS":
    newState = {
      ...state,
      searchResults: action.payload,
    };
    break;
    default:
  newState state;
};

export default movieReducer;*/

//777
/*const initialState = {
  movies: [],
  searchResults: [], // Added initialization for searchResults
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      // Remove duplicates when setting movies
      const uniqueMovies = Array.from(new Set(action.payload.map(movie => movie.id)))
        .map(id => action.payload.find(movie => movie.id === id));

      return {
        ...state,
        movies: uniqueMovies,
      };

    case "ADD_MOVIE":
      // Only add the movie if it's not already in the state
      if (state.movies.some(movie => movie.id === action.payload.id)) {
        return state;
      }

      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };

    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id
            ? { ...movie, ...action.payload }
            : movie
        ),
      };

    case "CLEAR_MOVIES":
      return {
        ...state,
        movies: [],
      };

    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;*/
///
const initialState = {
  movies: [],
  searchResults: [], // Added initialization for searchResults
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      // Remove duplicates when setting movies
      const uniqueMovies = Array.from(new Set(action.payload.map(movie => movie.id)))
        .map(id => action.payload.find(movie => movie.id === id));

      return {
        ...state,
        movies: uniqueMovies,
      };

    case "ADD_MOVIE":
      // Only add the movie if it's not already in the state
      if (state.movies.some(movie => movie.id === action.payload.id)) {
        return state;
      }

      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case "REMOVE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };

    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id
            ? { ...movie, ...action.payload }
            : movie
        ),
      };

    case "CLEAR_MOVIES":
      return {
        ...state,
        movies: [],
      };

    case "SET_SEARCH_RESULTS":
      // Set search results based on the query
      return {
        ...state,
        searchResults: state.movies.filter(movie =>
          movie.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
};

export default movieReducer;
