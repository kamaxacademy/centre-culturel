import Axios from 'axios';
import generate from '../../helpers/data'
import {
    BOOK_LIST_FAIL,
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    SORT_BY_ALPHABET,
    SORT_BY_DATE,
    FILTER_BY_DATE,
    FILTER_BY_VALUE
} from '../constants/bookConstant';
export const listBooks = ({}) => async (dispatch) => {
    dispatch({
      type: BOOK_LIST_REQUEST,
    });
    // console.log('data from bookaction')
    try {
      // const { data } = await Axios.get(
      //   'http://localhost:4001/books/all'
      // );
      //  console.log('data from bookaction',data)
      let data = generate(20)
      dispatch({ type: BOOK_LIST_SUCCESS, payload: data });
     
    } catch (error) {
      dispatch({ type: BOOK_LIST_FAIL, payload: error.message });
    }
  };
