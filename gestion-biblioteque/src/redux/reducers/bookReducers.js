import {
    BOOK_LIST_FAIL,
    BOOK_LIST_REQUEST,
    BOOK_LIST_SUCCESS
} from '../constants/bookConstant';

export const bookListReducer = (
    state = {loading:true, books:[]},
    action
)=> {
    switch (action.type) {
      case BOOK_LIST_REQUEST:
        return { loading: true };
      case BOOK_LIST_SUCCESS:
        return {
          loading: false,
          books: action.payload,
        //   pages: action.payload.pages,
        //   page: action.payload.page,
        };
      case BOOK_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };