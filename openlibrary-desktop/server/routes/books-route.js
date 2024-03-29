// Import express
import express from "express"

// Import books-controller
// const booksRoutes = require('./../controllers/books-controller.js')
import {getAllBooks, booksCreate} from './../controllers/books-controller.js'

// Create router
const router = express.Router()

// Add route for GET request to retrieve all book
// In server.js, books route is specified as '/books'
// this means that '/' translates to '/books'
router.get('/', getAllBooks)

// Add route for POST request to create new book
// In server.js, books route is specified as '/books'
// this means that '/create' translates to '/books/create'
// router.post('/create', booksRoutes.booksCreate)
router.post('/create', booksCreate)
// Add route for PUT request to delete specific book
// In server.js, books route is specified as '/books'
// this means that '/delete' translates to '/books/delete'
// router.put('/delete', booksRoutes.booksDelete)

// Add route for PUT request to reset bookshelf list
// In server.js, books route is specified as '/books'
// this means that '/reset' translates to '/books/reset'
// router.put('/reset', booksRoutes.booksReset)


// Add route for GET request to retrieve a single book
// In server.js, books route is specified as '/books'
// this means that '/id' translates to '/books/id'
// router.put('/id', booksRoutes.BookSingle)

// Export router
export default router;