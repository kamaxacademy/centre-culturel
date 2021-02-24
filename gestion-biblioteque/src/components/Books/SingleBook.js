import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Custom Import 
import {detailsBook} from '../../redux/actions/bookAction'

const SingleBook = (props) => {
    const bookDetails = useSelector((state)=>state.bookDetails);
    const {book, loading} = bookDetails;

    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsBook(props.match.params.id))
        return () => {
           //
        }
    }, [])
    return (
        <div>
            {
                console.log(book)
            }
        </div>
    );
}

export default SingleBook;
