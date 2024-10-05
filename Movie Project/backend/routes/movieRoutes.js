const express = require('express');
const { getMovies, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const { authenticate } = require('../middleware/authMiddleware');
const movieRoutes = express.Router();

router.get('/', getMovies);
router.post('/', authenticate, createMovie);
router.put('/:id', authenticate, updateMovie);
router.delete('/:id', authenticate, deleteMovie);

module.exports = movieRoutes;
