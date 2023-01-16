import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {bookListReducer, bookCreateReducer} from './redux/reducers/bookReducers'

const initialState = {
   
  };

const reducer = combineReducers({
    bookList: bookListReducer,
    bookCreate: bookCreateReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;