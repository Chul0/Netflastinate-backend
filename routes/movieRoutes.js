const movieRoutes = require('express').Router()
const movieController = require('../controllers/movieController')

movieRoutes.get('/', movieController.getAllMovies)
movieRoutes.get('/genres', movieController.getAllGenres)
movieRoutes.get('/:id', movieController.getOneMovie)
movieRoutes.post('/:id', movieController.save)
movieRoutes.delete('/:id', movieController.delete)
movieRoutes.post('/:id/comment', movieController.createComments)
movieRoutes.put('/:id/comment/:commentId', movieController.editComments)
movieRoutes.delete('/:id/comment/:commentId', movieController.deleteComments)


module.exports = movieRoutes

