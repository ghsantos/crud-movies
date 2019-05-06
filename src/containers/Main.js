import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getMovies, addMovie, updateMovie, removeMovie } from '../actions';
import Form from '../components/Form';
import Item from '../components/Item';

const Main = ({ movies, getMovies, addMovie, updateMovie, removeMovie }) => {
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies List</h1>
      </header>

      <main className="main">
        <Form addMovie={addMovie} />

        {movies.map(movie => (
          <Item
            {...movie}
            key={movie.id}
            onClickEdit={() => {}}
            onClickDelete={() => removeMovie(movie.id)}
          />
        ))}
      </main>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    movies: state.moviesReducer.movies,
  };
}

export default connect(
  mapStateToProps,
  { getMovies, addMovie, updateMovie, removeMovie }
)(Main);
