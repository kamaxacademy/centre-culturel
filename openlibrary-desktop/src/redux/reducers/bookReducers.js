import {
    BOOK_LIST_FAIL,
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    BOOK_CREATE_FAIL,
    BOOK_CREATE_REQUEST,
    BOOK_CREATE_RESET,
    BOOK_CREATE_SUCCESS,
    BOOK_DETAILS_FAIL,
    BOOK_DETAILS_REQUEST,
    BOOK_DETAILS_SUCCESS,
} from '../types/bookTypes'

const initialState =
 {
  loading:true, 
  books:[]
 }

 export const bookListReducer = (state=initialState, action)=>{
     switch(action.type){
      case BOOK_LIST_REQUEST:
        return { loading: true };
      case BOOK_LIST_SUCCESS:
        return {
          loading: false,
          books: action.payload,
        };
      case BOOK_LIST_FAIL:
        return { loading: false, error: action.payload };
        default:
        return state;
     }
 }

 export const bookCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_CREATE_REQUEST:
      return { loading: true };
    case BOOK_CREATE_SUCCESS:
      return { loading: false, success: true, book: action.payload };
    case BOOK_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case BOOK_CREATE_RESET:
      return {};
    default:
      return state;
  }
};