const express = require('express');
bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const movies = [
  {
    id: 1,
    title: 'Avengers: Endgame',
    releaseYear: 2019,
    imdb: 9.0,
    directors: ['Anthony Russo', 'Joe Russo'],
  },
];

app.get('/', (req, res) => res.json({ hello: 'world' }));

app.get('/movies', (req, res) => res.json(movies));

app.post('/movies', (req, res) => {
  const movie = req.body;
  const id = generateIntergerKey();

  movie.id = id;
  movies.push(movie);

  res.status(201).json(movie);
});

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;

  const index = getIndex(movies, Number.parseInt(id));

  if (index === -1) {
    res.sendStatus(404);
  } else {
    res.json(movies[index]);
  }
});

app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const movie = req.body;

  console.log(movie);

  const index = getIndex(movies, Number.parseInt(id));

  if (index === -1) {
    res.sendStatus(400);
  } else {
    movies[index] = movie;

    res.json(movies[index]);
  }
});

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;

  const index = getIndex(movies, Number.parseInt(id));

  if (index === -1) {
    res.sendStatus(400);
  } else {
    movies.splice(index, 1);

    res.sendStatus(204);
  }
});

app.listen(9000, function () {
  console.log('Listening on port 9000!')
});

function getIndex(data, id) {
  return data.findIndex(obj => obj.id === id);
}

function generateIntergerKey() {
  return new Date().getTime();
}
