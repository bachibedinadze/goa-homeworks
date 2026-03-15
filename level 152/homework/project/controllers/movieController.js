const readFile = require("../utils/readFile");
const writeFile = require("../utils/writeFile");

exports.getAllMovies = (req, res) => {
  const movies = readFile();
  res.json(movies);
};

exports.getMovieById = (req, res) => {
  const movies = readFile();
  const id = parseInt(req.params.id);

  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.json(movie);
};

exports.createMovie = (req, res) => {
  const movies = readFile();
  const { name, category, description, rating } = req.body;

  if (!name || !category || !description || !rating) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newMovie = {
    id: movies.length + 1,
    name,
    category,
    description,
    rating,
    createdAt: new Date().toISOString()
  };

  movies.push(newMovie);
  writeFile(movies);

  res.status(201).json(newMovie);
};

exports.updateMovie = (req, res) => {
  const movies = readFile();
  const id = parseInt(req.params.id);

  const movieIndex = movies.findIndex(m => m.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  movies[movieIndex] = {
    ...movies[movieIndex],
    ...req.body
  };

  writeFile(movies);

  res.json(movies[movieIndex]);
};

exports.deleteMovie = (req, res) => {
  const movies = readFile();
  const id = parseInt(req.params.id);

  const movieIndex = movies.findIndex(m => m.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: "Movie not found" });
  }

  const deleted = movies.splice(movieIndex, 1);

  writeFile(movies);

  res.json({ message: "Movie deleted", deleted });
};