//https://www.npmjs.com/package/node-isbn
import isbn from 'node-isbn'
// const fs = require("fs");
import * as fs from'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
// const path = require('path');
// const axios = require("axios").default;
import axios from 'axios'

// fileUrl: the absolute url of the image or video you want to download
// downloadFolder: the path of the downloaded file on your machine
const downloadFile = async (fileUrl, downloadFolder) => {
  // Get the file name
  const fileName = path.basename(fileUrl);


  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  // The path of the downloaded file on our machine
  const localFilePath = path.resolve(__dirname, downloadFolder, fileName);
  try {
    const response = await axios({
      method: "GET",
      url: fileUrl,
      responseType: "stream",
    });

    await response.data.pipe(fs.createWriteStream(localFilePath));
    console.log("Successfully downloaded file!");
  } catch (err) {
    throw new Error(err);
  }
};


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
          if(book.imageLinks){
              const IMAGE_URL = `http://covers.openlibrary.org/b/isbn/9782702124284-M.jpg`;
            downloadFile(IMAGE_URL, 'download');
          }
            books.push(book)
               console.log(`Books in the database: ${books}`);
            res.send(books);
        }
    });

 

    
}
