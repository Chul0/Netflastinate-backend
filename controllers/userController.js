require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const models = require('../models')

const userController = {}

//signup
userController.create = async (req, res) => {
    try {
        const hashedPassword= bcrypt.hashSync(req.body.password,10)
        const user = await models.user.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        const encryptedId = jwt.sign({ userId: user.id}, process.env.JWT_SECRET) 

        res.json({user, message: 'User created!', userId:encryptedId})
    } catch (error) {
        if(error.errors[0].message === "email must be unique"){
            res.json( {error:'Email is already used'})
        }else if (error.errors[0].message ==="Validation notEmpty on name failed"){
            res.json({error: 'Name should be filled'})
        }else{
            res.json({error:error.message})
        }
    }
}

//login
userController.login = async(req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                email: req.body.email
            }
        })

        if (bcrypt.compareSync(req.body.password, user.password)) {
            const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)

            res.json({ user, message: 'Login successful', userId:encryptedId})
        }else{
            res.status(401).json({ message: "Password doesn't match"})
        }
    } catch (error) {
        res.status({error: error.message})
    }
}

//For user context
userController.verifyUser = async(req,res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.user.findOne({
            where: {
                id:decryptedId.userId
            }
        })

        if (user) {
            res.json({ user, message: 'User found'})
        }else {
            res.status(404).json({ message: 'User not found'})
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//List saved movies in my list
userController.getMyList = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })

        const savedMovie = await user.getMovies()

        res.json(savedMovie)
    } catch (error) {
        res.json(error)
    }
}

//User profile editing
userController.update = async (req, res) => {
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        const updates = {
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        }
        //if you've used hashedPassword for signup, you should use it in editing profile too! 

        const decryptedId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        const user= await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })
        console.log(user);
        const updateUser = await user.update(updates)
        res.json({updateUser})
    } catch (error) {
        res.json(error)
    }
}



module.exports = userController