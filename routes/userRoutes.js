const userRoutes = require('express').Router()
const userController = require('../controllers/userController')

userRoutes.post('/', userController.create)
userRoutes.post('/login', userController.login)
userRoutes.get('/', userController.verifyUser)
userRoutes.get('/mylist', userController.getMyList)
userRoutes.put('/profile', userController.update)
userRoutes.delete('/profile', userController.deleteUser)

module.exports = userRoutes

