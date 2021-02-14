
// Import deps
import React, { useState } from 'react'
// Import components


import '../../styles/bookshelf-list.css'
import BookshelfListRow from './bookshelf-list-row';
const BookshelfList = (props) => {
    
    const [state, setstate] = useState({
    id :'',
    author:'',
    title :'',
    pubDate :'',
    isbn:'',
    rating :''
})
  return (
        

 <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" />
            <th className="table-head-item">Isbn</th>

            <th className="table-head-item">Title</th>

            <th className="table-head-item">Author</th>

            <th className="table-head-item">Pub. date</th>

            <th className="table-head-item">Rating</th>

            <th className="table-head-item" />
          </tr>
        </thead>

        <tbody className="table-body">
      {props.books.length > 0 ? (
            props.books.map((book, idx) => (
              <BookshelfListRow
                key={book.id}
                book={book}
                position={idx + 1}
                handleBookRemove={props.handleBookRemove}
              />
              )
            )
          ) : (
            <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no books to show. Create one!</td>
            </tr>
          )
        }
        </tbody>
    </table>
    );
}

export default BookshelfList;



