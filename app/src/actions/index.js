import {
  getMovies as readMovies,
  getMovie as readMovie,
  createMovie,
  updateMovie as changeMovie,
  deleteMovie,
} from '../api';

export function getMovies() {
  return dispatch => {
    readMovies()
      .then(movies => {
        dispatch({ type: 'GET_MOVIES', movies });
      })
      .catch(err => console.error(err));
  };
}

export function getMovie(id) {
  return dispatch => {
    readMovie(id)
      .then(movie => {
        dispatch({ type: 'GET_MOVIE', movie });
      })
      .catch(err => console.error(err));
  };
}

export function addMovie(movie) {
  return dispatch => {
    createMovie(movie)
      .then(newMovie => {
        dispatch({ type: 'ADD_MOVIE', movie: newMovie });
      })
      .catch(err => console.error(err));
  };
}

export function updateMovie(movie) {
  return dispatch => {
    changeMovie(movie)
      .then(updatedMovie => {
        dispatch({ type: 'UPDATE_MOVIE', movie: updatedMovie });
      })
      .catch(err => console.error(err));
  };
}

export function removeMovie(id) {
  return dispatch => {
    deleteMovie(id)
      .then(() => {
        console.log(id);
        dispatch({ type: 'REMOVE_MOVIE', id });
      })
      .catch(err => console.error(err));
  };
}
