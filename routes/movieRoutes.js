const movieRoutes = require('express').Router()
const movieController = require('../controllers/movieController')

movieRoutes.get('/', movieController.getAllMovies)
movieRoutes.get('/genres', movieController.getAllGenres)
movieRoutes.get('/:id', movieController.getOneMovie)
movieRoutes.post('/:id', movieController.save)
movieRoutes.delete('/:id', movieController.delete)
movieRoutes.post('/:id/comment', movieController.createComments)


module.exports = movieRoutes

