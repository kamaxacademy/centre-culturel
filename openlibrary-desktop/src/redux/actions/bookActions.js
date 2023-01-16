import Axios from 'axios';
import generate from '../data'
import {
    BOOK_LIST_FAIL,
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    BOOK_DETAILS_FAIL,
    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_SUCCESS,
    BOOK_CREATE_FAIL,
    BOOK_CREATE_REQUEST,
    BOOK_CREATE_RESET,
    BOOK_CREATE_SUCCESS
} from '../types/bookTypes'

export const listBooks= ({}) =>async(dispatch)=>{
    dispatch({
      type: BOOK_LIST_REQUEST,
    });

     try {
      let data = generate(20)
      console.log('data from bookaction',data)
      dispatch({ type: BOOK_LIST_SUCCESS, payload: data });
     
    } catch (error) {
      dispatch({ type: BOOK_LIST_FAIL, payload: error.message });
    }
}

export const createBook = ()=> async (dispatch)=>{
    dispatch({type: BOOK_CREATE_REQUEST})

  try {
    const {data} = await Axios.post('http://localhost:5000/books/create')
     dispatch({
      type: BOOK_CREATE_SUCCESS,
      payload: data.book,
    });
  }
  catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: BOOK_CREATE_FAIL, payload: message });
}
}