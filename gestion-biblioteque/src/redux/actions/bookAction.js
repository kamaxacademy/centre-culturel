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

  // export const filterByDate=(books,date)=>(dispatch)=>{
  //  return dispatch({
  //    type: FILTER_BY_DATE,
  //    payload:{
  //      date: date,
  //      items: date ===''? books : books.filter(product => {
  //             return product.title.toLowerCase().includes(date) ||
  //                 product.author.toLowerCase().includes(date);
  //      }
  //       )
  //    }
  //  })
  // }

  export const sortByDate = payload =>({
    type: SORT_BY_DATE,
    payload
  })