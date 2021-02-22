// Import deps
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useSetState from '../CustomHooks/useSetState';
import { Link } from 'react-router-dom';


//Custom Import 
import {detailsBook} from '../../redux/actions/bookAction'


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

   const bookDetails = useSelector((state)=>state.bookDetails);
    const {book, loading} = bookDetails;

    const dispatch = useDispatch();

    useEffect(() => {
       // dispatch(detailsBook())
        return () => {
           //
        }
    }, [])


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

     <td className="table-item">
      <button
        className="btn btn-remove"
        onClick={() => dispatch(detailsBook(props.book.id))}
        >
        view book
          {props.book.id}
      </button>
    </td>

  </tr>
  );
}

export default BookshelfListRow;

