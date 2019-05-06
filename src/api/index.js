const api = 'http://localhost:9000/movies';

function getMovies() {
  return fetch(`${api}`).then(res => res.json());
}

function getMovie(id) {
  return fetch(`${api}/${id}`).then(res => res.json());
}

function createMovie(movie) {
  return fetch(`${api}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  }).then(res => res.json());
}

function updateMovie(movie) {
  return fetch(`${api}/${movie.id}`, {
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  }).then(res => res.json());
}

function deleteMovie(id) {
  return fetch(`${api}/${id}`, { method: 'delete' });
}

export { getMovies, getMovie, createMovie, updateMovie, deleteMovie };
