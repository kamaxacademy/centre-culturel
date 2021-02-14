// Import deps
import React from 'react'
import useSetState from '../CustomHooks/useSetState';



const BookshelfListRow = (props) => {
  const [state, setstate] = useSetState({
    position: '',
  book: {
    id:'',
    author:'',
    title:'',
    pubDate:'',
    isbn:'',
    rating:'',
  }
});

  return (
    <tr className="table-row">
    <td className="table-item">
      {props.position}
    </td>
    <td className="table-item">
      {props.book.isbn}
    </td>

    <td className="table-item">
      {props.book.title}
    </td>

    <td className="table-item">
      {props.book.author}
    </td>

    <td className="table-item">
      {props.book.pubDate}
    </td>

    <td className="table-item">
      {props.book.rating}
    </td>

    <td className="table-item">
      <button
        className="btn btn-remove"
         onClick={() => props.handleBookRemove(props.book.id, props.book.title)}
        >
        Remove book
      </button>
    </td>
  </tr>
  );
}

export default BookshelfListRow;

