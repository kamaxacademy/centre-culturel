import {
    BOOK_LIST_FAIL,
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS,
    FILTER_BY_DATE
} from '../constants/bookConstant';

const initialState =
 {
  loading:true, 
  books:[]
 }


export const bookListReducer = (
    // state = {loading:true, books:[], filteredItems:[], date:''},
   // state = {loading:true, books:[] },
    state = initialState,
    action
)=> {
    switch (action.type) {
      case BOOK_LIST_REQUEST:
        return { loading: true };
      case BOOK_LIST_SUCCESS:
        return {
          loading: false,
          books: action.payload,
          //filteredItems: action.payload
        //   pages: action.payload.pages,
        //   page: action.payload.page,
        };
      case BOOK_LIST_FAIL:
        return { loading: false, error: action.payload };
      case FILTER_BY_DATE:
        return {...state, filteredItems: action.payload.items, date:action.payload.date}
        default:
        return state;
    }
  };