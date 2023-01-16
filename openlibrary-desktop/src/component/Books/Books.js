import axios from 'axios';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../Pages/styles/Home.scss'
import {createBook} from '../../redux/actions/bookActions'
const Books = ({title, author, image, cover_image}) => {
            const [books, setbooks] = useState([
              {
                    title: '',
                    author: '',
                    cover_image:''
             }

            ]);
             const dispatch = useDispatch();

   const bookCreate = useSelector((state) => state.bookCreate);
   
//    const {book:createdBook}= bookCreate
    
            const handleAddBook = ()=>{
                 setbooks(
                    {
                        title: title,
                        author: author,
                        cover_image:cover_image
                    },
                    dispatch(createBook())

                ) 
                }

                
                
                
                // console.log('this is books bro',books)

    return (
        
       
            <div className='Home_book Home_book-white'>
                    {
                        cover_image ? <div style={{
                                padding: "0px",
                                 display:'flex'
                        }}> <img src={cover_image}/> 
                        <button onClick={handleAddBook}> Add book to database</button>
                        </div> : 
                            <div>
                                {/* <img src={`https://veiindia.com/wp-content/uploads/2018/11/book-image-not-available.png`} /> */}
                                <h2>{title}</h2>
                                <h3>{author}</h3>
                            </div>
                        
                    }
                     
                       {/* <h1 style={{
                           fontSize:'16px',
                          
                       }}>{title}</h1>
                       <h2>{author}</h2> */}
                    </div>
        
    );
}

export default Books;
