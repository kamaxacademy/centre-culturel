import Axios from 'axios';

import {
    BOOK_LIST_FAIL,
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS
} from '../constants/bookConstant';
export const listBooks = ({}) => async (dispatch) => {
    dispatch({
      type: BOOK_LIST_REQUEST,
    });
    // console.log('data from bookaction')
    try {
      const { data } = await Axios.get(
        'http://localhost:4001/books/all'
      );
       console.log('data from bookaction',data)
      dispatch({ type: BOOK_LIST_SUCCESS, payload: data });
     
    } catch (error) {
      dispatch({ type: BOOK_LIST_FAIL, payload: error.message });
    }
  };