//https://www.npmjs.com/package/node-isbn
import isbn from 'node-isbn'
// const isbn = require('node-isbn');
//  //2090386851
// isbn.resolve(9782702124284, function (err, book) {
//     if (err) {
//         console.log('Book not found', err);
//     } else {
//         console.log('Book found %j', book);
//     }
// });

let books = [];

// Retrieve all books
export const getAllBooks = (req, res)=>{
// 9782702124284
//0735619670
//2090386851
    isbn.provider(['google', 'openlibrary'])
        .resolve("9782702124284", function (err, book) {
        if (err) {
            console.log('Book not found', err);
        } else {
            console.log('Book found %j', book);
            books.push(book)
               console.log(`Books in the database: ${books}`);
            res.send(books);
        }
    });

 

    
}
