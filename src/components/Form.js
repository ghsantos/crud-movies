import React, { useState } from 'react';

import Button from './Button';

const Form = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState(2019);
  const [imdb, setImdb] = useState(0);
  const [director, setDirector] = useState('');
  const [directors, setDirectors] = useState([]);

  const addDirector = () => {
    setDirectors([...directors, director]);

    setDirector('');
  };

  const clearState = () => {
    setTitle('');
    setReleaseYear(2019);
    setImdb(0);
    setDirector('');
    setDirectors([]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addMovie({ title, releaseYear, imdb, directors });

    clearState();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title </label>
          <input
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
            style={styles.input}
          />
        </div>

        <div>
          <label>Release Year </label>
          <input
            type="number"
            value={releaseYear}
            onChange={event => setReleaseYear(event.target.value)}
            style={styles.input}
          />
        </div>

        <div>
          <label> IMDb</label>
          <input
            type="number"
            value={imdb}
            onChange={event => setImdb(event.target.value)}
            style={styles.input}
          />
        </div>

        <div>
          <label>Directors:</label>
          <p>{directors.join(', ')}</p>
          <input
            type="text"
            value={director}
            onChange={event => setDirector(event.target.value)}
            style={styles.input}
          />
          <Button onClick={addDirector} type="button">
            Add
          </Button>
        </div>

        <Button type="submit">Add new movie</Button>
      </form>
    </div>
  );
};

const styles = {
  input: {
    padding: '8px 10px',
    margin: '5px',
    borderColor: '#333',
    border: '1px solid',
    borderRadius: '2px',
  },
};

export default Form;
