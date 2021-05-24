const models = require('../models')

const commentController = {}


// //Create comments
// commentController.createComments = async (req, res) => {
//     try {
//         const movie = await models.movie.findOne({
//             where: {
//                 id:req.params.id
//             }
//         })
//         const decryptedId = jwt.verify(req.headers.authorizatino, process.env.JWT_SECRET)

//         const user = await models.user.findOne({
//             where: {
//                 id: decryptedId.userId
//             }
//         })

//         const comment = await models.comment.create({
//             description: req.body.description
//         })

//         await movie.addComment(comment)
//         await user.addComment(comment)

//         res.json({movie, user})
//     } catch (error) {
//         res.json(error)
//     }
// }

module.exports = commentController