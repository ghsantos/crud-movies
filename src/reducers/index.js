import { combineReducers } from 'redux';

const INITIAL_MOVIES_STATE = {
  movies: [],
};

function moviesReducer(state = INITIAL_MOVIES_STATE, action) {
  switch (action.type) {
    case 'GET_MOVIES':
      return { ...state, movies: [...action.movies] };

    case 'ADD_MOVIE':
      return { ...state, movies: [...state.movies, action.movie] };

    case 'UPDATE_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies.filter(movie => movie.id !== action.movie.id),
          action.movie,
        ],
      };

    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.id),
      };

    default:
      return state;
  }
}

const appReducer = combineReducers({
  moviesReducer,
});

export default appReducer;
