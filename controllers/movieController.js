const models = require('../models')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const movieController = {}

//List all movies
movieController.getAllMovies = async (req, res) => {
    try {
        const movies = await models.movie.findAll()
        res.json({movies})
    } catch (error) {
        res.json({error: error.message})
    }
}

//Get a single movie info
movieController.getOneMovie = async (req,res) => {
    try {
        const movie = await models.movie.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({movie})
    } catch (error) {
        res.json({error: error.message})
    }
}

//Save movies to my list
movieController.save = async (req, res) => {
    try {
        const movie = await models.movie.findOne({
            where: {
                id:req.params.id
            }
        })
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        //add a movie to myList using association
        const myList = await user.addMovie(movie)
        res.json({movie, user, myList})

    } catch (error) {
        res.json(error)
    }
}


//Delete movies from my list
movieController.delete = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        const deleteMovie = await models.userMovie.destroy({
            where: {
                userId: decryptedId.userId,
                movieId: req.params.id
            }
        })
        res.json({user, deleteMovie})
    } catch (error) {
        res.json(error)
    }
}

//Create comments
movieController.createComments = async (req, res) => {
    try {
        const movie = await models.movie.findOne({
            where: {
                id:req.params.id
            }
        })

        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        const comment = await models.comment.create({
            description: req.body.description
        })

        await movie.addComment(comment)
        await user.addComment(comment)
        await comment.reload()
        res.json({movie, user, comment})
    } catch (error) {
        res.json(error)
    }
}

module.exports = movieController