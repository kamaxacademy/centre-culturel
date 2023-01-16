/*
Math.floor returns a whole number, while Math.random() will return a float between 0 and 1.
To access an item in an array, like rand[0], you need to have a whole number. You cannot access an item in array with rand[1.43].
That little line of code is going to access a random item in an array by generating a random float from zero to the array's length, and rounding it to its nearest whole number with Math.floor
*/
const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const title = () => {
    return random([
        'Do Androids Dream of Electric Sheep?', 
        'The Hitchhiker Guide to the Galaxy', 
        'Something Wicked This Way Comes', 
        'Pride and Prejudice and Zombies', 
        'To Kill a Mockingbird',
        'The Unbearable Lightness of Being'
    
    ]);
};

const publisher = () => {
    return random(['Reilly Media', 'Amazon', 'Ingram', 'Indigo', 'Barnes & Noble']);
};

const author = () => {
    return random([
        'Ralph Lauren',
        'Alexander Wang',
        'Grayse',
        'Marc NY Performance',
        'Scrapbook',
        'J Brand Ready to Wear',
        'Vintage Havana',
        'Neiman Marcus Cashmere Collection',
        'Derek Lam 10 Crosby',
        'Jordan'
    ]);
};

const type = () => {
    return random([
        'Science Fiction',
        'Fiction',
        'Classics',
        'Fantasy',
        'Novels',
        'Litterature'
    ]);
};

const date = () => {
    return (Math.random() * 10000).toFixed();
};

function generate(count) {
    const data = [];
    for(let i = 0; i < count; i++) {
        const currentPublisher = publisher();
        const currentTitle = title();
        const currentType = type();
        const currentAuthor = author();
        const currentDate = date();

        data.push({
            name: `${currentAuthor} ${currentType} ${currentPublisher} ${currentTitle}`,
            publisher: currentPublisher,
            title: currentTitle,
            author: currentAuthor,
            type: currentType,
            date: currentDate,
           
        });
    }
    return data;
}

export default generate;



// {

//     "title": "Code Complete",

//     "authors": [

//         "Steve McConnell"

//     ],

//     "publisher": "O'Reilly Media, Inc.",

//     "publishedDate": "2004",

//     "description": "Features the best practices in the art and...",

//     "industryIdentifiers": [

//         {

//             "type": "OTHER",

//             "identifier": "UCSC:32106018687688"

//         }

//     ],

//     "readingModes": {

//         "text": false,

//         "image": false

//     },

//     "pageCount": 914,

//     "printType": "BOOK",

//     "categories": [

//         "Computers"

//     ],

//     "averageRating": 4,

//     "ratingsCount": 123,

//     "contentVersion": "preview-1.0.0",

//     "imageLinks": {

//         "smallThumbnail": "http://books.google.com/books/content?id=QnghAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",

//         "thumbnail": "http://books.google.com/books/content?id=QnghAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"

//     },

//     "language": "en",

//     "previewLink": "http://books.google.es/books?id=QnghAQAAIAAJ&dq=isbn:0735619670&hl=&cd=1&source=gbs_api",

//     "infoLink": "http://books.google.es/books?id=QnghAQAAIAAJ&dq=isbn:0735619670&hl=&source=gbs_api",

//     "canonicalVolumeLink": "http://books.google.es/books/about/Code_Complete.html?hl=&id=QnghAQAAIAAJ"

// }