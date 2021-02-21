import {} from '../constants/bookConstant'
import {bookListReducer} from './bookReducers'

describe('Books Reducer', () => {
    it('Should return Default State', () => {
        const initialState =
         {
          loading:true, 
          books:[]
         }
        // const books = {}
        const newState = bookListReducer(undefined, [])

         expect(newState).toEqual( initialState );
    });
    
});
