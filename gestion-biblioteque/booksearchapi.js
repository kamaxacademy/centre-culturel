//https://www.npmjs.com/package/node-isbn

const isbn = require('node-isbn');
 //2090386851
isbn.resolve(9782702124284, function (err, book) {
    if (err) {
        console.log('Book not found', err);
    } else {
        console.log('Book found %j', book);
    }
});