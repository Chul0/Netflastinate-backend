require('dotenv').config()

const express = require('express')
const app = express()


app.use(require('morgan')('tiny'))
const routesReport = require('rowdy-logger').begin(app)

app.use(express.json())
app.use(require('cors')())


//////////////////code below///////////////////////
const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

const movieRoutes = require('./routes/movieRoutes')
app.use('/movies', movieRoutes)

const commentRoutes = require('./routes/commentRoutes')
app.use('/comments', commentRoutes)

///////////////////code above//////////////////

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`backend server running on ${PORT}!`);
  routesReport.print()
})