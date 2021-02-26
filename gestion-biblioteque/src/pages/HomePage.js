
//3rd party Components
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

//Custom Components
import {listBooks} from '../redux/actions/bookAction'
import Book from '../components/Books/Book';

import './HomePageStyle.scss'


export default function HomePage(props){
    
  const dispatch = useDispatch();
  const bookList = useSelector((state)=>state.bookList);

  console.log('debug', bookList)
  const {loading,books} = bookList;

  console.log(books)
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(()=>{
      dispatch(listBooks({}))
    },[dispatch])

    useEffect(() => {
      setFilteredBooks(
      books.filter((book) =>
        book.author.toLowerCase().includes(search.toLowerCase()) ||
        book.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    }, [search, books]);
    console.log('from dispatch bro',books)
    const colors = ['#d5d5d5', '#a9a9a9'] 

  return(
<div data-test="HomeComponent">

<div className='karl'>
   <input 
  type='text'
  placeholder='Search Books'
   onChange={(e) => setSearch(e.target.value)}
      
/> 


  
</div> 

<div className="bookshelf">

    <div className='list-books-content'>
     
        {
          filteredBooks ? filteredBooks.map((book)=>
          (<Book thisbook={book} />)
          ): <>No Books</>
        }

      </div>
</div>


</div>

  )
}

