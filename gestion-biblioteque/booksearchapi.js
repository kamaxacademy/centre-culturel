//https://www.npmjs.com/package/node-isbn

const isbn = require('node-isbn');
 
isbn.resolve(2090386851, function (err, book) {
    if (err) {
        console.log('Book not found', err);
    } else {
        console.log('Book found %j', book);
    }
});