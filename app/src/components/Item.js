/* @flow weak */

import React from 'react';

import Button from './Button';

const Item = ({
  title,
  releaseYear,
  imdb,
  directors,
  onClickEdit,
  onClickDelete,
  id,
}) => (
  <article style={styles.container}>
    <h3 style={styles.title}>{title}</h3>

    <div style={styles.content}>
      <p>Release year: {releaseYear}</p>
      <p>IMDb: {imdb}</p>
    </div>

    <p>directors: {directors.join(', ')}</p>

    <Button onClick={onClickEdit}>Edit</Button>
    <Button onClick={onClickDelete}>Delete</Button>
  </article>
);

const styles = {
  container: {
    padding: '5px 15px',
    margin: 10,
    boxShadow: '0 1px 8px 0 rgba(0,0,0,0.2)',
    borderRadius: '5px',
  },
  title: {
    color: '#333',
    fontSize: 24,
  },
};

export default Item;
