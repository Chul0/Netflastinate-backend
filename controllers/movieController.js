const models = require('../models')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const movieController = {}

//List all movies
movieController.getAllMovies = async (req, res) => {
    try {
        const movies = await models.movie.findAll({
            include: models.genre
        })
        res.json({movies})
    } catch (error) {
        res.json({error: error.message})
    }
}

//List all genres
//Had to add this route, to list all movies by genre
movieController.getAllGenres = async (req, res) => {
    try {
        const genre = await models.genre.findAll({
            include: models.movie
        })
        res.json({genre})
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
        let comments = await movie.getComments({order:[['id','DESC']], include: models.user})
        res.json({movie, comments})
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


//Edit comments
movieController.editComments = async (req, res) => {
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

        //get comments from a user and a movie
        const userComments = await user.getComments()
        const movieComments = await movie.getComments()
    //    console.log(user);

        //if userId and comment userId don't match, don't allow editing
        if(user.id !== userComments[0].userId){
            res.json({message: 'You can only edit the comments you created'})
            return 
        }
            //Find a comment if userId and movieId match
        const comment = await models.comment.findOne({
            where: {
                id: req.params.commentId,
                userId: userComments[0].userId,
                movieId: movieComments[0].movieId
            }
        })

        const updateComment = await comment.update({description: req.body.description})
        
        res.json({userComments, comment, updateComment})
        // res.json({user})
    } catch (error) {
        res.json(error)
    }
}

//Delete comments
movieController.deleteComments = async (req, res) => {
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

        //get comments from a user and a movie
        const userComments = await user.getComments()
        const movieComments = await movie.getComments()
    //    console.log(user);

        //if userId and comment userId don't match, don't allow editing
        if(user.id !== userComments[0].userId){
            res.json({message: 'You can only delete the comments you created'})
            return 
        }
            //Find a comment if userId and movieId match
        const comment = await models.comment.findOne({
            where: {
                id: req.params.commentId,
                userId: userComments[0].userId,
                movieId: movieComments[0].movieId
            }
        })

        const deleteComment = await comment.destroy()
        
        res.json({user, comment, message: 'Comment deleted'})
        // res.json({user})
    } catch (error) {
        res.json(error)
    }
}

module.exports = movieController