

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Book from '../components/Books/Book';
import {listBooks} from '../redux/actions/bookAction'
 import './HomePageStyle.scss'
export default function HomePage(props){
    
  const dispatch = useDispatch();
    const bookList = useSelector((state)=>state.bookList);
    const {loading,books} = bookList;

    useEffect(()=>{
      dispatch(listBooks({}))
    },[ dispatch])
    console.log('from dispatch bro',books)
    const colors = ['#d5d5d5', '#a9a9a9'] 

  return(

<div className="bookshelf">
    <div className='list-books-content'>
      {/* <div className=""></div> */}
        {
          books ? books.map((book)=>
          (<Book thisbook={book} />)
          ): <>No Books</>
        }
      
        {/* <h1>Books</h1>
        {
          // books.title
          <h1>{
            books ? books.map(book => book.title) : <>No Books</>}</h1>
      
        } */}
      </div>
</div>

  )
}

// {
//   // book book-green        
//     books ? books.map((book, i) =>(

     
//       // console.log(i){i % 2 ? 'book' : 'book'},
//      <div className="book-wrapper">
//     {/* //  style={{
//     //   width: 128, 
//     //   height: 193, 
//     //   // backgroundImage: `url(${thisBook.imageLinks.thumbnail})`,
//     //   backgroundImage: `url(http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title)`,
//     //   backgroundSize: 'cover',
//     //   backgroundPosition: 'center'
//     //  }} */}
     
       
//        {/* <img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" width="250" height="350" alt="A normal book"/> */}
//       <h2>{book.title}</h2>
//       <h3>{book.author}</h3>
//   </div>
//     )
    
//     )
    
//     : <>No books</>
//   }


// const HomePage = () => {
//     return (
//       <>

//       <h1>HomePage</h1>
//           {/* <div className='row'>
//              <h1>HomePage</h1>
//            <div class="col-xs-12 shelf hidden-md hidden-lg"></div>
//            <div>
//                  <a href=""><img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" class="img-responsive book" /></a>
//            </div></div>
//            */}

//             {/* <div className="shelf">
//                  <img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title"/>
//            </div>
//             <div className="shelf">
//                  <img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title"/>
//            </div>
//            <div className="shelf">
//                  <img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title"/>
//            </div> */}
// {/* <div className="bookshelf--frame">
//   <div className="book-wrapper">
//     <img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" width="300" height="500" alt="A tall book"/>
//   </div>
//   <div className="book-wrapper">
//     <img src="http://placehold.it/150x190/e8117f/fff&amp;text=Book%20Title" width="250" height="350" alt="A normal book"/>
//   </div>
//   <div cclassNamelass="book-wrapper">
//     <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=a+wide+book&w=400&h=280" width="400" height="280" alt="A wide book"/>
//   </div>
//   <div className="book-wrapper">
//     <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=a+normal+book&w=250&h=350" width="250" height="350" alt="A normal book"/></div>
//   <div className="book-wrapper">
//     <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=a+normal+book&w=250&h=350" width="250" height="350" alt="A normal book"/>
//   </div>
//   <div className="book-wrapper">
//     <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=a+tall+book&w=300&h=500" width="300" height="500" alt="A tall book"/>
//   </div>
//   <div className="book-wrapper">
//     <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=a+wide+book&w=400&h=280" width="400" height="280" alt="A wide book"/>
//   </div>  
// </div> */}

// {/* <h1>Okay bro</h1>

// <div className="bookshelf">
//   <div class="book book-green">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-green">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-green">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-umber">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div><div class="book book-blue">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-umber">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-springer">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-blue">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div>
//   <div class="book-tilted">
//   <div class="book book-umber">
//     <h2>Harry Potter</h2>
//   </div>
//   </div>
//    <div class="book-tilted">
//   <div class="book book-umber">
//     <h2>Harry Potter</h2>
//   </div>
//   </div>

  
  
//   <div class="book book-blue">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-green">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-green">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div><div class="book book-umber">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-green">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-blue">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-green">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div><div class="book book-springer">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-springer">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-green">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-blue">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div><div class="book book-blue">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-blue">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-umber">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book-tilted"><div class="book book-green">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div></div><div class="book book-blue">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-springer">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-green">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-green">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div><div class="book book-umber">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-blue">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-umber">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-green">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div><div class="book book-green">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-green">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-green">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-green">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div><div class="book book-springer">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-green">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-springer">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-umber">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div><div class="book book-green">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-green">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-umber">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-blue">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div><div class="book book-springer">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-green">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-springer">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-green">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div><div class="book book-umber">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-green">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-green">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-umber">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div><div class="book book-green">
//     <h2>Harry Potter</h2>
//   </div><div class="book book-springer">
//     <h2>Introducing HTML5</h2>
//   </div><div class="book book-blue">
//     <h2>CSS For Dummies</h2>
//   </div><div class="book book-blue">
//     <h2>Actionscript:</h2><h3>The Definitive Guide</h3>
//   </div>
// </div> */}
//       </>

//     );
// }

// export default HomePage;
