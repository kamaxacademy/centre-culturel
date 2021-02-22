// Import database
const { where } = require('./../db')
const knex = require('./../db')



// var multiIsbn = require("multi-isbn")
// multiIsbn.init()
// multiIsbn.find(9780156013987, function(err, data) {
//   if (err) throw err
//   // console.log(JSON.stringify(data, null, 2))

// //  data.map(data =>console.log(data.title))
// console.log(data.data[0].title)
// })

// {
//   "data": [
//     {
//       "title": "Le petit prince",
//       "publisher": "Houghton Mifflin Harc
//       "publishedDate": "2001",
//       "language": "en",
//       "authors": [
//         "Antoine de Saint-Exup├⌐ry"
//       ],
//       "isbn10": "0156013983",
//       "isbn13": "9780156013987"
//     }
//   ],
//   "via": [
//     "google",
//     "multi-isbn@0.3.1"
//   ]
// }

// Retrieve all books
exports.booksAll = async (req, res) => {
  // Get all books from database
  knex
    .select('*') // select all records
    .from('books') // from 'books' table
    .then(userData => {
      // Send books extracted from database in response
      res.json(userData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving books: ${err}` })
    })
}


//Retrieve Single Book
exports.BookSingle = async ( req, res)=>{
  //get Single book from database

  
  knex('books')
//  .where('id', req.body.id)
  .where('id', req.body.bookId)
  .select('author')
  .select('title')
   // find correct record based on id
  .then(userData =>{
     // Send books extracted from database in response
     console.log('user data',userData)
      // console.log('body',req)
    res.json(userData)
  })
  .catch(err =>{
     // Send a error message in response
      res.json({ message: `There was an error retrieving books: ${err}` })
  })
}

// // Create new book
exports.booksCreate = async (req, res) => {



  // Add new book to database
  knex('books')
    .insert({ // insert new record, a book
      'author': req.body.author,
      'title': req.body.title,
      'pubDate': req.body.pubDate,
      'isbn': req.body.isbn,
      'rating': req.body.rating
       
    })
    .then(() => {
      // Send a success message in response
      res.json({ message: `Book \'${req.body.title}\' by ${req.body.author} created.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error creating ${req.body.title} book: ${err}` })
    })
 
}






// Remove specific book
exports.booksDelete = async (req, res) => {
  // Find specific book in the database and remove it
  knex('books')
    .where('id', req.body.id) // find correct record based on id
    .del() // delete the record
    .then(() => {
      // Send a success message in response
      res.json({ message: `Book ${req.body.id} deleted.` })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error deleting ${req.body.id} book: ${err}` })
    })
}

// Remove all books on the list
exports.booksReset = async (req, res) => {
  // Remove all books from database
  knex
    .select('*') // select all records
    .from('books') // from 'books' table
    .truncate() // remove the selection
    .then(() => {
      // Send a success message in response
      res.json({ message: 'Book list cleared.' })
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error resetting book list: ${err}.` })
    })
}