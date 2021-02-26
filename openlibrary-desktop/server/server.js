// Import Modules
import express from "express"
import bodyParser from "body-parser"
import compression from "compression"
import cors from "cors"
import helmet from "helmet"

//Import all Routes
import userRoutes from './routes/users.js'
import booksRoutes from './routes/books-route.js'
// Create express app
const app = express()


// Apply middleware
// Note: Keep this at the top, above routes
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



  // Set default port for express app
// const PORT = process.env.PORT || 4001
const PORT =5000;
  app.use(bodyParser.json());


app.use('/users', userRoutes);
app.use('/books', booksRoutes)

app.get('/', function (req, res) {
    res.send('hello world')
  })
 
  // Implement 500 error route
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken.')
  })
  
  // Implement 404 error route
  app.use(function (req, res, next) {
    res.status(404).send('Sorry we could not find that.')
  })


  // Start express app
app.listen(PORT, function() {
    console.log(`Server is running on: ${PORT}`)
  })
