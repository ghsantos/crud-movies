const api = 'http://localhost:3000/movies';

function getMovies() {
  return fetch(`${api}`).then(res => res.json());
}

function getMovie(id) {
  return fetch(`${api}/${id}`).then(res => res.json());
}

function createMovie(movie) {
  return fetch(`${api}`, { method: 'post', body: movie }).then(res =>
    res.json()
  );
}

function updateMovie(movie) {
  return fetch(`${api}/${movie.id}`, { method: 'put', body: movie }).then(res =>
    res.json()
  );
}

function deleteMovie(id) {
  return fetch(`${api}/${id}`, { method: 'delete' }).then(res => res.json());
}

export { getMovies, getMovie, createMovie, updateMovie, deleteMovie };
